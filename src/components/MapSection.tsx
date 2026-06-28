"use client";
import { FiMapPin } from "react-icons/fi";

export default function MapSection() {
  return (
    <section className="bg-midnight border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-4 text-mist text-sm font-accent uppercase tracking-wider">
          <FiMapPin className="text-cyan" /> Henwood Grove, Clanfield, Hampshire, PO8 0ZE
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 h-[360px]">
          <iframe
            title="KB Electrics location map"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Henwood+Grove,+Clanfield,+Hampshire,+PO8+0ZE,+United+Kingdom&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
