"use client";
import { FiMapPin } from "react-icons/fi";

export default function MapSection() {
  return (
    <section className="bg-parchment border-t border-ink/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-4 text-ink/60 text-sm font-mono uppercase tracking-wider">
          <FiMapPin className="text-copper" /> Henwood Grove, Clanfield, Hampshire, PO8 0ZE
        </div>
        <div className="rounded-2xl overflow-hidden border border-ink/10 h-[360px]">
          <iframe
            title="KB Electrics location map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Henwood+Grove,+Clanfield,+Hampshire,+PO8+0ZE,+United+Kingdom&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
