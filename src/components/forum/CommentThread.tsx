import { useState } from "react";
import { Reply, Trash2 } from "lucide-react";
import { VoteButton } from "./VoteButton";
import { CommentForm } from "./CommentForm";
import { UserAvatar } from "../UserAvatar";
import { useAuth } from "../../contexts/AuthContext";
import { apiFetch } from "../../lib/api";
import { timeAgo } from "../../lib/timeAgo";
import { cn } from "../../lib/utils";

export interface CommentData {
  id: number;
  post_id: number;
  parent_comment_id: number | null;
  body: string;
  vote_score: number;
  created_at: string;
  author_name: string;
  author_id: number;
  user_vote: number;
}

interface CommentThreadProps {
  comments: CommentData[];
  postId: number;
  onCommentAdded: (comment: CommentData) => void;
  onCommentDeleted: (commentId: number) => void;
  onCommentVote: (commentId: number, value: 1 | -1) => void;
  parentId?: number | null;
  depth?: number;
}

export function CommentThread({
  comments,
  postId,
  onCommentAdded,
  onCommentDeleted,
  onCommentVote,
  parentId = null,
  depth = 0,
}: CommentThreadProps) {
  const children = comments.filter((c) => c.parent_comment_id === parentId);

  if (children.length === 0) return null;

  return (
    <div className={cn(depth > 0 && "ml-4 sm:ml-6 border-l-2 border-white/5 pl-4")}>
      {children.map((comment) => (
        <SingleComment
          key={comment.id}
          comment={comment}
          comments={comments}
          postId={postId}
          onCommentAdded={onCommentAdded}
          onCommentDeleted={onCommentDeleted}
          onCommentVote={onCommentVote}
          depth={depth}
        />
      ))}
    </div>
  );
}

function SingleComment({
  comment,
  comments,
  postId,
  onCommentAdded,
  onCommentDeleted,
  onCommentVote,
  depth,
}: {
  comment: CommentData;
  comments: CommentData[];
  postId: number;
  onCommentAdded: (comment: CommentData) => void;
  onCommentDeleted: (commentId: number) => void;
  onCommentVote: (commentId: number, value: 1 | -1) => void;
  depth: number;
}) {
  const { user } = useAuth();
  const [showReply, setShowReply] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Delete this comment?")) return;
    setDeleting(true);
    try {
      await apiFetch(`/api/comments/${comment.id}`, { method: "DELETE" });
      onCommentDeleted(comment.id);
    } catch {
      // ignore
    } finally {
      setDeleting(false);
    }
  };

  const handleReplySubmit = (newComment: CommentData) => {
    onCommentAdded(newComment);
    setShowReply(false);
  };

  return (
    <div className="py-3">
      <div className="flex gap-3">
        {/* Vote */}
        <VoteButton
          score={comment.vote_score}
          userVote={comment.user_vote}
          onVote={(value) => onCommentVote(comment.id, value)}
          size="sm"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <UserAvatar name={comment.author_name} size="sm" />
            <span className="font-medium text-foreground">{comment.author_name}</span>
            <span>{timeAgo(comment.created_at)}</span>
          </div>

          <p className="text-sm text-foreground/90 whitespace-pre-wrap break-words">
            {comment.body}
          </p>

          <div className="flex items-center gap-3 mt-2">
            {user && depth < 3 && (
              <button
                onClick={() => setShowReply(!showReply)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Reply className="w-3.5 h-3.5" />
                Reply
              </button>
            )}
            {user && user.id === comment.author_id && (
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

          {showReply && (
            <div className="mt-3">
              <CommentForm
                postId={postId}
                parentCommentId={comment.id}
                onSubmit={handleReplySubmit}
                onCancel={() => setShowReply(false)}
                placeholder={`Reply to ${comment.author_name}...`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Nested replies (max depth 3) */}
      {depth < 3 && (
        <CommentThread
          comments={comments}
          postId={postId}
          onCommentAdded={onCommentAdded}
          onCommentDeleted={onCommentDeleted}
          onCommentVote={onCommentVote}
          parentId={comment.id}
          depth={depth + 1}
        />
      )}
    </div>
  );
}
