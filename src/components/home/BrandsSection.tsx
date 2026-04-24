"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const authorizedBrands = [
  {
    name: "FUJITSU",
    description: "Εξουσιοδοτημένο service & εγκατάσταση (FG Europe, Όμιλος Φειδάκη)",
  },
  {
    name: "MIDEA",
    description: "Εξουσιοδοτημένο service (FG Europe)",
  },
  {
    name: "TOYOTOMI",
    description: "Εξουσιοδοτημένο service & εγκατάσταση",
  },
  {
    name: "GREE",
    description: "Εξουσιοδοτημένο service & εγκατάσταση",
  },
  {
    name: "KEROSUN",
    description: "Εξουσιοδοτημένο service & θέρμανση",
  },
];

const otherBrands = [
  "TCL", "Daikin", "Mitsubishi", "Samsung", "LG",
  "Bosch", "Toshiba", "Panasonic", "Hitachi",
];

const chains = [
  "ΚΩΤΣΟΒΟΛΟΣ",
  "MEDIA MARKT",
  "PUBLIC",
  "CARREFOUR",
  "MAKRO – THE MART",
  "ΚΟΡΑΣΙΔΗΣ",
  "ΣΕΗΟΣ",
  "ΗΛΕΚΤΡΟΝΙΚΗ ΑΘΗΝΩΝ",
];

export default function BrandsSection() {
  return (
    <section className="py-24 bg-aegean relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #A8C8E0 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <SectionLabel light>Εξουσιοδοτήσεις & Συνεργασίες</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl sm:text-5xl font-bold text-white"
          >
            Αυτοί μας εμπιστεύτηκαν
          </motion.h2>
        </div>

        {/* Group A — Authorized */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-horizon/60 font-dm-mono text-xs tracking-widest uppercase mb-6 text-center"
          >
            Εξουσιοδοτημένο Service
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {authorizedBrands.map((brand) => (
              <motion.div
                key={brand.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.12)", scale: 1.03 }}
                className="bg-white/6 rounded-2xl p-5 border border-white/10 text-center transition-all cursor-default"
              >
                <div className="font-playfair text-xl font-bold text-white mb-2">{brand.name}</div>
                <div className="text-horizon/60 text-xs leading-relaxed">{brand.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Group B — Installation */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-horizon/60 font-dm-mono text-xs tracking-widest uppercase mb-6 text-center"
          >
            Εγκατάσταση & Service
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {otherBrands.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium"
              >
                {brand}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/60 text-sm italic">
              & όλες οι μεγάλες μάρκες
            </span>
          </motion.div>
        </div>

        {/* Group C — Chains */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-horizon/60 font-dm-mono text-xs tracking-widest uppercase mb-6 text-center"
          >
            Μεγάλες Αλυσίδες που μας εμπιστεύτηκαν
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {chains.map((chain) => (
              <span
                key={chain}
                className="px-5 py-2.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-sm font-medium hover:bg-white/14 hover:text-white transition-all cursor-default"
              >
                {chain}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
