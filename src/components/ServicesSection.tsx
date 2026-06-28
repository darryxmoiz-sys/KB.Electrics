"use client";
import { motion } from "framer-motion";
import {
  FiHome, FiClipboard, FiUsers, FiZap, FiSun,
} from "react-icons/fi";

const serviceGroups = [
  {
    ref: "JOB · DOM",
    title: "Domestic Electrical",
    icon: FiHome,
    items: [
      "Full & partial rewires",
      "Consumer unit (fuse board) upgrades",
      "Additional plug sockets",
      "Indoor & outdoor lighting",
      "Garden & security lighting",
      "Fault finding & repairs",
    ],
  },
  {
    ref: "JOB · TST",
    title: "Testing & Inspection",
    icon: FiClipboard,
    items: [
      "Electrical Installation Condition Reports (EICR)",
      "Electrical inspections",
      "Electrical testing",
      "PAT testing",
    ],
  },
  {
    ref: "JOB · LND",
    title: "Landlord Services",
    icon: FiUsers,
    items: [
      "Landlord safety certificates",
      "EICR reports",
      "Property inspections",
      "Ongoing compliance reminders",
    ],
  },
  {
    ref: "JOB · EVC",
    title: "EV Charging",
    icon: FiZap,
    items: [
      "EV charger installation",
      "Home charging points",
      "Commercial charging points",
      "OLEV-compliant installs",
    ],
  },
  {
    ref: "JOB · SLR",
    title: "Renewable Energy",
    icon: FiSun,
    items: [
      "Solar panel installation",
      "Battery storage systems",
      "Renewable energy design",
    ],
  },
  {
    ref: "JOB · COM",
    title: "Commercial Services",
    icon: FiHome,
    items: [
      "Commercial electrical work",
      "Office lighting",
      "Maintenance contracts",
      "Electrical upgrades",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14"
        >
          <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
            What We Do
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight mb-4">
            Six job types.
            <br />
            <span className="italic text-bottle">One careful standard.</span>
          </h2>
          <p className="text-ink/70 text-base leading-relaxed">
            Every ticket below covers real work we carry out across Hampshire — from a single
            socket to a full commercial rewire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="job-ticket rounded-sm p-6 pt-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-bottle/8 border border-bottle/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-bottle text-lg" />
                  </div>
                  <span className="font-mono text-[11px] text-ink/40 tracking-wider pt-1">
                    {group.ref}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-ink mb-4">{group.title}</h3>

                <ul className="space-y-2 flex-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                      <span className="text-copper mt-1.5 w-1 h-1 rounded-full bg-copper shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="link-draw text-bottle font-semibold text-sm mt-5 inline-block w-fit"
                >
                  Ask about this →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
