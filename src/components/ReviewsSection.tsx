"use client";
import { motion } from "framer-motion";
import { FaStar, FaFacebook } from "react-icons/fa";

const reviews = [
  {
    name: "Ray Sutton",
    context: "Havant & Waterlooville Women's Walking Football",
    text: "Thank you for sponsoring us! The new kits look great — really appreciate KB Electrics backing the team.",
    rating: 5,
  },
  {
    name: "Donna Marsh",
    context: "Clanfield",
    text: "Had a new consumer unit fitted. Turned up on time, explained everything, left the place spotless. Couldn't ask for more.",
    rating: 5,
  },
  {
    name: "Phil Anderson",
    context: "Waterlooville",
    text: "Got our EV charger sorted quickly and at a fair price. Friendly, professional, and clearly knew what they were doing.",
    rating: 5,
  },
  {
    name: "Sue Whitlock",
    context: "Horndean",
    text: "Used KB Electrics for an EICR on our rental property. Quick to book in, thorough, and the report was easy to understand.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-padding bg-parchment border-y border-ink/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-copper text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-mono">
              What People Say
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink leading-tight">
              Local jobs.
              <br />
              <span className="italic text-bottle">Local word of mouth.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-ink/60 text-sm">
            <FaFacebook className="text-[#1877F2]" />
            From our Facebook page
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="job-ticket rounded-sm p-6 pt-8"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <FaStar key={j} className="text-copper text-sm" />
                ))}
              </div>
              <p className="text-ink/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-display font-semibold text-ink text-sm">{review.name}</p>
              <p className="text-ink/50 text-xs mt-0.5">{review.context}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink/50">
          <span className="dot-divider w-12" />
          Proud sponsor of Havant &amp; Waterlooville Women's Walking Football Team
          <span className="dot-divider w-12" />
        </div>
      </div>
    </section>
  );
}
