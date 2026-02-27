"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Church } from "lucide-react";

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=800&fit=crop&q=80"
          alt="Hands raised in worship"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/85 to-primary-900/80" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <Church className="w-4 h-4 text-gold-400" />
          <span className="text-caption uppercase font-semibold tracking-wider text-white/90">
            Kingdom Insights Ministries
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-display-sm md:text-display-lg text-white mb-8"
        >
          Your Next Step Starts{" "}
          <span className="text-gradient-gold">Today</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-white/75 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Don&apos;t wait to make a difference. Whether through serving, giving, or
          connecting—God is calling you to be part of something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#form"
            className="group px-10 py-4 bg-gold-400 text-neutral-950 font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow-gold hover:scale-[1.03] flex items-center gap-2"
          >
            Join Our Team
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="px-10 py-4 text-white font-medium rounded-2xl border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Give Online
          </a>
        </motion.div>
      </div>
    </section>
  );
}