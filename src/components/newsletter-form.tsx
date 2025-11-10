import { subscribeNewsletter } from "@/app/actions";

export function NewsletterForm() {
  return (
    <form action="/api/subscribe" method="post" className="flex w-full max-w-md gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-xl border bg-white px-3 py-2 shadow-soft"
      />
      <button
        type="submit"
        className="btn-brand rounded-xl px-4 py-2 text-sm shadow-soft"
      >
        Subscribe
      </button>
    </form>
  );
}

