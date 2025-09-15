import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: (data as any).title ?? slug,
      date: (data as any).date ?? new Date().toISOString(),
      excerpt: (data as any).excerpt ?? "",
      content,
    };
  }).sort((a,b) => +new Date(b.date) - +new Date(a.date));
}
