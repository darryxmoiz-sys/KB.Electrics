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
    <section className="section-padding bg-parchment border-y border-ink/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="job-ticket rounded-sm p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center"
        >
          <div className="stamp-badge w-24 h-24 flex flex-col items-center justify-center font-mono text-[11px] leading-tight text-center font-bold mx-auto sm:mx-0">
            <span>FINANCE</span>
            <span>AVAILABLE</span>
          </div>
          <div>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-ink mb-4">
              Bigger job than you expected?
              <span className="italic text-copper"> We can spread it.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {finPoints.map((point) => (
                <div key={point} className="flex items-start gap-2 text-sm text-ink/75">
                  <FiCheck className="text-bottle mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
            <a href="#contact" className="link-draw text-bottle font-semibold text-sm mt-5 inline-block">
              Ask about finance options →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
