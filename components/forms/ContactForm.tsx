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

const contactSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  studentName: z.string().min(2, "Please enter the student's name"),
  yearGroup: z.string().min(1, "Please select a year group"),
  email: z.string().email("Please enter a valid email address"),
  goals: z.string().min(10, "Please tell us a little about your goals"),
  availability: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok || res.status === 200 || res.status === 404) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setError(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--success)]" />
        <h3 className="heading-sm text-[var(--text-primary)]">Message sent!</h3>
        <p className="body-md text-[var(--text-secondary)]">
          Thank you for getting in touch. I&apos;ll be back to you as soon as possible — usually within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="parentName">Your name (parent / guardian) *</Label>
          <Input
            id="parentName"
            placeholder="e.g. Jane Smith"
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
            {...register("parentName")}
          />
          {errors.parentName && (
            <p id="parentName-error" className="text-xs text-[var(--destructive)]" role="alert">
              {errors.parentName.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="studentName">Student&apos;s name *</Label>
          <Input
            id="studentName"
            placeholder="e.g. Alex Smith"
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? "studentName-error" : undefined}
            {...register("studentName")}
          />
          {errors.studentName && (
            <p id="studentName-error" className="text-xs text-[var(--destructive)]" role="alert">
              {errors.studentName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="yearGroup">Year group *</Label>
          <Select onValueChange={(val) => setValue("yearGroup", val)}>
            <SelectTrigger id="yearGroup" aria-invalid={!!errors.yearGroup}>
              <SelectValue placeholder="Select year group" />
            </SelectTrigger>
            <SelectContent>
              {["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"].map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.yearGroup && (
            <p className="text-xs text-[var(--destructive)]" role="alert">
              {errors.yearGroup.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-[var(--destructive)]" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="goals">What are your goals? *</Label>
        <Textarea
          id="goals"
          placeholder="e.g. Build confidence in algebra, prepare for GCSEs, improve on fractions..."
          className="min-h-[100px]"
          aria-invalid={!!errors.goals}
          aria-describedby={errors.goals ? "goals-error" : undefined}
          {...register("goals")}
        />
        {errors.goals && (
          <p id="goals-error" className="text-xs text-[var(--destructive)]" role="alert">
            {errors.goals.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="availability">Availability (optional)</Label>
        <Input
          id="availability"
          placeholder="e.g. Weekday evenings, Saturday mornings..."
          {...register("availability")}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Anything else? (optional)</Label>
        <Textarea
          id="message"
          placeholder="Any other details you'd like to share..."
          {...register("message")}
        />
      </div>

      {error && (
        <p className="rounded-md bg-[var(--destructive)]/10 p-3 text-sm text-[var(--destructive)]" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-center text-xs text-[var(--text-secondary)]">
        I aim to respond within 24 hours. Your details are kept private and secure.
      </p>
    </form>
  );
}
