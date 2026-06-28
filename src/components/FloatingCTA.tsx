"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
          <motion.a
            href="https://wa.me/447809211836"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            className="w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-colors"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-white text-xl" />
          </motion.a>
          <motion.a
            href="tel:+447809211836"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center shadow-lg shadow-violet/40 transition-colors"
            title="Call Us"
          >
            <FiPhone className="text-white text-lg" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
