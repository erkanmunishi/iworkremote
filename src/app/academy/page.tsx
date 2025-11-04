import Link from "next/link";

export const metadata = {
  title: "Academy",
  description:
    "AI-powered career jumpstart: workshops, coaching and resources for remote workers.",
};

export default function AcademyPage() {
  return (
    <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
      {/* HERO */}
      <section className="py-12 md:py-16 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          iWorkRemote Academy: AI-Powered Career Jumpstart
        </h1>
        <p className="mt-2 text-slate-600">Your future career starts here.</p>

        <p className="mt-4 mx-auto max-w-3xl text-[15px] leading-7 text-slate-600">
          Whether you’re unemployed and seeking direction—or you’re ready to take the next step
          in your journey—our Academy provides 1-on-1 support, AI-powered job search automation,
          and real networking with people who’ve already done what you’re trying to do.
          <br className="hidden md:block" />
          <span className="font-medium text-slate-700">No fluff. Just results.</span>
        </p>

        <div className="mt-6">
          <Link
            href="#apply"
            className="btn-brand inline-flex items-center justify-center rounded-xl px-5 py-3 transition shadow-soft"
          >
            Book Your Free Exploration Call
          </Link>
        </div>
      </section>

      {/* STRIPE */}
      <SectionStripe />

      {/* WHY THIS WORKS */}
      <section className="py-10 text-center">
        <h2 className="font-display text-lg tracking-wide">
          <span className="mr-1">🔥</span> Why This Works
        </h2>
        <p className="mt-4 mx-auto max-w-3xl text-[15px] leading-7 text-slate-600">
          Forget cold applying. The iWorkRemote Academy is built on one truth:
          <span className="font-semibold"> you become who you surround yourself with.</span>
          We give you AI tools, real mentors, and access to a vibrant community of people at top companies—
          to really help you grow.
        </p>
      </section>

      {/* GREY STRIPE */}
      <section className="bleed py-10 bg-slate-50">
      <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
        <h3 className="text-center font-semibold">
          <span className="mr-1">✅</span> All Programs Include:
        </h3>
        <ul className="mt-4 w-fit mx-auto list-disc pl-6 text-[15px] leading-7 text-slate-700 space-y-1">
          <li>Access to the #1 remote work community in the U.S.</li>
          <li>AI-assisted resume + cover letter generation (iterated with your coach)</li>
          <li>Direct help shaping your positioning & story for the job market</li>
          <li>Peer support, live sessions, and career-specific feedback</li>
          <li>Optional interview practice with hiring pros & recruiters</li>
        </ul>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-12 md:py-14">
        <h2 className="text-center font-display text-xl tracking-[.2em] text-slate-700">
          PACKAGES
        </h2>
        <Underline />

        <div className="mt-8 mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
        <div className="grid grid-cols-12 gap-6">
          <PriceCard
            className="col-span-12 md:col-span-4"
            title="Tier 1: Job Application Engine"
            bestFor="Those who need to hit the ground running."
            bullets={[
              "AI job application engine: up to 40 apps/month",
              "1:1 resume iterations",
              "Career resume & cover letter pack",
              "Access to iWorkRemote community & job board",
            ]}
            price="$149/month"
            ctaLabel="Get started"
          />
          <PriceCard
            className="col-span-12 md:col-span-4"
            title="Tier 2: Career Accelerator"
            bestFor="Career pivoters & those wanting more support."
            bullets={[
              "Everything in Tier 1",
              "Dedicated 1:1 — two meetings / month",
              "LinkedIn & personal branding help",
              "Content creation strategy to showcase skills",
              "Strategic networking playbook + support",
            ]}
            price="$299/month"
            ctaLabel="Apply now"
          />
          <PriceCard
            className="col-span-12 md:col-span-4"
            title="Tier 3: Elite Mentorship"
            bestFor="Ambitious professionals who want access, insight & intros."
            bullets={[
              "Everything in Tiers 1 & 2",
              "Deep positioning for your specific industry & role",
              "Bespoke intros where appropriate",
              "Personalized strategy for long-term positioning",
            ]}
            price="Custom"
            ctaLabel="Talk to us"
          />
        </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-12 md:py-14 text-center">
        <h2 className="font-semibold text-lg">Apply for Your Free Exploration Call</h2>
        <p className="mt-2 text-slate-600 text-[15px]">
          We only accept a limited number of participants each period. Applications are reviewed to ensure a strong fit.
        </p>

        {/* Pure HTML form (no client handlers; safe for Server Components) */}
        <form
          action="#"
          method="POST"
          className="mt-6 max-w-xl mx-auto grid gap-3 text-left"
        >
          <label className="text-sm text-slate-700">
            Full Name
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-xl border bg-white px-3 py-2 shadow-soft"
            />
          </label>

          <label className="text-sm text-slate-700">
            Email Address
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border bg-white px-3 py-2 shadow-soft"
            />
          </label>

          <label className="text-sm text-slate-700">
            What’s your career goal or challenge?
            <textarea
              name="goal"
              rows={4}
              className="mt-1 w-full rounded-xl border bg-white px-3 py-2 shadow-soft"
            />
          </label>

          <button
            type="submit"
            className="btn-brand mt-2 inline-flex items-center justify-center rounded-xl px-5 py-3 transition shadow-soft"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function SectionStripe() {
  return <div className="bleed h-6 bg-slate-50" />;
}

function Underline() {
  return (
    <div className="mt-2 flex justify-center">
      <span className="inline-block h-[2px] w-20 bg-[color:var(--warm-border)] rounded-full" />
    </div>
  );
}

function PriceCard({
  title,
  bestFor,
  bullets,
  price,
  ctaLabel,
  className = "",
}: {
  title: string;
  bestFor: string;
  bullets: string[];
  price: string;
  ctaLabel: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-soft ${className}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">
        <span className="font-medium">Best for:</span> {bestFor}
      </p>
      <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm text-slate-500">{price}</div>
        <Link
          href="#apply"
          className="btn-brand inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm transition shadow-soft"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
