"use client";
import { motion } from "framer-motion";
import { FiPhone, FiAlertCircle } from "react-icons/fi";

export default function EmergencyBanner() {
  return (
    <section className="bg-bottle-band py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="shrink-0 hidden sm:block"
            >
              <FiAlertCircle className="text-copper-light text-3xl" />
            </motion.div>
            <div>
              <p className="text-paper font-display font-medium text-lg sm:text-xl">
                Lost power, sparking socket, or a fault you're not sure about?
              </p>
              <p className="text-paper/60 text-sm mt-0.5">
                Call us directly — we'll talk you through what to do safely.
              </p>
            </div>
          </div>
          <a
            href="tel:+447809211836"
            className="flex items-center gap-2 bg-copper hover:bg-copper-light text-paper font-bold text-base px-7 py-3.5 rounded-full transition-colors duration-200 shrink-0"
          >
            <FiPhone /> 07809 211836
          </a>
        </div>
      </div>
    </section>
  );
}
