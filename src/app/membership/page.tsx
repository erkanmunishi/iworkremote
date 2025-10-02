import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Membership" };

export default function MembershipPage() {
  const perks = [
    "Monthly virtual meetups",
    "Local chapter events",
    "Member-only resources & templates",
    "Partner discounts",
  ];

  return (
    <div className="mx-auto max-w-screen-2xl px-6 py-12">
      <h1 className="font-display text-4xl font-extrabold tracking-tight">Membership</h1>
      <p className="mt-2 text-slate-600">
        Join the community and unlock events, resources, and a network that moves your career forward.
      </p>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold">What you get</h2>
        <ul className="mt-3 grid sm:grid-cols-2 gap-2">
          {perks.map(p => (
            <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a href="#subscribe" className="btn-brand inline-flex rounded-xl px-5 py-3 transition shadow-soft">
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
