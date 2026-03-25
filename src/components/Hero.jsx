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
      {/* Background Effects */}
      <div
        className="absolute top-1/4 -left-32 w-80 h-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status */}
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

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="text-muted font-body text-lg sm:text-xl">I build</span>
              <div className="font-mono text-lg sm:text-xl font-medium text-cyan-400">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Apps', 2000,
                    'Responsive UIs', 2000,
                    'RESTful APIs', 2000,
                    'Real-time Systems', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span className="blink ml-1 text-accent">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-body text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Building scalable and impactful web applications — one commit at a time.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">

              {/* View Projects */}
              <Link to="projects" smooth duration={600}>
                <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white hover:scale-105 transition"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  View Projects
                  <FiArrowRight />
                </button>
              </Link>

              {/* Download CV */}
              <a
                href="https://drive.google.com/uc?export=download&id=1UX-0GvtpJV4-x_3Q31SztKCisI6aQDDJ"
                download="Priya_Rauniyar_CV"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border hover:scale-105 transition glass"
              >
                <FiDownload />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              {[
                { icon: FiGithub, href: 'https://github.com/priyarauniyar111', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/priya--rauniyar/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:prauniyar757@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-10 h-10 flex items-center justify-center border rounded-xl hover:scale-110 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="/your-photo.jpg"
              alt="Priya"
              className="w-64 h-64 rounded-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
