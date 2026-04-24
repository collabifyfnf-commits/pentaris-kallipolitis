import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#reviews' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Movement Attentive Training"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone CTA */}
        <a
          href="tel:+306985660204"
          className="hidden md:flex items-center gap-2 bg-[#FFD700] text-black font-bold text-sm px-4 py-2.5 rounded-sm hover:bg-yellow-400 transition-all duration-200 tracking-wider"
        >
          <Phone size={15} strokeWidth={2.5} />
          698 5660204
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-white p-2 hover:text-[#FFD700] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-[#FFD700] transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+306985660204"
                className="flex items-center gap-2 bg-[#FFD700] text-black font-bold text-sm px-4 py-3 rounded-sm hover:bg-yellow-400 transition-all w-full justify-center mt-2 tracking-wider"
              >
                <Phone size={15} strokeWidth={2.5} />
                698 5660204
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
