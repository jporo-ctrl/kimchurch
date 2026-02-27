"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, HandHeart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

const values: ValueCard[] = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Love in Action",
    description:
      "Serving is one of the highest expressions of love and the purest evidence of a life transformed by Christ.",
    accent: "from-primary-800 to-primary-600",
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Servant-Hearted",
    description:
      "We're building a ministry fueled by servant-hearted people who give their time, gifts, and hands for His glory.",
    accent: "from-gold-500 to-gold-400",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Room for Everyone",
    description:
      "Whether you're outgoing or behind-the-scenes, experienced or just getting started—there is room for you in this house.",
    accent: "from-primary-600 to-primary-400",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Part of Something Greater",
    description:
      "If God has placed a desire in your heart to serve, we invite you to step in and step up. Be part of what God is doing.",
    accent: "from-gold-600 to-gold-400",
  },
];

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-primary-800">
              Our Heart
            </span>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-divider mx-auto mb-8"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-display-sm md:text-display-md text-neutral-900 mb-8"
          >
            A Ministry Built on{" "}
            <span className="text-gradient-primary">Purpose</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body-lg text-neutral-600 leading-relaxed"
          >
            At <strong className="text-neutral-900">Kingdom Insights Ministries</strong>, 
            we believe that serving is one of the highest expressions of love and the purest
            evidence of a life transformed by Christ. If God has placed a desire in
            your heart to serve—to give your time, your gifts, and your hands for
            His glory—<strong className="text-neutral-900">we invite you to step in and step up.</strong>
          </motion.p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group"
            >
              <div
                className={cn(
                  "relative p-8 lg:p-10 rounded-3xl bg-white border border-neutral-100",
                  "transition-all duration-500 hover:shadow-elevated hover:border-neutral-200",
                  "hover:-translate-y-1"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6",
                    "bg-gradient-to-br",
                    value.accent,
                    "text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  )}
                >
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-heading-md text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-body-md text-neutral-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={cn(
                      "absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br opacity-5",
                      value.accent
                    )}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}