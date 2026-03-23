import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                <span className="font-display font-bold text-white text-sm">PR</span>
              </div>
              <span className="font-display font-semibold text-text">Priya Rauniyar</span>
            </div>
            <p className="font-body text-xs text-muted leading-relaxed">
              MERN Stack Developer & B.Tech CSE student building impactful web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth
                  duration={600}
                  className="font-body text-sm text-muted hover:text-text cursor-pointer transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiGithub, label: 'GitHub', href: 'https://github.com/priyarauniyar111' },
                { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priya--rauniyar/' },
                { icon: FiMail, label: 'Email', href: 'mailto:prauniyar757@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-muted hover:text-text transition-colors group"
                >
                  <Icon size={14} className="text-accent group-hover:text-accent2 transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center"
        >
          <p className="font-mono text-xs text-muted">
            © 2026 Priya Rauniyar | Built with React
          </p>
          <p className="font-mono text-xs text-muted flex items-center gap-1.5">
            Made with <FiHeart size={11} className="text-red-400 animate-pulse" /> using React + Vite
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
