"use client";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/home/CtaSection";

export default function ServicePage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return notFound();

  const related = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-grid relative pt-40 pb-28 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="text-5xl mb-6"
          >
            {service.icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-horizon/80 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {service.fullDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a
              href="tel:6907415055"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-charcoal text-lg transition-all"
              style={{ backgroundColor: "#C4B49A" }}
            >
              📞 Καλέστε Τώρα
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* What it includes */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Τι περιλαμβάνει</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-playfair text-4xl font-bold text-charcoal mb-8"
              >
                Πλήρης εξυπηρέτηση από Α έως Ω
              </motion.h2>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
                className="space-y-4"
              >
                {service.includes.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Why us */}
            <div>
              <SectionLabel>Γιατί εμείς</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-playfair text-4xl font-bold text-charcoal mb-8"
              >
                Η διαφορά που μετράει
              </motion.h2>
              <div className="space-y-5">
                {service.whyUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-stone/20 shadow-sm"
                  >
                    <h3 className="font-semibold text-charcoal text-lg mb-2">{item.title}</h3>
                    <p className="text-text-mid text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-aegean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel light>Διαδικασία</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl sm:text-5xl font-bold text-white"
            >
              Πώς δουλεύουμε
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/8 rounded-2xl p-7 border border-white/10 relative"
              >
                <div className="w-10 h-10 rounded-xl bg-sea-light/20 border border-sea-light/30 flex items-center justify-center text-sea-light font-playfair font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-horizon/70 text-sm leading-relaxed">{step.description}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-sea-light/40 text-xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: "#F8F5F0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Ερωτήσεις</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl font-bold text-charcoal"
            >
              Συχνές ερωτήσεις
            </motion.h2>
          </div>
          <div className="space-y-3">
            {service.faq.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  openFaq === i ? "border-sea-light/50 bg-white shadow-md" : "border-stone/20 bg-white/60"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-semibold text-charcoal">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-light text-lg transition-colors ${
                      openFaq === i ? "bg-sea-mid text-white" : "bg-stone/20 text-stone-dark"
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-text-mid text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20" style={{ backgroundColor: "#EDE4D8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-2xl font-bold text-charcoal mb-8 text-center"
          >
            Δείτε και τις άλλες υπηρεσίες μας
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="block bg-white rounded-2xl p-6 border border-stone/20 hover:border-sea-light/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-semibold text-charcoal mb-1 group-hover:text-sea-mid transition-colors">{s.title}</div>
                  <div className="text-text-mid text-sm">{s.description}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
