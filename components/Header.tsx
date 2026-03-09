"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#mission" },
  { label: "Serve & Volunteer", href: "#serve" },
  { label: "Our Services", href: "#" },
  { label: "Generosity", href: "#generosity" },
  { label: "Contact", href: "#form" },
  { label: "Appointments", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-neutral-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="relative z-10 flex items-center gap-3 group">
              <img
                src="https://storage.googleapis.com/rewebly-c2c2b.firebasestorage.app/projects/j0imv2O2DZSmUWxLFNv2/assets/image_0.png"
                alt="Kingdom Insights Ministries"
                className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-body-sm font-medium rounded-xl transition-all duration-300",
                    isScrolled
                      ? "text-neutral-600 hover:text-primary-800 hover:bg-primary-50"
                      : "text-neutral-700 hover:text-primary-800 hover:bg-white/60"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://give.tithe.ly/?formId=4a3a9c26-b54a-4b76-bc6d-f187ac5e25af"
                className="group relative px-7 py-3 bg-primary-800 text-white text-body-sm font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                <span className="relative z-10">Online Giving</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 rounded-xl transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-900" />
              ) : (
                <Menu
                  className={cn(
                    "w-6 h-6 transition-colors",
                    isScrolled ? "text-neutral-900" : "text-neutral-800"
                  )}
                />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-neutral-950/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-premium"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-4 text-body-lg font-medium text-neutral-800 rounded-2xl hover:bg-primary-50 hover:text-primary-800 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <a
                    href="https://give.tithe.ly/?formId=4a3a9c26-b54a-4b76-bc6d-f187ac5e25af"
                    className="block w-full py-4 text-center bg-primary-800 text-white font-semibold rounded-2xl hover:bg-primary-900 transition-colors duration-300"
                  >
                    Online Giving
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
