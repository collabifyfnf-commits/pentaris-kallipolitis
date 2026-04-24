"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 25, suffix: "+", label: "Χρόνια Εμπειρίας", description: "στον κλάδο κλιματισμού" },
  { value: 24, suffix: "h", label: "Εξυπηρέτηση Επειγόντων", description: "7 ημέρες την εβδομάδα" },
  { value: 20, suffix: "+", label: "Περιοχές Κάλυψης", description: "Δυτική Κρήτη" },
  { value: 1, suffix: " έτος", label: "Εγγύηση Εγκατάστασης", description: "σε κάθε εργασία" },
];

export default function StatsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#EDE4D8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-stone/20"
            >
              <div className="font-playfair text-5xl sm:text-6xl font-bold text-aegean mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-charcoal text-sm sm:text-base mb-1">{stat.label}</div>
              <div className="text-stone-dark text-xs sm:text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
