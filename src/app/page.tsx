import { NewsletterForm } from "@/components/newsletter-form";
import { Users, Calendar, Globe, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6">
      {/* HERO — 12-col grid */}
      <section className="relative mx-auto max-w-screen-2xl px-6">
  {/* Background image fills the whole hero */}
  <div className="relative overflow-hidden rounded-3xl border shadow-soft">
    {/* the image */}
    <Image
      src="/hero.jpg"                 // use "/hero.jpeg" if that's your file
      alt="Remote workers meeting and co-working"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />

    {/* soft overlay so text stays readable (keeps photo visible on both sides) */}
    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r
                    from-white/80 via-white/30 to-white/70" />

    {/* Content on top of the image */}
    <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full badge-soft px-2.5 py-1 text-xs text-slate-700 shadow-soft">
            <Sparkles className="h-3.5 w-3.5" /> #1 Remote Work Community in the US
          </span>

          <h1 className="mt-4 font-display text-5xl md:text-6xl font-extrabold tracking-tight">
            Work from anywhere.<br className="hidden md:block" />
            Find your people.
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-prose">
            Chapters, meetups, and resources that help remote workers level up their careers and lifestyle.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/chapters" className="btn-brand inline-flex items-center justify-center rounded-xl px-5 py-3 transition shadow-soft">
              Explore Chapters
            </a>
            <a href="/membership" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border bg-white/90 hover:bg-white transition shadow-soft">
              Membership
            </a>
          </div>

          <div className="mt-6 max-w-md">
            <NewsletterForm />
          </div>
        </div>
        {/* Right side stays empty; image is visible there */}
        <div className="col-span-5 hidden md:block" />
      </div>
    </div>
  </div>
</section>

      {/* FEATURE STRIP — spans full width; more dense */}
      <section className="pb-14">
        <div className="grid grid-cols-12 gap-6">
          <FeatureCard className="col-span-12 md:col-span-4"
            title="Local Chapters" icon={<Users className="h-5 w-5" />}
            desc="Join peers near you. Real connections—not just Slack." />
          <FeatureCard className="col-span-12 md:col-span-4"
            title="Events & Meetups" icon={<Calendar className="h-5 w-5" />}
            desc="Sharpen skills, find roles, and share wins together." />
          <FeatureCard className="col-span-12 md:col-span-4"
            title="Member Resources" icon={<Globe className="h-5 w-5" />}
            desc="Curated guides, templates, and perks for remote life." />
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon, title, text,
}: { icon: React.ReactNode; title: string; text: React.ReactNode; }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-soft">
      <div className="flex items-center gap-2 text-slate-800">
        {icon}<b>{title}</b>
      </div>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function FeatureCard({
  title, desc, icon, className = "",
}: { title: string; desc: string; icon: React.ReactNode; className?: string; }) {
  return (
    <div className={`rounded-xl border bg-white p-5 shadow-soft ${className}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

