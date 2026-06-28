"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const previewReviews = [
  { name: "Donna Marsh", context: "Clanfield", text: "Turned up on time, explained everything, left the place spotless. Couldn't ask for more.", rating: 5 },
  { name: "Phil Anderson", context: "Waterlooville", text: "Got our EV charger sorted quickly and at a fair price. Friendly and professional.", rating: 5 },
  { name: "Sue Whitlock", context: "Horndean", text: "Quick to book in, thorough, and the EICR report was easy to understand.", rating: 5 },
];

export default function ReviewsPreview() {
  return (
    <section className="section-padding bg-midnight-light relative overflow-hidden">
      <div className="blob w-72 h-72 bg-violet/12 top-0 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
              What People Say
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Local jobs.
              <br />
              <span className="text-gradient">Local word of mouth.</span>
            </h2>
          </div>
          <Link href="/about" className="text-cyan font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
            More reviews & our story <FiArrowRight />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {previewReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <FaStar key={j} className="text-amber text-sm" />
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-display font-semibold text-white text-sm">{review.name}</p>
              <p className="text-mist text-xs mt-0.5">{review.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
