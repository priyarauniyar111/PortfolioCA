import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated Logo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center relative">
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent"
            style={{
              background: 'linear-gradient(#050510, #050510) padding-box, linear-gradient(135deg, #7c3aed, #06b6d4) border-box',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <span className="font-display text-3xl font-bold grad-text z-10">PR</span>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-0.5 bg-[#1e1e4a] rounded-full overflow-hidden">
        <motion.div
          className="h-full shimmer rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        className="mt-4 section-label text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  )
}
