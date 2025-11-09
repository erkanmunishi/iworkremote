import Link from "next/link";

// src/app/academy/page.tsx

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
          Whether you’re unemployed and seeking direction, or you’re ready to take the next step
          in your journey, our Academy provides 1-on-1 support, AI-powered job search automation,
          and real networking with people who’ve already done what you’re trying to do.
          <br className="hidden md:block" />
          <span className="font-medium text-slate-700">No fluff. Just results.</span>
        </p>

        <div className="mt-6">
        <a href="#explore-call" className="btn-brand rounded-xl px-5 py-3">
           Book your Free Exploration Call
        </a>
        </div>
      </section>

      {/* THIN STRIPE */}
      <SectionStripe />

      {/* WHY THIS WORKS */}
      <section className="py-10 text-center">
        <h2 className="font-display text-lg tracking-wide">
          <span className="mr-1">🔥</span> Why This Works
        </h2>
        <p className="mt-4 mx-auto max-w-3xl text-[15px] leading-7 text-slate-600">
          Forget cold applying. The iWorkRemote Academy is built on one truth:
          <span className="font-semibold"> You become who you surround yourself with.</span>
          So we give you AI tools, real mentors, and access to a vibrant community of people at top companies—
          ready to help you grow.
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
        <h2 className="text-center font-display text-2xl md:text-3xl font-bold">
          Packages
        </h2>
        <Underline />

        <div className="mt-8 mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
          <div className="grid grid-cols-12 gap-6">
            <PriceCard
              className="col-span-12 md:col-span-4"
              title="Tier 1: Job Application Engine"
              bestFor="Those who need to hit the ground running"
              bullets={[
                "AI job application engine: up to 50 jobs/month",
                "1-on-1 resume and cover letter review + iterations",
                "Custom career prompts to tailor your AI job hunt",
                "Access to iWorkRemote community forum & job board",
              ]}
              price="$149/month"
            />

            <PriceCard
              className="col-span-12 md:col-span-4"
              title="Tier 2: Career Accelerator"
              bestFor="Career pivoters & those wanting more support"
              bullets={[
                "Everything in Tier 1",
                "Dedicated 1-on-1 mentor guiding you weekly",
                "Help with LinkedIn & personal branding",
                "Content creation strategy to showcase your skills",
                "Strategic networking playbook + support",
              ]}
              price="$299/month"
            />

            <PriceCard
              className="col-span-12 md:col-span-4"
              title="Tier 3: Elite Mentorship"
              bestFor="Ambitious professionals who want access, insights & intros"
              bullets={[
                "Everything in Tiers 1 & 2",
                "1-on-1 mentor from your specific industry at a top company",
                "Behind-the-scenes roadmap of hiring at top firms",
                "Potential referral guidance (not guaranteed but supported)",
                "Curated networking: Mixers, virtual coffees, warm intros",
                "Personalized strategy for positioning yourself as the hire",
              ]}
              price="Custom pricing based on your goals"
            />
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
{/* APPLY FORM */}
<section id="explore-call" className="scroll-mt-28 mb-20">
  <h2 className="text-center font-display text-xl md:text-2xl font-bold">
    Apply for Your Free Exploration Call
  </h2>

  <p className="mx-auto mt-2 max-w-2xl text-center text-[15px] leading-7 text-slate-700">
    The Exploration Call helps us understand if you're a good fit for the program and how we can best
    support you. Expect a quick follow-up to schedule your 20-minute call.
  </p>

  <p className="mt-2 mx-auto max-w-2xl text-center text-[13px] leading-6">
  <span className="text-rose-700">🔒 Please note: We only accept a limited number of participants each period. Applications are reviewed to ensure a strong fit.</span>
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
      className="btn-brand mt-3 w-auto justify-self-center self-center rounded-xl px-4 py-2 text-sm shadow-soft"
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
  className = "",
}: {
  title: string;
  bestFor: string;
  bullets: string[];
  price: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-soft ${className}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">
        <span className="font-medium">Best for:</span> {bestFor}
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-6 text-slate-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-5 text-center text-[15px] font-semibold text-amber-600">
        {price}
      </div>
    </div>
  );
}
