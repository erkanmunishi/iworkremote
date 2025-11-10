import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
//import { Inter, Outfit } from "next/font/google";

//const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
//const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iworkremote.us"),
  title: { default: "I Work Remote", template: "%s · I Work Remote" },
  description: "Community, events, and resources for remote workers.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Make the whole page a flex column that fills the screen */}
      <body className="min-h-screen bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          {/* This lets the main content expand and pushes the footer down */}
          <main className="flex-1">
            {children}
          </main>

          {/* mt-auto ensures the footer sits at the bottom when content is short */}
          <footer className="mt-auto">
            <SiteFooter />
          </footer>
        </div>
      </body>
    </html>
  );
}
