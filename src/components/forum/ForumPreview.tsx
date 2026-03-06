import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight, ChevronUp, MessageSquare } from "lucide-react";
import { timeAgo } from "../../lib/timeAgo";

interface PreviewPost {
  id: number;
  title: string;
  vote_score: number;
  comment_count: number;
  author_name: string;
  created_at: string;
}

export function ForumPreview() {
  const [posts, setPosts] = useState<PreviewPost[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/posts?sort=hot&limit=5")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setPosts(data.posts || []))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  // Don't render the section if no posts exist yet
  if (loaded && posts.length === 0) return null;
  if (!loaded) return null;

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 border border-green/30 mb-4">
            <Lightbulb className="w-4 h-4 text-green" />
            <span className="text-xs font-semibold text-green uppercase tracking-wider">
              Community Ideas
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            How Would <span className="text-gradient-doom">You</span> Save the World?
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
            Join the conversation. Share your ideas for pulling the Doomsday Clock back from midnight.
          </p>
        </div>

        {/* Post list */}
        <div className="max-w-2xl mx-auto space-y-2">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              to={`/forum/post/${post.id}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all group"
            >
              {/* Rank */}
              <span className="text-lg font-bold text-muted-foreground/50 w-6 text-center shrink-0">
                {i + 1}
              </span>

              {/* Vote score */}
              <div className="flex items-center gap-0.5 text-doom shrink-0">
                <ChevronUp className="w-4 h-4" />
                <span className="text-sm font-semibold">{post.vote_score}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground group-hover:text-doom transition-colors truncate">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
                  <span>{post.author_name}</span>
                  <span>{timeAgo(post.created_at)}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.comment_count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/forum"
            className="inline-flex items-center gap-2 px-6 py-3 bg-doom hover:bg-doom/90 text-white font-semibold rounded-xl transition-colors"
          >
            Join the Discussion
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
