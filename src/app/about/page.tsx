"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/home/CtaSection";

const timeline = [
  {
    year: "1994",
    title: "Τα πρώτα βήματα",
    description:
      "Ο Χρήστος Καλλιπολίτης ξεκινά την καριέρα του ως τεχνικός στη Fujitsu FG Europe, αποκτώντας βαθιά γνώση των ψυκτικών συστημάτων.",
    person: "Χρήστος Καλλιπολίτης",
  },
  {
    year: "2000",
    title: "Ίδρυση επιχείρησης",
    description:
      "Ο Χρήστος ιδρύει δική του επιχείρηση κλιματισμού στα Χανιά και γίνεται αποκλειστικός ή βασικός εξωτερικός συνεργάτης μεγάλων αλυσίδων (Κωτσόβολος, Media Markt, Public, Carrefour).",
    person: "Χρήστος Καλλιπολίτης",
  },
  {
    year: "2005",
    title: "Μηχανολογικές Μελέτες",
    description:
      "Ο Σπύρος Πεντάρης ξεκινά τη δραστηριότητά του ως Μηχανολόγος Μηχανικός, εκπονώντας μελέτες για κατοικίες, ξενοδοχεία και βιομηχανικά κτίρια σε όλα τα Χανιά.",
    person: "Σπύρος Πεντάρης",
  },
  {
    year: "2016",
    title: "Η εταιρία Πεντάρης–Καλλιπολίτης Ο.Ε.",
    description:
      "Σπύρος και Χρήστος ενώνουν τις δυνάμεις τους και ιδρύουν τη Σ. ΠΕΝΤΆΡΗΣ – Χ. ΚΑΛΛΙΠΟΛΙΤΗΣ Ο.Ε. — μία εταιρία που συνδυάζει μηχανολογική επιστήμη και πιστοποιημένη τεχνική εκτέλεση.",
    person: "Και οι δύο",
  },
  {
    year: "2017",
    title: "Πιστοποίηση Αερίων Θερμοκηπίου",
    description:
      "Ο Χρήστος αποκτά πιστοποίηση Επιθεωρητή Αερίων Θερμοκηπίου Γ΄ Κατηγορίας από το Πανεπιστήμιο Λευκωσίας — άδεια χρήσης φρεόν σε μεγάλες βιομηχανικές μονάδες.",
    person: "Χρήστος Καλλιπολίτης",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Ακρίβεια",
    description:
      "Κάθε εγκατάσταση και μελέτη εκτελείται με απόλυτη προσοχή στη λεπτομέρεια. Δεν κάνουμε συμβιβασμούς στην ποιότητα.",
  },
  {
    icon: "🤝",
    title: "Εμπιστοσύνη",
    description:
      "Χτίζουμε μακροχρόνιες σχέσεις με τους πελάτες μας βασισμένες σε ειλικρίνεια, διαφάνεια και αξιοπιστία.",
  },
  {
    icon: "🏅",
    title: "Επαγγελματισμός",
    description:
      "Εκπαίδευση, πιστοποιήσεις και συνεχής ενημέρωση για τις τελευταίες τεχνολογίες και κανονισμούς του κλάδου.",
  },
  {
    icon: "🌊",
    title: "Τοπικές Ρίζες",
    description:
      "Χανιώτες, γνωρίζουμε τις ανάγκες της τοπικής αγοράς και ανταποκρινόμαστε με ταχύτητα και αφοσίωση.",
  },
];

const christosCreds = [
  "Επιθεωρητής Αερίων Θερμοκηπίου Γ΄ Κατηγορίας (Παν. Λευκωσίας, 2017)",
  "Εξουσιοδοτημένο service Fujitsu / MIDEA (FG Europe, Όμιλος Φειδάκη)",
  "Εξουσιοδοτημένο service Toyotomi / GREE",
  "Εξουσιοδοτημένο service Kerosun",
  "Συνεργάτης: Κωτσόβολος, Media Markt, Public, Carrefour, Makro, Κορασίδης, ΣΕΗΟΣ, Ηλεκτρονική Αθηνών",
  "25+ χρόνια εμπειρίας στον κλάδο ψυκτικών και κλιματισμού",
];

