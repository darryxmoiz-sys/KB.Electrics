"use client";
import { motion } from "framer-motion";
import { FiHome, FiClipboard, FiUsers, FiZap, FiSun } from "react-icons/fi";

const serviceGroups = [
  {
    title: "Domestic Electrical",
    icon: FiHome,
    grad: "from-violet to-cyan",
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
    title: "Testing & Inspection",
    icon: FiClipboard,
    grad: "from-cyan to-amber",
    items: [
      "Electrical Installation Condition Reports (EICR)",
      "Electrical inspections",
      "Electrical testing",
      "PAT testing",
    ],
  },
  {
    title: "Landlord Services",
    icon: FiUsers,
    grad: "from-amber to-violet",
    items: [
      "Landlord safety certificates",
      "EICR reports",
      "Property inspections",
      "Ongoing compliance reminders",
    ],
  },
  {
    title: "EV Charging",
    icon: FiZap,
    grad: "from-violet to-amber",
    items: [
      "EV charger installation",
      "Home charging points",
      "Commercial charging points",
      "OLEV-compliant installs",
    ],
  },
  {
    title: "Renewable Energy",
    icon: FiSun,
    grad: "from-cyan to-violet",
    items: [
      "Solar panel installation",
      "Battery storage systems",
      "Renewable energy design",
    ],
  },
  {
    title: "Commercial Services",
    icon: FiHome,
    grad: "from-amber to-cyan",
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
    <section id="services" className="section-padding bg-midnight relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14"
        >
          <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Six job types.
            <br />
            <span className="text-gradient">One careful standard.</span>
          </h2>
          <p className="text-mist text-base leading-relaxed">
            Every service below covers real work we carry out across Hampshire — from a
            single socket to a full commercial rewire.
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
                className="glass-card p-6 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.grad} flex items-center justify-center mb-5`}>
                  <Icon className="text-white text-xl" />
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-4">{group.title}</h3>

                <ul className="space-y-2.5 flex-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mist">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="text-cyan font-semibold text-sm mt-5 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit"
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
