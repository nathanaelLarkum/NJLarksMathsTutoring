import type { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle } from "lucide-react";
import { CTASection } from "@/components/marketing/CTASection";
import { pricingPlans, sessionLengths } from "@/content/pricing";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent maths tutoring prices. £30/hour pay-as-you-go or discounted bundles: 8 hours for £220 and 16 hours for £420.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
            Pricing
          </div>
          <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
            Simple, honest pricing.{" "}
            <span className="text-[var(--primary)]">No surprises.</span>
          </h1>
          <p className="body-lg mx-auto max-w-xl text-[var(--text-secondary)]">
            Pay as you go at £30/hour, or save with a bundle. All prices include preparation and
            follow-up.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-wide mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-xl border bg-[var(--surface)] p-6 shadow-sm",
                  plan.highlighted
                    ? "border-[var(--primary)] ring-2 ring-[var(--primary)]"
                    : "border-[var(--border)]"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="mb-5">
                  {plan.saving && (
                    <Badge variant="accent" className="mb-3 text-xs">
                      {plan.saving}
                    </Badge>
                  )}
                  <h2 className="heading-sm text-xl text-[var(--text-primary)]">{plan.name}</h2>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="font-heading text-5xl font-bold text-[var(--primary)]">
                    {plan.priceLabel}
                  </span>
                  <span className="ml-2 text-sm text-[var(--text-secondary)]">{plan.priceNote}</span>
                  {plan.hours && (
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      = £{(plan.id === "bundle-8" ? 220 / 8 : 420 / 16).toFixed(2)}/hr effective rate
                    </p>
                  )}
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                      <span className="text-[var(--text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={cn(
                    "flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90",
                    plan.highlighted
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "border border-[var(--border)] text-[var(--text-primary)]"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session lengths breakdown */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-tight mx-auto px-4">
          <h2 className="heading-lg mb-3 text-[var(--text-primary)]">Session length pricing</h2>
          <p className="body-lg mb-8 text-[var(--text-secondary)]">
            All sessions are charged at £30/hr, pro-rated for shorter or longer sessions.
          </p>
          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full" aria-label="Session length pricing">
              <thead>
                <tr className="bg-[var(--muted)]">
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">
                    Duration
                  </th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">
                    Price
                  </th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">
                    Ideal for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {sessionLengths.map((s) => (
                  <tr key={s.duration} className="hover:bg-[var(--surface-hover)]">
                    <td className="px-5 py-4 text-sm font-medium text-[var(--text-primary)]">
                      {s.duration}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[var(--primary)]">
                      {s.price}
                    </td>
                    <td className="px-5 py-4 text-sm text-[var(--text-secondary)]">{s.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ note */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto px-4">
          <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
            <div>
              <h3 className="heading-sm mb-1 text-base text-[var(--text-primary)]">
                Have pricing questions?
              </h3>
              <p className="body-md text-[var(--text-secondary)]">
                Bundle hours don&apos;t expire quickly — check the FAQ or{" "}
                <Link href="/contact" className="text-[var(--primary)] underline underline-offset-2">
                  get in touch
                </Link>{" "}
                if you have any questions about pricing or payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to get started?"
        subtext="Book a free initial consultation — no commitment required."
      />
    </>
  );
}
