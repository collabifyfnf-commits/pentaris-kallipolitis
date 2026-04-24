import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pentaris-kallipolitis.com"),
  title: {
    default: "Κλιματισμός Χανιά | Πεντάρης–Καλλιπολίτης Ο.Ε.",
    template: "%s | Πεντάρης–Καλλιπολίτης Ο.Ε.",
  },
  description:
    "Εγκατάσταση, service και επισκευή κλιματιστικών στα Χανιά Κρήτης. Μηχανολόγος Μηχανικός & πιστοποιημένος ψυκτικός. 25+ χρόνια εμπειρία. Εξουσιοδοτημένοι Fujitsu, Toyotomi, GREE.",
  keywords: [
    "κλιματισμός Χανιά",
    "εγκατάσταση κλιματιστικού Χανιά",
    "service κλιματιστικού Κρήτη",
    "επισκευή κλιματιστικού",
    "μηχανολογικές μελέτες Χανιά",
    "ΚΕΝΑΚ",
    "Fujitsu Χανιά",
    "Πεντάρης Καλλιπολίτης",
  ],
  authors: [{ name: "Σ. Πεντάρης – Χ. Καλλιπολίτης Ο.Ε." }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://pentaris-kallipolitis.com",
    siteName: "Πεντάρης–Καλλιπολίτης Ο.Ε.",
    title: "Κλιματισμός & Μηχανολογικές Μελέτες Χανιά | Πεντάρης–Καλλιπολίτης",
    description:
      "Εγκατάσταση, service και επισκευή κλιματιστικών στα Χανιά Κρήτης. Μηχανολόγος Μηχανικός & πιστοποιημένος ψυκτικός. 25+ χρόνια εμπειρία.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Κλιματισμός Χανιά | Πεντάρης–Καλλιπολίτης Ο.Ε.",
    description: "Εγκατάσταση, service και επισκευή κλιματιστικών στα Χανιά Κρήτης.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Πεντάρης–Καλλιπολίτης Ο.Ε.",
  description:
    "Εγκατάσταση, service και επισκευή κλιματιστικών στα Χανιά Κρήτης. Μηχανολόγος Μηχανικός & πιστοποιημένος ψυκτικός.",
  url: "https://pentaris-kallipolitis.com",
  telephone: "+306907415055",
  email: "kallipolitismike@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Χανιά",
    addressRegion: "Κρήτη",
    addressCountry: "GR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.5138, longitude: 24.018 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:00",
    },
  ],
  areaServed: "Δυτική Κρήτη",
  priceRange: "€€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
