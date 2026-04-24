import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E1C2E" }} className="text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sea-light to-sea-mid flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-base">ΠΚ</span>
              </div>
              <div>
                <div className="text-white font-playfair font-semibold text-base leading-tight">
                  Πεντάρης–Καλλιπολίτης
                </div>
                <div className="text-white/40 text-[11px] font-dm-mono tracking-wide uppercase">
                  Ο.Ε. · Χανιά, Κρήτη
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Μηχανολόγος Μηχανικός και πιστοποιημένος ψυκτικός τεχνικός. Κλιματισμός και μηχανολογικές μελέτες στα Χανιά από το 2016.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", icon: "IG", href: "#" },
                { label: "Facebook", icon: "FB", href: "#" },
                { label: "TikTok", icon: "TK", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-sea-mid/40 flex items-center justify-center text-white/50 hover:text-white text-xs font-mono transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm mb-5 tracking-wide uppercase font-dm-mono">
              Υπηρεσίες
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Εγκατάσταση Κλιματιστικού", href: "/services/egkatastasi" },
                { label: "Service & Συντήρηση", href: "/services/service-syntirisi" },
                { label: "Επισκευή Βλάβης", href: "/services/episkevi-vlabis" },
                { label: "Επαγγελματικές Εγκαταστάσεις", href: "/services/epaggelmatika" },
                { label: "Μηχανολογικές Μελέτες", href: "/services/mixanologikes-meletes" },
                { label: "Όλες οι Υπηρεσίες", href: "/services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm mb-5 tracking-wide uppercase font-dm-mono">
              Εταιρία
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Ποιοι Είμαστε", href: "/about" },
                { label: "Τα Έργα μας", href: "/erga" },
                { label: "Επικοινωνία", href: "/epikoinonia" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm mb-5 tracking-wide uppercase font-dm-mono">
              Επικοινωνία
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6907415055"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <span className="mt-0.5 text-sea-light">📞</span>
                  <span className="text-sm">6907415055</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kallipolitismike@gmail.com"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 text-sea-light">✉️</span>
                  <span className="text-sm break-all">kallipolitismike@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <span className="mt-0.5 text-sea-light">🕐</span>
                <span className="text-sm">
                  Δευτ–Παρ: 08:30–16:00
                  <br />
                  <span className="text-success/80">Επείγοντα: 24 ώρες</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <span className="mt-0.5 text-sea-light">📍</span>
                <span className="text-sm">Χανιά, Κρήτη</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-sm">
            © 2025 Σ. Πεντάρης – Χ. Καλλιπολίτης Ο.Ε. | Χανιά, Κρήτη
          </p>
          <p className="text-white/20 text-xs">
            pentaris-kallipolitis.com
          </p>
        </div>
      </div>
    </footer>
  );
}
