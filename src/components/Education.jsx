import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiBook, FiCalendar, FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    score: 'CGPA: 6.32',
    scoreLabel: 'CGPA',
    color: '#7c3aed',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'MJK Government Girls Inter College',
    location: 'Motihari, Bihar',
    period: 'Apr 2021 – Mar 2023',
    score: '75.2%',
    scoreLabel: 'Percentage',
    color: '#06b6d4',
    icon: '📚',
    current: false,
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'D U V Onkarpuri Radhiya',
    location: 'Motihari, Bihar',
    period: 'Apr 2020 – Mar 2021',
    score: '62%',
    scoreLabel: 'Percentage',
    color: '#f59e0b',
    icon: '🏫',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading label="// academic journey" title="My" highlight="Education" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[#06b6d4] to-[#f59e0b] opacity-30" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
                  className="absolute left-0 top-6 w-12 sm:w-16 flex items-center justify-center"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg glass border-2 shadow-lg"
                    style={{ borderColor: edu.color, boxShadow: `0 0 16px ${edu.color}44` }}
                  >
                    {edu.icon}
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300 group"
                  style={{ borderLeft: `3px solid ${edu.color}66` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {edu.current && (
                          <span
                            className="font-mono text-[10px] px-2 py-0.5 rounded-full text-white"
                            style={{ background: `${edu.color}cc` }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-text text-base sm:text-lg leading-snug mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <FiBook size={13} style={{ color: edu.color }} />
                        <span className="font-body text-sm font-medium" style={{ color: edu.color }}>
                          {edu.institution}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-muted">
                          <FiCalendar size={12} />
                          <span className="font-mono text-xs">{edu.period}</span>
                        </div>
                        <span className="font-mono text-xs text-muted">📍 {edu.location}</span>
                      </div>
                    </div>

                    {/* Score badge */}
                    <div
                      className="flex flex-col items-center justify-center rounded-2xl px-4 py-3 min-w-[72px] glass border"
                      style={{ borderColor: `${edu.color}55`, background: `${edu.color}11` }}
                    >
                      <FiAward size={14} style={{ color: edu.color }} className="mb-1" />
                      <span className="font-display font-bold text-text text-sm leading-none">{edu.score}</span>
                      <span className="font-mono text-[10px] text-muted mt-0.5">{edu.scoreLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
