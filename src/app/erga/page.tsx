"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/home/CtaSection";

const categories = [
  "Όλα",
  "Πέτρινες Κατοικίες",
  "Ξενοδοχεία",
  "Αυτόνομες Μονάδες",
  "Κεντρικές Μονάδες",
  "Ενοικιαζόμενα Δωμάτια",
  "Επαγγελματικές Εγκαταστάσεις",
];

const projects = [
  {
    id: 1,
    category: "Πέτρινες Κατοικίες",
    title: "Αναπαλαίωση πέτρινης κατοικίας",
    location: "Χανιά, Παλιά Πόλη",
    description: "Εγκατάσταση mini-split συστήματος σε παραδοσιακή πέτρινη κατοικία χωρίς να επηρεαστεί η αισθητική.",
    gradient: "from-stone-dark to-stone",
  },
  {
    id: 2,
    category: "Πέτρινες Κατοικίες",
    title: "Πέτρινη εξοχική κατοικία",
    location: "Γεράνι, Χανιά",
    description: "Σύστημα κλιματισμού 4 κεφαλών για εξοχική κατοικία με ιδιαίτερες αρχιτεκτονικές προκλήσεις.",
    gradient: "from-stone to-sand",
  },
  {
    id: 3,
    category: "Ξενοδοχεία",
    title: "Ξενοδοχείο 4 αστέρων",
    location: "Σταλός, Χανιά",
    description: "Κεντρικό σύστημα VRF για ξενοδοχείο 4 αστέρων — μελέτη, εγκατάσταση και αδειοδότηση.",
    gradient: "from-aegean to-sea-mid",
  },
  {
    id: 4,
    category: "Ξενοδοχεία",
    title: "Boutique Hotel",
    location: "Χανιά, Κέντρο",
    description: "Αυτόνομες μονάδες σε 12 δωμάτια boutique ξενοδοχείου παλιάς πόλης.",
    gradient: "from-sea-mid to-sea-light",
  },
  {
    id: 5,
    category: "Ενοικιαζόμενα Δωμάτια",
    title: "Σύμπλεγμα ενοικιαζόμενων",
    location: "Αγία Μαρίνα",
    description: "Εγκατάσταση 8 inverter κλιματιστικών σε σύμπλεγμα ενοικιαζόμενων δωματίων.",
    gradient: "from-sea-light to-horizon",
  },
  {
    id: 6,
    category: "Αυτόνομες Μονάδες",
    title: "Πολυκατοικία — 6 διαμερίσματα",
    location: "Σούδα, Χανιά",
    description: "Εγκατάσταση αυτόνομων inverter μονάδων σε εξαόροφη πολυκατοικία.",
    gradient: "from-horizon to-sand",
  },
  {
    id: 7,
    category: "Κεντρικές Μονάδες",
    title: "Εμπορικό κατάστημα",
    location: "Χανιά, Κέντρο",
    description: "Κεντρικό σύστημα κλιματισμού 24kW για εμπορικό κατάστημα 400τμ.",
    gradient: "from-aegean to-charcoal",
  },
  {
    id: 8,
    category: "Επαγγελματικές Εγκαταστάσεις",
    title: "Γραφεία επιχείρησης",
    location: "Χανιά",
    description: "Multi-split σύστημα για ανοικτό χώρο γραφείων — μελέτη θερμικών φορτίων και εγκατάσταση.",
    gradient: "from-sea-mid to-aegean",
  },
  {
    id: 9,
    category: "Πέτρινες Κατοικίες",
    title: "Παραδοσιακή μονοκατοικία",
    location: "Κολυμβάρι",
    description: "Διακριτική εγκατάσταση κλιματισμού σε 100ετή πέτρινη μονοκατοικία.",
    gradient: "from-stone-dark to-aegean",
  },
  {
    id: 10,
    category: "Επαγγελματικές Εγκαταστάσεις",
    title: "Εστιατόριο",
    location: "Πλατανιάς, Χανιά",
    description: "Σύστημα κλιματισμού αίθουσας, κουζίνας και χώρων υπαλλήλων.",
    gradient: "from-stone to-aegean",
  },
  {
    id: 11,
    category: "Ενοικιαζόμενα Δωμάτια",
    title: "Ανακαίνιση studios",
    location: "Γεωργιούπολη",
    description: "Αντικατάσταση παλιών κλιματιστικών με νέα inverter σε 10 studios.",
    gradient: "from-sea-light to-sea-mid",
  },
  {
    id: 12,
    category: "Κεντρικές Μονάδες",
    title: "Βιομηχανική εγκατάσταση",
    location: "Σούδα, Βιομηχανική Ζώνη",
    description: "Μηχανολογική μελέτη και εγκατάσταση βιομηχανικού κλιματισμού σε χώρο παραγωγής.",
    gradient: "from-charcoal to-aegean",
  },
];

export default function ErgaPage() {
  const [activeCategory, setActiveCategory] = useState("Όλα");

  const filtered =
    activeCategory === "Όλα" ? projects : projects.filter((p) => p.category === activeCategory);

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
            Τα Έργα μας
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-horizon/80 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Μια επιλογή από τα έργα που έχουμε υλοποιήσει σε όλη τη Δυτική Κρήτη.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <SectionLabel>Portfolio</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal mb-8"
            >
              Έργα σε κάθε κλίμακα
            </motion.h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-aegean text-white shadow-md"
                      : "bg-white text-text-mid border border-stone/30 hover:border-sea-light/50"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[20px] overflow-hidden border border-stone/20 shadow-sm hover:shadow-xl hover:border-sea-light/40 transition-all duration-300 cursor-default"
                >
                  {/* Photo placeholder — REPLACE WITH REAL PHOTO */}
                  <div
                    className={`h-52 bg-gradient-to-br ${project.gradient} relative flex items-end p-5`}
                  >
                    <span className="inline-block px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-dm-mono">
                      {project.category}
                    </span>
                    {/* REPLACE WITH REAL PHOTO: <Image src="..." fill alt={project.title} className="object-cover" /> */}
                  </div>

                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-1">{project.title}</h3>
                    <p className="text-sea-mid text-sm font-medium mb-3 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                    <p className="text-text-mid text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-mid">
              Δεν βρέθηκαν έργα σε αυτή την κατηγορία.
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
