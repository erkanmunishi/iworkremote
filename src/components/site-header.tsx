"use client";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">I Work Remote</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/chapters">City Chapters</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/blog">Blog</Link>
          <a href="#subscribe" className="px-3 py-1 rounded-lg border">Subscribe</a>
        </nav>
      </div>
    </header>
  );
}
