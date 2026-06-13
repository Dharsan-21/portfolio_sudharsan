import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PiBrain,
  PiCloud,
  PiCubeTransparent,
  PiGitBranch,
  PiAtom,
  PiStack,
} from 'react-icons/pi'
import { learning } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import SectionLabel from '../ui/SectionLabel'

const iconMap = {
  brain: PiBrain,
  react: PiAtom,
  server: PiStack,
  cloud: PiCloud,
  layers: PiCubeTransparent,
  blueprint: PiGitBranch,
}

export default function Learning() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="learning" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{learning.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {learning.title}
            </h2>
          </motion.div>

          <div className="mt-16 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-6">
            {learning.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={reducedMotion ? undefined : fadeUp}
                  className="min-w-[260px] shrink-0 rounded-lg border border-border bg-bg-surface p-6 md:min-w-0"
                >
                  <Icon size={24} className="text-accent-blue" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
