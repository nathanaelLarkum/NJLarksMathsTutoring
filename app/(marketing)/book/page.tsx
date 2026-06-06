import type { Metadata } from "next";
import { CalendarCheck, Clock, Banknote } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a maths tutoring session with NJLarks. Free initial consultation — online for Year 7–11 students.",
};

const steps = [
  {
    icon: CalendarCheck,
    step: "1",
    title: "Submit a request",
    description: "Fill in the form below with your child's details and availability.",
  },
  {
    icon: Clock,
    step: "2",
    title: "I'll be in touch",
    description: "I'll review your request and reply within 24 hours to confirm a time.",
  },
  {
    icon: Banknote,
    step: "3",
    title: "First session",
    description: "We'll have an initial consultation to discuss goals and get started.",
  },
];

export default function BookPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
              Book a Session
            </div>
            <h1 className="heading-xl mb-4 text-[var(--text-primary)]">
              Book your{" "}
              <span className="text-[var(--primary)]">first session.</span>
            </h1>
            <p className="body-lg mb-8 text-[var(--text-secondary)]">
              The first consultation is free. Let&apos;s find out what your child needs and build a plan
              from there — no commitment required.
            </p>

            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-heading text-sm font-bold text-[var(--primary-foreground)]">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{step.title}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="mb-1 text-sm font-semibold text-[var(--text-primary)]">
                📦 Bundle pricing available
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                8 hours for <strong className="text-[var(--primary)]">£220</strong> or 16 hours
                for <strong className="text-[var(--primary)]">£420</strong>. Save when you commit
                to a block.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:col-span-3 lg:p-8">
            <h2 className="heading-sm mb-6 text-[var(--text-primary)]">Booking request</h2>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
