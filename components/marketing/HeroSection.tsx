"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function FadeUp({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32" aria-label="Hero">
      {/* Subtle decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, var(--secondary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-10"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />

      <div className="container-wide relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <FadeUp delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
              1-to-1 Maths Tutoring · Year 7–11
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1}>
            <h1 className="heading-xl mb-6 text-[var(--text-primary)]">
              Friendly maths tutoring that{" "}
              <span className="text-[var(--primary)]">builds confidence.</span>
            </h1>
          </FadeUp>

          {/* Subtext */}
          <FadeUp delay={0.2}>
            <p className="body-lg mx-auto mb-10 max-w-2xl text-[var(--text-secondary)]">
              1-to-1 maths tutoring for Year 7–11 students. Structured, encouraging sessions that
              help your child understand maths — not just memorise it.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book" className="gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing" className="gap-2">
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
