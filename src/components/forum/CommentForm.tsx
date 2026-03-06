import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { apiFetch } from "../../lib/api";

interface CommentFormProps {
  postId: number;
  parentCommentId?: number;
  onSubmit: (comment: any) => void;
  onCancel?: () => void;
  placeholder?: string;
}

export function CommentForm({ postId, parentCommentId, onSubmit, onCancel, placeholder }: CommentFormProps) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    setError("");
    setLoading(true);
    try {
      const comment = await apiFetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        body: JSON.stringify({
          body: body.trim(),
          parentCommentId: parentCommentId || undefined,
        }),
      });
      onSubmit(comment);
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={placeholder || "Share your thoughts..."}
        rows={parentCommentId ? 2 : 3}
        maxLength={5000}
        disabled={loading}
        className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-doom/50 focus:border-doom/50 transition-all resize-y min-h-[60px] disabled:opacity-50"
      />
      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}
      <div className="flex items-center gap-2 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading || !body.trim()}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-doom hover:bg-doom/90 disabled:bg-doom/50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {loading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              {parentCommentId ? "Reply" : "Comment"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
