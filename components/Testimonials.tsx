"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Joining the volunteer team at KIM was the best decision I've made. I found my purpose and a family that loves deeply.",
    name: "Sarah M.",
    role: "Worship Team Volunteer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
  },
  {
    quote:
      "I came in shy and unsure, but the people here embraced me. Serving in children's ministry changed my life and theirs.",
    name: "David K.",
    role: "Children's Ministry Leader",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
  },
  {
    quote:
      "Being part of this house has shown me what it truly means to be a servant-hearted person. God is moving here.",
    name: "Maria G.",
    role: "Hospitality Team",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950 noise-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/30 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-6"
          >
            Voices of Our Community
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-primary-800 mx-auto mb-8"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-display-sm md:text-display-md text-white"
          >
            Lives{" "}
            <span className="text-gradient-gold">Transformed</span>
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group"
            >
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-gold-400/40 mb-6" />

                {/* Quote */}
                <p className="text-body-lg text-white/80 leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white text-body-md">
                      {testimonial.name}
                    </p>
                    <p className="text-body-sm text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}