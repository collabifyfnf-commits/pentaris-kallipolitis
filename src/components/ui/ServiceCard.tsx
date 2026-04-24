"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  dark?: boolean;
}

export default function ServiceCard({ icon, title, description, href, dark = false }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: dark ? "0 20px 40px rgba(0,0,0,0.4)" : "0 20px 40px rgba(27,58,92,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative rounded-[18px] p-7 flex flex-col gap-4 cursor-pointer border transition-all duration-300 ${
        dark
          ? "bg-[#1f3d5f] border-white/10 hover:border-sea-light/40"
          : "bg-white border-stone/30 hover:border-sea-light/60"
      }`}
    >
      <div className="text-4xl">{icon}</div>
      <h3
        className={`font-playfair text-xl font-semibold ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h3>
      <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-horizon/80" : "text-text-mid"}`}>
        {description}
      </p>
      <Link
        href={href}
        className={`inline-flex items-center gap-1.5 text-sm font-medium mt-auto transition-colors ${
          dark ? "text-sea-light hover:text-horizon" : "text-sea-mid hover:text-aegean"
        }`}
      >
        Μάθετε περισσότερα
        <motion.span
          className="inline-block"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}
