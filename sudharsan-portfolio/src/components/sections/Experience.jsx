import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import SectionLabel from '../ui/SectionLabel'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{experience.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {experience.title}
            </h2>
          </motion.div>

          <motion.div className="mt-16" variants={reducedMotion ? undefined : fadeUp}>
            <Card hover={false} className="max-w-3xl">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-text-muted">{experience.company}</p>
                </div>
                <p className="text-sm text-text-faint">{experience.dateRange}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 30)}
                    className="flex gap-3 text-text-body before:mt-2.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-blue before:content-['']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border-subtle pt-8">
                {experience.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
