"use client";

const NEWSLETTER_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER || "";
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iworkremote.us";

export default function NewsletterForm() {
  // If endpoint missing, render a disabled form so we don't crash
  const disabled = !NEWSLETTER_ENDPOINT;

  return (
    <form
      action={NEWSLETTER_ENDPOINT}
      method="POST"
      className="flex w-full max-w-sm items-center gap-2"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full rounded-xl border bg-white px-3 py-2 shadow-soft"
        disabled={disabled}
      />

      {/* Formspree helpers */}
      <input type="hidden" name="_subject" value="New newsletter signup — iWorkRemote" />
      <input
        type="hidden"
        name="_redirect"
        value={`${SITE}/thanks?status=ok&type=newsletter`}
      />
      {/* Spam trap */}
      <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        className="btn-brand rounded-xl px-3 py-2 text-sm shadow-soft"
        disabled={disabled}
      >
        Subscribe
      </button>
    </form>
  );
}
