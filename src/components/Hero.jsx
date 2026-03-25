import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20"
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="section-label text-accent2">Open to opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-bold leading-none mb-4">
                <span className="block text-5xl sm:text-7xl lg:text-8xl text-text mb-2">
                  Priya
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl grad-text">
                  Rauniyar
                </span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="text-muted font-body text-lg sm:text-xl">I build</span>
              <div className="font-mono text-lg sm:text-xl font-medium" style={{ color: '#06b6d4' }}>
                <TypeAnimation
                  sequence={[
                    'MERN Stack Apps',
                    2000,
                    'Responsive UIs',
                    2000,
                    'RESTful APIs',
                    2000,
                    'Real-time Systems',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span className="blink ml-1 text-accent">|</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-body text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building scalable and impactful web applications — one commit at a time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link to="projects" smooth duration={600}>
                <button
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium font-body text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              
                href="https://drive.google.com/uc?export=download&id=1UX-0GvtpJV4-x_3Q31SztKCisI6aQDDJ"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium font-body text-sm text-text border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 glass"
              >
                <FiDownload className="text-accent2" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/priyarauniyar111', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/priya--rauniyar/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:prauniyar757@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center glass border border-border text-muted hover:text-text hover:border-accent/40 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30 scale-110"
                style={{ background: 'radial-gradient(circle, #7c3aed 0%, #06b6d4 100%)' }}
              />

              {/* Animated border ring */}
              <div
                className="relative p-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4, #7c3aed)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease infinite',
                }}
              >
                {/* Inner glass ring */}
                <div className="p-1 rounded-full glass">
                  <img
                    src="/your-photo.jpg"   {/* 👈 Replace with your image path or URL */}
                    alt="Priya Rauniyar"
                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badge — experience or stack */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-4 px-3 py-1.5 rounded-lg glass border border-accent/30 flex items-center gap-2"
              >
                <span className="text-xs font-mono text-accent2">⚡ MERN Stack</span>
              </motion.div>

              {/* Floating badge — availability */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-3 -right-4 px-3 py-1.5 rounded-lg glass border border-green-400/30 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Available</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-muted text-[10px]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #7c3aed, transparent)' }}
        />
      </motion.div>

      {/* Gradient shift keyframe */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
