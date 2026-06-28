"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#solar", label: "Solar & EV" },
  { href: "/#projects", label: "Projects" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? "nav-solid border-ink/10" : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-bottle rounded-full flex items-center justify-center shrink-0 group-hover:bg-copper transition-colors duration-300">
                <span className="font-display font-bold text-paper text-lg">KB</span>
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-ink text-lg tracking-tight">KB Electrics</p>
                <p className="text-[10px] text-slate tracking-[0.15em] uppercase">Clanfield · Hampshire</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-draw text-sm font-medium text-ink/80 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+447809211836"
                className="flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-copper transition-colors"
              >
                <FiPhone />
                07809 211836
              </a>
              <a
                href="#contact"
                className="bg-copper hover:bg-copper-dark text-paper font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-ink p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-paper flex flex-col pt-24 px-6 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-display font-semibold text-ink py-3 border-b border-ink/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+447809211836"
                className="flex items-center justify-center gap-2 bg-bottle text-paper font-bold text-lg px-6 py-4 rounded-2xl"
              >
                <FiPhone /> 07809 211836
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-copper text-paper font-bold text-lg px-6 py-4 rounded-2xl"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
