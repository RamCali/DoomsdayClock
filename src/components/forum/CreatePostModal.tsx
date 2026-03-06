import { useState } from "react";
import { X, Loader2, AlertCircle, Lightbulb } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { apiFetch } from "../../lib/api";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (post: any) => void;
}

export function CreatePostModal({ isOpen, onClose, onCreated }: CreatePostModalProps) {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (title.length < 5) {
      setError("Title must be at least 5 characters");
      return;
    }
    if (body.length < 10) {
      setError("Body must be at least 10 characters");
      return;
    }

    setLoading(true);
    try {
      const post = await apiFetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, body }),
      });
      onCreated(post);
      setTitle("");
      setBody("");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  const emailNotVerified = user && !user.email_verified;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-lg animate-slide-up">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green/10 via-zinc-900 to-zinc-900 border border-green/20 p-6 sm:p-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-green/5 rounded-full blur-3xl" />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Share Your Idea</h3>
                <p className="text-xs text-muted-foreground">How would you save the world?</p>
              </div>
            </div>

            {emailNotVerified && (
              <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Please verify your email before posting. Check your inbox.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your idea in one line..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={200}
                  disabled={loading || !!emailNotVerified}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green/50 transition-all disabled:opacity-50"
                />
                <p className="text-right text-xs text-muted-foreground mt-1">{title.length}/200</p>
              </div>

              <div>
                <textarea
                  placeholder="Explain your idea in detail. What would you do? How would it work? Why would it help?"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  maxLength={10000}
                  rows={6}
                  disabled={loading || !!emailNotVerified}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green/50 transition-all resize-y min-h-[120px] disabled:opacity-50"
                />
                <p className="text-right text-xs text-muted-foreground mt-1">{body.length}/10,000</p>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !!emailNotVerified}
                className="w-full flex items-center justify-center gap-2 py-3 bg-green hover:bg-green/90 disabled:bg-green/50 text-white font-semibold rounded-xl transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Post Idea"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
