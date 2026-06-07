"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  studentName: z.string().min(2, "Please enter the student's name"),
  yearGroup: z.string().min(1, "Please select a year group"),
  email: z.string().email("Please enter a valid email address"),
  sessionType: z.string().min(1, "Please select a session type"),
  sessionFormat: z.string().min(1, "Please select a session format"),
  goals: z.string().min(10, "Please describe what you'd like to focus on"),
  availability: z.string().min(5, "Please share some availability"),
  hearAboutUs: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitting(true);
    setError(null);

    try {
      // Netlify form submission
      const form = document.querySelector(
        'form[name="booking"]'
      ) as HTMLFormElement;

      if (form) {
        const formData = new FormData(form);
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        });

        if (res.ok || res.status === 301) {
          setSubmitted(true);
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch (err) {
      setError(
        "Something went wrong. Please try again or use the contact form."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--success)]" />
        <h3 className="heading-sm text-[var(--text-primary)]">
          Booking request sent!
        </h3>
        <p className="body-md text-[var(--text-secondary)]">
          Thank you for booking a consultation. I&apos;ll review your details
          and be in touch within 24 hours to confirm a time that works for
          everyone.
        </p>
      </div>
    );
  }

  return (
    <form
      name="booking"
      method="POST"
      netlify
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="b-parentName">
            Your name (parent / guardian) *
          </Label>
          <Input
            id="b-parentName"
            placeholder="e.g. Jane Smith"
            aria-invalid={!!errors.parentName}
            {...register("parentName")}
          />
          {errors.parentName && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.parentName.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="b-studentName">Student&apos;s name *</Label>
          <Input
            id="b-studentName"
            placeholder="e.g. Alex Smith"
            aria-invalid={!!errors.studentName}
            {...register("studentName")}
          />
          {errors.studentName && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.studentName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="b-yearGroup">Year group *</Label>
          <Select onValueChange={(val) => setValue("yearGroup", val)}>
            <SelectTrigger
              id="b-yearGroup"
              aria-invalid={!!errors.yearGroup}
            >
              <SelectValue placeholder="Select year group" />
            </SelectTrigger>
            <SelectContent>
              {["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"].map(
                (y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          {errors.yearGroup && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.yearGroup.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="b-email">Email address *</Label>
          <Input
            id="b-email"
            type="email"
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="b-sessionType">Preferred session length *</Label>
          <Select onValueChange={(val) => setValue("sessionType", val)}>
            <SelectTrigger
              id="b-sessionType"
              aria-invalid={!!errors.sessionType}
            >
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30min">30 minutes (£15)</SelectItem>
              <SelectItem value="60min">60 minutes (£30)</SelectItem>
              <SelectItem value="90min">90 minutes (£45)</SelectItem>
              <SelectItem value="2hr">2 hours (£60)</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
          {errors.sessionType && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.sessionType.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="b-sessionFormat">Session format *</Label>
          <Select onValueChange={(val) => setValue("sessionFormat", val)}>
            <SelectTrigger
              id="b-sessionFormat"
              aria-invalid={!!errors.sessionFormat}
            >
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">Online</SelectItem>
            </SelectContent>
          </Select>
          {errors.sessionFormat && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.sessionFormat.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="b-goals">What would you like to focus on? *</Label>
        <Textarea
          id="b-goals"
          placeholder="e.g. GCSE revision, building confidence in algebra, preparing for mock exams..."
          className="min-h-[100px]"
          aria-invalid={!!errors.goals}
          {...register("goals")}
        />
        {errors.goals && (
          <p className="text-xs text-[var(--destructive)]" role="alert">
            {errors.goals.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="b-availability">
          When are you generally available? *
        </Label>
        <Textarea
          id="b-availability"
          placeholder="e.g. Weekday evenings after 5pm, Saturday mornings, anytime on Sundays..."
          className="min-h-[80px]"
          aria-invalid={!!errors.availability}
          {...register("availability")}
        />
        {errors.availability && (
          <p className="text-xs text-[var(--destructive)]" role="alert">
            {errors.availability.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="b-hearAboutUs">
          How did you hear about us? (optional)
        </Label>
        <Input
          id="b-hearAboutUs"
          placeholder="e.g. Google, word of mouth, school recommendation..."
          {...register("hearAboutUs")}
        />
      </div>

      {error && (
        <p
          className="rounded-md bg-[var(--destructive)]/10 p-3 text-sm text-[var(--destructive)]"
          role="alert"
        >
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending request...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </Button>

      <p className="text-center text-xs text-[var(--text-secondary)]">
        This is a booking request, not a confirmed session. I&apos;ll confirm
        availability and details within 24 hours.
      </p>
    </form>
  );
}