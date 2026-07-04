import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { experiences } from '@/data/experience'
import { certifications } from '@/data/certifications'
import { DividerDots } from './Enso'

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-display tracking-[0.25em] uppercase text-jp-gold">
      <span className="w-3 h-px bg-jp-gold/40" />
      {text}
    </span>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] } },
}

function DetailList({ items, dotColor = 'bg-jp-gold/40' }: { items: string[]; dotColor?: string }) {
  if (!items.length) return null
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0, 1] }}
          className="flex items-start gap-3 text-sm text-text-secondary"
        >
          <span className={`mt-1.5 block h-1 w-1 rounded-full ${dotColor} shrink-0`} />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function EducationSection() {
  if (!education.length) return null
  return (
    <div className="space-y-12">
      {education.map((item, index) => (
        <motion.div
          key={item.id}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
        >
          <div className="grid sm:grid-cols-5 gap-3 sm:gap-8">
            <span className="font-display text-base tracking-[0.15em] uppercase text-text-muted sm:pt-0.5">
              {item.period}
            </span>
            <div className="sm:col-span-4">
              <h3 className="font-display text-display-sm font-bold text-text-primary">
                {item.degree}
              </h3>
              <p className="text-jp-gold/80 font-medium mt-1 text-sm">
                {item.institution}
              </p>
              {item.location && (
                <p className="text-xs text-text-muted mt-0.5">{item.location}</p>
              )}
              {item.details && <DetailList items={item.details} />}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function ExperienceSection() {
  if (!experiences.length) return null
  return (
    <div className="space-y-14">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
        >
          <div className="grid sm:grid-cols-5 gap-3 sm:gap-8">
            <span className="font-display text-base tracking-[0.15em] uppercase text-text-muted sm:pt-0.5">
              {exp.period}
            </span>
            <div className="sm:col-span-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-display-sm font-bold text-text-primary">
                  {exp.role}
                </h3>
                <span className="text-jp-vermillion/70 font-medium text-sm">
                  @ {exp.company}
                </span>
              </div>
              {exp.location && (
                <p className="text-sm text-text-muted mt-0.5 tracking-wider">{exp.location}</p>
              )}
              {exp.description && (
                <p className="mt-4 text-text-secondary leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              )}
              {exp.achievements && <DetailList items={exp.achievements} dotColor="bg-jp-vermillion/50" />}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function CertificationsSection() {
  if (!certifications.length) return null
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {certifications.map((cert, index) => (
        <motion.a
          key={cert.id}
          href={cert.credentialUrl || '#'}
          target={cert.credentialUrl ? '_blank' : undefined}
          rel={cert.credentialUrl ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0, 1] }}
          whileHover={{ y: -2 }}
          className="group border border-border rounded-xl p-5 hover:border-jp-gold/30 hover:bg-background-card transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-12 h-12" style={{ background: 'linear-gradient(to bottom left, rgba(212,163,115,0.03), transparent)' }} />
          <p className="font-display font-bold text-text-primary group-hover:text-jp-gold transition-colors leading-snug text-sm">
            {cert.name}
          </p>
          {cert.issuer && <p className="text-sm text-text-muted mt-2">{cert.issuer}</p>}
          {cert.date && (
            <div className="flex items-center gap-2 mt-3">
              <span className="h-px w-4 bg-jp-gold/30" />
              <span className="text-xs font-display tracking-wider text-text-muted">{cert.date}</span>
            </div>
          )}
        </motion.a>
      ))}
    </div>
  )
}

export default function Background() {
  const hasAny = education.length || experiences.length || certifications.length
  if (!hasAny) return null

  return (
    <section id="background" className="pt-section pb-0 relative">
      <div className="absolute inset-0 bg-pattern-scale bg-scale pointer-events-none opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="grid md:grid-cols-12 gap-6 mb-14"
        >
          <div className="md:col-span-3">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-jp-gold">Background</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-md font-bold text-text-primary leading-tight">
              Background
            </h2>
          </div>
        </motion.div>

        {!!education.length && (
          <>
            <DividerDots />
            <div className="grid md:grid-cols-12 gap-6 mb-6">
              <div className="md:col-span-3"><Badge text="Education" /></div>
              <div className="md:col-span-9"><EducationSection /></div>
            </div>
          </>
        )}

        {!!experiences.length && (
          <>
            <DividerDots />
            <div className="grid md:grid-cols-12 gap-6 mb-6">
              <div className="md:col-span-3"><Badge text="Experience" /></div>
              <div className="md:col-span-9"><ExperienceSection /></div>
            </div>
          </>
        )}

        {!!certifications.length && (
          <>
            <DividerDots />
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3"><Badge text="Certifications" /></div>
              <div className="md:col-span-9"><CertificationsSection /></div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
