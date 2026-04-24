"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

type FormState = "idle" | "loading" | "success" | "error";

const serviceOptions = [
  "Εγκατάσταση Κλιματιστικού",
  "Service & Συντήρηση",
  "Επισκευή Βλάβης",
  "Επαγγελματικές Εγκαταστάσεις",
  "Μηχανολογικές Μελέτες",
  "Κεντρικές & Αυτόνομες Μονάδες",
  "Άλλο",
];

export default function EpikoinoniaPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-grid relative pt-40 pb-28 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Επικοινωνία
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-horizon/80 text-xl max-w-xl mx-auto leading-relaxed"
          >
            Ρωτήστε μας, κλείστε ραντεβού ή ζητήστε προσφορά. Απαντάμε άμεσα.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left — contact info + map */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Στοιχεία Επικοινωνίας</SectionLabel>
                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-playfair text-4xl font-bold text-charcoal mb-8"
                >
                  Είμαστε εδώ για εσάς
                </motion.h2>
              </div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-aegean rounded-3xl p-8 text-white space-y-6"
              >
                {[
                  {
                    icon: "📞",
                    label: "Τηλέφωνο",
                    value: "6907415055",
                    href: "tel:6907415055",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "kallipolitismike@gmail.com",
                    href: "mailto:kallipolitismike@gmail.com",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Γράψτε μας στο WhatsApp",
                    href: "https://wa.me/306907415055",
                  },
                  {
                    icon: "🕐",
                    label: "Ωράριο",
                    value: "Δευτ–Παρ: 08:30–16:00",
                    sub: "Επείγοντα: 24 ώρες / 7 μέρες",
                  },
                  {
                    icon: "📍",
                    label: "Τοποθεσία",
                    value: "Χανιά, Κρήτη",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-horizon/60 text-xs font-dm-mono tracking-wide uppercase mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-horizon transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                      {item.sub && <p className="text-success/90 text-sm">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Google Maps embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl overflow-hidden border-2 border-stone/20 shadow-sm"
                style={{ height: 320 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51673.76738958698!2d24.018!3d35.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149c63d6a2c06641%3A0x54fce92d04fb4d76!2sChanea%2C%20Crete!5e0!3m2!1sel!2sgr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Χάρτης Χανιά Κρήτη"
                />
              </motion.div>
            </div>

            {/* Right — Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-10 border border-stone/20 shadow-sm">
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">
                  Στείλτε μήνυμα
                </h3>
                <p className="text-text-mid text-sm mb-8">
                  Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.
                </p>

                {state === "success" ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h4 className="font-playfair text-2xl font-bold text-charcoal mb-2">
                      Το μήνυμά σας στάλθηκε!
                    </h4>
                    <p className="text-text-mid">
                      Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Όνομα <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Το ονοματεπώνυμό σας"
                          className="w-full px-4 py-3 rounded-xl border border-stone/30 bg-sand/30 focus:outline-none focus:border-sea-mid focus:ring-2 focus:ring-sea-mid/20 text-charcoal placeholder-text-mid/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Τηλέφωνο <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="69XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-stone/30 bg-sand/30 focus:outline-none focus:border-sea-mid focus:ring-2 focus:ring-sea-mid/20 text-charcoal placeholder-text-mid/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone/30 bg-sand/30 focus:outline-none focus:border-sea-mid focus:ring-2 focus:ring-sea-mid/20 text-charcoal placeholder-text-mid/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Υπηρεσία
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone/30 bg-sand/30 focus:outline-none focus:border-sea-mid focus:ring-2 focus:ring-sea-mid/20 text-charcoal transition-all appearance-none"
                      >
                        <option value="">Επιλέξτε υπηρεσία...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Μήνυμα <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Περιγράψτε την ανάγκη σας..."
                        className="w-full px-4 py-3 rounded-xl border border-stone/30 bg-sand/30 focus:outline-none focus:border-sea-mid focus:ring-2 focus:ring-sea-mid/20 text-charcoal placeholder-text-mid/50 transition-all resize-none"
                      />
                    </div>

                    {state === "error" && (
                      <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
                        Σφάλμα αποστολής. Δοκιμάστε ξανά ή καλέστε μας στο 6907415055.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={state === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-aegean hover:bg-sea-mid text-white font-semibold text-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state === "loading" ? "Αποστολή..." : "Αποστολή Μηνύματος →"}
                    </motion.button>

                    <p className="text-text-mid/60 text-xs text-center">
                      Ή καλέστε απευθείας:{" "}
                      <a href="tel:6907415055" className="text-sea-mid font-medium">
                        6907415055
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
