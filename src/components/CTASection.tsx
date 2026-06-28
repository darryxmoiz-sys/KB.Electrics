"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="blob w-96 h-96 bg-violet/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to get started?
            <br />
            <span className="text-gradient">Get your free quote today.</span>
          </h2>
          <p className="text-mist text-lg mb-10 max-w-xl mx-auto">
            No pressure, no hard sell — just an honest price for honest work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447809211836"
              className="btn-glow flex items-center justify-center gap-2 text-white font-semibold text-lg px-9 py-4 rounded-full"
            >
              <FiPhone /> Call 07809 211836
            </a>
            <Link
              href="/contact"
              className="glass-card flex items-center justify-center gap-2 text-white font-semibold text-lg px-9 py-4 rounded-full"
            >
              Get a Free Quote <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
