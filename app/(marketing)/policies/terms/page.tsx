import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for NJLarks Maths Tutoring services.",
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

export default function TermsPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto px-4">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Policy
          </div>
          <h1 className="heading-xl mb-4 text-[var(--text-primary)]">Terms &amp; Conditions</h1>
          <p className="body-md text-[var(--text-secondary)]">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
          {/* PLACEHOLDER_TERMS */}
          <div className="mb-6 rounded-lg border-2 border-dashed border-[var(--accent)] bg-[var(--muted)] p-4">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              📝 PLACEHOLDER_TERMS — Replace this with your actual terms and conditions.
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Terms for a tutoring business should cover: payment terms, cancellation policy,
              session rescheduling, package terms, and any limitations of liability.
            </p>
          </div>

          <PolicySection title="1. Agreement">
            <p>
              By booking a session with NJLarks Maths Tutoring, you agree to these terms and
              conditions. Please read them carefully before proceeding.
            </p>
          </PolicySection>

          <PolicySection title="2. Pricing and payment">
            <ul>
              <li>Standard rate: £30 per hour</li>
              <li>8-hour bundle: £220 (must be used within [X] months)</li>
              <li>16-hour bundle: £420 (must be used within [X] months)</li>
              <li>Payment is due [before/after] each session unless on a bundle plan</li>
              <li>Accepted payment methods: [Bank transfer / Card / etc.]</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Cancellations and rescheduling">
            <ul>
              <li>
                24 hours&apos; notice is required to cancel or reschedule a session without charge
              </li>
              <li>
                Sessions cancelled with less than 24 hours&apos; notice may be charged in full
              </li>
              <li>
                Cancellations due to illness or emergency will be handled with discretion
              </li>
              <li>
                NJLarks Maths Tutoring reserves the right to cancel sessions with reasonable
                notice
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Session packages (bundles)">
            <ul>
              <li>Bundle hours are non-refundable once sessions have commenced</li>
              <li>Bundle hours must be used within the agreed timeframe</li>
              <li>Unused hours may not be transferred to other students</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Conduct">
            <p>
              Both parties agree to maintain a respectful and professional environment during
              sessions. Tutoring may be discontinued if conduct is deemed inappropriate or
              disruptive.
            </p>
          </PolicySection>

          <PolicySection title="6. Liability">
            <p>
              NJLarks Maths Tutoring cannot guarantee specific exam results or grade improvements.
              We provide high-quality tuition but outcomes depend on a range of factors including
              student effort and circumstances.
            </p>
          </PolicySection>

          <PolicySection title="7. Changes to terms">
            <p>
              These terms may be updated from time to time. Continued use of our services
              constitutes acceptance of any updates.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact">
            <p>
              For any queries about these terms, please use the contact form on our website.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}
