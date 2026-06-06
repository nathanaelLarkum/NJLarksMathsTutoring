import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQSection } from "@/components/marketing/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about NJLarks Maths Tutoring — sessions, pricing, online tutoring, and more.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            FAQ
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            Frequently asked{" "}
            <span className="text-[var(--primary)]">questions.</span>
          </h1>
          <p className="body-lg max-w-2xl text-[var(--text-secondary)]">
            Everything you need to know before getting started. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-[var(--primary)] underline underline-offset-2">
              Get in touch
            </Link>{" "}
            and I&apos;ll be happy to help.
          </p>
        </div>
      </section>

      {/* All FAQs */}
      <FAQSection limit={100} showViewAll={false} />

      <CTASection
        heading="Still have questions?"
        subtext="I'm happy to answer anything before you commit. Get in touch and let's talk."
        primaryCta="Contact Me"
        primaryHref="/contact"
        secondaryCta="Book a consultation"
        secondaryHref="/book"
      />
    </>
  );
}
