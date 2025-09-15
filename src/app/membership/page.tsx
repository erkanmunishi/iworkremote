export const metadata = { title: "Membership" };

export default function MembershipPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Membership</h1>
      <p>Members get access to curated events, private channels, and resources.</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Monthly virtual meetups</li>
        <li>Local chapter events</li>
        <li>Member-only resources</li>
      </ul>
    </div>
  );
}
