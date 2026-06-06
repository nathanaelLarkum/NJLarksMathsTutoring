import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NJLarks Maths Tutoring | 1-to-1 Maths Tuition for Year 7–11",
    template: "%s | NJLarks Maths Tutoring",
  },
  description:
    "Friendly, structured 1-to-1 maths tutoring for Year 7–11 students. Build confidence and achieve results with NJLarks Maths Tutoring. Online sessions taking place over the phone (Googl meets).",
  keywords: [
    "maths tutor",
    "maths tutoring",
    "year 7",
    "year 8",
    "year 9",
    "year 10",
    "year 11",
    "GCSE maths",
    "1-to-1 tuition",
    "online maths tutor",
    "private tutor",
  ],
  authors: [{ name: "NJLarks Maths Tutoring" }],
  creator: "NJLarks Maths Tutoring",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njlarksmathstutoring.com",
    siteName: "NJLarks Maths Tutoring",
    title: "NJLarks Maths Tutoring | 1-to-1 Maths Tuition for Year 7–11",
    description:
      "Friendly, structured 1-to-1 maths tutoring for Year 7–11 students. Build confidence and achieve results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NJLarks Maths Tutoring | 1-to-1 Maths Tuition for Year 7–11",
    description:
      "Friendly, structured 1-to-1 maths tutoring for Year 7–11 students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
