const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzq3sGl2yAYK_L5_aVTIhm4-Dkz1rBvMsm0oyXWpaaRObQnTI_vob9Tsa7LD0lwaQgsMg/exec";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email.trim());
}

export async function subscribeToNewsletter(email: string, source: string) {
  // mode: "no-cors" because Google Apps Script doesn't return CORS headers.
  // Response is opaque — we can't inspect status, so a network-level error is the only failure we surface.
  await fetch(GOOGLE_SHEETS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      source,
      timestamp: new Date().toISOString(),
    }),
  });

  // Fire a GTM dataLayer event so GA4 (configured in GTM) can record signups as a key event.
  // Wrapped because no-cors means we can't confirm server success — this fires on network success only.
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "newsletter_signup",
      newsletter_source: source,
    });
  }
}
