// Amazon Associates affiliate configuration
// Replace with your actual Amazon Associates tag once approved
export const AMAZON_AFFILIATE_TAG = "doomsdayclk-20";

export function amazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_AFFILIATE_TAG}`;
}
