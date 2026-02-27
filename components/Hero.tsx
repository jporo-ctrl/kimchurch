"use client";

import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop&q=80"
          alt="Community worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/30 via-transparent to-primary-950/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-800/10 rounded-full blur-3xl animate-pulse-slow animate-delay-200" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <Heart className="w-4 h-4 text-gold-400" />
          <span className="text-caption uppercase font-semibold tracking-wider text-white/90">
            Kingdom Insights Ministries
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-display-md md:text-display-lg lg:text-display-xl text-white mb-8"
        >
          Become a{" "}
          <span className="relative inline-block">
            <span className="text-gradient-gold">New Member</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-body-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed"
        >
          Serving is one of the highest expressions of love and the purest
          evidence of a life transformed by Christ.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#form"
            className="group relative px-10 py-4 bg-gold-400 text-neutral-950 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow-gold hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Step In & Step Up
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#serve"
            className="px-10 py-4 text-white font-medium rounded-2xl border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Explore Ministries
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-caption text-white/50 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gold-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}