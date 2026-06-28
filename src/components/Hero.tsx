"use client";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiZap } from "react-icons/fi";

function GradientOrb() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Outer spinning gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #7C5CFF, #22D3EE, #FFB454, #7C5CFF)",
          padding: "3px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-midnight" />
      </motion.div>

      {/* Inner glow orb */}
      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-br from-violet/40 via-cyan/30 to-amber/20 backdrop-blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lightning bolt centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="w-28 h-28 rounded-3xl bg-white/8 border border-white/15 backdrop-blur-xl flex items-center justify-center"
        >
          <FiZap className="text-white text-5xl drop-shadow-[0_0_20px_rgba(124,92,255,0.8)]" />
        </motion.div>
      </div>

      {/* Floating mini badges */}
      <motion.div
        className="absolute -top-2 -right-2 sm:top-2 sm:right-2 glass-card px-3 py-2 rounded-xl text-xs font-semibold text-white"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        ⚡ 18th Edition
      </motion.div>
      <motion.div
        className="absolute bottom-4 -left-4 sm:-left-2 glass-card px-3 py-2 rounded-xl text-xs font-semibold text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        ✓ Fully Insured
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden hero-mesh-bg grid-overlay">
      {/* Drifting blobs */}
      <div className="blob w-96 h-96 bg-violet/30 top-0 -left-20 animate-blob-float" />
      <div className="blob w-80 h-80 bg-cyan/20 bottom-0 right-0 animate-blob-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 pill-badge text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-glow-pulse" />
              FAMILY-RUN · CLANFIELD, HAMPSHIRE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-[2.6rem] sm:text-5xl lg:text-[3.5rem] text-white leading-[1.08] mb-6"
            >
              Electrical work,
              <br />
              <span className="text-gradient">done properly</span>
              <br />
              first time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-mist max-w-md mb-9 leading-relaxed"
            >
              KB Electrics is a family-run electrical company serving Clanfield and
              Hampshire. 18th Edition qualified, fully insured, and genuinely easy to
              talk to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+447809211836"
                className="btn-glow flex items-center justify-center gap-2 text-white font-semibold text-base px-7 py-4 rounded-full"
              >
                <FiPhone /> Call 07809 211836
              </a>
              <a
                href="/contact"
                className="glass-card flex items-center justify-center gap-2 text-white font-semibold text-base px-7 py-4 rounded-full"
              >
                Get a Free Quote <FiArrowRight />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-9 text-sm text-mist"
            >
              <span>18th Edition Qualified</span>
              <span className="text-violet">·</span>
              <span>Fully Insured</span>
              <span className="text-violet">·</span>
              <span>Free Quotes</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GradientOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
