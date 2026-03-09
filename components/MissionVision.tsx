"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Target, BookOpen, Users, Zap, Star, Globe } from "lucide-react";

export default function MissionVision() {
  const coreValues = [
    {
      icon: BookOpen,
      title: "Faith",
      verse: "Hebrews 11:6",
      description: "Faith in Jesus Christ is the foundation of salvation and spiritual transformation.",
    },
    {
      icon: Users,
      title: "Discipleship",
      verse: "Matthew 28:19-20",
      description: "Growing in God's Word and living out our faith with authenticity and intentionality.",
    },
    {
      icon: Star,
      title: "Purpose",
      verse: "Jeremiah 29:11",
      description: "Every individual has a unique God-given calling. We help them discover and live it out.",
    },
    {
      icon: Heart,
      title: "Community",
      verse: "Acts 2:42-47",
      description: "Fellowship and unity — we are stronger together as the body of Christ.",
    },
    {
      icon: Globe,
      title: "Service",
      verse: "Matthew 20:28",
      description: "Serving others with compassion, humility, and generosity — reflecting the heart of Christ.",
    },
  ];

  const statementOfFaith = [
    {
      title: "God",
      scripture: "Genesis 1:1, John 1:1-14",
      text: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit — Creator of all things and source of all life.",
    },
    {
      title: "Jesus Christ",
      scripture: "John 14:6, 1 Corinthians 15:3-4",
      text: "Jesus Christ is the Son of God, fully God and fully man. He lived sinlessly, died for our sins, and rose on the third day, providing salvation for all who believe.",
    },
    {
      title: "Holy Spirit",
      scripture: "Acts 1:8, John 14:26",
      text: "The Holy Spirit empowers believers for Godly living, equips them with spiritual gifts, and guides them in their walk with Christ.",
    },
    {
      title: "The Bible",
      scripture: "2 Timothy 3:16-17",
      text: "The Bible is the inspired, inerrant Word of God — authoritative in all matters of faith and practice.",
    },
    {
      title: "Salvation",
      scripture: "Ephesians 2:8-9",
      text: "Salvation is by grace through faith in Jesus Christ alone — a free gift, not based on works, but on God's love and mercy.",
    },
    {
      title: "The Church",
      scripture: "1 Corinthians 12:12-13",
      text: "We believe in the universal Church — the body of believers, called to gather in worship, fellowship, and service to God and one another.",
    },
    {
      title: "Eternal Life",
      scripture: "John 3:16, Revelation 20:15",
      text: "We believe in eternal life with God for all who trust in Jesus Christ, and in the reality of eternal separation from God for those who reject Him.",
    },
  ];

  return (
    <>
      {/* Mission, Vision & Core Values */}
      <section id="mission-vision" className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-primary-800 mb-6"
            >
              Who We Are & Why We Exist
            </motion.span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-800 to-gold-400 mx-auto mb-8" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md text-neutral-900 mb-6"
            >
              Our <span className="text-gradient-primary">Foundation</span>
            </motion.h2>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-neutral-950 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-neutral-950" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-800 to-primary-600" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-800/20 border border-primary-800/30 mb-6">
                  <Target className="w-7 h-7 text-primary-400" />
                </div>
                <span className="block text-caption uppercase font-semibold tracking-[0.2em] text-primary-400 mb-4">Our Mission</span>
                <h3 className="font-display text-heading-lg text-white mb-4">What We Do</h3>
                <p className="text-body-lg text-white/80 leading-relaxed font-light">
                  To <strong className="text-white">empower believers</strong> with transformative Kingdom insights — cultivating discipleship, purpose, and spiritual growth through the teachings of Jesus Christ, while fostering a community of support, accountability, and love.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-10 rounded-3xl bg-neutral-950 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-900/30 to-neutral-950" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/20 mb-6">
                  <Eye className="w-7 h-7 text-gold-400" />
                </div>
                <span className="block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-4">Our Vision</span>
                <h3 className="font-display text-heading-lg text-white mb-4">Where We're Going</h3>
                <p className="text-body-lg text-white/80 leading-relaxed font-light">
                  To see every believer <strong className="text-white">equipped with divine purpose</strong>, empowered to live out their faith boldly, and passionate about making disciples who impact the world for God's glory.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-4">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-600 mb-4"
              >
                What We Stand For
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-display-xs md:text-display-sm text-neutral-900"
              >
                Core <span className="text-gradient-primary">Values</span>
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative p-8 rounded-3xl bg-white border border-neutral-100 hover:shadow-elevated hover:border-neutral-200 hover:-translate-y-1 transition-all duration-500 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-heading-md text-neutral-900 mb-2">{value.title}</h4>
                  <p className="text-caption text-gold-600 font-medium mb-3">{value.verse}</p>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="statement-of-faith" className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950 noise-overlay" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-800/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-gold-400 mb-6"
            >
              What We Believe
            </motion.span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-primary-800 mx-auto mb-8" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md text-white"
            >
              Statement of <span className="text-gradient-gold">Faith</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statementOfFaith.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 ${
                  index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent rounded-l-3xl" />
                <h4 className="font-display text-heading-md text-white mb-1">{item.title}</h4>
                <p className="text-caption text-gold-400/70 font-medium mb-4 uppercase tracking-wider">{item.scripture}</p>
                <p className="text-body-sm text-white/65 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Scripture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="font-display text-heading-lg md:text-display-xs text-white/80 italic max-w-3xl mx-auto">
              "For God so loved the world that He gave His only Son, that whoever believes in Him shall not perish but have eternal life."
            </p>
            <p className="text-body-md text-gold-400 mt-4 font-semibold">John 3:16</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
