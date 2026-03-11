"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Wifi, Calendar, Star, Heart } from "lucide-react";

const weeklySchedule = [
  {
    time: "5:00 PM – 6:00 PM",
    name: "Intercession & Personal Prayer",
    description:
      "Come early and seek the face of God. This dedicated prayer hour is open to all who desire a deeper encounter before the service begins. Intercessors, prayer warriors, and newcomers are all welcome.",
    icon: <Heart className="w-5 h-5" />,
    type: "prayer",
    tag: "Optional — Open to All",
  },
  {
    time: "6:00 PM – 8:00 PM",
    name: "Saturday Service",
    description:
      "Experience powerful corporate worship, prophetic ministry, and the transformative teaching of Apostle Joshua Poro. Every Saturday is an encounter with the living God.",
    icon: <Star className="w-5 h-5" />,
    type: "main",
    tag: "Main Service",
  },
];

const specialServices = [
  {
    date: "April 5, 2026",
    day: "Sunday",
    name: "Easter Sunday Service",
    description:
      "Celebrate the resurrection of Jesus Christ with a special Easter service filled with worship, Word, and the joy of the risen King.",
    icon: "✝️",
    color: "from-primary-800/20 to-primary-900/20",
    border: "border-primary-700/30",
    accent: "text-primary-400",
  },
  {
    date: "December 25, 2026",
    day: "Thursday",
    name: "Christmas Service",
    description:
      "Honor the birth of our Savior with a Christmas celebration service. Come and worship Emmanuel — God with us.",
    icon: "⭐",
    color: "from-gold-400/10 to-gold-600/10",
    border: "border-gold-400/30",
    accent: "text-gold-400",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/30 to-transparent" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-6"
          >
            Gather With Us
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
            className="font-display text-display-sm md:text-display-md text-white mb-6"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body-lg text-white/60 leading-relaxed"
          >
            Every gathering is a divine appointment. Come expecting a word, an encounter, and a community that will walk alongside you.
          </motion.p>
        </div>

        {/* Location & Attendance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-body-sm text-white/70">4201 Pool Rd, Grapevine, TX 76051</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
            <Wifi className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-body-sm text-white/70">Available In Person & Online</span>
          </div>
        </motion.div>

        {/* Weekly Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-gold-400" />
            <h3 className="font-display text-heading-lg text-white uppercase tracking-widest text-sm">
              Every Saturday
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {weeklySchedule.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden border p-8 lg:p-10 ${
                  item.type === "main"
                    ? "bg-gradient-to-br from-primary-900/40 to-neutral-900 border-primary-700/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {item.type === "main" && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                )}

                {/* Tag */}
                <span className={`inline-block text-caption uppercase font-semibold tracking-[0.15em] mb-4 px-3 py-1 rounded-full text-xs ${
                  item.type === "main"
                    ? "bg-gold-400/10 text-gold-400 border border-gold-400/20"
                    : "bg-white/5 text-white/50 border border-white/10"
                }`}>
                  {item.tag}
                </span>

                {/* Time */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className={`w-4 h-4 ${item.type === "main" ? "text-gold-400" : "text-white/40"}`} />
                  <span className={`font-display text-heading-md font-semibold ${
                    item.type === "main" ? "text-gold-400" : "text-white/60"
                  }`}>
                    {item.time}
                  </span>
                </div>

                <h4 className="font-display text-heading-lg text-white mb-3">
                  {item.name}
                </h4>
                <p className="text-body-md text-white/60 leading-relaxed">
                  {item.description}
                </p>

                {item.type === "main" && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href="#form"
                      className="inline-flex items-center gap-2 text-body-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Plan Your Visit →
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-gold-400" />
            <h3 className="font-display text-white uppercase tracking-widest text-sm font-semibold">
              Special Services — 2026
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden border ${service.border} bg-gradient-to-br ${service.color} p-8 lg:p-10`}
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl shrink-0 mt-1">{service.icon}</div>
                  <div>
                    <div className={`text-caption uppercase font-semibold tracking-[0.15em] mb-2 ${service.accent}`}>
                      {service.day} · {service.date}
                    </div>
                    <h4 className="font-display text-heading-lg text-white mb-3">
                      {service.name}
                    </h4>
                    <p className="text-body-md text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block text-caption text-white/40 uppercase tracking-widest text-xs border border-white/10 px-3 py-1 rounded-full">
                        Time TBD — Check Back Soon
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gold-400 text-neutral-950 font-semibold text-body-md hover:bg-gold-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Plan Your First Visit
            </a>
            <a
              href="https://give.tithe.ly/?formId=4a3a9c26-b54a-4b76-bc6d-f187ac5e25af"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-body-md hover:bg-white/10 transition-all duration-300"
            >
              Give Online
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
