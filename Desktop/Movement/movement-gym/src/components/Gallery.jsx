const images = [
  {
    src: '/images/hero.png',
    alt: 'Barbell training at Movement Gym — EASY DO',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/coaching.png',
    alt: 'Coach with client deadlift preparation',
    className: '',
  },
  {
    src: '/images/teamwork.png',
    alt: 'Team Work Always — coach and athlete',
    className: '',
  },
  {
    src: '/images/mobility.png',
    alt: 'Mobility and stretching session',
    className: '',
  },
  {
    src: '/images/weights.png',
    alt: 'Trap bar deadlift close-up',
    className: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0F0F0F] py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            The Space
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            OUR FACILITY
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[640px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden relative ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden relative aspect-square ${i === 0 ? 'col-span-2 aspect-video' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
