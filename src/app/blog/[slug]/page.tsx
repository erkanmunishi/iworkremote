
export const runtime = "nodejs";     // ensure Node runtime, not Edge
export const dynamic = "force-static"; // generate at build (safe for blog posts)


import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 👇 Next 15: params is a Promise
  const { slug } = await params;

  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    // replace your article wrapper with this:
<article className="container py-12 prose prose-slate md:prose-lg prose-headings:font-display">
  <h1>{post.title}</h1>
  <MDXRemote source={post.content} />
</article>

  );
}
