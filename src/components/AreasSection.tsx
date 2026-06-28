"use client";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

const areas = [
  { name: "Clanfield", note: "Home base" },
  { name: "Havant", note: "" },
  { name: "Waterlooville", note: "" },
  { name: "Portsmouth", note: "" },
  { name: "Hayling Island", note: "" },
  { name: "Horndean", note: "" },
  { name: "Petersfield", note: "" },
];

export default function AreasSection() {
  return (
    <section className="section-padding bg-paper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
            Areas We Cover
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight">
            Based in Clanfield.
            <br />
            <span className="italic text-bottle">Working across Hampshire.</span>
          </h2>
        </motion.div>

        {/* route line */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-3 bottom-3 w-px bg-ink/15 hidden sm:block" />
          <div className="space-y-3">
            {areas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-center gap-3 sm:w-1/2 ${
                  i % 2 === 0 ? "" : "sm:ml-auto sm:flex-row-reverse sm:text-right"
                }`}
              >
                <div className={`w-9 h-9 rounded-full bg-bottle/10 border border-bottle/25 flex items-center justify-center shrink-0 ${i % 2 !== 0 ? "sm:order-2" : ""}`}>
                  <FiMapPin className="text-bottle text-sm" />
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-base">{area.name}</p>
                  {area.note && <p className="text-copper text-xs font-mono">{area.note}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-ink/55 text-sm mt-10">
          Don't see your town? Get in touch — we cover most of Hampshire and the surrounding area.
        </p>
      </div>
    </section>
  );
}
