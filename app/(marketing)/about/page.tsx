import type { Metadata } from "next";
import { GraduationCap, ShieldCheck, Heart, BookOpen, Users } from "lucide-react";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NJLarks Maths Tutoring — qualifications, teaching philosophy and approach to 1-to-1 maths tuition for Year 7–11.",
};

const highlights = [
  { icon: GraduationCap, label: "Qualified tutor", detail: "Mathematics degree" },
  { icon: ShieldCheck, label: "DBS Checked", detail: "Current & up to date" },
  { icon: Heart, label: "Student-first approach", detail: "Encouraging & patient" },
  { icon: BookOpen, label: "Structured sessions", detail: "Clear, planned learning" },
  { icon: Users, label: "Parent communication", detail: "Regular progress updates" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            About Me
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            A tutor who cares about{" "}
            <span className="text-[var(--primary)]">real understanding.</span>
          </h1>
          <p className="body-lg text-[var(--text-secondary)]">
            Hi, I&apos;m NJ. I&apos;m a passionate maths tutor who believes every student is capable of
            understanding maths — they just need the right support, patience, and approach.
          </p>
        </div>
      </section>

      {/* Biography placeholder */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-tight mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="heading-lg mb-6 text-[var(--text-primary)]">My background</h2>

              {/* BIOGRAPHY PLACEHOLDER — replace with real content */}
              <div className="space-y-4 rounded-lg border-2 border-dashed border-[var(--border)] p-6">
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                  📝 Biography Placeholder
                </p>
                <p className="body-md text-[var(--text-secondary)]">
                  [Replace this section with your personal biography. Include your educational
                  background, how you got into tutoring, and what drives your passion for maths
                  education.]
                </p>
                <p className="body-md text-[var(--text-secondary)]">
                  [You might mention: your degree, any teaching qualifications, how long you&apos;ve
                  been tutoring, subjects or areas you specialise in, and any notable achievements
                  or results you&apos;ve helped students achieve.]
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-lg mb-6 text-[var(--text-primary)]">Qualifications & experience</h2>
              {/* QUALIFICATIONS PLACEHOLDER */}
              <div className="space-y-4 rounded-lg border-2 border-dashed border-[var(--border)] p-6">
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                  📝 Qualifications Placeholder
                </p>
                <p className="body-md text-[var(--text-secondary)]">
                  [Replace with your actual qualifications and experience. For example:]
                </p>
                <ul className="list-inside list-disc space-y-1 text-[var(--text-secondary)]">
                  <li>BSc Mathematics – [University Name], [Year]</li>
                  <li>[Any PGCE or teaching qualifications]</li>
                  <li>[X] years of tutoring experience</li>
                  <li>DBS Enhanced Check – current</li>
                  <li>[Any exam board experience, e.g. AQA, Edexcel]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <h2 className="heading-lg mb-6 text-[var(--text-primary)]">My teaching philosophy</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="heading-sm mb-3 text-[var(--primary)]">Understanding over memorisation</h3>
              <p className="body-md text-[var(--text-secondary)]">
                I believe students thrive when they understand the &apos;why&apos; behind maths, not just the
                &apos;how&apos;. Once concepts click, everything else follows naturally.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="heading-sm mb-3 text-[var(--primary)]">Confidence is the foundation</h3>
              <p className="body-md text-[var(--text-secondary)]">
                Many students struggle with maths anxiety. I create a calm, safe space where it&apos;s
                completely fine to make mistakes — that&apos;s how we learn.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="heading-sm mb-3 text-[var(--primary)]">Tailored to each student</h3>
              <p className="body-md text-[var(--text-secondary)]">
                No two students are the same. I take time to understand each child&apos;s learning style,
                pace, and goals — then build sessions around them.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="heading-sm mb-3 text-[var(--primary)]">Partnership with parents</h3>
              <p className="body-md text-[var(--text-secondary)]">
                I work alongside parents to ensure continuity between sessions. Regular updates and
                open communication are a core part of how I operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust highlights */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-tight mx-auto px-4">
          <h2 className="heading-lg mb-8 text-center text-[var(--text-primary)]">
            What you can expect
          </h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)]">
                  <item.icon className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to get started?"
        subtext="Book a free initial consultation and let's find the right approach for your child."
      />
    </>
  );
}
