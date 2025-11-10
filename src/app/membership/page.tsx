import Image from "next/image";

export const metadata = {
  title: "Membership • iWorkRemote",
  description:
    "Join iWorkRemote — the global network of remote workers. Curated meetups, real connections, and member-only perks.",
};

export default function MembershipPage() {
  return (
    <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
      {/* HERO (full-bleed, same pattern as homepage/chapters) */}
      <section className="relative bleed">
        {/* background */}
        <div className="absolute inset-0">
          <Image
            src="/membership-light-hero.jpg"
            alt="Join iWorkRemote community"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
          <div className="flex min-h-[48vh] md:min-h-[60vh] items-center justify-center">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center rounded-2xl bg-black/45 px-6 py-5 backdrop-blur-sm">
                <div>
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    Join <span className="whitespace-nowrap">iWorkRemote</span> community
                  </h1>
                  <p className="mt-2 text-white/90">The global network of remote workers.</p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                   <a
                    href="https://luma.com/96ael9m4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brand rounded-xl px-5 py-3"
                    >
                     RSVP For Next Event
                   </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fade to page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* MEMBERSHIP BENEFITS */}
      <section className="py-10 md:py-12">
        <SectionTitle title="MEMBERSHIP BENEFITS" />

        <p className="mx-auto mt-2 max-w-3xl text-center text-[15px] leading-7 text-slate-700">
          Our network is by <strong>invitation only</strong>, creating a <strong>close-knit community</strong> of seasoned professionals.
          Aspiring remote workers are welcome to attend our <strong>open brunch meetups</strong> — your gateway to <strong>deeper
          networking</strong> opportunities and a chance to <strong>be invited to join</strong> full membership.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          <BenefitCard
            items={[
              "Exclusive Coworking Sessions",
              "Remote Job Opportunities",
              "Workshops & Webinars",
              "Priority Invitations to Special Meetups",
              "Outdoor Activities",
            ]}
          />
          <BenefitCard
            items={[
              "Discounts on Local & Global Businesses",
              "Members-Only Networking Events",
              "Access to Premium Remote Work Resources",
              "Insights on Remote Work Trends",
              "Discount on Merch and Courses",
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="py-10 md:py-12 bg-slate-50/50 rounded-3xl">
        <SectionTitle title="WHAT OUR MEMBERS SAY" />
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Testimonial
            quote="Being a member has elevated my remote career. The networking is unmatched!"
            author="Alex P."
          />
          <Testimonial
            quote="The community is both inspiring and supportive. It’s an exclusive circle that truly cares."
            author="Jamie L."
          />
        </div>
      </section>

      {/* FAQ — accessible, no JS (details/summary) */}
      <section className="py-12">
        <SectionTitle title="FREQUENTLY ASKED QUESTIONS" />
        <div className="mx-auto mt-6 max-w-3xl space-y-3">
          <Faq q="What is iWorkRemote?">
          iWorkRemote is a dedicated community for remote workers and professionals who aspire to transition into a remote lifestyle. 
          Our events and resources are designed to help you network, find job opportunities, and thrive in a remote environment.
          </Faq>
          <Faq q="How can I join the community?">
          Non-members are welcome to attend our open brunch meetups. At these events, you can experience our vibrant community firsthand. 
          Based on your fit and interaction, you may be invited to join as a full member with access to exclusive events.
          </Faq>
          <Faq q="What events are available for members?">
          Full members get access to exclusive events such as dinner meetups, outdoor activities, coworking sessions, workshops, 
          and more-providing deeper networking and professional growth opportunities.
          </Faq>
          <Faq q="Are there any benefits for non-members?">
          Yes, non-members can attend our open brunch meetups, which provide an excellent introduction to our vibrant community. 
          Additionally, we will be launching an academy designed to jump-start your career road to remote work by offering comprehensive training and essential resources.
          </Faq>
        </div>
      </section>
    </div>
  );
}

/* ---------- small helpers ---------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-xl tracking-[.2em] text-slate-700">{title}</h2>
      <div className="mt-2 flex justify-center">
        <span className="inline-block h-[2px] w-20 rounded-full bg-[color:var(--warm-border)]" />
      </div>
    </div>
  );
}

function BenefitCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-soft">
      <ul className="space-y-2 text-[15px] text-slate-700">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-500,#2563eb)]" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded-2xl border bg-white p-5 text-center shadow-soft">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm font-medium text-slate-600">— {author}</figcaption>
    </figure>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border bg-white p-4 shadow-soft">
      <summary className="cursor-pointer list-none font-medium text-slate-800 marker:hidden">
        {q}
        <span className="float-right transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="pt-2 text-[15px] leading-7 text-slate-700">{children}</div>
    </details>
  );
}
