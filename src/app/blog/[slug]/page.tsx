import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find(p => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose">
      <h1>{post.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}
