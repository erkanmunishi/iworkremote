"use client";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-screen-2xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">I Work Remote</Link>
        <nav className="flex items-center gap-6 text-[14px]">
          <Link href="/chapters" className="hover:underline">City Chapters</Link>
          <Link href="/membership" className="hover:underline">Membership</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <a href="#subscribe" className="px-3 py-1 rounded-xl border hover:bg-white shadow-soft transition">
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
