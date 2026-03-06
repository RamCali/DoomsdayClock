import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Plus, Loader2, Lightbulb } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { apiFetch } from "../../lib/api";
import { PostCard, type PostData } from "./PostCard";
import { SortTabs, type SortOption, type PeriodOption } from "./SortTabs";
import { CreatePostModal } from "./CreatePostModal";
import { AuthModal } from "../auth/AuthModal";

export function ForumPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<PostData[]>([]);
  const [sort, setSort] = useState<SortOption>("hot");
  const [period, setPeriod] = useState<PeriodOption>("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch<{
        posts: PostData[];
        total: number;
        page: number;
        totalPages: number;
      }>(`/api/posts?sort=${sort}&period=${period}&page=${page}&limit=20`);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  }, [sort, period, page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSortChange = (newSort: SortOption) => {
    setSort(newSort);
    setPage(1);
  };

  const handleVote = async (postId: number, value: 1 | -1) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const post = posts.find((p) => p.id === postId);
    if (!post) return;

    // Toggle: if already voted this way, remove vote
    const newValue = post.user_vote === value ? 0 : value;

    // Optimistic update
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        return {
          ...p,
          vote_score: p.vote_score - p.user_vote + (newValue === 0 ? 0 : newValue),
          user_vote: newValue,
        };
      })
    );

    try {
      const result = await apiFetch<{ vote_score: number; user_vote: number }>(
        `/api/posts/${postId}/vote`,
        { method: "POST", body: JSON.stringify({ value: newValue }) }
      );
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, vote_score: result.vote_score, user_vote: result.user_vote } : p))
      );
    } catch {
      // Revert on error
      fetchPosts();
    }
  };

  const handleCreateClick = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowCreateModal(true);
    }
  };

  const handlePostCreated = (post: PostData) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="container-wide py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Forum</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            How Would You <span className="text-gradient-doom">Save the World</span>?
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Share your ideas to push the Doomsday Clock back.
          </p>
        </div>
        <button
          onClick={handleCreateClick}
          className="flex items-center gap-2 px-5 py-2.5 bg-doom hover:bg-doom/90 text-white font-semibold rounded-xl transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          Post Idea
        </button>
      </div>

      {/* Sort tabs */}
      <div className="mb-6">
        <SortTabs
          sort={sort}
          period={period}
          onSortChange={handleSortChange}
          onPeriodChange={setPeriod}
        />
      </div>

      {/* Posts */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-doom animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-doom/10 flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-doom" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No ideas yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Be the first to share how you'd save the world.
          </p>
          <button
            onClick={handleCreateClick}
            className="px-6 py-2.5 bg-doom hover:bg-doom/90 text-white font-semibold rounded-xl transition-colors"
          >
            Post the First Idea
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onVote={handleVote} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground px-3">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Modals */}
      <CreatePostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreated={handlePostCreated}
      />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialTab="register"
      />
    </div>
  );
}
