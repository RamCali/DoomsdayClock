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
  const title = "Doomsday Clock Today | Current Time & Complete Timeline (2026)";
  const description = "Is it midnight yet? The official Doomsday Clock is now set to 85 Seconds to Midnight\u2014a new record. View the live countdown, historical timeline, and 2026 updates here.";
  document.title = title;
  updateMetaTags({ title, description, path: "/", type: "website" });
}
