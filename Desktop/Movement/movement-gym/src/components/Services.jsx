import { Dumbbell, Users, Target } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'PERSONAL TRAINING',
    description:
      'Fully customized strength and conditioning programs tailored to your goals. One-on-one coaching with expert trainers who track every rep of your progress.',
    cta: 'Get Started',
  },
  {
    icon: Users,
    title: 'GROUP CLASSES',
    description:
      'High-energy group training sessions designed to push your limits. Build strength, endurance, and community alongside fellow dedicated athletes.',
    cta: 'Join a Class',
  },
  {
    icon: Target,
    title: 'EXPERT COACHING',
    description:
      'Personalized guidance every step of the way. Technical form correction, nutrition support, and fully periodized program design for long-term results.',
    cta: 'Learn More',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Every program is built around you — your goals, your pace, your results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group bg-[#1A1A1A] border border-white/5 p-8 hover:border-[#FFD700]/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-14 h-14 bg-[#FFD700]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/20 transition-colors">
                  <Icon size={26} className="text-[#FFD700]" strokeWidth={1.8} />
                </div>

                <h3 className="text-[#FFD700] font-black text-lg tracking-widest uppercase mb-4">
                  {s.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm mb-8">
                  {s.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-white text-xs font-bold tracking-widest uppercase border-b border-[#FFD700]/50 pb-0.5 hover:text-[#FFD700] hover:border-[#FFD700] transition-colors"
                >
                  {s.cta} →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
