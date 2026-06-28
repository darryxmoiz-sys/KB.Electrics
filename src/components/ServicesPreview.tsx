"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiClipboard, FiUsers, FiZap, FiSun, FiArrowRight } from "react-icons/fi";

const previewServices = [
  { title: "Domestic Electrical", icon: FiHome, grad: "from-violet to-cyan", desc: "Rewires, consumer units, sockets, lighting & fault finding." },
  { title: "Testing & Inspection", icon: FiClipboard, grad: "from-cyan to-amber", desc: "EICR, electrical testing, inspections & PAT testing." },
  { title: "Landlord Services", icon: FiUsers, grad: "from-amber to-violet", desc: "Safety certificates, EICRs and property inspections." },
  { title: "EV Charging", icon: FiZap, grad: "from-violet to-amber", desc: "Home and commercial EV charger installation." },
  { title: "Solar & Battery", icon: FiSun, grad: "from-cyan to-violet", desc: "Solar panel installation and battery storage systems." },
  { title: "Commercial Work", icon: FiHome, grad: "from-amber to-cyan", desc: "Office lighting, upgrades and maintenance contracts." },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding bg-midnight relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div className="max-w-xl">
            <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
              What We Do
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Six job types.
              <br />
              <span className="text-gradient">One careful standard.</span>
            </h2>
          </div>
          <Link href="/services" className="text-cyan font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
            View all services <FiArrowRight />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
              >
                <Link href="/services" className="glass-card p-6 flex flex-col h-full block">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center mb-5`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
                  <p className="text-mist text-sm leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-cyan font-semibold text-sm mt-4 inline-flex items-center gap-1.5">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
