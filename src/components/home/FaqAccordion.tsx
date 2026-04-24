"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Πόσο συχνά χρειάζεται service το κλιματιστικό;",
    a: "Συνιστούμε ετήσια συντήρηση, ιδανικά κάθε άνοιξη πριν τη θερινή περίοδο. Έτσι εξασφαλίζετε μέγιστη απόδοση, οικονομία ενέργειας και αποφυγή αιφνίδιων βλαβών.",
  },
  {
    q: "Εξυπηρετείτε επείγοντα εκτός ωραρίου;",
    a: "Για επείγοντα περιστατικά προσπαθούμε να ανταποκριθούμε εντός 24 ωρών, 7 μέρες την εβδομάδα. Επικοινωνήστε μαζί μας στο 6907415055.",
  },
  {
    q: "Γιατί μυρίζει το κλιματιστικό μου;",
    a: "Συνήθως οφείλεται σε βρώμικα φίλτρα ή ανάπτυξη μούχλας στον εναλλάκτη. Δοκιμάστε τη λειτουργία Dry. Αν επιμένει, επικοινωνήστε μαζί μας για επαγγελματικό καθαρισμό.",
  },
  {
    q: "Χρειάζομαι άδεια για εγκατάσταση κλιματιστικού;",
    a: "Για οικιακή εγκατάσταση συνήθως δεν απαιτείται άδεια. Για επαγγελματικούς χώρους, ο Σπύρος Πεντάρης αναλαμβάνει πλήρη αδειοδότηση — οικοδομικές άδειες και άδειες λειτουργίας.",
  },
  {
    q: "Τι εγγύηση δίνετε;",
    a: "Παρέχουμε εγγύηση εργασιών 1 έτους σε όλες τις εγκαταστάσεις, επιπλέον της εγγύησης κατασκευαστή στα μηχανήματα.",
  },
  {
    q: "Καλύπτετε και περιοχές έξω από τα Χανιά;",
    a: "Ναι. Καλύπτουμε Κίσσαμο, Σούδα, Αγία Μαρίνα, Πλατανιά, Γεωργιούπολη και 20+ περιοχές Δυτικής Κρήτης. Για αποστάσεις άνω των 20 χλμ ισχύει χρέωση 1€/χλμ.",
  },
  {
    q: "Ποια θερμοκρασία να βάλω το καλοκαίρι;",
    a: "Λειτουργία COOL στους 27°C για τον καλύτερο συνδυασμό ψυχικής άνεσης και ενεργειακής οικονομίας. Κάθε βαθμός κάτω από 26°C αυξάνει την κατανάλωση κατά ~8%.",
  },
  {
    q: "Τι περιλαμβάνει μια μηχανολογική μελέτη;",
    a: "Ο Σπύρος Πεντάρης εκπονεί μελέτες κλιματισμού, υδραυλικών, πυρασφάλειας, ηλεκτρικών εγκαταστάσεων και ΚΕΝΑΚ — ό,τι χρειάζεστε για άδεια ή λειτουργία επιχείρησης.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <SectionLabel>Συχνές Ερωτήσεις</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal"
          >
            Ό,τι θέλετε να ξέρετε
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-sea-light/50 bg-white shadow-md shadow-sea-light/10"
                  : "border-stone/20 bg-white/60 hover:border-stone/40"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-charcoal text-base leading-snug">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-colors ${
                    open === i ? "bg-sea-mid text-white" : "bg-stone/20 text-stone-dark"
                  }`}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="faq-content"
                  >
                    <div className="px-6 pb-6 text-text-mid leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
