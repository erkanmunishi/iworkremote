export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-screen-2xl px-6 py-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} I Work Remote · All rights reserved
      </div>
    </footer>
  );
}
