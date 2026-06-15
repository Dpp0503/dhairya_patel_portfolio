import { motion } from 'framer-motion'
import { EnsoBrush } from './Enso'
import { profile } from '@/data/profile'

const links = [
  profile.email && { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  profile.github && { label: 'GitHub', value: profile.github, href: `https://${profile.github}` },
  { label: 'Resume', value: 'Download CV', href: '/resume.pdf', download: true },
].filter(Boolean) as { label: string; value: string; href: string; download?: boolean }[]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] } },
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark to-background-elevated/30 pointer-events-none" />

      <div className="absolute inset-0 bg-pattern-wave bg-wave pointer-events-none opacity-60" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/30 to-background-dark pointer-events-none" />

      <div className="absolute right-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-jp-gold/10 to-transparent hidden lg:block" />

      <div className="hidden lg:block absolute top-1/4 right-[8%] w-72 h-72 pointer-events-none">
        <EnsoBrush className="w-full h-full text-jp-gold/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-1 hidden md:flex flex-col items-center pt-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-sm tracking-[0.3em] uppercase text-text-muted h-32 leading-loose" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Portfolio
            </motion.span>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0, 1] }}
              className="w-px flex-1 bg-gradient-to-b from-jp-gold/20 to-transparent mt-4 origin-top"
            />
          </div>

          <motion.div
            className="md:col-span-11 lg:col-span-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="font-serif italic text-xl md:text-2xl text-primary mb-4 md:mb-6 leading-snug"
            >
              Hey, I&rsquo;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-display-xl font-extrabold text-text-primary leading-[0.85] tracking-[-0.06em]"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-1 md:mt-3"
            >
              <p className="font-display text-display-lg font-bold text-text-muted leading-[0.9] tracking-[-0.05em]">
                Engineer
              </p>
              <p className="font-display text-display-lg font-bold text-text-secondary leading-[0.9] tracking-[-0.05em]">
                Build Systems
              </p>
            </motion.div>

            {(profile.tagline || links.length > 0) && (
            <div className="grid md:grid-cols-5 gap-6 md:gap-10 mt-10 md:mt-14">
              {profile.tagline && (
              <motion.p
                variants={itemVariants}
                className="md:col-span-2 text-base md:text-lg text-text-secondary leading-relaxed"
              >
                {profile.tagline}
              </motion.p>
              )}

              {links.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="md:col-span-3 relative"
              >
                <div className="relative z-10 flex flex-col xl:flex-row xl:flex-wrap gap-0 xl:gap-2 border-t border-border xl:border-t-0 pt-5 xl:pt-0">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      download={link.download}
                      variants={linkVariants}
                      custom={i}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group flex items-center gap-6 sm:gap-10 py-3 xl:py-0 border-b xl:border-b-0 border-border xl:border-l xl:border-border hover:border-jp-gold/30 transition-colors duration-300"
                    >
                      <span className="xl:hidden font-display text-sm tracking-[0.25em] uppercase text-text-muted group-hover:text-jp-gold transition-colors min-w-[5rem]">
                        {link.label}
                      </span>
                      <span className="text-base sm:text-lg text-text-secondary group-hover:text-text-primary transition-colors px-0 xl:px-4 break-all sm:break-normal">
                        {link.value}
                      </span>
                      {i === 0 && (
                        <span className="ml-auto xl:hidden w-1.5 h-1.5 rounded-full bg-jp-vermillion/50" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              )}
            </div>
            )}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
