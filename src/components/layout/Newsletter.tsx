"use client";

import React, { useState } from "react";
import { validateNewsletterEmail } from "../../hooks/catalogUtils";
import { Input } from "../ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateNewsletterEmail(email);
    if (!validation.valid) {
      setFeedback({ type: "error", message: validation.message });
      return;
    }
    setFeedback({ type: "success", message: validation.message });
    setEmail("");
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-charcoal-dark text-white py-12 md:py-20 px-5 md:px-6"
      data-purpose="newsletter-signup"
    >
      <div className="max-w-[560px] mx-auto text-center space-y-3 md:space-y-4">
        <h2
          id="newsletter-heading"
          className="font-serif-display text-[28px] md:text-[38px] font-normal tracking-tight md:tracking-wide text-[#FDFCFB]"
        >
          Stay in the loop
        </h2>
        <p className="text-text-on-dark-muted text-[12px] md:text-[13px] tracking-normal max-w-[320px] md:max-w-[420px] mx-auto leading-relaxed">
          New arrivals, restocks, and stories from the workshop, once a month, never more.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="pt-3 md:pt-4 flex flex-col items-center justify-center"
        >
          <label
            htmlFor="newsletter-email"
            className="text-[11px] text-text-on-dark-muted mb-2 block"
          >
            Email address
          </label>

          {/* Desktop inline pill layout + Mobile stacked pill layout */}
          <div className="w-full max-w-md flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-0 sm:bg-[#24201C] sm:rounded-full sm:border sm:border-stone-700 sm:p-1 sm:pl-5 focus-within:border-stone-400 transition-colors">
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (feedback) setFeedback(null);
              }}
              placeholder="Enter your email"
              aria-invalid={feedback?.type === "error"}
              aria-describedby={
                feedback ? "newsletter-feedback-message" : undefined
              }
              className="w-full h-auto bg-[#231F1B] sm:bg-transparent border border-stone-700 sm:border-none rounded-full sm:rounded-none px-4 sm:px-0 py-3 sm:py-1.5 text-[12px] md:text-[13px] text-white placeholder:text-text-on-dark-muted focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-center sm:text-left"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FAF7F2] sm:bg-white text-charcoal-dark font-medium text-[12px] px-5 py-3 sm:py-2 rounded-full hover:bg-stone-200 active:scale-[0.99] transition-all shrink-0 min-h-[44px] sm:min-h-[36px]"
            >
              Subscribe
            </button>
          </div>

          {feedback && (
            <div
              id="newsletter-feedback-message"
              role={feedback.type === "error" ? "alert" : "status"}
              className={`mt-3 text-[12px] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 ${
                feedback.type === "error"
                  ? "bg-[#3A1D1B] text-[#F9D2CF] border border-[#8E3B35]"
                  : "bg-[#1F2D24] text-[#D7F0DF] border border-[#3B6E4C]"
              }`}
            >
              <span aria-hidden="true">
                {feedback.type === "error" ? "!" : "✓"}
              </span>
              <span>{feedback.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
