// src/app/thanks/page.tsx
export const metadata = { title: "Thanks" };

export default function ThanksPage({
  searchParams,
}: {
  searchParams: { status?: string; type?: string };
}) {
  const ok = searchParams.status === "ok";
  const type = searchParams.type;

  const title = ok ? "Thank you!" : "Something went wrong";
  const msg = ok
    ? type === "newsletter"
      ? "You're subscribed. Check your inbox for updates."
      : "Application received. We’ll follow up to schedule your 20-minute call."
    : "Please go back and try again.";

  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="font-display text-3xl font-extrabold">{title}</h1>
      <p className="mt-3 text-slate-600">{msg}</p>
    </div>
  );
}
