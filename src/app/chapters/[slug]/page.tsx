import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, cityList } from "@/lib/cities";
import type { Place } from "@/lib/cities";


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
  <div className="absolute inset-0">
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
          {city.joinLink && (
            <Link href={city.joinLink} className="btn-brand rounded-xl px-5 py-3">
              {city.status === "live" ? "Join the Community" : "Get Notified"}
            </Link>
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
            {city.summary && (
              <p className="text-[15px] leading-7 text-slate-700">
                {city.summary}
              </p>
            )}
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="rounded-2xl border bg-white p-5 shadow-soft">
              <div className="text-sm text-slate-600">Lead</div>
              <div className="text-lg font-semibold">{city.lead ?? "TBD"}</div>
              {city.joinLink && (
                <Link href={city.joinLink} className="btn-brand mt-3 inline-flex rounded-xl px-4 py-2 text-sm">
                  {isLive ? "Events / Join" : "Join waitlist"}
                </Link>
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
            {city.events.map(ev => (
              <div key={ev.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="rounded-2xl border bg-white overflow-hidden shadow-soft">
                  {ev.image ? (
                    <div className="relative aspect-[4/3]">
                      <Image src={ev.image} alt={ev.name} fill className="object-cover" />
                    </div>
                  ) : null}
                  <div className="p-3 text-sm font-medium">{ev.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

{/* TOP COWORKING SPACES */}
<SectionHeading>TOP COWORKING SPACES</SectionHeading>
<CityPlacesSection title="Top Coworking Spaces" places={city.coworking} hideTitle />

{/* REMOTE WORKER FRIENDLY CAFES */}
<SectionHeading>REMOTE WORKER FRIENDLY CAFES</SectionHeading>
<CityPlacesSection title="Remote Worker Friendly Cafés" places={city.cafes} hideTitle />


      
    </div>
  );
}

function Underline() {
  return (
    <div className="mt-2 flex justify-center">
      <span className="inline-block h-[2px] w-20 bg-[color:var(--warm-border)] rounded-full" />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center font-display text-xl tracking-[.2em] text-slate-700">
        {children}
      </h2>
      <Underline />
    </>
  );
}


// --- Helper: image grid for coworking/cafés ---
type CityPlace = {
  name: string;
  image: string;   // path under /public (starts with "/")
  url?: string;    // optional external link
};

function CityPlacesSection({
  title,
  places = [],
  hideTitle = false, 
}: {
  title: string;
  places?: Place[];    // <- use Place from cities.ts (image?: string)
  hideTitle?: boolean;
}) {
  if (!places?.length) return null;

  return (
    <section className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12 py-10">
      {!hideTitle && (
        <>
      <h2 className="mb-2 text-center font-display text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-slate-200" />
      </>
      )}

      <div className="grid grid-cols-12 gap-5">
        {places.map((p) => (
          <article key={p.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border bg-white shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-slate-400 text-sm">
                    No image
                  </div>
                )}
              </div>
              <div className="p-3 text-center">
                {p.url ? (
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                    {p.name}
                  </Link>
                ) : (
                  <span className="font-medium">{p.name}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


