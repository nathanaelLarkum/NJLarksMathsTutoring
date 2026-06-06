export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  priceNote: string;
  hours?: number;
  saving?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "payg",
    name: "Pay As You Go",
    description: "Flexible sessions with no commitment. Perfect for trying things out or occasional top-ups.",
    priceLabel: "£30",
    priceNote: "per hour",
    features: [
      "Book sessions as you need them",
      "30 min, 60 min, 90 min or 2 hr sessions",
      "Online or local in-person",
      "Tailored to your child's needs",
      "Flexible scheduling",
    ],
    cta: "Book a Session",
  },
  {
    id: "bundle-8",
    name: "8-Hour Bundle",
    description: "Consistent, structured support across a block of sessions — ideal for steady progress.",
    priceLabel: "£220",
    priceNote: "for 8 hours",
    hours: 8,
    saving: "Save £20",
    features: [
      "8 hours of tutoring",
      "Flexible session lengths",
      "Online or local in-person",
      "Progress tracking across sessions",
      "Priority booking",
      "Structured learning plan",
    ],
    cta: "Get the Bundle",
    highlighted: true,
  },
  {
    id: "bundle-16",
    name: "16-Hour Bundle",
    description: "Maximum value for sustained improvement — ideal for GCSE preparation or big catch-up.",
    priceLabel: "£420",
    priceNote: "for 16 hours",
    hours: 16,
    saving: "Save £60",
    features: [
      "16 hours of tutoring",
      "Flexible session lengths",
      "Online or local in-person",
      "Detailed progress tracking",
      "Priority booking",
      "Comprehensive learning plan",
      "Regular parent/student updates",
    ],
    cta: "Get the Bundle",
  },
];

export const sessionLengths = [
  { duration: "30 min", price: "£15", ideal: "Quick focused practice or a specific topic" },
  { duration: "60 min", price: "£30", ideal: "The most popular session length — thorough coverage" },
  { duration: "90 min", price: "£45", ideal: "Deep dives or exam technique practice" },
  { duration: "2 hours", price: "£60", ideal: "Intensive revision or catching up on larger topics" },
];
