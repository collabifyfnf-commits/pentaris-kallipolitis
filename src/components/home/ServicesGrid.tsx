"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: "🔧",
    title: "Εγκατάσταση Κλιματιστικού",
    description: "Επαγγελματική εγκατάσταση για οικίες και επιχειρήσεις, με εγγύηση εργασιών 1 έτους.",
    href: "/services/egkatastasi",
  },
  {
    icon: "🛠️",
    title: "Service & Συντήρηση",
    description: "Ετήσια συντήρηση για μέγιστη απόδοση και οικονομία ενέργειας.",
    href: "/services/service-syntirisi",
  },
  {
    icon: "⚡",
    title: "Επισκευή Βλάβης",
    description: "Γρήγορη διάγνωση και επισκευή. Επείγοντα εντός 24 ωρών.",
    href: "/services/episkevi-vlabis",
  },
  {
    icon: "🏢",
    title: "Επαγγελματικές Εγκαταστάσεις",
    description: "Κλιματισμός για ξενοδοχεία, καταστήματα, γραφεία και βιομηχανικούς χώρους.",
    href: "/services/epaggelmatika",
  },
  {
    icon: "📋",
    title: "Μηχανολογικές Μελέτες",
    description: "Μελέτες ΚΕΝΑΚ, πυρασφάλεια, οικοδομικές άδειες, άδειες λειτουργίας.",
    href: "/services/mixanologikes-meletes",
  },
  {
    icon: "🏗️",
    title: "Κεντρικές & Αυτόνομες Μονάδες",
    description: "Σχεδιασμός και εγκατάσταση κεντρικών συστημάτων κλιματισμού.",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-aegean relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #5B9EC9 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel light>Υπηρεσίες</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Ό,τι χρειάζεστε για τον κλιματισμό σας
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.href}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <ServiceCard {...service} dark />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/8 font-medium transition-all"
          >
            Δείτε όλες τις υπηρεσίες →
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  );
}
