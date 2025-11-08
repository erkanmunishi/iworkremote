"use client";
import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    // Full-width warm bar + border
    <header className="sticky top-0 z-50 bg-[color:var(--warm)] text-[color:var(--warm-ink)] border-b border-[color:var(--warm-border)]">
      {/* Inner container stays transparent and centered */}
      <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12 h-16 flex items-center justify-between">
        <Link href="/" aria-label="I Work Remote — Home" className="flex items-center">
          <Image
            src="/iwr-logo.png"   // or .png
            alt="IWR."
            width={300}
            height={80}
            priority
            className="h-30 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 text-[14px]">
          <Link href="/"           className="hover:underline">Home</Link>
          <Link href="/chapters"   className="hover:underline">City Chapters</Link>
          <Link href="/membership" className="hover:underline">Membership</Link>
          <Link href="/academy"    className="hover:underline">Academy</Link>   
          <a
            href="#subscribe"
            className="px-3 py-1 rounded-xl border shadow-soft transition
                       border-[color:var(--warm-border)]
                       bg-white/80 hover:bg-white
                       text-[color:var(--warm-ink)]">
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
