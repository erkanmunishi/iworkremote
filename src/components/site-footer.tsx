export function SiteFooter() {
  return (
    <footer
      className="
        border-t
        bg-[color:var(--warm)] text-[color:var(--warm-ink)]
        border-[color:var(--warm-border)]
      "
    >
      <div className="mx-auto max-w-screen-2xl 2xl:max-w-[1600px] px-4 md:px-6 xl:px-12 py-8 text-sm">
        © {new Date().getFullYear()} I Work Remote · All rights reserved
      </div>
    </footer>
  );
}
