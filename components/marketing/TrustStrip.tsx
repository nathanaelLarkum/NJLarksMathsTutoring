"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Heart, BookOpen } from "lucide-react";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Qualified Tutor",
    description: "Mathematics degree & teaching experience",
  },
  {
    icon: ShieldCheck,
    title: "DBS Checked",
    description: "Full disclosure & barring check in place",
  },
  {
    icon: Heart,
    title: "Friendly Approach",
    description: "Encouraging, patient and supportive sessions",
  },
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description: "Clear progression tailored to each student",
  },
];

export function TrustStrip() {
  return (
    <section
      className="border-y border-[var(--border)] bg-[var(--surface)] py-10"
      aria-label="Trust indicators"
    >
      <div className="container-wide mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--muted)]">
                <item.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
