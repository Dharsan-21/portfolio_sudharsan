import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Badge from '../ui/Badge'
import SectionLabel from '../ui/SectionLabel'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{skills.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {skills.title}
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {skills.categories.map((category) => (
              <motion.div key={category.name} variants={reducedMotion ? undefined : fadeUp}>
                <h3 className="mb-4 font-body text-label uppercase tracking-widest text-text-muted">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
