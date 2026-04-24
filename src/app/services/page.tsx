"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/home/CtaSection";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
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
            Υπηρεσίες
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-horizon/80 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Εγκατάσταση, service, επισκευή και μηχανολογικές μελέτες για κάθε ανάγκη — οικιακή και επαγγελματική.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Τι προσφέρουμε</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal"
            >
              Ό,τι χρειάζεστε,{" "}
              <span className="text-sea-mid">κάτω από μία στέγη</span>
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.slug}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(27,58,92,0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-full bg-white rounded-[20px] p-8 border-2 border-stone/20 hover:border-sea-light/50 transition-all duration-300 flex flex-col gap-5"
                  >
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
                      <p className="text-text-mid leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sea-mid font-medium text-sm group-hover:text-aegean transition-colors">
                      Περισσότερα
                      <motion.span className="inline-block" whileHover={{ x: 4 }}>→</motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {/* Extra card — Κεντρικές & Αυτόνομες */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div className="h-full bg-gradient-to-br from-aegean to-sea-mid rounded-[20px] p-8 flex flex-col gap-5">
                <div className="text-5xl">🏗️</div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                    Κεντρικές & Αυτόνομες Μονάδες
                  </h3>
                  <p className="text-horizon/80 leading-relaxed">
                    Σχεδιασμός και εγκατάσταση κεντρικών συστημάτων κλιματισμού για κτίρια κάθε κλίμακας.
                  </p>
                </div>
                <Link
                  href="/epikoinonia"
                  className="inline-flex items-center gap-2 text-horizon hover:text-white font-medium text-sm transition-colors"
                >
                  Επικοινωνήστε μαζί μας →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
