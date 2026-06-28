"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-midnight-light relative overflow-hidden">
      <div className="blob w-80 h-80 bg-violet/12 top-0 left-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-7"
          >
            <div>
              <p className="text-cyan text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-accent">
                Get In Touch
              </p>
              <h2 className="font-display font-bold text-3xl text-white leading-tight mb-3">
                Request a callback,
                <br />
                <span className="text-gradient">or just ring us.</span>
              </h2>
              <p className="text-mist text-sm leading-relaxed">
                We aim to get back to every enquiry the same day.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: FiPhone, label: "Phone", value: "07809 211836", href: "tel:+447809211836" },
                { icon: FiMail, label: "Email", value: "leggattp@yahoo.com", href: "mailto:leggattp@yahoo.com" },
                { icon: FiMapPin, label: "Address", value: "Henwood Grove, Clanfield, Hampshire, PO8 0ZE", href: null },
              ].map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="glass-card flex items-start gap-3 p-4">
                    <Icon className="text-cyan mt-0.5 shrink-0" />
                    <div>
                      <p className="text-mist text-xs uppercase tracking-wider font-accent">{item.label}</p>
                      <p className="text-white font-medium text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block hover:opacity-90 transition-opacity">{inner}</a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="gradient-ring">
              <div className="p-7 sm:p-9">
                {submitted ? (
                  <div className="text-center py-14">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center mx-auto mb-4">
                      <FiCheck className="text-white text-xl" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">Got it — thank you.</h3>
                    <p className="text-mist text-sm">We'll be in touch shortly, usually within the day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display font-semibold text-lg text-white mb-1">Request a Callback</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-mist text-xs uppercase tracking-wider font-accent block mb-1.5">Name *</label>
                        <input
                          required type="text" value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full bg-white/5 border border-white/10 focus:border-cyan rounded-lg px-3.5 py-2.5 text-white placeholder-white/30 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-mist text-xs uppercase tracking-wider font-accent block mb-1.5">Phone *</label>
                        <input
                          required type="tel" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="07XXX XXXXXX"
                          className="w-full bg-white/5 border border-white/10 focus:border-cyan rounded-lg px-3.5 py-2.5 text-white placeholder-white/30 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-mist text-xs uppercase tracking-wider font-accent block mb-1.5">Email *</label>
                      <input
                        required type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white/5 border border-white/10 focus:border-cyan rounded-lg px-3.5 py-2.5 text-white placeholder-white/30 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-mist text-xs uppercase tracking-wider font-accent block mb-1.5">Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-midnight border border-white/10 focus:border-cyan rounded-lg px-3.5 py-2.5 text-white outline-none transition-colors text-sm"
                      >
                        <option value="">Select a service...</option>
                        <option>Domestic Electrical</option>
                        <option>Testing & Inspection (EICR / PAT)</option>
                        <option>Landlord Services</option>
                        <option>EV Charger Installation</option>
                        <option>Solar & Battery Storage</option>
                        <option>Commercial Electrical</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-mist text-xs uppercase tracking-wider font-accent block mb-1.5">Message *</label>
                      <textarea
                        required rows={4} value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us a bit about the job and your postcode if you can."
                        className="w-full bg-white/5 border border-white/10 focus:border-cyan rounded-lg px-3.5 py-2.5 text-white placeholder-white/30 outline-none transition-colors text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-glow w-full flex items-center justify-center gap-2 text-white font-semibold text-base py-3.5 rounded-full"
                    >
                      <FiSend /> Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
