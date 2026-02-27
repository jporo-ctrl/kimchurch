"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, User, Phone, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const volunteerPositions: string[] = [
  "Worship Team",
  "Media & Production",
  "Children's Ministry",
  "Hospitality & Greeting",
  "Safety & Security",
  "Outreach & Missions",
  "Café & Fellowship",
  "Small Groups",
  "Other",
];

export default function VolunteerForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="form"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary-800/3 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold-400/3 rounded-full blur-3xl translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Copy */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-primary-800 mb-6"
            >
              Get Involved
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-divider mb-8"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-display-sm md:text-display-md text-neutral-900 mb-8"
            >
              Ready to{" "}
              <span className="text-gradient-primary">Serve?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-lg text-neutral-600 leading-relaxed mb-8"
            >
              We&apos;d love to connect with you. Fill out the form to let us know where
              you&apos;d like to serve, and someone from our team will reach out to help
              you find your perfect fit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=700&h=500&fit=crop&q=80"
                alt="Community serving together"
                className="w-full h-64 lg:h-80 object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-heading-md">
                  &ldquo;There is room for you.&rdquo;
                </p>
                <p className="text-white/70 text-body-sm mt-1">
                  Kingdom Insights Ministries
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-12 rounded-3xl bg-white border border-neutral-100 shadow-elevated text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-display text-heading-lg text-neutral-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-body-lg text-neutral-600 max-w-md mx-auto">
                  We&apos;ve received your information and someone from our team will
                  be in touch soon. We&apos;re excited to serve alongside you!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 lg:p-12 rounded-3xl bg-white border border-neutral-100 shadow-elevated"
              >
                <h3 className="font-display text-heading-lg text-neutral-900 mb-2">
                  Become a New Member
                </h3>
                <p className="text-body-md text-neutral-500 mb-10">
                  All fields marked with * are required
                </p>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                    >
                      <User className="w-4 h-4 text-neutral-400" />
                      First Name <span className="text-primary-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="input-premium"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                    >
                      Last Name <span className="text-primary-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="input-premium"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                  >
                    <Phone className="w-4 h-4 text-neutral-400" />
                    Phone <span className="text-primary-800">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="input-premium"
                    placeholder="(469) 555-0123"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                  >
                    <Mail className="w-4 h-4 text-neutral-400" />
                    Email <span className="text-primary-800">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-premium"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={newsletterChecked}
                        onChange={(e) => setNewsletterChecked(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div
                        className={cn(
                          "w-5 h-5 rounded-md border-2 transition-all duration-200",
                          newsletterChecked
                            ? "bg-primary-800 border-primary-800"
                            : "border-neutral-300 group-hover:border-primary-800/50"
                        )}
                      >
                        {newsletterChecked && (
                          <svg
                            className="w-full h-full text-white p-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-body-sm text-neutral-600">
                      Sign up for news and updates
                    </span>
                  </label>
                </div>

                {/* Serve Position */}
                <div className="mb-6">
                  <label
                    htmlFor="position"
                    className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                  >
                    Serve or Volunteer Position{" "}
                    <span className="text-primary-800">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="position"
                      name="position"
                      required
                      defaultValue=""
                      className="input-premium appearance-none pr-12 cursor-pointer"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {volunteerPositions.map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-neutral-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-body-sm font-medium text-neutral-700 mb-2"
                  >
                    <MessageSquare className="w-4 h-4 text-neutral-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-premium resize-none"
                    placeholder="Tell us a little about yourself or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full relative px-8 py-4 bg-primary-800 text-white font-semibold text-body-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Application
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}