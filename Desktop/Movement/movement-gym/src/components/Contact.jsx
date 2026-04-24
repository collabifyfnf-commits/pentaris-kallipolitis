import { MapPin, Phone, Mail, Map } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from './SocialIcons'

const MAPS_URL =
  'https://www.google.com/maps/place/Movement+Gym+Chania+%2F+Attentive+Training/@35.5058654,23.8724878,12z/data=!4m10!1m2!2m1!1smovement!3m6!1s0x149c7d23285a5323:0xde362c0a023fee41!8m2!3d35.5058654!4d24.0249231!15sCghtb3ZlbWVudJIBA2d5beABAA!16s%2Fg%2F11kpk877lm?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F0F0F] py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Reach Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFD700]/10 flex items-center justify-center mt-0.5">
                  <MapPin size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Address</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[#FFD700] transition-colors"
                  >
                    Elyrou 1, Chania 73135, Greece
                  </a>
                </div>
              </div>

              {/* Phone 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFD700]/10 flex items-center justify-center">
                  <Phone size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+306985660204"
                      className="text-white font-semibold hover:text-[#FFD700] transition-colors"
                    >
                      698 5660204
                    </a>
                    <a
                      href="tel:+306998306879"
                      className="text-white font-semibold hover:text-[#FFD700] transition-colors"
                    >
                      699 8306879
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFD700]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:movement.chania@gmail.com"
                    className="text-white font-semibold hover:text-[#FFD700] transition-colors"
                  >
                    movement.chania@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/movement.chania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 text-[#FFD700] px-4 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all duration-200"
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/p/Movement-Chania-100092180077676/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 text-[#FFD700] px-4 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all duration-200"
                >
                  <FacebookIcon size={15} />
                  Facebook
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 text-[#FFD700] px-4 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all duration-200"
                >
                  <Map size={15} />
                  Maps
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — CTA block */}
          <div className="bg-[#1A1A1A] border border-white/5 p-10 border-t-4 border-t-[#FFD700]">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              READY TO<br />
              <span className="text-[#FFD700]">TRANSFORM?</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join our community of dedicated athletes. Book a free consultation today and
              take the first step toward a stronger, faster, and more powerful version of yourself.
            </p>
            <a
              href="tel:+306985660204"
              className="flex items-center justify-center gap-2 bg-[#FFD700] text-black font-black text-sm px-8 py-4 tracking-widest uppercase hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-yellow-500/20 mb-4 w-full"
            >
              BOOK YOUR FREE CONSULTATION
            </a>
            <p className="text-gray-600 text-xs text-center tracking-wider">
              No commitment. Just results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
