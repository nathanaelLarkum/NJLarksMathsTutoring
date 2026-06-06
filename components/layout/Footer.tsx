import Link from "next/link";
import { Mail, Clock } from "lucide-react";
import { FallbackLogo } from "./BrandLogo";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
];

const policyLinks = [
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/safeguarding", label: "Safeguarding Policy" },
  { href: "/policies/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-wide mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <FallbackLogo className="mb-4 inline-block" />
            <p className="body-md text-[var(--text-secondary)]">
              Friendly, structured 1-to-1 maths tutoring for Year 7–11 students. Building confidence
              and achieving results.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="heading-sm mb-4 text-base text-[var(--text-primary)]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-md text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="heading-sm mb-4 text-base text-[var(--text-primary)]">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-md text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-sm mb-4 text-base text-[var(--text-primary)]">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <Link
                  href="/contact"
                  className="body-md transition-colors hover:text-[var(--primary)]"
                >
                  Send a message
                </Link>
              </li>
              <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                <span className="body-md">Flexible scheduling</span>
              </li>
            </ul>

            <Link
              href="/book"
              className="mt-5 inline-flex items-center rounded-md bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] transition-opacity hover:opacity-90"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} NJLarks Maths Tutoring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}