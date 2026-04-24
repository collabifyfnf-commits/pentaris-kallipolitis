"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const words = ["Κλιματισμός", "&", "Μηχανολογικές", "Μελέτες", "στα", "Χανιά"];

const statPills = [
  { value: "25+", label: "χρόνια εμπειρίας" },
  { value: "24h", label: "επείγοντα" },
  { value: "20+", label: "περιοχές" },
  { value: "1 έτος", label: "εγγύηση" },
];

export default function Hero() {
  return (
    <section className="hero-gradient hero-grid relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sea-light/30 bg-white/8 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sea-light animate-pulse" />
          <span className="text-horizon text-sm font-dm-mono tracking-wide">
            Εξουσιοδοτημένοι Συνεργάτες Fujitsu · Toyotomi · GREE
          </span>
        </motion.div>

        {/* H1 — staggered word reveal */}
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word === "&" ? <em className="not-italic text-sea-light">&</em> : word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-horizon/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          25 χρόνια εμπειρία. Μηχανολόγος Μηχανικός και πιστοποιημένος ψυκτικός μαζί.
          Εγκατάσταση, service και μελέτες για κάθε ανάγκη — οικιακή και επαγγελματική.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="tel:6907415055"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(196,180,154,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-charcoal transition-all"
            style={{ backgroundColor: "#C4B49A" }}
          >
            📞 Καλέστε Τώρα
            <span className="font-dm-mono text-sm opacity-70">6907415055</span>
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white/90 hover:border-white/60 hover:text-white font-medium transition-all"
            >
              Δείτε τις Υπηρεσίες
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {statPills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.7 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
            >
              <span className="text-white font-semibold font-playfair text-base">{pill.value}</span>
              <span className="text-horizon/70 text-sm">{pill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-dm-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80 C360 20 1080 20 1440 80 L1440 80 L0 80 Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  );
}
