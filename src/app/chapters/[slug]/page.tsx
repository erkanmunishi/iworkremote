import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, cityList } from "@/lib/cities";
import type { Place } from "@/lib/cities";
const RSVP_URL = "https://luma.com/96ael9m4";


export const dynamicParams = false; // pre-render known cities

export function generateStaticParams() {
  return cityList.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>;}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `${city.cityName} Chapter`,
    description: `iWorkRemote ${city.cityName} — events, coworking and community.`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }>;}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return notFound();

  const isLive = city.status === "live";

  return (
    <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
      {/* HERO — full-bleed background like homepage */}
<section className="relative bleed">
  {/* background image */}
  <div className="absolute inset-0 pointer-events-none">
    <Image
      src={city.hero.image}
      alt={city.cityName}
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
    {/* subtle dark overlay for legibility */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* content container */}
  <div className="relative z-10 mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12">
    <div className="flex min-h-[46vh] md:min-h-[56vh] items-center justify-center">
      <div className="text-center text-white">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {city.hero.headline}
        </h1>
        {city.hero.subhead && (
          <p className="mt-2 text-white/90">{city.hero.subhead}</p>
        )}
<div className="mt-5 flex items-center justify-center gap-3">
  {slug === "tampa" ? (
    <a
      href={RSVP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-brand rounded-xl px-5 py-3"
    >
      Join the Community
    </a>
  ) : (
    city.joinLink && (
      <Link href={city.joinLink} className="btn-brand rounded-xl px-5 py-3">
        {city.status === "live" ? "Join the Community" : "Get Notified"}
      </Link>
    )
  )}

  {city.status !== "live" && (
    <Link
      href="/membership"
      className="rounded-xl border bg-white/90 px-5 py-3 shadow-soft text-slate-900"
    >
      Become a chapter lead →
    </Link>
  )}
</div>
      </div>
    </div>
  </div>

  {/* soft fade into page background */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
</section>


      {/* SUMMARY / LEAD */}
      <section className="py-10 md:py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
          {slug === "tampa" ? (
        <p className="text-[15px] leading-7 text-slate-700">
          At <strong>iWorkRemote Tampa Bay</strong>, our events are curated exclusively for
          <strong> remote workers</strong>. Membership is by <strong>invitation only</strong> — ensuring a
          <strong> close-knit community</strong> of seasoned remote workers. However, if you’re an aspiring
          remote worker or hybrid professional, our <strong>open brunch meetups</strong> are the perfect
          introduction. Experience our vibrant community firsthand at brunch, and you might
          soon <strong>be invited to join</strong> our exclusive dinners, outdoor activities, and
          coworking sessions for <strong>deeper networking</strong> and special perks.
        </p>
      ) : (
        city.summary && (
          <p className="text-[15px] leading-7 text-slate-700">{city.summary}</p>
        )
      )}
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="rounded-2xl border bg-white p-5 shadow-soft">
              <div className="text-sm text-slate-600">Lead</div>
              <div className="text-lg font-semibold">{city.lead ?? "TBD"}</div>
              {city.joinLink && (
slug === "tampa" ? (
<a
  href={RSVP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-brand mt-3 inline-flex rounded-xl px-4 py-2 text-sm"
>
  Events / Join
</a>
) : (
<Link href={city.joinLink} className="btn-brand mt-3 inline-flex rounded-xl px-4 py-2 text-sm">
  {isLive ? "Events / Join" : "Join waitlist"}
</Link>
)
)}

            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS (if provided) */}
      {isLive && city.events?.length ? (
        <section className="py-4">
          <h2 className="text-center font-display text-xl tracking-[.2em] text-slate-700">
            UPCOMING EVENTS
          </h2>
          <Underline />

          <div className="mt-6 grid grid-cols-12 gap-6">
  {city.events.map((ev) => {
    const isBrunch =
      /brunch/i.test(ev.name) || ev.badgeText?.toLowerCase() === "non-members welcome";

    // Shared inner content (image + badge + name)
    const CardInner = (
      <>
        {ev.image ? (
          <div className="relative aspect-[4/3]">
            <Image src={ev.image} alt={ev.name} fill className="object-cover" />
            {/* optional gradient for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            {ev.badgeText && (
              <span
                className={[
                  "absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                  "uppercase tracking-wide text-white shadow-sm ring-1 ring-black/5",
                  badgeBg(ev.badgeVariant),
                ].join(" ")}
              >
                {ev.badgeText}
              </span>
            )}
          </div>
        ) : null}
        <div className="p-3 text-sm font-medium">{ev.name}</div>
      </>
    );

    return (
      <div key={ev.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
        {isBrunch ? (
  <a
    href={RSVP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RSVP for next event on Lu.ma"
    className="group block cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-soft transition
               hover:shadow-md hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2
               focus-visible:ring-amber-400/60"
  >
    <div className="relative aspect-[4/3]">
    {ev.image ? (
      <Image
        src={ev.image}
        alt={ev.name}
        fill
        sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"
        className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
      />
    ) : (
      <div className="h-full w-full bg-slate-100" />
    )}
      {/* optional gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />

      {ev.badgeText && (
        <span
          className={[
            "absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
            "uppercase tracking-wide text-white shadow-sm ring-1 ring-black/5",
            badgeBg(ev.badgeVariant),
          ].join(" ")}
        >
          {ev.badgeText}
        </span>
      )}
      {/* subtle corner arrow on hover (optional) */}
      <span
        className="pointer-events-none absolute right-2 top-2 hidden rounded-full bg-white/90 px-2 py-1 text-[10px]
                   font-medium text-slate-700 shadow-sm ring-1 ring-black/5 group-hover:inline"
      >
        RSVP ↗
      </span>
    </div>

    <div className="p-3 text-sm font-medium text-center">
      {ev.name}
    </div>
  </a>
) : (
  <div className="rounded-2xl border bg-white overflow-hidden shadow-soft">{CardInner}</div>
)}
      </div>
    );
  })}
</div>
        </section>
      ) : null}

{/* TOP COWORKING SPACES */}
<section className="my-8 rounded-3xl border p-6 md:p-8 ring-1" style={{ backgroundColor: "#FFF4E6", borderColor: "#F3E2C7" }}>
  <SectionHeading compact>TOP COWORKING SPACES</SectionHeading>
  <CityPlacesSection
    title="Top Coworking Spaces"
    places={city.coworking}
    cityLabel="Tampa, FL"
    bare                                  // 👈 only render the grid
  />
</section>

{/* REMOTE WORKER FRIENDLY CAFES */}
<section className="my-8 rounded-3xl border p-6 md:p-8 ring-1" style={{ backgroundColor: "#FFF4E6", borderColor: "#F3E2C7" }}>
  <SectionHeading compact>REMOTE WORKER FRIENDLY CAFES</SectionHeading>
  <CityPlacesSection
    title="Remote Worker Friendly Cafés"
    places={city.cafes}
    cityLabel="Tampa, FL"
    bare
  />
</section>      
    </div>
  );
}

// helper for badge background color
function badgeBg(variant?: string) {
  switch (variant) {
    case "green":
      return "bg-emerald-600";
    case "amber":
      return "bg-amber-600";
    case "sky":
      return "bg-sky-600";
    case "rose":
      return "bg-rose-600";
    default:
      return "bg-slate-700";
  }
}


function Underline() {
  return (
    <div className="mt-2 flex justify-center">
      <span className="inline-block h-[2px] w-20 bg-[color:var(--warm-border)] rounded-full" />
    </div>
  );
}

function SectionHeading({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={`text-center ${compact ? "mb-3" : "mb-6"}`}>
      <h2 className="font-display text-xl tracking-[.2em] text-slate-700">
        {children}
      </h2>
      <div className="mt-2 flex justify-center">
        <span className="inline-block h-[2px] w-16 bg-[color:var(--warm-border)] rounded-full" />
      </div>
    </div>
  );
}



// --- Helper: image grid for coworking/cafés ---


function CityPlacesSection({
  title,
  places = [],
  cityLabel = "Tampa, FL",
  hideTitle = false,
  bare = false,                   
}: {
  title: string;
  places?: Place[];
  cityLabel?: string;
  hideTitle?: boolean;
  bare?: boolean;                 
}) {
  if (!places?.length) return null;

  const Grid = (
    <div className="mt-4 grid grid-cols-12 gap-5">
      {places.map((p) => {
        const href =
          p.url ??
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${p.name} ${cityLabel}`
          )}`;

        return (
          <article key={p.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.name} on Google Maps`}
              className="group block cursor-pointer overflow-hidden rounded-xl border bg-white shadow-soft transition hover:shadow-md hover:-translate-y-[1px]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image!}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"
                />
              </div>
              <div className="p-3 text-center">
                <span className="font-medium group-hover:underline">{p.name}</span>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );

  if (bare) return Grid;  // 👈 return only the grid when used inside a panel

  // original wrapped version (kept for reuse elsewhere)
  return (
    <section className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12 py-6">
      {!hideTitle && (
        <>
          <h2 className="text-center font-display text-xl tracking-[.2em] text-slate-700">
            {title.toUpperCase()}
          </h2>
          <div className="mt-2 flex justify-center">
            <span className="inline-block h-[2px] w-20 bg-[color:var(--warm-border)] rounded-full" />
          </div>
        </>
      )}
      {Grid}
    </section>
  );
}




