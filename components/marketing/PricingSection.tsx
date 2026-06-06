"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      className="section-padding bg-[var(--muted)]"
      aria-labelledby="pricing-heading"
    >
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 id="pricing-heading" className="heading-lg mb-4 text-[var(--text-primary)]">
            Simple, transparent pricing
          </h2>
          <p className="body-lg mx-auto max-w-xl text-[var(--text-secondary)]">
            No hidden fees. Choose pay-as-you-go flexibility or save with a bundle.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={cn(
                "relative rounded-xl border bg-[var(--surface)] p-6 shadow-sm transition-shadow hover:shadow-md",
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

              <div className="mb-4">
                {plan.saving && (
                  <Badge variant="accent" className="mb-3 text-xs">
                    {plan.saving}
                  </Badge>
                )}
                <h3 className="heading-sm text-lg text-[var(--text-primary)]">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-heading text-4xl font-bold text-[var(--primary)]">
                  {plan.priceLabel}
                </span>
                <span className="ml-1 text-sm text-[var(--text-secondary)]">{plan.priceNote}</span>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/book">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center text-sm text-[var(--text-secondary)]"
        >
          All prices include preparation time.{" "}
          <Link href="/pricing" className="text-[var(--primary)] underline underline-offset-2">
            View full pricing details →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
