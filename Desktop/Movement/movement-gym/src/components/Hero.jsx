import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F0F0F] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#FFD700] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-5">
          Chania, Greece
        </p>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white mb-4"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
        >
          MOVEMENT
          <span className="block text-[#FFD700]">ATTENTIVE TRAINING</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <span className="h-px w-16 bg-[#FFD700]/60" />
          <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.15em] uppercase text-gray-200">
            Get Stronger &nbsp;/&nbsp; Move Faster &nbsp;/&nbsp; Jump Higher
          </p>
          <span className="h-px w-16 bg-[#FFD700]/60" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#FFD700] text-black font-black text-sm sm:text-base px-8 py-4 tracking-widest uppercase hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg shadow-yellow-500/20 min-h-[52px] flex items-center justify-center"
          >
            BOOK YOUR SESSION
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border-2 border-white text-white font-bold text-sm sm:text-base px-8 py-4 tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200 min-h-[52px] flex items-center justify-center"
          >
            EXPLORE OUR SERVICES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#reviews"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-[#FFD700] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
