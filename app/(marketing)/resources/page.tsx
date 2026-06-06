import type { Metadata } from "next";
import { ExternalLink, BookOpen, Video, FileText, Calculator } from "lucide-react";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free maths resources recommended by NJLarks Maths Tutoring for Year 7–11 students.",
};

const resourceCategories = [
  {
    title: "Revision websites",
    icon: BookOpen,
    resources: [
      {
        name: "BBC Bitesize – Maths",
        description: "Clear explanations, quizzes and videos covering the full GCSE curriculum.",
        url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j",
      },
      {
        name: "Corbettmaths",
        description: "Practice questions, 5-a-day worksheets, and video tutorials.",
        url: "https://corbettmaths.com",
      },
      {
        name: "Maths Genie",
        description: "Past papers, revision notes and topic-by-topic practice.",
        url: "https://www.mathsgenie.co.uk",
      },
    ],
  },
  {
    title: "Video learning",
    icon: Video,
    resources: [
      {
        name: "Corbettmaths Videos",
        description: "Short, focused video explanations for every GCSE maths topic.",
        url: "https://corbettmaths.com/videos/",
      },
      {
        name: "Khan Academy",
        description: "Free video lessons and practice exercises across all levels.",
        url: "https://www.khanacademy.org/math",
      },
    ],
  },
  {
    title: "Past papers",
    icon: FileText,
    resources: [
      {
        name: "AQA GCSE Maths Past Papers",
        description: "Official AQA past papers and mark schemes.",
        url: "https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources",
      },
      {
        name: "Edexcel GCSE Maths Past Papers",
        description: "Pearson Edexcel past papers, mark schemes and examiner reports.",
        url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html",
      },
    ],
  },
  {
    title: "Tools & calculators",
    icon: Calculator,
    resources: [
      {
        name: "Desmos Graphing Calculator",
        description: "Free, powerful graphing calculator — great for visualising functions.",
        url: "https://www.desmos.com/calculator",
      },
      {
        name: "GeoGebra",
        description: "Interactive geometry, algebra, statistics and calculus tools.",
        url: "https://www.geogebra.org",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Resources
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            Free resources to{" "}
            <span className="text-[var(--primary)]">support your learning.</span>
          </h1>
          <p className="body-lg max-w-2xl text-[var(--text-secondary)]">
            A curated collection of free maths resources I recommend for Year 7–11 students.
            Use these alongside your tutoring sessions to keep building momentum.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-wide mx-auto px-4">
          <div className="space-y-12">
            {resourceCategories.map((category) => (
              <div key={category.title}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)]">
                    <category.icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <h2 className="heading-md text-[var(--text-primary)]">{category.title}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-xl border border-[var(--border)] bg-background p-5 transition-shadow hover:shadow-md"
                      aria-label={`${resource.name} – opens in a new tab`}
                    >
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)]">
                          {resource.name}
                        </h3>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[var(--text-secondary)]" />
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{resource.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-background">
        <div className="container-tight mx-auto px-4">
          <p className="text-center text-sm text-[var(--text-secondary)]">
            External links are provided as helpful recommendations. NJLarks Maths Tutoring is not
            affiliated with any of these websites.
          </p>
        </div>
      </section>

      <CTASection
        heading="Want personalised support alongside these resources?"
        subtext="Book a session and we can work through topics together, step by step."
      />
    </>
  );
}
