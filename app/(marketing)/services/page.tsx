import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTASection } from "@/components/marketing/CTASection";
import { yearGroups, sessionTypes } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "1-to-1 maths tutoring for Year 7–11 students. Sessions from 30 minutes to 2 hours, online via video call (Google Meets).",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Services
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            Tailored support for every{" "}
            <span className="text-[var(--primary)]">stage of secondary school.</span>
          </h1>
          <p className="body-lg max-w-2xl text-[var(--text-secondary)]">
            1-to-1 maths tuition for Year 7–11. Each session is structured, encouraging, and designed
            around your child&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* Session lengths */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-wide mx-auto px-4">
          <h2 className="heading-lg mb-3 text-[var(--text-primary)]">Session lengths</h2>
          <p className="body-lg mb-10 text-[var(--text-secondary)]">
            Choose the session length that fits your child&apos;s needs and attention span.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sessionTypes.map((session) => (
              <div
                key={session.duration}
                className="rounded-xl border border-[var(--border)] bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{session.icon}</div>
                <h3 className="heading-sm mb-1 text-lg text-[var(--text-primary)]">
                  {session.duration}
                </h3>
                <p className="mb-3 text-sm font-medium text-[var(--secondary)]">
                  {session.idealFor}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {session.description}
                </p>
                <ul className="space-y-1.5">
                  {session.bestFor.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Check className="h-3.5 w-3.5 text-[var(--success)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year groups */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4">
          <h2 className="heading-lg mb-3 text-[var(--text-primary)]">Year group coverage</h2>
          <p className="body-lg mb-10 text-[var(--text-secondary)]">
            Covering the full KS3 and KS4 (GCSE) maths curriculum across Year 7–11.
          </p>
          <div className="space-y-4">
            {yearGroups.map((yg) => (
              <div
                key={yg.year}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex flex-wrap items-start gap-4 md:flex-nowrap">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--primary)]">
                      <span className="font-heading text-xs font-bold text-[var(--primary-foreground)]">
                        {yg.year.replace("Year ", "Y")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="heading-sm text-base text-[var(--text-primary)]">{yg.year}</h3>
                      <span className="rounded-full bg-[var(--muted)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
                        {yg.keyStage}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-[var(--text-secondary)]">{yg.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {yg.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online sessions */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-tight mx-auto px-4">
          <h2 className="heading-lg mb-8 text-center text-[var(--text-primary)]">
            Online sessions
          </h2>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <ul className="space-y-2">
              {[
                "Via video call (e.g. Zoom, Google Meet)",
                "Digital whiteboard for working through problems",
                "Screen sharing for demonstrations",
                "Flexible — no travel required",
                "Suitable for students anywhere",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Find the right session for your child"
        subtext="Not sure what you need? Book a free consultation and we can figure it out together."
      />
    </>
  );
}