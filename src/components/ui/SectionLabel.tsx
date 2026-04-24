"use client";
import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`section-label inline-flex items-center gap-2 mb-4 ${
        light
          ? "text-horizon"
          : "text-sea-mid"
      } ${className}`}
    >
      <span className={`inline-block w-6 h-px ${light ? "bg-horizon" : "bg-sea-mid"}`} />
      {children}
    </motion.span>
  );
}
