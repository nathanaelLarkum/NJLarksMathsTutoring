"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My daughter went from dreading maths to actually enjoying it. Her confidence has grown so much in just a few months.",
    author: "Parent of Year 9 student",
    initials: "JT",
  },
  {
    quote:
      "Really patient and explains things in a way that finally makes sense. I feel much better going into my GCSEs now.",
    author: "Year 11 student",
    initials: "SR",
  },
  {
    quote:
      "Organised, reliable and clearly knowledgeable. My son improved his mock grade by two levels after just 8 sessions.",
    author: "Parent of Year 10 student",
    initials: "MK",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 id="testimonials-heading" className="heading-lg mb-4 text-[var(--text-primary)]">
            What families say
          </h2>
          <p className="body-lg mx-auto max-w-xl text-[var(--text-secondary)]">
            Building confidence and achieving results — one student at a time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-xl border border-[var(--border)] bg-background p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-[var(--accent)]" />
              <p className="body-md mb-5 text-[var(--text-secondary)]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-[var(--primary-foreground)]">
                  {testimonial.initials}
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
