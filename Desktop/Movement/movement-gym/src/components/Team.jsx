import { InstagramIcon } from './SocialIcons'

const coaches = [
  {
    name: 'Pan Stavrinakis',
    title: 'Strength & Conditioning Coach',
    instagram: 'https://www.instagram.com/panstav317/',
    handle: '@panstav317',
  },
  {
    name: 'John Stavrinakis',
    title: 'CrossFit & Functional Fitness Coach',
    instagram: 'https://www.instagram.com/johnstav238/',
    handle: '@johnstav238',
  },
  {
    name: 'Giannis Pardalakis',
    title: 'Personal Trainer & Mobility Specialist',
    instagram: 'https://www.instagram.com/giannis_pardalakis/',
    handle: '@giannis_pardalakis',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-[#111111] py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            The People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            MEET YOUR COACHES
          </h2>
        </div>

        {/* Team photo — large, centered */}
        <div className="relative max-w-2xl mx-auto mb-14 overflow-hidden group">
          <img
            src="/images/team.png"
            alt="Movement Gym coaches team"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          {/* Yellow corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FFD700]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FFD700]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FFD700]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FFD700]" />
        </div>

        {/* Description text */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
            OUR EXPERT TEAM
          </h3>
          <p className="text-gray-400 leading-relaxed text-base">
            Three dedicated coaches with a passion for helping you achieve your fitness goals.
            Fully trained, always attentive, and committed to your success — every session, every rep.
          </p>
        </div>

        {/* Coach cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-[#1A1A1A] border border-white/5 p-7 text-center hover:border-[#FFD700]/30 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <InstagramIcon size={24} className="text-[#FFD700]" />
              </div>
              <h4 className="text-white font-black text-base tracking-wide mb-1">
                {coach.name}
              </h4>
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">
                {coach.title}
              </p>
              <a
                href={coach.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black font-bold text-xs px-5 py-2.5 tracking-wider uppercase hover:bg-yellow-400 hover:scale-105 transition-all duration-200 w-full"
              >
                <InstagramIcon size={14} />
                {coach.handle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
