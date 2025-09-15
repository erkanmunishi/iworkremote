import { NewsletterForm } from "@/components/newsletter-form";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          The community for remote workers & digital nomads
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Events, chapters, and practical resources to help you work—and live—better.
        </p>
        <NewsletterForm />
      </section>
    </div>
  );
}
