const brands = [
  "FUJITSU",
  "TOYOTOMI",
  "GREE",
  "MIDEA",
  "KEROSUN",
  "TCL",
  "ΚΩΤΣΟΒΟΛΟΣ",
  "MEDIA MARKT",
  "PUBLIC",
  "CARREFOUR",
  "MAKRO",
  "ΚΟΡΑΣΙΔΗΣ",
  "ΣΕΗΟΣ",
  "ΗΛΕΚΤΡΟΝΙΚΗ ΑΘΗΝΩΝ",
];

export default function TrustTicker() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: "#EDE4D8" }}>
      <div className="relative">
        <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-2">
              <span className="text-stone-dark font-dm-mono font-semibold text-sm tracking-widest uppercase">
                {brand}
              </span>
              <span className="text-aegean/50 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
