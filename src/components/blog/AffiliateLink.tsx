import { ExternalLink } from "lucide-react";
import { amazonUrl } from "../../lib/affiliate";

interface AffiliateLinkProps {
  asin: string;
  children: React.ReactNode;
  className?: string;
}

export function AffiliateLink({ asin, children, className }: AffiliateLinkProps) {
  return (
    <a
      href={amazonUrl(asin)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className ?? "text-doom hover:underline inline-flex items-center gap-1"}
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}
