import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  SiJavascript, SiCplusplus, SiPython, SiPhp, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiVscodium,
  SiTailwindcss, SiHtml5, SiC,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const categories = [
  {
    label: 'Languages',
    color: '#7c3aed',
    skills: [
      { name: 'C', icon: SiC, level: 75, color: '#a8b9cc' },
      { name: 'C++', icon: SiCplusplus, level: 80, color: '#00599c' },
      { name: 'Java', icon: FaJava, level: 75, color: '#f89820' },
      { name: 'Python', icon: SiPython, level: 70, color: '#3776ab' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#f7df1e' },
      { name: 'PHP', icon: SiPhp, level: 65, color: '#8892be' },
    ]
  },
  {
    label: 'Frameworks & Libraries',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', icon: SiReact, level: 88, color: '#61dafb' },
      { name: 'Node.js', icon: SiNodedotjs, level: 82, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 78, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06b6d4' },
      { name: 'HTML/CSS', icon: SiHtml5, level: 90, color: '#e34f26' },
    ]
  },
  {
    label: 'Tools & Databases',
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47a248' },
      { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479a1' },
      { name: 'Git', icon: SiGit, level: 82, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, level: 85, color: '#ffffff' },
      { name: 'VS Code', icon: SiVscodium, level: 92, color: '#007acc' },
    ]
  }
]

function SkillBar({ name, icon: Icon, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color }} />
          <span className="font-body text-sm font-medium text-text">{name}</span>
        </div>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const cat = categories[active]

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading label="// technical skills" title="My" highlight="Toolkit" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2.5 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                active === i ? 'text-white' : 'text-muted hover:text-text glass border border-border'
              }`}
              style={active === i ? { background: `linear-gradient(135deg, ${c.color}cc, ${c.color}88)` } : {}}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full" style={{ background: cat.color }} />
            <h3 className="font-display font-semibold text-text text-xl">{cat.label}</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {cat.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {[SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiCplusplus, SiC, FaJava, SiPython, SiGit, SiTailwindcss, SiMysql].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 glass border border-border rounded-xl flex items-center justify-center text-muted hover:text-text transition-colors cursor-pointer"
            >
              <Icon size={20} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
