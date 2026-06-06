import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safeguarding Policy",
  description: "Safeguarding policy for NJLarks Maths Tutoring.",
};

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="heading-sm mb-3 text-[var(--text-primary)]">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)] [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}

export default function SafeguardingPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto px-4">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Policy
          </div>
          <h1 className="heading-xl mb-4 text-[var(--text-primary)]">Safeguarding Policy</h1>
          <p className="body-md text-[var(--text-secondary)]">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
          {/* PLACEHOLDER_SAFEGUARDING */}
          <div className="mb-6 rounded-lg border-2 border-dashed border-[var(--accent)] bg-[var(--muted)] p-4">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              📝 PLACEHOLDER_SAFEGUARDING — Replace this with your actual safeguarding policy.
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              A safeguarding policy for tutors should cover: your commitment to child protection,
              DBS check status, how concerns are reported, communication protocols, and lone
              working arrangements.
            </p>
          </div>

          <PolicySection title="1. Statement of intent">
            <p>
              NJLarks Maths Tutoring is committed to safeguarding and promoting the welfare of
              children. We recognise our responsibility to provide a safe and supportive learning
              environment for all students.
            </p>
          </PolicySection>

          <PolicySection title="2. DBS Check">
            <p>
              [Your Name] holds a current Enhanced DBS (Disclosure and Barring Service) check.
              This is renewed in line with best practice guidance.
            </p>
          </PolicySection>

          <PolicySection title="3. Communication policy">
            <p>
              All communication regarding sessions takes place with parents/guardians directly.
              Communication with students takes place only with parental knowledge and consent.
              Sessions are not recorded without explicit consent.
            </p>
          </PolicySection>

          <PolicySection title="4. Online session safety">
            <p>For online sessions:</p>
            <ul>
              <li>Sessions are conducted via agreed video conferencing platforms</li>
              <li>A parent/guardian may be present at any time</li>
              <li>Sessions take place in appropriate, visible settings</li>
              <li>No session recordings are made without explicit consent</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. In-person session safety">
            <p>For in-person sessions:</p>
            <ul>
              <li>Sessions take place in agreed, appropriate locations</li>
              <li>A parent/guardian is present or immediately contactable</li>
              <li>Session locations are agreed in advance</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Concerns and reporting">
            <p>
              If there are any safeguarding concerns, they will be reported to the relevant
              statutory authority in line with local safeguarding procedures. The welfare of the
              child is always the primary concern.
            </p>
          </PolicySection>

          <PolicySection title="7. Confidentiality">
            <p>
              Safeguarding concerns override normal rules of confidentiality. Information will be
              shared with appropriate authorities where there is a risk to a child&apos;s welfare.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}
