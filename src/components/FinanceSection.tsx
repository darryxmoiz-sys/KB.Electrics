"use client";
import { motion } from "framer-motion";
import { FiCreditCard, FiCheck } from "react-icons/fi";

const finPoints = [
  "Spread the cost of larger jobs",
  "Available on rewires, solar & EV installs",
  "Simple application, quick decision",
  "No pressure — ask us for details when you get your quote",
];

export default function FinanceSection() {
  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-ring"
        >
          <div className="p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber to-violet flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <FiCreditCard className="text-white text-3xl" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Bigger job than you expected?
                <span className="text-gradient-amber"> We can spread it.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {finPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-mist">
                    <FiCheck className="text-cyan mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <a href="/contact" className="text-cyan font-semibold text-sm mt-5 inline-block hover:underline">
                Ask about finance options →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
