"use client";
import { motion } from "framer-motion";
import { FiZap, FiHome, FiBriefcase } from "react-icons/fi";

export default function EVSection() {
  return (
    <section className="section-padding bg-bottle-band">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-paper/95 rounded-3xl p-8 sm:p-10 relative">
              <div className="stamp-badge w-20 h-20 flex flex-col items-center justify-center mb-6 font-mono text-[10px] leading-tight text-center font-bold">
                <span>OLEV</span>
                <span>READY</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-ink/10 rounded-xl p-4">
                  <FiHome className="text-bottle text-xl mb-2" />
                  <p className="font-display font-semibold text-sm text-ink">Home Charging</p>
                  <p className="text-ink/60 text-xs mt-1">Driveway & garage installs, fully certified.</p>
                </div>
                <div className="border border-ink/10 rounded-xl p-4">
                  <FiBriefcase className="text-bottle text-xl mb-2" />
                  <p className="font-display font-semibold text-sm text-ink">Commercial Charging</p>
                  <p className="text-ink/60 text-xs mt-1">Staff and customer charge points, single or multi-bay.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-copper-light text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
              EV Charging
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-paper leading-tight mb-5">
              Charge at home.
              <br />
              <span className="italic text-copper-light">Charge for work.</span>
            </h2>
            <p className="text-paper/70 text-base leading-relaxed mb-8 max-w-md">
              We install OLEV-compliant EV chargers for homes and businesses across Hampshire —
              from a single domestic charge point to multi-bay commercial installations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-colors duration-200"
            >
              <FiZap /> Get an EV Charger Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
