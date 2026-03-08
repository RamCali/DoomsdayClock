import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Loader2, Trash2, MessageSquare, ArrowLeft } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { apiFetch } from "../../lib/api";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { VoteButton } from "./VoteButton";
import { CommentForm } from "./CommentForm";
import { CommentThread, type CommentData } from "./CommentThread";
import { UserAvatar } from "../UserAvatar";
import { AuthModal } from "../auth/AuthModal";
import { timeAgo } from "../../lib/timeAgo";
import type { PostData } from "./PostCard";

export function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [post, setPost] = useState<PostData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchPost = useCallback(async () => {
    try {
      const data = await apiFetch<PostData>(`/api/posts/${id}`);
      setPost(data);
    } catch {
      setPost(null);
    }
  }, [id]);

  const fetchComments = useCallback(async () => {
    try {
      const data = await apiFetch<CommentData[]>(`/api/posts/${id}/comments`);
      setComments(data);
    } catch {
      setComments([]);
    }
  }, [id]);

  useEffect(() => {
    Promise.all([fetchPost(), fetchComments()]).finally(() => setLoading(false));
  }, [fetchPost, fetchComments]);

  useEffect(() => {
    if (post) {
      const desc = post.body.length > 155 ? post.body.slice(0, 155) + "..." : post.body;
      updateMetaTags({
        title: `${post.title} | Doomsday Clock Forum`,
        description: desc,
        path: `/forum/post/${post.id}`,
      });

      // DiscussionForumPosting structured data for rich results
      const schema = {
        "@context": "https://schema.org",
        "@type": "DiscussionForumPosting",
        headline: post.title,
        text: post.body,
        url: `https://doomsdayclock.net/forum/post/${post.id}`,
        datePublished: post.created_at,
        dateModified: post.updated_at || post.created_at,
        author: { "@type": "Person", name: post.author_name },
        interactionStatistic: {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/LikeAction",
          userInteractionCount: post.vote_score,
        },
        commentCount: post.comment_count,
        isPartOf: {
          "@type": "DiscussionForum",
          name: "Doomsday Clock Forum",
          url: "https://doomsdayclock.net/forum",
        },
        ...(comments.length > 0 && {
          comment: comments.filter(c => !c.parent_comment_id).slice(0, 10).map(c => ({
            "@type": "Comment",
            text: c.body,
            datePublished: c.created_at,
            author: { "@type": "Person", name: c.author_name },
          })),
        }),
      };

      const el = document.querySelector('script[data-forum-schema="post"]');
      if (el) el.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-forum-schema", "post");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      const el = document.querySelector('script[data-forum-schema="post"]');
      if (el) el.remove();
      resetToDefaults();
    };
  }, [post, comments]);

  const handleVote = async (value: 1 | -1) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (!post) return;

    const newValue = post.user_vote === value ? 0 : value;

    setPost((prev) =>
      prev
        ? {
            ...prev,
            vote_score: prev.vote_score - prev.user_vote + (newValue === 0 ? 0 : newValue),
            user_vote: newValue,
          }
        : null
    );

    try {
      const result = await apiFetch<{ vote_score: number; user_vote: number }>(
        `/api/posts/${id}/vote`,
        { method: "POST", body: JSON.stringify({ value: newValue }) }
      );
      setPost((prev) => (prev ? { ...prev, vote_score: result.vote_score, user_vote: result.user_vote } : null));
    } catch {
      fetchPost();
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(true);
    try {
      await apiFetch(`/api/posts/${id}`, { method: "DELETE" });
      navigate("/forum");
    } catch {
      setDeleting(false);
    }
  };

  const handleCommentAdded = (comment: CommentData) => {
    setComments((prev) => [...prev, comment]);
    setPost((prev) => (prev ? { ...prev, comment_count: prev.comment_count + 1 } : null));
  };

  const handleCommentDeleted = (commentId: number) => {
    setComments((prev) => prev.filter((c) => c.id !== commentId));
    setPost((prev) => (prev ? { ...prev, comment_count: Math.max(0, prev.comment_count - 1) } : null));
  };

  const handleCommentVote = async (commentId: number, value: 1 | -1) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return;

    const newValue = comment.user_vote === value ? 0 : value;

    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, vote_score: c.vote_score - c.user_vote + (newValue === 0 ? 0 : newValue), user_vote: newValue }
          : c
      )
    );

    try {
      const result = await apiFetch<{ vote_score: number; user_vote: number }>(
        `/api/comments/${commentId}/vote`,
        { method: "POST", body: JSON.stringify({ value: newValue }) }
      );
      setComments((prev) =>
        prev.map((c) => (c.id === commentId ? { ...c, vote_score: result.vote_score, user_vote: result.user_vote } : c))
      );
    } catch {
      fetchComments();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-doom animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container-wide py-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Post Not Found</h2>
        <Link to="/forum" className="text-doom hover:underline">Back to Forum</Link>
      </div>
    );
  }

  return (
    <div className="container-tight py-8">
      {/* Back link */}
      <Link to="/forum" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Forum
      </Link>

      {/* Post */}
      <div className="glass-card p-5 sm:p-6">
        <div className="flex gap-4">
          <VoteButton score={post.vote_score} userVote={post.user_vote} onVote={handleVote} />

          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">{post.title}</h1>

            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <UserAvatar name={post.author_name} size="sm" />
                <span>{post.author_name}</span>
              </div>
              <span>{timeAgo(post.created_at)}</span>
            </div>

            <div className="mt-4 text-sm text-foreground/90 whitespace-pre-wrap break-words leading-relaxed">
              {post.body}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MessageSquare className="w-4 h-4" />
                <span>{post.comment_count} {post.comment_count === 1 ? "comment" : "comments"}</span>
              </div>
              {user && user.id === post.author_id && (
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comment form */}
      <div className="mt-6">
        {user ? (
          user.email_verified ? (
            <CommentForm postId={post.id} onSubmit={handleCommentAdded} />
          ) : (
            <p className="text-sm text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
              Verify your email to comment. Check your inbox.
            </p>
          )
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="w-full py-3 text-sm text-muted-foreground bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
          >
            Sign in to comment
          </button>
        )}
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">
            Comments ({post.comment_count})
          </h3>
          <CommentThread
            comments={comments}
            postId={post.id}
            onCommentAdded={handleCommentAdded}
            onCommentDeleted={handleCommentDeleted}
            onCommentVote={handleCommentVote}
          />
        </div>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} initialTab="register" />
    </div>
  );
}
