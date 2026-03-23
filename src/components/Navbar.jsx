import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Certifications', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-border py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={600} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)'
            }}>
              <span className="font-display font-bold text-white text-sm">PR</span>
            </div>
            <span className="font-display font-semibold text-text hidden sm:block">Priya Rauniyar</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={600}
                spy
                onSetActive={() => setActive(link)}
                className="relative px-4 py-2 rounded-lg font-body text-sm font-medium cursor-pointer transition-colors duration-200 text-muted hover:text-text group"
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className={`relative z-10 ${active === link ? 'text-text' : ''}`}>
                  {link}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://drive.google.com/file/d/1example/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
        >
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text p-2"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {links.map(link => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    smooth
                    duration={600}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg font-body text-sm font-medium text-muted hover:text-text hover:bg-white/5 cursor-pointer transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
