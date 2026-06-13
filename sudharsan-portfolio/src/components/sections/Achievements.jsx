import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PiCertificate,
  PiCpu,
  PiCube,
  PiDrone,
  PiPresentation,
  PiTrophy,
} from 'react-icons/pi'
import { achievements } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Card from '../ui/Card'
import SectionLabel from '../ui/SectionLabel'

const iconMap = {
  presentation: PiPresentation,
  trophy: PiTrophy,
  certificate: PiCertificate,
  drone: PiDrone,
  chip: PiCpu,
  cube: PiCube,
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="achievements" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{achievements.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {achievements.title}
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div key={item.title} variants={reducedMotion ? undefined : fadeUp}>
                  <Card>
                    <Icon size={28} className="text-text-muted" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                    <p className="mt-4 text-xs text-text-faint">{item.context}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
