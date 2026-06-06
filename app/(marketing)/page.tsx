import type { Metadata } from "next";
import { HeroSection } from "@/components/marketing/HeroSection";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { TeachingApproach } from "@/components/marketing/TeachingApproach";
import { PricingSection } from "@/components/marketing/PricingSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "NJLarks Maths Tutoring | Friendly 1-to-1 Maths Tuition for Year 7–11",
  description:
    "Structured, encouraging 1-to-1 maths tutoring for Year 7–11 students. Build confidence and achieve results with NJLarks Maths Tutoring.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TeachingApproach />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection limit={6} showViewAll />
      <CTASection />
    </>
  );
}
