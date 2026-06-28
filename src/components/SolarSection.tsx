"use client";
import { motion } from "framer-motion";
import { FiSun, FiBattery, FiTrendingDown } from "react-icons/fi";

const points = [
  { icon: FiSun, title: "Solar panel installation", desc: "Panels sized to your roof and your usage, not a one-size package." },
  { icon: FiBattery, title: "Battery storage systems", desc: "Store what you generate during the day and use it after dark." },
  { icon: FiTrendingDown, title: "Renewable energy design", desc: "We design the system around your bills, not the other way round." },
];

export default function SolarSection() {
  return (
    <section id="solar" className="section-padding bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
              Solar & Renewables
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight mb-5">
              The roof's already there.
              <br />
              <span className="italic text-bottle">Might as well use it.</span>
            </h2>
            <p className="text-ink/70 text-base leading-relaxed mb-8 max-w-md">
              We design and install solar and battery storage systems for homes and businesses
              across Hampshire — sized properly, fitted properly, and explained properly before
              you commit to anything.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-bottle hover:bg-bottle-light text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-colors duration-200"
            >
              Ask About Solar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-parchment border border-ink/8 rounded-2xl p-5"
                >
                  <div className="w-11 h-11 bg-copper/10 border border-copper/25 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-copper text-lg" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-base mb-1">{p.title}</h3>
                    <p className="text-ink/65 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
