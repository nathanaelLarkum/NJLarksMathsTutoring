import type { Metadata } from "next";
import { TrendingUp, Star, Award } from "lucide-react";
import { CTASection } from "@/components/marketing/CTASection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See the results NJLarks Maths Tutoring students achieve. Testimonials and outcomes from Year 7–11 students.",
};

const outcomes = [
  {
    icon: TrendingUp,
    stat: "Grade improvements",
    detail: "Students regularly improve by 1–3 grades after consistent sessions",
  },
  {
    icon: Star,
    stat: "Confidence gains",
    detail: "Most students report feeling more confident in maths within the first few weeks",
  },
  {
    icon: Award,
    stat: "GCSE preparation",
    detail: "Targeted revision helps students go into exams feeling genuinely prepared",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Results
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            Real progress.{" "}
            <span className="text-[var(--primary)]">Real confidence.</span>
          </h1>
          <p className="body-lg max-w-2xl text-[var(--text-secondary)]">
            The goal is always the same: help each student understand maths properly, build their
            confidence, and achieve results they&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-wide mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item.stat}
                className="rounded-xl border border-[var(--border)] bg-background p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--muted)]">
                  <item.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="heading-sm mb-2 text-[var(--text-primary)]">{item.stat}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Results placeholder */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="rounded-xl border-2 border-dashed border-[var(--border)] p-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
              📝 Additional Results Placeholder
            </p>
            <p className="body-md text-[var(--text-secondary)]">
              Replace this section with specific student outcomes, grade improvements, or case
              studies (anonymised where necessary). You might include before/after grades, topics
              tackled, or how students felt after their tutoring journey.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to see results for your child?"
        subtext="Book a free initial consultation and take the first step towards real progress."
      />
    </>
  );
}
