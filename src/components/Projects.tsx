import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { CornerAccent } from './Enso'

const projectAccents = [
  { dot: 'bg-jp-vermillion', line: 'border-jp-vermillion/20', hover: 'hover:border-jp-vermillion/30', numColor: 'text-jp-vermillion/20', glow: 'rgba(184,92,74,0.04)' },
  { dot: 'bg-jp-gold', line: 'border-jp-gold/20', hover: 'hover:border-jp-gold/30', numColor: 'text-jp-gold/20', glow: 'rgba(212,163,115,0.04)' },
  { dot: 'bg-accent-indigo', line: 'border-accent-indigo/20', hover: 'hover:border-accent-indigo/30', numColor: 'text-accent-indigo/20', glow: 'rgba(74,124,124,0.04)' },
  { dot: 'bg-jp-vermillion', line: 'border-jp-vermillion/20', hover: 'hover:border-jp-vermillion/30', numColor: 'text-jp-vermillion/20', glow: 'rgba(184,92,74,0.04)' },
]
 
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.1, 0, 1],
    },
  }),
}

export default function Projects() {
  if (!projects.length) return null

  return (
    <section id="projects" className="pt-section pb-0 relative">
      <div className="absolute inset-0 bg-pattern-shoji bg-shoji pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 via-transparent to-background-dark/50 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="grid md:grid-cols-12 gap-6 mb-16"
        >
          <div className="md:col-span-3">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-jp-gold">Work</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-md font-bold text-text-primary">Projects.</h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const accent = projectAccents[index % projectAccents.length]

            return (
              <motion.article
                key={project.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                onClick={() => {
                  const url = project.github || project.link
                  if (url) window.open(url, '_blank', 'noopener,noreferrer')
                }}
                className={`group relative border ${accent.line} ${accent.hover} bg-background-card/80 backdrop-blur-sm rounded-2xl p-7 sm:p-9 transition-colors duration-500 overflow-hidden cursor-pointer`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-5 mb-3">
                        <motion.span
                          className={`font-display text-5xl font-bold ${accent.numColor} select-none leading-none`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.span>
                        <span className={`w-px h-8 ${accent.dot}`} />
                        <h3 className="font-display text-display-sm font-bold text-text-primary group-hover:text-jp-gold transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    {!!(project.github || project.link) && (
                      <div className="flex items-center gap-2 shrink-0">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            className="p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-text-muted hover:text-text-primary rounded-lg hover:bg-white/5 transition-colors"
                            aria-label="Source code"
                          >
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          </motion.a>
                        )}
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            className="p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-text-muted hover:text-text-primary rounded-lg hover:bg-white/5 transition-colors"
                            aria-label="Live site"
                          >
                            <ArrowUpRight size={17} />
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-text-secondary leading-relaxed max-w-3xl text-sm md:text-base">
                      {project.description}
                    </p>
                  )}

                  {!!project.highlights?.length && (
                    <motion.ul
                      className="flex flex-wrap gap-x-6 gap-y-2 mt-5"
                      initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                      {project.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                          className="flex items-center gap-2.5 text-sm text-text-secondary"
                        >
                          <span className={`block h-1 w-1 rounded-full ${accent.dot} shrink-0`} />
                          <span>{h}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {!!project.tech?.length && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-text-muted bg-background-elevated px-2.5 py-1.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <motion.div
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileHover={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CornerAccent className="w-6 h-6 text-jp-gold/30" />
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
