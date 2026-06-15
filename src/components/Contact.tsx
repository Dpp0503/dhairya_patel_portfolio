import { motion } from 'framer-motion'
import { EnsoBrush, DividerDots } from './Enso'
import { profile } from '@/data/profile'

const socialLinks = [
  profile.github && { label: 'GitHub', href: `https://${profile.github}` },
  profile.linkedin && { label: 'LinkedIn', href: `https://${profile.linkedin}` },
  profile.leetcode && { label: 'LeetCode', href: `https://${profile.leetcode}` },
  profile.codeforces && { label: 'Codeforces', href: `https://${profile.codeforces}` },
].filter(Boolean) as { label: string; href: string }[]

export default function Contact() {
  if (!profile.email && !socialLinks.length) return null

  return (
    <section id="contact" className="py-section relative">
      <div className="absolute inset-0 bg-pattern-kasumi bg-kasumi pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 to-transparent pointer-events-none" />

      <div className="section-container">
        <DividerDots />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-jp-gold">Connect</span>
          </div>
          <div className="md:col-span-9">
            <div className="relative">
              <div className="hidden lg:block absolute -top-16 -right-16 w-48 h-48">
                <EnsoBrush className="w-full h-full text-jp-gold/40" />
              </div>

              <div className="relative z-10 max-w-xl">
                <h2 className="font-display text-display-md font-bold text-text-primary leading-tight">
                  Let&rsquo;s build something.
                </h2>
                <p className="text-text-secondary mt-4 leading-relaxed">
                  I&rsquo;m always open to interesting conversations — whether it&rsquo;s about
                  full-stack architecture, AI research, hackathons, or building something meaningful together.
                </p>

                <div className="mt-10 space-y-4">
                  {profile.email && (
                    <motion.a
                      href={`mailto:${profile.email}`}
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="group inline-flex items-center gap-3 font-display text-lg font-bold text-jp-gold hover:text-primary transition-colors"
                    >
                      <motion.span
                        className="w-5 h-px bg-jp-gold/50"
                        whileHover={{ width: 32 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      />
                      {profile.email}
                    </motion.a>
                  )}

                  {!!socialLinks.length && (
                    <div className="flex items-center gap-6 pt-2">
                      {socialLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank" rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className="group flex items-center gap-2 text-base font-display tracking-[0.2em] uppercase text-text-muted hover:text-jp-gold transition-colors"
                        >
                          <span className="w-3 h-px bg-text-muted group-hover:bg-jp-gold transition-colors" />
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
