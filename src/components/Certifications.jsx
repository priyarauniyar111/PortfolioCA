import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certs = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'Apr 2025',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
    icon: '🔐',
    link: 'https://drive.google.com/file/d/1MCnTo_FG5ZP8MDIvLYfjKTF6VUlRlPSf/view?usp=sharing',
  },
  {
    title: 'Web Development Training',
    issuer: 'Coincent',
    date: 'Mar 2024',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    icon: '🌐',
    link: 'https://drive.google.com/file/d/15pPRHT4bMPGUFaGKCwyMPvoMhl9AMOb1/view?usp=sharing',
  },
  {
    title: 'Computer Network & Communication',
    issuer: 'University of Colorado — Coursera',
    date: 'Dec 2024',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    icon: '🌐',
    link: 'https://drive.google.com/file/d/1GhWX3dwQkOspH6U6RWN5ECr4q2Ppqtjx/view',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="// credentials"
          title="My"
          highlight="Certifications"
          subtitle="Continuous learning through industry-recognized programs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
              style={{
                background: cert.bg,
                borderColor: cert.border,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: cert.bg, border: `1px solid ${cert.border}` }}
                >
                  <FiAward style={{ color: cert.color }} size={22} />
                </div>
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-md"
                  style={{ background: cert.bg, color: cert.color, border: `1px solid ${cert.border}` }}
                >
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-text text-base leading-snug mb-2 flex-1">
                {cert.title}
              </h3>
              <p className="font-mono text-xs mb-4" style={{ color: cert.color }}>
                {cert.issuer}
              </p>

              {/* Divider */}
              <div className="h-px mb-4 rounded-full" style={{ background: cert.border }} />

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs font-medium transition-all hover:gap-3"
                style={{ color: cert.color }}
              >
                View Certificate <FiExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
