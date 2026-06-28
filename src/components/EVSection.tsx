"use client";
import { motion } from "framer-motion";
import { FiZap, FiHome, FiBriefcase } from "react-icons/fi";

export default function EVSection() {
  return (
    <section className="section-padding bg-midnight-light relative overflow-hidden">
      <div className="blob w-72 h-72 bg-cyan/15 bottom-0 -left-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="gradient-ring">
              <div className="p-8 sm:p-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet to-cyan flex items-center justify-center mb-6 font-display text-white text-xs font-bold text-center leading-tight">
                  OLEV
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <FiHome className="text-cyan text-xl mb-2" />
                    <p className="font-display font-semibold text-sm text-white">Home Charging</p>
                    <p className="text-mist text-xs mt-1">Driveway & garage installs, fully certified.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <FiBriefcase className="text-violet-light text-xl mb-2" />
                    <p className="font-display font-semibold text-sm text-white">Commercial Charging</p>
                    <p className="text-mist text-xs mt-1">Staff and customer charge points, single or multi-bay.</p>
                  </div>
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
            <p className="text-violet-light text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
              EV Charging
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
              Charge at home.
              <br />
              <span className="text-gradient">Charge for work.</span>
            </h2>
            <p className="text-mist text-base leading-relaxed mb-8 max-w-md">
              We install OLEV-compliant EV chargers for homes and businesses across Hampshire —
              from a single domestic charge point to multi-bay commercial installations.
            </p>
            <a
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-full"
            >
              <FiZap /> Get an EV Charger Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
