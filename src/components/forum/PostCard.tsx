import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { VoteButton } from "./VoteButton";
import { UserAvatar } from "../UserAvatar";
import { timeAgo } from "../../lib/timeAgo";

export interface PostData {
  id: number;
  title: string;
  body: string;
  vote_score: number;
  comment_count: number;
  author_name: string;
  author_id: number;
  created_at: string;
  updated_at?: string;
  user_vote: number;
}

interface PostCardProps {
  post: PostData;
  onVote: (postId: number, value: 1 | -1) => void;
}

export function PostCard({ post, onVote }: PostCardProps) {
  return (
    <div className="glass-card p-4 sm:p-5 flex gap-3 sm:gap-4">
      {/* Vote buttons */}
      <div className="shrink-0">
        <VoteButton
          score={post.vote_score}
          userVote={post.user_vote}
          onVote={(value) => onVote(post.id, value)}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/forum/post/${post.id}`}
          className="text-base sm:text-lg font-semibold text-foreground hover:text-doom transition-colors line-clamp-2"
        >
          {post.title}
        </Link>

        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {post.body}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <UserAvatar name={post.author_name} size="sm" />
            <span>{post.author_name}</span>
          </div>
          <span>{timeAgo(post.created_at)}</span>
          <Link
            to={`/forum/post/${post.id}`}
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{post.comment_count}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
