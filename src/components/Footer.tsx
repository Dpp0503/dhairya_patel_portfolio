import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const footerLinks = [
  profile.email && { label: 'Email', href: `mailto:${profile.email}` },
  profile.github && { label: 'GitHub', href: `https://${profile.github}` },
  profile.linkedin && { label: 'LinkedIn', href: `https://${profile.linkedin}` },
  profile.leetcode && { label: 'LeetCode', href: `https://${profile.leetcode}` },
  profile.codeforces && { label: 'Codeforces', href: `https://${profile.codeforces}` },
].filter(Boolean) as { label: string; href: string }[]

export default function Footer() {
  if (!footerLinks.length) return null

  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-jp-vermillion/40" />
            <p className="text-base text-text-muted font-display tracking-wider">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                className="text-sm text-text-muted hover:text-jp-gold font-display tracking-[0.25em] uppercase transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
