"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/faq";

interface FAQSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function FAQSection({ limit = 6, showViewAll = true }: FAQSectionProps) {
  const displayedFaqs = faqs.slice(0, limit);

  return (
    <section className="section-padding bg-background" aria-labelledby="faq-heading">
      <div className="container-tight mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 id="faq-heading" className="heading-lg mb-4 text-[var(--text-primary)]">
            Frequently asked questions
          </h2>
          <p className="body-lg text-[var(--text-secondary)]">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-[var(--text-primary)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-[var(--text-secondary)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {showViewAll && faqs.length > limit && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-sm font-medium text-[var(--primary)] underline-offset-2 hover:underline"
            >
              View all questions →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
