"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  ArrowUpRight,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#mission" },
  { label: "Our Services", href: "#" },
  { label: "Serve & Volunteer", href: "#serve" },
  { label: "Appointments", href: "#" },
];

const connectLinks: FooterLink[] = [
  { label: "Contact Us", href: "#form" },
  { label: "Online Giving", href: "#" },
  { label: "Generosity", href: "#" },
  { label: "Prayer Requests", href: "#" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-40px" });

  return (
    <footer ref={footerRef} className="relative bg-neutral-950 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800/40 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-800/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://storage.googleapis.com/rewebly-c2c2b.firebasestorage.app/projects/j0imv2O2DZSmUWxLFNv2/assets/image_1.png"
                  alt="Kingdom Insights Ministries"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-heading-lg text-white mb-4">
                Kingdom Insights Ministries
              </h3>
              <p className="text-body-md text-neutral-400 leading-relaxed max-w-md mb-8">
                Building a ministry fueled by servant-hearted people. We believe
                serving is one of the highest expressions of love.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                  { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                  { icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-800 hover:border-primary-800 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-caption uppercase font-semibold tracking-[0.15em] text-gold-400 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-body-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h4 className="text-caption uppercase font-semibold tracking-[0.15em] text-gold-400 mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-body-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="text-caption uppercase font-semibold tracking-[0.15em] text-gold-400 mb-6">
                Visit Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-body-sm text-neutral-300 font-medium">
                      Location
                    </p>
                    <p className="text-body-sm text-neutral-500">
                      1418 W Pipeline Rd #145
                      <br />
                      Hurst, TX 76053
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-body-sm text-neutral-300 font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:jporo@kim.church"
                      className="text-body-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      jporo@kim.church
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-body-sm text-neutral-300 font-medium">
                      Phone
                    </p>
                    <a
                      href="tel:+14694648295"
                      className="text-body-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      (469) 464-8295
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-neutral-600">
              © {new Date().getFullYear()} Kingdom Insights Ministries. All
              rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-body-sm text-neutral-600">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 text-primary-800 fill-primary-800" />{" "}
              for His Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}