const spyrosCreds = [
  "Μελέτες Κλιματισμού — Υπολογισμός θερμικών φορτίων, επιλογή συστήματος",
  "Μελέτες Υδραυλικών Εγκαταστάσεων",
  "Μελέτες Πυρασφάλειας (πυρανίχνευση, κατάσβεση)",
  "Μελέτες Ηλεκτρολογικών Εγκαταστάσεων",
  "Μελέτες ΚΕΝΑΚ — Ενεργειακή Απόδοση Κτιρίων",
  "Αδειοδοτήσεις: Οικοδομικές άδειες, Άδειες λειτουργίας επιχειρήσεων",
  "Εξωτερικός Τεχνικός Ασφαλείας επιχειρήσεων",
  "Συνεργασία με Αρχιτέκτονες & Πολιτικούς Μηχανικούς όλων των Χανίων",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-grid relative pt-40 pb-28 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sea-light/30 bg-white/8 backdrop-blur-sm mb-8"
          >
            <span className="text-horizon text-sm font-dm-mono tracking-wide">Η ιστορία μας</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            25 χρόνια εμπειρία,{" "}
            <span className="text-sea-light">δύο ειδικοί</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-horizon/80 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Μηχανολόγος Μηχανικός και πιστοποιημένος ψυκτικός — μαζί από το 2016 στα Χανιά Κρήτης.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Ιστορικό</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal"
            >
              Το χρονικό μας
            </motion.h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sea-light/60 via-stone/40 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex gap-8 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"} pl-14 sm:pl-0`}>
                    <div className="bg-white rounded-2xl p-6 border border-stone/20 shadow-sm">
                      <div className="font-playfair text-3xl font-bold text-sea-mid mb-1">{item.year}</div>
                      <h3 className="font-semibold text-charcoal text-lg mb-2">{item.title}</h3>
                      <p className="text-text-mid text-sm leading-relaxed">{item.description}</p>
                      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-sand text-stone-dark text-xs font-dm-mono">
                        {item.person}
                      </span>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-sea-mid border-4 border-white shadow-md" />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Cards — Full version */}
      <section className="py-24 bg-aegean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel light>Ποιοι Είμαστε</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-white"
            >
              Οι άνθρωποι πίσω από την εταιρία
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Christos */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/6 rounded-[24px] p-8 border border-white/10 flex flex-col gap-6"
            >
              {/* REPLACE WITH REAL PHOTO */}
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sea-mid to-aegean flex items-center justify-center text-white font-playfair text-3xl font-bold flex-shrink-0 shadow-lg">
                  ΧΚ
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sea-light/20 text-horizon text-xs font-dm-mono mb-2">
                    Ψυκτικός Τεχνικός
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white">Χρήστος Καλλιπολίτης</h3>
                  <p className="text-horizon/70 text-sm">Πιστοποιημένος Τεχνικός Ψυκτικών & Κλιματισμού</p>
                </div>
              </div>

              <p className="text-horizon/80 leading-relaxed">
                Ξεκίνησε την καριέρα του στη Fujitsu FG Europe το 1994 και ίδρυσε δική του επιχείρηση
                κλιματισμού στα Χανιά το 2000. Για χρόνια υπηρέτησε ως αποκλειστικός τεχνικός ή βασικός
                εξωτερικός συνεργάτης μεγάλων αλυσίδων ηλεκτρικών και οικιακών συσκευών σε όλη την Ελλάδα.
              </p>

              <div>
                <p className="text-horizon/50 font-dm-mono text-xs tracking-widest uppercase mb-3">
                  Πιστοποιήσεις & Εξουσιοδοτήσεις
                </p>
                <ul className="space-y-2.5">
                  {christosCreds.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-horizon/80">
                      <svg className="w-4 h-4 mt-0.5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Spyros */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/6 rounded-[24px] p-8 border border-white/10 flex flex-col gap-6"
            >
              {/* REPLACE WITH REAL PHOTO */}
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-stone to-stone-dark flex items-center justify-center text-white font-playfair text-3xl font-bold flex-shrink-0 shadow-lg">
                  ΣΠ
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-stone/20 text-stone text-xs font-dm-mono mb-2">
                    Μηχανολόγος Μηχανικός
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white">Σπύρος Πεντάρης</h3>
                  <p className="text-horizon/70 text-sm">Μελετητής Μηχανολογικών Εγκαταστάσεων</p>
                </div>
              </div>

              <p className="text-horizon/80 leading-relaxed">
                Δραστηριοποιείται από το 2005 στη Μελέτη Μηχανολογικών Εγκαταστάσεων, σε συνεχή συνεργασία
                με Αρχιτέκτονες και Πολιτικούς Μηχανικούς σε όλα τα Χανιά. Έχει εκπονήσει μελέτες για
                κατοικίες, ξενοδοχεία, σχολεία και βιομηχανικά κτίρια.
              </p>

              <div>
                <p className="text-horizon/50 font-dm-mono text-xs tracking-widest uppercase mb-3">
                  Αντικείμενα & Εξειδίκευση
                </p>
                <ul className="space-y-2.5">
                  {spyrosCreds.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-horizon/80">
                      <svg className="w-4 h-4 mt-0.5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Αξίες</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal"
            >
              Αυτό που μας καθοδηγεί
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-white rounded-2xl p-7 border border-stone/20 shadow-sm text-center hover:shadow-md hover:border-sea-light/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="text-text-mid text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
