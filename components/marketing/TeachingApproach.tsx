"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, MessageCircle } from "lucide-react";

const approaches = [
  {
    icon: Target,
    title: "Tailored to each student",
    description:
      "Every child learns differently. Sessions are adapted to suit your child's current level, learning style, and pace — not a one-size-fits-all approach.",
  },
  {
    icon: MessageCircle,
    title: "Encouraging & patient",
    description:
      "Maths can feel overwhelming. I create a calm, supportive environment where it's safe to make mistakes, ask questions, and take time to understand.",
  },
  {
    icon: TrendingUp,
    title: "Structured progression",
    description:
      "Sessions follow a clear structure: revisit, learn, practise, consolidate. Students leave each session knowing exactly what they've achieved.",
  },
  {
    icon: Users,
    title: "Open communication",
    description:
      "Parents are kept in the loop. I share progress updates and flag any areas of concern so we can work together towards your child's goals.",
  },
];

export function TeachingApproach() {
  return (
    <section className="section-padding bg-background" aria-labelledby="approach-heading">
      <div className="container-wide mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 id="approach-heading" className="heading-lg mb-4 text-[var(--text-primary)]">
            How I teach
          </h2>
          <p className="body-lg mx-auto max-w-2xl text-[var(--text-secondary)]">
            My approach is built on understanding, not memorising content. I work hard to fit the learning methods to the student. Every student is different!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--muted)]">
                <item.icon className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <h3 className="heading-sm mb-2 text-base text-[var(--text-primary)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
