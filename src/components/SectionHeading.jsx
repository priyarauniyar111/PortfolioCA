import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text mb-4"
      >
        {title}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 mx-auto h-0.5 w-16 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
      />
    </div>
  )
}
