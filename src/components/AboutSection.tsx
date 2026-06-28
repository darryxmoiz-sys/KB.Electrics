"use client";
import { motion } from "framer-motion";
import { FiHeart, FiAward, FiUsers, FiShield } from "react-icons/fi";

const values = [
  { icon: FiShield, title: "18th Edition Qualified", desc: "Every electrician on the team is qualified to the current BS 7671 wiring regulations.", grad: "from-violet to-cyan" },
  { icon: FiAward, title: "Fully Certified & Insured", desc: "All work is certified, and we carry full insurance for domestic and commercial jobs.", grad: "from-cyan to-amber" },
  { icon: FiUsers, title: "Family-Run", desc: "We're a small, local team — the person who quotes is usually the one who does the job.", grad: "from-amber to-violet" },
  { icon: FiHeart, title: "Community-Minded", desc: "Proud sponsors of the Havant & Waterlooville Women's Walking Football Team.", grad: "from-violet to-amber" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="blob w-80 h-80 bg-cyan/12 -top-10 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
              Our Story
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
              Built on trust,
              <br />
              <span className="text-gradient">one job at a time.</span>
            </h2>
            <div className="space-y-4 text-mist text-base leading-relaxed">
              <p>
                KB Electrics is a local, family-run electrical company serving Clanfield and
                the surrounding Hampshire area. We're 18th Edition qualified, fully insured,
                and we take on everything from a single socket to a full property rewire.
              </p>
              <p>
                We undertake all electrical work including testing, inspection, PAT testing,
                EV charger installations, landlord services, solar panels and battery storage
                — and we always explain what we're doing and why before we start.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-ring"
          >
            <div className="p-8">
              <p className="font-display font-semibold text-white text-lg mb-4">In the community</p>
              <p className="text-mist text-sm leading-relaxed mb-5">
                We're proud sponsors of the Havant &amp; Waterlooville Women's Walking Football
                Team — supporting local sport and community events is something we genuinely
                care about, not just a marketing line.
              </p>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-2xl">⚽</span>
                <div>
                  <p className="text-white font-semibold text-sm">Community Sponsor</p>
                  <p className="text-mist text-xs">Havant & Waterlooville Women's Walking Football</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.grad} flex items-center justify-center mb-4`}>
                  <Icon className="text-white text-lg" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{v.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
