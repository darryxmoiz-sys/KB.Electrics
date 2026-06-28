"use client";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";

function WiringDiagram() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* dots representing components */}
      <motion.circle cx="80" cy="80" r="6" fill="#C4632B" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8, duration: 0.3 }} />
      <motion.circle cx="400" cy="80" r="6" fill="#1B3A2E" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0, duration: 0.3 }} />
      <motion.circle cx="400" cy="400" r="6" fill="#C4632B" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, duration: 0.3 }} />
      <motion.circle cx="80" cy="400" r="6" fill="#1B3A2E" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4, duration: 0.3 }} />
      <motion.circle cx="240" cy="240" r="9" fill="#1B3A2E" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, duration: 0.4 }} />

      {/* main circuit path */}
      <motion.path
        d="M80 80 H240 V240 M240 240 H400 V80 M240 240 V400 H400 M80 80 V400 H240"
        stroke="#1B3A2E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {/* resistor zigzag detail */}
      <motion.path
        d="M150 80 l8 -10 l8 20 l8 -20 l8 20 l8 -10"
        stroke="#C4632B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      />

      {/* small switch detail */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
        <line x1="320" y1="240" x2="350" y2="225" stroke="#C4632B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="320" cy="240" r="3" fill="#C4632B" />
        <circle cx="360" cy="240" r="3" fill="#C4632B" />
      </motion.g>

      {/* pulsing glow at center node */}
      <motion.circle
        cx="240" cy="240" r="9"
        fill="none"
        stroke="#C4632B"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.6, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-bottle/25 bg-parchment text-bottle text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide"
            >
              FAMILY-RUN · CLANFIELD, HAMPSHIRE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-medium text-[2.6rem] sm:text-5xl lg:text-[3.6rem] text-ink leading-[1.08] mb-6"
            >
              Electricians who turn up,
              <br />
              <span className="italic text-copper">tell you straight,</span>
              <br />
              and do it properly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-ink/70 max-w-md mb-9 leading-relaxed"
            >
              KB Electrics is a local, family-run electrical company serving Clanfield and
              Hampshire. 18th Edition qualified, fully insured, and happy to explain exactly
              what we're doing and why.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+447809211836"
                className="flex items-center justify-center gap-2 bg-bottle hover:bg-bottle-light text-paper font-semibold text-base px-7 py-4 rounded-full transition-colors duration-200"
              >
                <FiPhone /> Call 07809 211836
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-ink/15 hover:border-copper text-ink font-semibold text-base px-7 py-4 rounded-full transition-colors duration-200"
              >
                Get a Free Quote <FiArrowRight />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-9 text-sm text-ink/60 font-mono"
            >
              <span>18TH EDITION QUALIFIED</span>
              <span className="text-copper">·</span>
              <span>FULLY INSURED</span>
              <span className="text-copper">·</span>
              <span>FREE QUOTES</span>
            </motion.div>
          </div>

          {/* Wiring diagram column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-6 border border-bottle/10 rounded-full" />
            <WiringDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
