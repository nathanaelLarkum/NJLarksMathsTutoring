"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href="/" className={className} aria-label="NJLarks Maths Tutoring home">
        <span className="font-heading text-xl font-bold text-[var(--primary)]">
          NJLarks
        </span>
      </Link>
    );
  }

  const isDark = theme === "dark";

  return (
    <Link href="/" className={className} aria-label="NJLarks Maths Tutoring home">
      {/* Desktop: full logo */}
      <span className="hidden md:block">
        <Image
          src={isDark ? "/logo/njlmtfull_light.png" : "/logo/njlmtfull_dark.png"}
          alt="NJLarks Maths Tutoring"
          width={180}
          height={48}
          className="h-10 w-auto object-contain"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="hidden font-heading text-xl font-bold text-[var(--primary)] [img+&]:hidden">
          NJLarks Maths Tutoring
        </span>
      </span>
      {/* Mobile: icon logo */}
      <span className="block md:hidden">
        <Image
          src="/logo/njlmtfi.png"
          alt="NJLarks Maths Tutoring"
          width={40}
          height={40}
          className="h-9 w-auto object-contain"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="hidden font-heading text-lg font-bold text-[var(--primary)] [img+&]:hidden">
          NJLarks
        </span>
      </span>
    </Link>
  );
}

export function FallbackLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="NJLarks Maths Tutoring home">
      <span className="font-heading text-xl font-bold text-[var(--primary)]">
        NJLarks <span className="text-[var(--secondary)]">Maths</span>
      </span>
    </Link>
  );
}
