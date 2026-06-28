"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Consumer Unit Upgrade", loc: "Clanfield", tag: "Fuse Board", col: "#1B3A2E", emoji: "⚡" },
  { title: "Home EV Charger", loc: "Waterlooville", tag: "EV Charging", col: "#C4632B", emoji: "🔌" },
  { title: "Garden & Security Lighting", loc: "Horndean", tag: "Lighting", col: "#274F3F", emoji: "💡" },
  { title: "Rooftop Solar Array", loc: "Petersfield", tag: "Solar", col: "#9A4A1E", emoji: "☀️" },
  { title: "Landlord EICR & Remedials", loc: "Havant", tag: "Landlord", col: "#0F2018", emoji: "📋" },
  { title: "Commercial Office Rewire", loc: "Portsmouth", tag: "Commercial", col: "#1B3A2E", emoji: "🏢" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >
          <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
            Recent Projects
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight">
            A few jobs from
            <br />
            <span className="italic text-bottle">around Hampshire.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="job-ticket rounded-sm overflow-hidden group"
            >
              <div
                className="h-40 flex items-center justify-center text-5xl relative"
                style={{ background: `linear-gradient(135deg, ${p.col}22, ${p.col}08)` }}
              >
                <span className="opacity-50">{p.emoji}</span>
              </div>
              <div className="p-5 pt-6">
                <span className="font-mono text-[10px] text-copper tracking-wider uppercase">{p.tag}</span>
                <h3 className="font-display font-semibold text-ink text-base mt-1">{p.title}</h3>
                <p className="text-ink/55 text-sm mt-0.5">{p.loc}, Hampshire</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
