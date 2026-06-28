"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiZap } from "react-icons/fi";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solar-ev", label: "Solar & EV" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
          scrolled ? "nav-solid border-white/8" : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet to-cyan flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FiZap className="text-white text-xl" />
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-white text-lg tracking-tight">KB Electrics</p>
                <p className="text-[10px] text-mist tracking-[0.15em] uppercase">Clanfield · Hampshire</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href ? "text-cyan" : "text-mist hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+447809211836"
                className="flex items-center gap-2 text-sm font-semibold text-mist hover:text-cyan transition-colors"
              >
                <FiPhone />
                07809 211836
              </a>
              <Link
                href="/contact"
                className="btn-glow text-white font-semibold text-sm px-5 py-2.5 rounded-full"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              className="lg:hidden text-white p-2"
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
            className="fixed inset-0 z-40 bg-midnight-deep hero-mesh-bg flex flex-col pt-24 px-6 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-display font-semibold py-3 border-b border-white/10 ${
                      pathname === link.href ? "text-cyan" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+447809211836"
                className="flex items-center justify-center gap-2 glass-card text-white font-bold text-lg px-6 py-4 rounded-2xl"
              >
                <FiPhone /> 07809 211836
              </a>
              <Link
                href="/contact"
                className="btn-glow flex items-center justify-center gap-2 text-white font-bold text-lg px-6 py-4 rounded-2xl"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
