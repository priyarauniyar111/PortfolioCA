import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiCode, FiDatabase, FiLayers, FiCpu } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, label: 'Frontend', value: 'React.js', color: '#7c3aed' },
  { icon: FiDatabase, label: 'Backend', value: 'Node + Mongo', color: '#06b6d4' },
  { icon: FiLayers, label: 'Architecture', value: 'MERN Stack', color: '#f59e0b' },
  { icon: FiCpu, label: 'DSA', value: '150+ Problems', color: '#10b981' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="// about me" title="Who" highlight="I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Avatar frame */}
            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-bg" />
              </motion.div>

              {/* Inner content */}
              <div className="absolute inset-3 rounded-full glass flex items-center justify-center overflow-hidden"
                style={{ border: '1px solid rgba(124,58,237,0.3)' }}>
                <div className="text-center p-4">
                  <div className="font-display text-6xl font-bold grad-text mb-1">PR</div>
                  <div className="section-label text-muted text-[10px]">B.Tech CSE</div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-6 glass border border-border rounded-xl px-3 py-2 text-center"
              >
                <div className="font-mono text-xs text-accent2">LPU</div>
                <div className="font-body text-xs text-muted">Phagwara</div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-4 bottom-10 glass border border-border rounded-xl px-3 py-2 text-center"
              >
                <div className="font-mono text-xs text-accent3">6.32</div>
                <div className="font-body text-xs text-muted">CGPA</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-muted leading-relaxed mb-6 text-base sm:text-lg">
              I'm a <span className="text-text font-medium">B.Tech CSE student</span> at Lovely Professional University with a passion for building full-stack web applications that are both performant and user-centric.
            </p>
            <p className="font-body text-muted leading-relaxed mb-8 text-base sm:text-lg">
              Proficient in the <span className="text-accent font-medium">MERN stack</span>, I've shipped production-grade projects with real-time features, secure authentication, and mobile-first designs. I also enjoy competitive programming to sharpen my <span className="text-accent2 font-medium">DSA & algorithmic thinking</span>.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="glass-card p-4 hover:border-opacity-40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <Icon size={18} style={{ color }} className="mb-2" />
                  <div className="font-display font-semibold text-text text-sm">{value}</div>
                  <div className="font-mono text-xs text-muted mt-0.5">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
