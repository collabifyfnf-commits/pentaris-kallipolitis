import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustTicker from "@/components/home/TrustTicker";
import IntroSection from "@/components/home/IntroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import PartnersSection from "@/components/home/PartnersSection";
import StatsSection from "@/components/home/StatsSection";
import AreasSection from "@/components/home/AreasSection";
import BrandsSection from "@/components/home/BrandsSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Κλιματισμός Χανιά | Πεντάρης–Καλλιπολίτης Ο.Ε.",
  description:
    "Εγκατάσταση, service και επισκευή κλιματιστικών στα Χανιά Κρήτης. Μηχανολόγος Μηχανικός & πιστοποιημένος ψυκτικός. 25+ χρόνια εμπειρία. Εξουσιοδοτημένοι Fujitsu, Toyotomi, GREE.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <IntroSection />
      <ServicesGrid />
      <PartnersSection />
      <StatsSection />
      <AreasSection />
      <BrandsSection />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
