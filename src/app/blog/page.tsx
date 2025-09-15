import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-xl font-semibold underline">
              {p.title}
            </Link>
            <div className="text-sm text-neutral-600">
              {new Date(p.date).toDateString()}
            </div>
            {p.excerpt && <p className="mt-2">{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
