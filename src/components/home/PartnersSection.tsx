"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const christosCredentials = [
  "Επιθεωρητής Αερίων Θερμοκηπίου Γ΄ Κατηγορίας (Παν. Λευκωσίας, 2017)",
  "Εξουσιοδοτημένο service Fujitsu/MIDEA, Toyotomi/GREE, Kerosun",
  "Εξουσιοδοτημένος τεχνικός Κωτσόβολος, Media Markt, Carrefour, Public",
  "Ίδρυση επιχείρησης κλιματισμού στα Χανιά από το 2000",
];

const spyrosCredentials = [
  "Μελέτες Κλιματισμού, Υδραυλικών, Πυρασφαλείας, Ηλεκτρικών",
  "Μελέτες ΚΕΝΑΚ — Ενεργειακή Απόδοση Κτιρίων",
  "Αδειοδοτήσεις οικοδομικές & άδειες λειτουργίας επιχειρήσεων",
  "Εξωτερικός Τεχνικός Ασφαλείας επιχειρήσεων",
];

function PartnerCard({
  initials,
  role,
  name,
  title,
  bio,
  credentials,
  color,
  delay,
}: {
  initials: string;
  role: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  color: "blue" | "stone";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: "rgba(91,158,201,0.5)" }}
      className="bg-white rounded-[20px] p-8 border-2 border-stone/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-6"
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-5">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-playfair text-2xl font-bold shadow-md flex-shrink-0 ${
            color === "blue"
              ? "bg-gradient-to-br from-sea-mid to-aegean"
              : "bg-gradient-to-br from-stone to-stone-dark"
          }`}
        >
          {initials}
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-dm-mono font-medium mb-2 ${
              color === "blue"
                ? "bg-sea-light/15 text-sea-mid"
                : "bg-stone/20 text-stone-dark"
            }`}
          >
            {role}
          </span>
          <h3 className="font-playfair text-xl font-bold text-charcoal">{name}</h3>
          <p className="text-text-mid text-sm">{title}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-text-mid leading-relaxed">{bio}</p>

      {/* Credentials */}
      <ul className="space-y-2.5">
        {credentials.map((c) => (
          <li key={c} className="flex items-start gap-3 text-sm text-charcoal">
            <svg className="w-4 h-4 mt-0.5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {c}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <SectionLabel>Ποιοι Είμαστε</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal"
          >
            Μηχανολόγος & Ψυκτικός —{" "}
            <span className="text-sea-mid">Μαζί από το 2016</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <PartnerCard
            initials="ΧΚ"
            role="Ψυκτικός Τεχνικός"
            name="Χρήστος Καλλιπολίτης"
            title="Πιστοποιημένος Τεχνικός Ψυκτικών & Κλιματισμού"
            bio="Ξεκίνησε την καριέρα του στη Fujitsu FG Europe το 1994 και ίδρυσε δική του επιχείρηση κλιματισμού στα Χανιά το 2000. Με 25+ χρόνια εμπειρίας, αποτελεί έναν από τους πλέον έμπειρους ψυκτικούς τεχνικούς της Κρήτης."
            credentials={christosCredentials}
            color="blue"
            delay={0}
          />
          <PartnerCard
            initials="ΣΠ"
            role="Μηχανολόγος Μηχανικός"
            name="Σπύρος Πεντάρης"
            title="Μελετητής Μηχανολογικών Εγκαταστάσεων"
            bio="Δραστηριοποιείται από το 2005 στη Μελέτη Μηχανολογικών Εγκαταστάσεων, σε στενή συνεργασία με Αρχιτέκτονες και Πολιτικούς Μηχανικούς σε όλα τα Χανιά. Έχει εκπονήσει μελέτες για κατοικίες, ξενοδοχεία, βιομηχανικά κτίρια και σχολεία."
            credentials={spyrosCredentials}
            color="stone"
            delay={0.15}
          />
        </div>

        {/* Dark banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-aegean rounded-3xl p-10 text-center"
        >
          <p className="text-horizon/60 font-dm-mono text-sm tracking-wide uppercase mb-3">
            Από το 2016
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
            Μελέτη και εκτέλεση στο ίδιο χέρι.
          </h3>
          <p className="text-horizon/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Η εταιρία Πεντάρης–Καλλιπολίτης Ο.Ε. σας προσφέρει τη σπάνια συνέργεια μηχανολόγου
            μηχανικού και πιστοποιημένου ψυκτικού. Αυτό σημαίνει: σωστή μελέτη, επαγγελματική
            εκτέλεση και πλήρης αδειοδότηση — όλα από ένα σημείο.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-medium border border-white/20 transition-all"
          >
            Γνωρίστε μας →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
