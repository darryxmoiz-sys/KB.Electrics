"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Consumer Unit Upgrade", loc: "Clanfield", tag: "Fuse Board", grad: "from-violet/30 to-cyan/20", emoji: "⚡" },
  { title: "Home EV Charger", loc: "Waterlooville", tag: "EV Charging", grad: "from-cyan/30 to-amber/20", emoji: "🔌" },
  { title: "Garden & Security Lighting", loc: "Horndean", tag: "Lighting", grad: "from-amber/30 to-violet/20", emoji: "💡" },
  { title: "Rooftop Solar Array", loc: "Petersfield", tag: "Solar", grad: "from-violet/30 to-amber/20", emoji: "☀️" },
  { title: "Landlord EICR & Remedials", loc: "Havant", tag: "Landlord", grad: "from-cyan/30 to-violet/20", emoji: "📋" },
  { title: "Commercial Office Rewire", loc: "Portsmouth", tag: "Commercial", grad: "from-amber/30 to-cyan/20", emoji: "🏢" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-midnight-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >
          <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
            Recent Projects
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            A few jobs from
            <br />
            <span className="text-gradient">around Hampshire.</span>
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
              className="glass-card overflow-hidden group"
            >
              <div className={`h-40 flex items-center justify-center text-5xl bg-gradient-to-br ${p.grad}`}>
                <span className="opacity-70 group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
              </div>
              <div className="p-5">
                <span className="font-accent text-[10px] text-cyan tracking-wider uppercase">{p.tag}</span>
                <h3 className="font-display font-semibold text-white text-base mt-1">{p.title}</h3>
                <p className="text-mist text-sm mt-0.5">{p.loc}, Hampshire</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
