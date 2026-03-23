import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiCode, FiStar, FiTrendingUp, FiAward } from 'react-icons/fi'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'

const achievements = [
  {
    icon: FiCode,
    iconColor: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
    value: '150+',
    label: 'Coding Problems Solved',
    desc: 'Solved problems across LeetCode, HackerRank and similar platforms improving data structures, algorithms and problem-solving skills.',
    platforms: ['LeetCode', 'HackerRank'],
  },
  {
    icon: SiHackerrank,
    iconColor: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    value: '2',
    label: 'HackerRank Skill Badges',
    desc: 'Earned C++ and Java skill badges on HackerRank, showcasing strong OOP concepts, algorithms, and coding efficiency.',
    platforms: ['C++', 'Java'],
  },
  {
    icon: FiTrendingUp,
    iconColor: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    value: '2',
    label: 'Production Deployments',
    desc: 'Successfully deployed two full-stack projects live on the internet with real users, real performance benchmarks, and real feedback.',
    platforms: ['Render', 'MongoDB Atlas'],
  },
]

const counter = (target) => {
  const num = parseInt(target)
  return num
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// milestones"
          title="My"
          highlight="Achievements"
          subtitle="Recognition and milestones along my developer journey."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-7 group hover:-translate-y-2 transition-all duration-300"
                style={{ background: item.bg, borderColor: item.border }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <Icon size={26} style={{ color: item.iconColor }} />
                </div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                  className="font-display font-bold text-4xl mb-1"
                  style={{ color: item.iconColor }}
                >
                  {item.value}
                </motion.div>

                <h3 className="font-display font-semibold text-text text-base mb-3">{item.label}</h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-4">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.platforms.map(p => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-md font-mono text-xs"
                      style={{ background: item.bg, color: item.iconColor, border: `1px solid ${item.border}` }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* HackerRank CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <SiHackerrank size={24} className="text-green-400" />
            </div>
            <div>
              <div className="font-display font-semibold text-text">HackerRank Profile</div>
              <div className="font-mono text-xs text-muted">C++ & Java certified</div>
            </div>
          </div>
          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-body text-sm font-medium text-white flex-shrink-0 transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            View Profile →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
