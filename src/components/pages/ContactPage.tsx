"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Newsletter } from "../layout/Newsletter";
import { Footer } from "../layout/Footer";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SHOWROOMS = [
  {
    city: "Copenhagen Studio",
    address: "Bredgade 42, 1260 København K, Denmark",
    hours: "Monday to Saturday, 10:00 to 18:00",
    phone: "+45 33 14 28 90",
    note: "Full timber & upholstery library, private architectural consultations.",
  },
  {
    city: "Portland Showroom",
    address: "1120 NW Couch St, Portland, OR 97209",
    hours: "Monday to Saturday, 10:00 to 18:00",
    phone: "+1 (503) 555-0148",
    note: "North American flagship gallery, swatch pick-up, and white-glove scheduling.",
  },
];

export function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Swatch Request");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please share a brief note about your space or inquiry.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="flex-grow">
        {/* Header */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-12 border-b border-[#ECE7DE]">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
            SHOWROOMS &amp; INQUIRIES
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tight text-[#161412] leading-tight">
            Get in{" "}
            <span className="italic text-[#8F6232] font-normal">touch</span>
          </h1>
          <p className="text-[#6B655D] text-sm sm:text-base max-w-xl leading-relaxed mt-3">
            Speak with a furniture specialist, request complimentary fabric and oak finish swatches, or schedule a private showroom appointment.
          </p>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Showrooms & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {SHOWROOMS.map((room) => (
              <div
                key={room.city}
                className="p-6 rounded-2xl bg-[#F3EFE8] border border-[#E8E4DC] space-y-2.5"
              >
                <h2 className="font-serif-display text-2xl text-[#161412]">
                  {room.city}
                </h2>
                <p className="text-xs sm:text-[13px] text-[#161412] font-medium">
                  {room.address}
                </p>
                <p className="text-xs text-[#6B655D]">{room.hours}</p>
                <p className="text-xs text-[#6B655D]">{room.phone}</p>
                <p className="text-xs text-[#6B655D] pt-1 border-t border-[#E4DEC3]">
                  {room.note}
                </p>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-white border border-[#ECE7DE] space-y-2 text-xs text-[#6B655D]">
              <h3 className="text-sm font-semibold text-[#161412]">
                Direct Studio Desk
              </h3>
              <p>
                Client Care &amp; Swatches:{" "}
                <span className="text-[#161412] font-medium">
                  atelier@lumaliving.com
                </span>
              </p>
              <p>
                Trade &amp; Architects:{" "}
                <span className="text-[#161412] font-medium">
                  trade@lumaliving.com
                </span>
              </p>
              <p>
                Press &amp; Loans:{" "}
                <span className="text-[#161412] font-medium">
                  press@lumaliving.com
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ECE7DE] shadow-2xs">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-[#161412] text-white inline-flex items-center justify-center text-lg">
                    ✓
                  </div>
                  <h2 className="font-serif-display text-3xl text-[#161412]">
                    Thank you, {name.trim()}
                  </h2>
                  <p className="text-sm text-[#6B655D] max-w-md mx-auto leading-relaxed">
                    Your {topic.toLowerCase()} note has been received by our studio team. We will respond to{" "}
                    <span className="text-[#161412] font-medium">{email}</span>{" "}
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-2 px-6 py-2.5 rounded-full border border-[#D5CFC5] text-xs font-medium text-[#161412] hover:bg-[#EFEAE1] transition min-h-11"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-serif-display text-2xl sm:text-3xl text-[#161412]">
                      Send a Studio Note
                    </h2>
                    <p className="text-xs text-[#6B655D] mt-1">
                      Request complimentary linen and timber swatches or ask about custom lead times.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3 rounded-lg bg-[#FCEBEA] text-sale-tag text-xs font-medium"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#161412] mb-1.5"
                      >
                        Full Name
                      </label>
                      <Input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Clara Lindqvist"
                        className="w-full h-auto rounded-xl bg-[#FAF8F4] border-[#E4DEC3] px-4 py-2.5 text-sm text-[#161412] placeholder:text-[#6B655D]/70 focus-visible:border-[#161412] focus-visible:ring-1 focus-visible:ring-[#161412]/15 focus-visible:ring-offset-0 focus-visible:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#161412] mb-1.5"
                      >
                        Email Address
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="clara@example.com"
                        className="w-full h-auto rounded-xl bg-[#FAF8F4] border-[#E4DEC3] px-4 py-2.5 text-sm text-[#161412] placeholder:text-[#6B655D]/70 focus-visible:border-[#161412] focus-visible:ring-1 focus-visible:ring-[#161412]/15 focus-visible:ring-offset-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-medium text-[#161412] mb-1.5"
                    >
                      Inquiry Topic
                    </label>
                    <Select value={topic} onValueChange={setTopic}>
                      <SelectTrigger
                        id="contact-topic"
                        aria-label="Inquiry Topic"
                        className="w-full h-auto rounded-xl bg-[#FAF8F4] border-[#E4DEC3] px-4 py-2.5 text-sm text-[#161412] focus:border-[#161412] focus:ring-1 focus:ring-[#161412]/15 hover:bg-[#FAF8F4]"
                      >
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#FAF8F4] border-[#E4DEC3]">
                        <SelectItem value="Swatch Request">
                          Complimentary Fabric &amp; Oak Swatch Box
                        </SelectItem>
                        <SelectItem value="Showroom Appointment">
                          Showroom Consultation
                        </SelectItem>
                        <SelectItem value="Delivery & White-Glove">
                          White-Glove Delivery &amp; Lead Times
                        </SelectItem>
                        <SelectItem value="Trade Program">
                          Trade &amp; Interior Architecture Program
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#161412] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us which pieces you are considering, your preferred finishes, or room dimensions..."
                      className="w-full rounded-xl bg-[#FAF8F4] border border-[#E4DEC3] px-4 py-2.5 text-sm text-[#161412] placeholder:text-[#6B655D]/70 focus:outline-none focus:border-[#161412] focus:ring-1 focus:ring-[#161412]/15 transition-colors"
                    />
                  </div>

                  <div className="pt-1 flex justify-end">
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-full bg-[#161412] text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition min-h-11"
                    >
                      Send Inquiry →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer
        onSelectCategory={(cat) =>
          router.push(
            cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`
          )
        }
        onOpenInfoModal={(topicKey) => {
          if (topicKey === "About") router.push("/about");
          else if (topicKey === "Contact") router.push("/contact");
          else router.push("/shop");
        }}
      />
    </div>
  );
}
