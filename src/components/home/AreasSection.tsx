"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const areas = [
  "Χανιά",
  "Κίσσαμος",
  "Σούδα",
  "Σταλός",
  "Αγία Μαρίνα",
  "Πλατανιάς",
  "Μάλεμε",
  "Γεράνι",
  "Κολυμβάρι",
  "Φαλάσαρνα",
  "Μουρνιές",
  "Ακρωτήρι",
  "Σταυρός",
  "Καλύβες",
  "Αρμένοι",
  "Γεωργιούπολη",
  "Βρύσες",
  "και άλλες",
];

export default function AreasSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <SectionLabel>Περιοχές Εξυπηρέτησης</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6"
            >
              Καλύπτουμε ολόκληρη τη{" "}
              <span className="text-sea-mid">Δυτική Κρήτη</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-text-mid leading-relaxed"
            >
              <p>
                Εξυπηρετούμε πελάτες από τα Χανιά μέχρι τον Κίσσαμο,
                τη Γεωργιούπολη και σε όλες τις παρακείμενες περιοχές της Δυτικής Κρήτης.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/60 border border-stone/20">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-medium text-charcoal text-sm">Χρέωση μετακίνησης</p>
                  <p className="text-sm text-text-mid">
                    Για αποστάσεις άνω των 20 χλμ από τα Χανιά ισχύει χρέωση 1€/χλμ.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — tag cloud */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
            className="flex flex-wrap gap-3"
          >
            {areas.map((area) => (
              <motion.span
                key={area}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                whileHover={{ backgroundColor: "#1B3A5C", color: "#ffffff", scale: 1.05 }}
                className="px-4 py-2.5 rounded-full text-sm font-medium text-charcoal border border-stone/30 cursor-default transition-colors"
                style={{ backgroundColor: "#EDE4D8" }}
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
