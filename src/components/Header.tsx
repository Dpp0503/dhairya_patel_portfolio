import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { profile } from '@/data/profile'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-background-dark/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-14 flex items-center gap-8 h-14 sm:h-header-h">
        <a
          href="#hero"
          className="relative font-display text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors duration-300"
        >
          D
          <span className="absolute -top-0.5 -right-1.5 w-1.5 h-1.5 rounded-full bg-jp-vermillion/60" />
        </a>

        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-base font-display tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-jp-gold/50 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-2 border-l border-border/50 pl-6">
            {profile.github && (
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-jp-gold transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-jp-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={18} />
              </a>
            )}
            <a
              href={profile.resume || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-jp-gold/30 rounded hover:bg-jp-gold/10 text-jp-gold font-display tracking-[0.15em] uppercase text-sm transition-colors duration-300"
            >
              CV
            </a>
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 border-t border-border/50' : 'max-h-0'
        }`}
      >
        <div className="bg-background-dark/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-base font-display tracking-[0.2em] uppercase text-text-muted hover:text-text-primary rounded-lg hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 mt-2 text-base font-display tracking-[0.2em] uppercase text-jp-gold border border-jp-gold/30 text-center rounded-lg hover:bg-jp-gold/10 transition-all"
          >
            View CV
          </a>
          <div className="flex items-center justify-center gap-6 pt-4 pb-2">
            {profile.github && (
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-jp-gold transition-colors p-3 min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
            )}
            {profile.linkedin && (
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-jp-gold transition-colors p-3 min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
