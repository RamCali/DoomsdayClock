const SITE_URL = "https://doomsdayclock.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image-2026.png`;

interface MetaTagOptions {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  newsKeywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  author?: string;
}

function setMeta(nameOrProperty: string, content: string) {
  const isOg = nameOrProperty.startsWith("og:");
  const attr = isOg ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.href = url;
}

export function updateMetaTags({ title, description, path, type = "article", image = DEFAULT_OG_IMAGE, newsKeywords, publishedTime, modifiedTime, section, author }: MetaTagOptions) {
  const fullUrl = `${SITE_URL}${path}`;

  document.title = title;
  setMeta("description", description);
  setMeta("og:title", title);
  setMeta("og:description", description);
  setMeta("og:url", fullUrl);
  setMeta("og:type", type);
  setMeta("og:image", image);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);
  setMeta("twitter:card", "summary_large_image");
  setCanonical(fullUrl);

  if (newsKeywords) setMeta("news_keywords", newsKeywords);
  if (publishedTime) setMeta("article:published_time", publishedTime);
  if (modifiedTime) setMeta("article:modified_time", modifiedTime);
  if (section) setMeta("article:section", section);
  if (author) setMeta("article:author", author);
}

export function resetToDefaults() {
  const title = "85 seconds to Midnight: Doomsday Clock 2026 (Live)";
  const description = "How close is doomsday? The Doomsday Clock — humanity's expert countdown to global catastrophe — is at 85 seconds to midnight, the closest in 79 years. Live status, full 1947–2026 timeline, and what 85 seconds means.";
  document.title = title;
  updateMetaTags({ title, description, path: "/", type: "website" });
}
