export const metadata = { title: "City Chapters" };

const chapters = [
  { city: "Tampa, FL", lead: "Erkan", link: "https://lu.ma/iworkremote" },
  { city: "Orlando, FL", lead: "TBD", link: "#" },
  { city: "San Francisco, CA", lead: "TBD", link: "#" }
];

export default function ChaptersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">City Chapters</h1>
      <ul className="space-y-4">
        {chapters.map((c) => (
          <li key={c.city} className="border p-4 rounded-xl">
            <div className="font-semibold">{c.city}</div>
            <div className="text-sm text-neutral-600">Lead: {c.lead}</div>
            <a className="underline" href={c.link} target="_blank">Events / Join</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
