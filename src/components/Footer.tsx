"use client";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Solar & EV", href: "/#solar" },
  { label: "Recent Projects", href: "/#projects" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const areas = ["Clanfield", "Havant", "Waterlooville", "Portsmouth", "Hayling Island", "Horndean", "Petersfield"];

export default function Footer() {
  return (
    <footer className="bottle-band text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-copper rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-paper text-base">KB</span>
              </div>
              <p className="font-display font-semibold text-lg">KB Electrics</p>
            </div>
            <p className="text-paper/60 text-sm leading-relaxed mb-5">
              A family-run electrical company based in Clanfield, serving Hampshire. 18th
              Edition qualified, fully insured.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-paper/10 rounded-lg flex items-center justify-center hover:bg-paper/20 transition-colors">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="w-9 h-9 bg-paper/10 rounded-lg flex items-center justify-center hover:bg-paper/20 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-paper/80">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-paper/60 hover:text-copper-light transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-paper/80">Areas We Cover</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-paper/60 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-paper/80">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+447809211836" className="flex items-center gap-2 text-paper/80 hover:text-copper-light transition-colors">
                <FiPhone className="text-copper-light" /> 07809 211836
              </a>
              <a href="mailto:leggattp@yahoo.com" className="flex items-center gap-2 text-paper/80 hover:text-copper-light transition-colors">
                <FiMail className="text-copper-light" /> leggattp@yahoo.com
              </a>
              <p className="flex items-start gap-2 text-paper/60">
                <FiMapPin className="text-copper-light mt-0.5 shrink-0" />
                Henwood Grove, Clanfield, Hampshire, PO8 0ZE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} KB Electrics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-paper/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-paper/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
