import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NJLarks Maths Tutoring. Ask a question or start a conversation about maths tutoring for your child.",
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
              Contact
            </div>
            <h1 className="heading-xl mb-4 text-[var(--text-primary)]">
              Let&apos;s have a{" "}
              <span className="text-[var(--primary)]">conversation.</span>
            </h1>
            <p className="body-lg mb-8 text-[var(--text-secondary)]">
              Whether you have questions, want to discuss your child&apos;s needs, or are ready to get
              started — I&apos;d love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                  <Mail className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Email</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Use the form — I&apos;ll reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                  <Clock className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Response time</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    I aim to reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Location</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Online (anywhere) and local in-person sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:col-span-3 lg:p-8">
            <h2 className="heading-sm mb-6 text-[var(--text-primary)]">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
