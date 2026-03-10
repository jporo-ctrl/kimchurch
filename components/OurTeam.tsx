"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    platform: "YouTube",
    followers: "22,000+",
    desc: "Subscribers",
    href: "https://www.youtube.com/@joshuaporo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF0000]">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    platform: "Facebook",
    followers: "23,000+",
    desc: "Followers",
    href: "https://www.facebook.com/people/Kingdom-Insights-Ministries/61550597185416/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#1877F2]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    platform: "TikTok",
    followers: "28,000+",
    desc: "Likes",
    href: "https://www.tiktok.com/@apostlejoshuaporo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
];

export default function OurTeam() {
  return (
    <section id="our-team" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/30 to-transparent" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-6"
          >
            The People Behind the Vision
          </motion.span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-primary-800 mx-auto mb-8" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-display-sm md:text-display-md text-white mb-6"
          >
            Our <span className="text-gradient-gold">Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-white/60 leading-relaxed"
          >
            Servant-hearted leaders committed to raising disciples, transforming lives, and advancing God's Kingdom on earth.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto min-h-[400px] bg-gradient-to-br from-primary-900 to-neutral-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-gold-400/10" />
              <div className="absolute inset-0">
                <img
                  src="/apostle-joshua-poro.png"
                  alt="Apostle Joshua Poro"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600" />
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-4">
                Vision Bearer & Lead Apostle
              </span>
              <h3 className="font-display text-display-xs md:text-display-sm text-white mb-2">
                Apostle Joshua Poro
              </h3>
              <p className="text-body-sm text-gold-400/70 uppercase tracking-widest mb-6">
                Apostle of Revelation, Awakening & Kingdom Manifestation
              </p>
              <div className="w-12 h-0.5 bg-gold-400 mb-6" />
              <p className="text-body-md text-white/70 leading-relaxed mb-6">
                Apostle Joshua Poro is a voice for this generation — called, anointed, and appointed to reveal Christ with depth, clarity, and power. As the Vision Bearer of Kingdom Insights Ministries, he carries a mandate to unlock purpose and restore identity in Christ.
              </p>
              <p className="text-body-md text-white/70 leading-relaxed mb-8">
                With over 10 years of impactful online ministry and a global footprint of more than <strong className="text-white">48,000 digital followers</strong>, his messages are marked by revelation knowledge, apostolic fire, and prophetic accuracy — convicting the heart, renewing the mind, and awakening dormant callings.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "10+", label: "Years of Ministry" },
                  { number: "48K+", label: "Global Followers" },
                  { number: "22K+", label: "YouTube Subscribers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="font-display text-heading-lg text-gold-400">{stat.number}</div>
                    <div className="text-caption text-white/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 lg:p-14 rounded-3xl bg-white/5 border border-white/10 text-center"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          <span className="text-4xl mb-6 block">🙏</span>
          <blockquote className="font-display text-heading-lg md:text-display-xs text-white/90 italic leading-relaxed max-w-3xl mx-auto mb-6">
            "At Kingdom Insights, we are more than a ministry — we are a movement of purpose-driven believers who are passionate about knowing Christ and making Him known."
          </blockquote>
          <p className="text-body-md text-white/50">— Apostle Joshua Poro, Vision Bearer</p>
        </motion.div>

        {/* Social Reach with official logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/8 hover:border-gold-400/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {social.icon}
              </div>
              <div className="font-display text-display-xs text-gold-400">{social.followers}</div>
              <div className="text-body-sm text-white font-medium mt-1">{social.platform}</div>
              <div className="text-caption text-white/40 mt-1">{social.desc}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
