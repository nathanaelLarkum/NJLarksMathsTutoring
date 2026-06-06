"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  variant?: "default" | "accent";
}

export function CTASection({
  heading = "Ready to build confidence in maths?",
  subtext = "Book a free initial consultation and let's discuss how I can help your child succeed.",
  primaryCta = "Book a Consultation",
  primaryHref = "/book",
  secondaryCta = "Get in touch",
  secondaryHref = "/contact",
  variant = "default",
}: CTASectionProps) {
  const bgClass =
    variant === "accent"
      ? "bg-[var(--accent)]"
      : "bg-[var(--primary)]";

  const textClass =
    variant === "accent" ? "text-[var(--accent-foreground)]" : "text-[var(--primary-foreground)]";

  return (
    <section
      className={`section-padding ${bgClass}`}
      aria-labelledby="cta-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-tight mx-auto px-4 text-center"
      >
        <h2
          id="cta-heading"
          className={`heading-lg mb-4 ${textClass}`}
        >
          {heading}
        </h2>
        <p className={`body-lg mx-auto mb-8 max-w-xl opacity-90 ${textClass}`}>{subtext}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant={variant === "accent" ? "default" : "secondary"}
            className={
              variant === "accent"
                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "bg-white text-[var(--primary)] hover:bg-white/90"
            }
            asChild
          >
            <Link href={primaryHref} className="gap-2">
              <CalendarCheck className="h-5 w-5" />
              {primaryCta}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className={`${textClass} hover:bg-white/10`}
            asChild
          >
            <Link href={secondaryHref} className="gap-2">
              {secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
