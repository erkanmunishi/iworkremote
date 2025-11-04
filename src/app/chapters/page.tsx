import { MapPin, Users } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "City Chapters" };

type Chapter = {
  city: string;
  state?: string;
  lead: string;
  members?: number;
  link: string | null;          // events / join link
};

const chapters: Chapter[] = [
  { city: "Tampa", state: "FL", lead: "Erkan Munishi", members: 180, link: "/chapters/tampa" },
  { city: "Orlando", state: "FL", lead: "TBD", members: 0, link: null },
  { city: "Miami", state: "FL", lead: "TBD", members: 0, link: null },
  { city: "Austin", state: "TX", lead: "TBD", members: 0, link: null },
  { city: "New York", state: "NY", lead: "TBD", members: 0, link: null },
  { city: "Chicago", state: "IL", lead: "TBD", members: 0, link: null },
];

export default function ChaptersPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 py-12">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">City Chapters</h1>
        <p className="mt-2 text-slate-600">
          Join your local community. Meet regularly, swap tips, and build friendships.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {chapters.map((c) => (
          <ChapterCard key={c.city} chapter={c} className="col-span-12 sm:col-span-6 lg:col-span-4" />
        ))}
      </div>
    </div>
  );
}

function ChapterCard({
  chapter,
  className = "",
}: {
  chapter: Chapter;
  className?: string;
}) {
  const { city, state, lead, members = 0, link } = chapter;
  const hasEvents = !!link;

  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-soft ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <h3 className="text-lg font-semibold">
            {city}
            {state ? `, ${state}` : ""}
          </h3>
        </div>
        {!!members  && (
          <span className="inline-flex items-center gap-1 rounded-full badge-soft px-2 py-0.5 text-xs">
            <Users className="h-3.5 w-3.5" /> {members}
          </span>
        )}
      </div>

      <div className="mt-2 text-sm text-slate-600">
        Lead: <span className="font-medium">{lead}</span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {hasEvents ? (
          <Link
          href={link!}
          className="btn-brand inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm transition shadow-soft"
        >
          Events / Join
        </Link>
        ) : (
          <span className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm border bg-slate-50 text-slate-400 shadow-soft cursor-not-allowed">
            Events / Join
          </span>
        )}

        {/* normal link; no event handler */}
        {(!lead || lead === "TBD") && (
          <a href="/membership" className="link-brand text-sm">
            Become a chapter lead →
          </a>
        )}

      </div>
    </div>
  );
}


