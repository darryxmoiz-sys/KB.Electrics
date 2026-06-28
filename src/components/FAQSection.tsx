"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const faqs = [
  { q: "Are your quotes free?", a: "Yes — every quote is free and comes with no obligation. We'll talk through the job, give you a clear price, and you decide when you're ready." },
  { q: "Are you fully insured?", a: "Yes, KB Electrics is fully insured for all domestic and commercial electrical work we carry out." },
  { q: "Do you install EV chargers?", a: "Yes, we install EV chargers for homes and businesses, including OLEV-compliant installations." },
  { q: "Do you offer landlord certificates?", a: "Yes — we provide EICRs, landlord safety certificates and property inspections for landlords and letting agents across Hampshire." },
  { q: "Do you carry out PAT testing?", a: "Yes, we carry out PAT testing for businesses, landlords and commercial premises." },
  { q: "Can you install solar panels?", a: "Yes, we design and install solar panel systems and battery storage, sized to suit your property and usage." },
  { q: "Do you offer finance?", a: "Yes, finance is available on larger jobs such as rewires, solar installs and EV chargers. Just ask when you get your quote." },
  { q: "Which areas do you cover?", a: "We're based in Clanfield and cover Havant, Waterlooville, Portsmouth, Hayling Island, Horndean, Petersfield and the wider Hampshire area." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-parchment border-y border-ink/8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">FAQs</p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight">
            Questions we get asked
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-paper border border-ink/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display font-medium text-ink text-base">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-copper shrink-0"
                >
                  <FiPlus />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-4 text-ink/70 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
