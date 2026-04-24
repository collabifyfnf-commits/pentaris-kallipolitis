"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  { label: "Εγκατάσταση Κλιματιστικού", href: "/services/egkatastasi" },
  { label: "Service & Συντήρηση", href: "/services/service-syntirisi" },
  { label: "Επισκευή Βλάβης", href: "/services/episkevi-vlabis" },
  { label: "Επαγγελματικές Εγκαταστάσεις", href: "/services/epaggelmatika" },
  { label: "Μηχανολογικές Μελέτες", href: "/services/mixanologikes-meletes" },
];

const navLinks = [
  { label: "Ποιοι Είμαστε", href: "/about" },
  { label: "Έργα μας", href: "/erga" },
  { label: "Επικοινωνία", href: "/epikoinonia" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-aegean/95 backdrop-blur-[12px] shadow-lg shadow-aegean/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sea-light to-sea-mid flex items-center justify-center shadow-md">
                <span className="text-white font-playfair font-bold text-base leading-none">ΠΚ</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-playfair font-semibold text-base leading-tight">
                  Πεντάρης–Καλλιπολίτης
                </div>
                <div className="text-horizon/70 text-[11px] font-dm-mono tracking-wide uppercase">
                  Μηχανολογικές Μελέτες · Κλιματισμός
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link px-4 py-2 text-white/90 hover:text-white text-sm font-medium relative group flex items-center gap-1 transition-colors">
                  Υπηρεσίες
                  <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-horizon group-hover:w-full transition-all duration-300" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-[#0E1C2E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/8 text-sm transition-all"
                          >
                            {s.label}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="flex items-center justify-between gap-3 px-4 py-3 mt-1 rounded-xl text-sea-light hover:text-white hover:bg-sea-mid/20 text-sm font-medium transition-all border-t border-white/5"
                        >
                          Όλες οι υπηρεσίες →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-white/90 hover:text-white text-sm font-medium relative group transition-colors"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-horizon group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:6907415055"
                className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                6907415055
              </a>
              <Link
                href="/epikoinonia"
                className="px-5 py-2.5 bg-sea-mid hover:bg-sea-light text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-sea-mid/30"
              >
                Κλείστε Ραντεβού
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-transform"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0E1C2E] flex flex-col"
          >
            <div className="h-20" />
            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              <div className="mb-4">
                <p className="section-label text-horizon/60 mb-3">Υπηρεσίες</p>
                {services.map((s, i) => (
                  <motion.div
                    key={s.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-3.5 border-b border-white/5 text-white/80 hover:text-white text-lg transition-colors"
                    >
                      {s.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (services.length + i) * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center py-4 border-b border-white/5 text-white text-xl font-medium transition-colors hover:text-horizon"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-4">
                <a
                  href="tel:6907415055"
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-sea-mid text-white text-lg font-medium"
                >
                  📞 6907415055
                </a>
                <Link
                  href="/epikoinonia"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center py-4 rounded-2xl border border-white/20 text-white/80 text-lg"
                >
                  Επικοινωνία
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
