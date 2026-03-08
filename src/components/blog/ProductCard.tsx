import { AffiliateLink } from "./AffiliateLink";

interface ProductCardProps {
  asin: string;
  title: string;
  description: string;
  price?: string;
}

export function ProductCard({ asin, title, description, price }: ProductCardProps) {
  return (
    <div className="glass-card p-4 flex flex-col sm:flex-row gap-4 items-start my-6">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground mb-2">{description}</p>
        {price && <span className="text-xs text-doom font-medium">{price}</span>}
      </div>
      <AffiliateLink
        asin={asin}
        className="shrink-0 px-4 py-2 bg-doom hover:bg-doom-dark text-white text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
      >
        View on Amazon
      </AffiliateLink>
    </div>
  );
}
