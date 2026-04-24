"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const usps = [
  {
    icon: "🔧",
    title: "Εξουσιοδοτημένο service",
    description: "Fujitsu, Toyotomi, GREE, Kerosun",
  },
  {
    icon: "📐",
    title: "Μηχανολόγος Μηχανικός",
    description: "Μελέτες & Αδειοδοτήσεις",
  },
  {
    icon: "⚡",
    title: "Επείγοντα εντός 24 ωρών",
    description: "7 μέρες την εβδομάδα",
  },
  {
    icon: "🏆",
    title: "25+ χρόνια εμπειρίας",
    description: "Στον κλάδο κλιματισμού",
  },
];

export default function IntroSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14 items-center">

          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <SectionLabel>Η εταιρία μας</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6"
            >
              Δύο ειδικοί.{" "}
              <span className="text-sea-mid">Μία ολοκληρωμένη λύση.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-text-mid leading-relaxed text-lg"
            >
              <p>
                Ο <strong className="text-charcoal">Σπύρος Πεντάρης</strong>, Μηχανολόγος Μηχανικός,
                και ο <strong className="text-charcoal">Χρήστος Καλλιπολίτης</strong>, πιστοποιημένος
                ψυκτικός τεχνικός με 25+ χρόνια εμπειρίας, συνεργάζονται από το 2016 ως{" "}
                <strong className="text-charcoal">Σ. Πεντάρης – Χ. Καλλιπολίτης Ο.Ε.</strong>
              </p>
              <p>
                Αυτή η σπάνια συνέργεια σημαίνει ότι κάθε έργο λαμβάνει την πλήρη επιστημονική
                θεμελίωση (μελέτη, σχεδιασμός, αδειοδότηση) και την εξειδικευμένη τεχνική
                εκτέλεση — κάτω από την ίδια στέγη.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sea-mid hover:text-aegean font-semibold text-lg transition-colors group"
              >
                Γνωρίστε μας
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right — USP pills */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {usps.map((usp, i) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone/20 shadow-sm hover:shadow-md hover:border-sea-light/40 transition-all duration-300"
                >
                  <span className="text-2xl mt-0.5">{usp.icon}</span>
                  <div>
                    <div className="font-semibold text-charcoal">{usp.title}</div>
                    <div className="text-text-mid text-sm mt-0.5">{usp.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
