import { motion } from 'framer-motion'
import { Book, Code, Heart, Mic, Trophy, Zap, LucideIcon } from 'lucide-react'
import { achievements } from '@/data/achievements'

const iconMap: Record<string, LucideIcon> = {
  book: Book, mic: Mic, code: Code,
  trophy: Trophy, heart: Heart, zap: Zap,
}

const itemAccents = [
  { border: 'hover:border-jp-vermillion/30', iconBg: 'bg-jp-vermillion/10', iconColor: 'text-jp-vermillion' },
  { border: 'hover:border-jp-gold/30', iconBg: 'bg-jp-gold/10', iconColor: 'text-jp-gold' },
  { border: 'hover:border-accent-indigo/30', iconBg: 'bg-accent-indigo/10', iconColor: 'text-accent-indigo' },
  { border: 'hover:border-jp-vermillion/30', iconBg: 'bg-jp-vermillion/10', iconColor: 'text-jp-vermillion' },
  { border: 'hover:border-jp-gold/30', iconBg: 'bg-jp-gold/10', iconColor: 'text-jp-gold' },
  { border: 'hover:border-accent-indigo/30', iconBg: 'bg-accent-indigo/10', iconColor: 'text-accent-indigo' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.25, 0.1, 0, 1] },
  }),
}

export default function Achievements() {
  if (!achievements.length) return null

  return (
    <section id="achievements" className="py-section relative">
      <div className="absolute inset-0 bg-pattern-hex bg-hex pointer-events-none opacity-40" />
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
            <span className="font-display text-sm tracking-[0.3em] uppercase text-jp-gold">Highlights</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-md font-bold text-text-primary">
              Things beyond the day job.
            </h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, index) => {
            const Icon = (item.icon && iconMap[item.icon]) || Trophy
            const accent = itemAccents[index % itemAccents.length]

            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 17 }}
                className={`card ${accent.border} relative overflow-hidden cursor-default`}
              >
                <div className={`w-9 h-9 rounded-lg ${accent.iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={16} className={accent.iconColor} />
                </div>
                <h3 className="font-display font-bold text-text-primary mb-1.5">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
