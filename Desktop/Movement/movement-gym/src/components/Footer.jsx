import { InstagramIcon, FacebookIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home">
          <img
            src="/images/logo.png"
            alt="Movement Attentive Training"
            className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Copyright */}
        <p className="text-gray-600 text-xs tracking-wider text-center">
          © 2026 Movement Attentive Training. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/movement.chania/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#FFD700] transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://www.facebook.com/p/Movement-Chania-100092180077676/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#FFD700] transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
