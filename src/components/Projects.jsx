import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiExternalLink, FiGithub, FiZap, FiUsers, FiMail, FiMap } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Attendify',
    subtitle: 'Attendance Management System for Rural Schools',
    description: 'A comprehensive attendance management platform designed for rural schools, featuring role-based dashboards for Admin, Principal, and Teachers with real-time attendance tracking.',
    gradient: 'from-violet-600/20 to-cyan-500/20',
    borderGlow: 'rgba(124,58,237,0.3)',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express.js', 'REST API'],
    features: [
      { icon: FiUsers, text: 'Role-based dashboards (Admin, Principal, Teacher)' },
      { icon: FiZap, text: '<250ms API response latency, real-time updates' },
      { icon: FiMail, text: 'Automated email notifications via Nodemailer' },
    ],
    live: 'https://attendy-qsq7.onrender.com/',
    github: 'https://github.com/priyarauniyar111/attendance-app',
    badge: 'Full Stack',
    badgeColor: '#7c3aed',
    period: 'Nov–Dec 2025',
  },
  {
    id: 2,
    title: 'Ride',
    subtitle: 'SCHNEIDER — Uber-like Ride Booking Platform',
    description: 'A web-based ride booking platform enabling users to register, book rides in real time, and manage the complete trip lifecycle with live map integration.',
    gradient: 'from-cyan-500/20 to-amber-500/20',
    borderGlow: 'rgba(6,182,212,0.3)',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind'],
    features: [
      { icon: FiMap, text: 'Live map with real-time driver tracking' },
      { icon: FiZap, text: '<300ms API response during testing' },
      { icon: FiUsers, text: 'Secure auth + full ride lifecycle management' },
    ],
    live: 'https://shneider-uber-like-website.onrender.com/',
    github: 'https://github.com/priyarauniyar111/SHNEIDER_UBER_LIKE_WEBSITE',
    badge: 'Web App',
    badgeColor: '#06b6d4',
    period: 'Mar–Apr 2025',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// featured work"
          title="My"
          highlight="Projects"
          subtitle="Production-deployed applications with real users and real impact."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative glass-card p-7 h-full transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ boxShadow: `0 0 0 0 ${proj.borderGlow}` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px -10px ${proj.borderGlow}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${proj.borderGlow}`}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2.5 py-1 rounded-md font-mono text-xs font-medium text-white"
                        style={{ background: proj.badgeColor + '33', border: `1px solid ${proj.badgeColor}44` }}
                      >
                        {proj.badge}
                      </span>
                      <span className="font-mono text-xs text-muted">{proj.period}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text">{proj.title}</h3>
                    <p className="font-body text-xs text-muted mt-1">{proj.subtitle}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 flex-shrink-0">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-muted hover:text-text transition-all hover:scale-110"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110"
                      style={{ background: proj.badgeColor }}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-muted leading-relaxed mb-6 relative z-10">
                  {proj.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 relative z-10">
                  {proj.features.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: proj.badgeColor + '22', border: `1px solid ${proj.badgeColor}33` }}>
                        <Icon size={12} style={{ color: proj.badgeColor }} />
                      </div>
                      <span className="font-body text-xs text-text/70">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md font-mono text-xs text-muted border border-border bg-white/3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/priyarauniyar111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border font-body text-sm text-muted hover:text-text transition-all hover:border-accent/30 hover:scale-105"
          >
            <FiGithub />
            View all projects on GitHub
            <FiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
