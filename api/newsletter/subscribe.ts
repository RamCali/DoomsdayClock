import type { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../_lib/cors";

const SENDX_IDENTIFY_URL = "https://api.sendx.io/api/v1/rest/contact/identify";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubscribeBody {
  email?: string;
  source?: string;
}

function parseTags(source: string): string[] {
  const configuredTags = (process.env.SENDX_NEWSLETTER_TAGS || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const defaultTag = process.env.SENDX_DEFAULT_SOURCE_TAG || "doomsdayclock-newsletter";
  return Array.from(new Set([defaultTag, source, ...configuredTags]));
}

function parseLists(): string[] {
  return (process.env.SENDX_NEWSLETTER_LIST_ID || "344558")
    .split(",")
    .map((listId) => listId.trim())
    .filter(Boolean);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.SENDX_TEAM_API_KEY;
  if (!apiKey) {
    console.error("SendX subscribe error: SENDX_TEAM_API_KEY is not configured");
    return res.status(500).json({ error: "Newsletter signup is not configured" });
  }

  const body = req.body as SubscribeBody;
  const email = body.email?.trim().toLowerCase();
  const source = body.source?.trim() || "doomsdayclock-popup";

  if (!email || !EMAIL_PATTERN.test(email) || email.length > 255) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const sendxRes = await fetch(SENDX_IDENTIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Team-ApiKey": apiKey,
      },
      body: JSON.stringify({
        email,
        newEmail: email,
        lists: parseLists(),
        tags: parseTags(source),
        customFields: {
          source,
          sendx_list_id: parseLists().join(","),
          signup_url: req.headers.referer || "direct",
          signup_timestamp: new Date().toISOString(),
        },
      }),
    });

    if (!sendxRes.ok) {
      const responseText = await sendxRes.text().catch(() => "");
      console.error("SendX subscribe error:", sendxRes.status, responseText);
      return res.status(502).json({ error: "Could not subscribe right now" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SendX subscribe error:", error);
    return res.status(502).json({ error: "Could not subscribe right now" });
  }
}
