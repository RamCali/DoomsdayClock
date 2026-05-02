const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email.trim());
}

export async function subscribeToNewsletter(email: string, source: string) {
  const res = await fetch("/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });

  if (!res.ok) {
    const data = await res
      .json()
      .catch(() => ({ error: `Signup failed (HTTP ${res.status}). Please try again.` }));
    throw new Error(data.error || `Signup failed (HTTP ${res.status}). Please try again.`);
  }

  return res.json();
}
