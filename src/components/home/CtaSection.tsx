"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="hero-grid absolute inset-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-horizon/60 font-dm-mono text-sm tracking-widest uppercase mb-4"
        >
          Επικοινωνία
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
        >
          Έχετε ανάγκη από κλιματισμό ή μελέτη;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-horizon/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Επικοινωνήστε μαζί μας σήμερα. Εξυπηρέτηση σε ολόκληρα τα Χανιά και τη Δυτική Κρήτη.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.a
            href="tel:6907415055"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(196,180,154,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-charcoal text-lg transition-all"
            style={{ backgroundColor: "#C4B49A" }}
          >
            📞 Καλέστε: 6907415055
          </motion.a>

          <motion.a
            href="mailto:kallipolitismike@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-white text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/8 transition-all"
          >
            ✉️ Στείλτε Email
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-horizon/50 text-sm font-dm-mono"
        >
          Ωράριο: 08:30–16:00 · Δευτ–Παρ &nbsp;·&nbsp; Επείγοντα: 24 ώρες / 7 μέρες
        </motion.p>
      </div>
    </section>
  );
}
