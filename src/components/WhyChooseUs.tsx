"use client";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const reasons = [
  "Family-run business",
  "18th Edition qualified electricians",
  "Fully qualified",
  "Fully certified",
  "Fully insured",
  "Free quotes",
  "Finance available",
  "Domestic & commercial",
  "Reliable local electricians",
  "Professional & friendly service",
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-midnight-light relative overflow-hidden">
      <div className="blob w-72 h-72 bg-amber/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
              Why Choose Us
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
              A small team, but never
              <br />
              <span className="text-gradient">a small job.</span>
            </h2>
            <p className="text-mist text-base leading-relaxed">
              We're a family business, not a call centre. The person who quotes your job is
              usually the person who turns up to do it — and the person you can call afterwards
              if you have a question.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-card flex items-center gap-3 px-4 py-3.5 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center shrink-0">
                  <FiCheck className="text-white text-sm" />
                </div>
                <span className="text-white font-medium text-sm">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
