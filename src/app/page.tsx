import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className="mx-auto max-w-none">
      {/* HERO — full-bleed background */}
      <section className="relative w-full overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"              // keep your file name here
            alt="I Work Remote community"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* dark overlay for readable text */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
          <div className="flex min-h-[56vh] md:min-h-[68vh] items-center justify-center md:justify-start">
            <div className="text-center md:text-left">
              <h2 className="text-white/90 text-sm tracking-widest">
                #1 Remote Work Community in the US
              </h2>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Work from anywhere.<br className="hidden md:block" />
                Find your people.
              </h1>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/membership"
                  className="btn-brand inline-flex items-center justify-center rounded-xl px-5 py-3 transition shadow-soft"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* subtle bottom fade to page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto max-w-screen-xl px-6 py-12 md:py-16">
        <h3 className="text-center font-display text-xl tracking-[.2em] text-slate-700">
          ABOUT IWORKREMOTE
        </h3>
        <div className="mt-2 flex justify-center">
          <span className="inline-block h-[2px] w-20 bg-[color:var(--warm-border)] rounded-full" />
        </div>
        <div className="mt-6 text-center mx-auto max-w-4xl text-[15px] leading-7 text-slate-600">
          <p>
            iWorkRemote is a community for remote professionals and hybrid workers who
            value flexibility and connection. While our meetups are held across the US,
            our network includes members from diverse locations—many of whom work remotely
            from various parts of the country and beyond.
          </p>
          <p className="mt-4">
            We host exclusive events, coworking sessions, and networking meetups designed
            to foster professional growth and collaboration. Whether you’re a seasoned
            remote worker or just beginning your journey, our community offers a supportive
            environment to share best practices, discover new opportunities, and build
            lasting connections.
          </p>
        </div>
      </section>

      {/* SUBSCRIBE BAND (full-width footer bar) */}
      <section className="w-full border-t bg-[color:var(--warm)] border-[color:var(--warm-border)] text-[color:var(--warm-ink)]">
        <div className="mx-auto max-w-screen-xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h4 className="font-semibold text-slate-800">Subscribe to our emails</h4>
              <p className="text-sm text-slate-600 mt-1">
                Get event announcements and member resources in your inbox.
              </p>
            </div>
            <div className="max-w-md md:ml-auto">
              {/* Replace alert in NewsletterForm with Beehiiv action when ready */}
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
