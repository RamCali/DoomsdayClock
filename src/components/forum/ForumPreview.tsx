import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight, ChevronUp, MessageSquare, Flame, Trophy } from "lucide-react";
import { timeAgo } from "../../lib/timeAgo";

interface PreviewPost {
  id: number;
  title: string;
  body: string;
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

  const featured = posts[0];
  const rest = posts.slice(1);

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

        <div className="max-w-2xl mx-auto">
          {/* Featured spotlight */}
          <Link
            to={`/forum/post/${featured.id}`}
            className="block p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-doom/10 via-white/[0.04] to-orange-500/10 border border-doom/20 hover:border-doom/40 transition-all group relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-doom/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-doom/20 text-doom">
                <Flame className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Top Idea</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
                <Trophy className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {featured.vote_score} vote{featured.vote_score !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-doom transition-colors leading-snug">
              {featured.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
              {featured.body}
            </p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground/70">{featured.author_name}</span>
                <span>{timeAgo(featured.created_at)}</span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {featured.comment_count} comment{featured.comment_count !== 1 ? "s" : ""}
                </span>
              </div>
              <span className="text-xs text-doom font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>

          {/* Remaining posts */}
          {rest.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {rest.map((post, i) => (
                <Link
                  key={post.id}
                  to={`/forum/post/${post.id}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all group"
                >
                  <span className="text-sm font-bold text-muted-foreground/40 w-5 text-center shrink-0">
                    {i + 2}
                  </span>

                  <div className="flex items-center gap-0.5 text-doom shrink-0">
                    <ChevronUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{post.vote_score}</span>
                  </div>

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
          )}
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
