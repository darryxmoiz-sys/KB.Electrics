"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar">
      <a href="tel:+447809211836" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet to-cyan text-white font-semibold text-base py-4">
        <FiPhone /> Call Now
      </a>
      <a href="https://wa.me/447809211836" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-base py-4">
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
}
