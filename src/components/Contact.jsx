import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'prauniyar757@gmail.com',
    href: 'mailto:prauniyar757@gmail.com',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'priya--rauniyar',
    href: 'https://www.linkedin.com/in/priya--rauniyar/',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'priyarauniyar111',
    href: 'https://github.com/priyarauniyar111',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Phagwara, Punjab, India',
    href: null,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="// get in touch"
          title="Let's"
          highlight="Connect"
          subtitle="Open to full-time roles, internships, and exciting projects."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-muted leading-relaxed mb-8 text-base">
              I'm actively looking for opportunities where I can contribute, grow, and continue developing impactful software. Feel free to reach out — I respond promptly!
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-x-1 group"
                      style={{ background: bg, border: `1px solid ${border}` }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: bg, border: `1px solid ${border}` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted mb-0.5">{label}</div>
                        <div className="font-body text-sm text-text font-medium group-hover:underline">{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ background: bg, border: `1px solid ${border}` }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: bg, border: `1px solid ${border}` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted mb-0.5">{label}</div>
                        <div className="font-body text-sm text-text font-medium">{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-text text-xl mb-2">Message Sent!</h3>
                  <p className="font-body text-muted text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-5 py-2 rounded-lg font-body text-sm text-muted border border-border hover:text-text transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-text placeholder-muted/50 outline-none transition-all duration-200 focus:border-accent/50"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(30,30,74,0.8)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,30,74,0.8)'}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-text placeholder-muted/50 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(30,30,74,0.8)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,30,74,0.8)'}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Hi Priya, I'd love to connect about..."
                      className="w-full px-4 py-3 rounded-xl font-body text-sm text-text placeholder-muted/50 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(30,30,74,0.8)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(30,30,74,0.8)'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-body text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
