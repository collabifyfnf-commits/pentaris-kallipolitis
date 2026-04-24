import { Star, ExternalLink } from 'lucide-react'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Movement+Gym+Chania+%2F+Attentive+Training/@35.5058654,23.8724878,12z/data=!4m10!1m2!2m1!1smovement!3m6!1s0x149c7d23285a5323:0xde362c0a023fee41!8m2!3d35.5058654!4d24.0249231!15sCghtb3ZlbWVudJIBA2d5beABAA!16s%2Fg%2F11kpk877lm?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D'

const reviews = [
  {
    name: 'Rania Alex',
    quote:
      'Προπονητές εξαιρετικά καταρτισμένοι με διάθεση να παρέχουν συνεχή υποστήριξη. Η καλύτερη επιλογή για κάποιον που αναζητά αποτελεσματική προπόνηση σε ένα καλά οργανωμένο περιβάλλον!',
  },
  {
    name: 'Argyri Renieri',
    quote:
      'Φοβεροί επαγγελματίες και άνθρωποι με όρεξη και αγάπη για αυτό που κάνουν! Με απόλυτη προσοχή και σεβασμό σε κάθε αθλούμενο, ευγένεια και χαμόγελο. Γυμναστήριο που ξεχωρίζει για τη νοοτροπία του!',
  },
  {
    name: 'Christos Petras',
    quote:
      'Άριστα Καταρτισμενοι Επαγγελματίες με χαμόγελο και Διάθεση πάντα να σε υποστηρίξουν και να σε βελτιώσουν. Ξεχωρίζει το Πολύ καλό κλίμα στον χώρο που έχουν δημιουργήσει τα παιδιά.',
  },
]

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#0F0F0F] py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Community
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            WHAT OUR MEMBERS SAY
          </h2>
        </div>

        {/* Rating bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 mb-14">
          <div className="flex items-center gap-2">
            <StarRow />
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">(24 Reviews)</span>
          </div>
          <span className="hidden sm:block text-gray-600">|</span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#FFD700] text-sm font-semibold hover:underline transition-all"
          >
            See all reviews on Google Maps
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#1A1A1A] border-t-4 border-[#FFD700] p-7 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <StarRow />
              <p className="text-gray-300 text-base leading-relaxed mt-5 mb-6 italic">
                "{review.quote}"
              </p>
              <p className="text-white font-bold tracking-wide">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
