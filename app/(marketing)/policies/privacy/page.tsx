import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NJLarks Maths Tutoring.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto px-4">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Policy
          </div>
          <h1 className="heading-xl mb-4 text-[var(--text-primary)]">Privacy Policy</h1>
          <p className="body-md text-[var(--text-secondary)]">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="prose-custom rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
          {/* PLACEHOLDER_PRIVACY — Replace the content below with your actual privacy policy */}
          <div className="mb-6 rounded-lg border-2 border-dashed border-[var(--accent)] bg-[var(--muted)] p-4">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              📝 PLACEHOLDER_PRIVACY — Replace this section with your actual privacy policy.
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              A privacy policy should cover: what data you collect, how you use it, how it&apos;s stored,
              whether it&apos;s shared with third parties, and how users can request deletion.
            </p>
          </div>

          <PolicySection title="1. Who we are">
            <p>
              NJLarks Maths Tutoring is a private tutoring service operated by [Your Full Name],
              based in [Location, UK]. We are committed to protecting and respecting your privacy.
            </p>
          </PolicySection>

          <PolicySection title="2. What data we collect">
            <p>When you use our contact or booking forms, we may collect:</p>
            <ul>
              <li>Parent/guardian name</li>
              <li>Student name and year group</li>
              <li>Email address</li>
              <li>Information about learning goals and availability</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How we use your data">
            <p>
              We use the information you provide solely to respond to enquiries, arrange tutoring
              sessions, and communicate about ongoing tuition. We do not use your data for
              marketing purposes without your explicit consent.
            </p>
          </PolicySection>

          <PolicySection title="4. Data storage and security">
            <p>
              Your data is processed through Netlify Forms, which is subject to Netlify&apos;s own
              privacy policy. We retain contact information for as long as necessary to maintain
              our tutoring relationship and no longer.
            </p>
          </PolicySection>

          <PolicySection title="5. Third parties">
            <p>
              We do not sell, trade, or transfer your personal data to third parties without your
              consent, except as required by law or where necessary to deliver the service (e.g.
              video conferencing platforms for online sessions).
            </p>
          </PolicySection>

          <PolicySection title="6. Your rights">
            <p>
              You have the right to request access to, correction of, or deletion of any personal
              data we hold about you. To exercise these rights, please contact us via the contact
              form.
            </p>
          </PolicySection>

          <PolicySection title="7. Cookies">
            <p>
              This website does not use tracking cookies. Essential functionality may use browser
              local storage for theme preferences.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="heading-sm mb-3 text-[var(--text-primary)]">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)] [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}
