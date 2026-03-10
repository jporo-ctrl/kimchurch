"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Music,
  Camera,
  Baby,
  HeartHandshake,
  Shield,
  Megaphone,
  Coffee,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServeArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  value: string;
}

const serveAreas: ServeArea[] = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Worship Team",
    description: "Use your musical gifts to lead the congregation into the presence of God through praise and worship.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&q=80",
    value: "Worship Team",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Media & Production",
    description: "Help bring the Sunday experience to life through audio, video, lighting, and digital content.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop&q=80",
    value: "Media & Production",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Children's Ministry",
    description: "Create a fun, safe, and transformative experience for the next generation of believers.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&q=80",
    value: "Children's Ministry",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Hospitality & Greeting",
    description: "Be the first smile and warm welcome for every guest who walks through our doors.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80",
    value: "Hospitality & Greeting",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safety & Security",
    description: "Help maintain a safe and secure environment so everyone can worship freely.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80",
    value: "Safety & Security",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Outreach & Missions",
    description: "Take the love of Christ beyond our walls through community service and outreach events.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&q=80",
    value: "Outreach & Missions",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Café & Fellowship",
    description: "Serve behind the scenes to create a warm, inviting atmosphere where connections are made.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop&q=80",
    value: "Café & Fellowship",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Small Groups",
    description: "Lead or co-lead a small group to nurture spiritual growth in an intimate setting.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop&q=80",
    value: "Small Groups",
  },
];

export default function ServeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Auto-select position in form based on URL hash param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const position = params.get("position");
    if (position) {
      const select = document.getElementById("position") as HTMLSelectElement;
      if (select) {
        select.value = position;
      }
      // Scroll to form
      const form = document.getElementById("form");
      if (form) {
        setTimeout(() => form.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  }, []);

  const handleCardClick = (value: string) => {
    // Set the select value directly
    const select = document.getElementById("position") as HTMLSelectElement;
    if (select) {
      select.value = value;
    }
    // Scroll to form
    const form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="serve"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-600 mb-6"
          >
            Where You Can Serve
          </motion.span>
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
            className="font-display text-display-sm md:text-display-md text-neutral-900 mb-6"
          >
            Find Your <span className="text-gradient-primary">Place</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body-lg text-neutral-600"
          >
            Whether you&apos;re outgoing or behind-the-scenes, experienced or just
            getting started—<strong className="text-neutral-800">there is room for you</strong> in this house.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serveAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group cursor-pointer"
              onClick={() => handleCardClick(area.value)}
            >
              <div
                className={cn(
                  "relative h-full rounded-3xl overflow-hidden",
                  "bg-white border border-neutral-100",
                  "transition-all duration-500 hover:shadow-elevated hover:border-primary-800/30",
                  "hover:-translate-y-2"
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-800 shadow-soft">
                      {area.icon}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-primary-800 text-body-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                      Join This Team →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
