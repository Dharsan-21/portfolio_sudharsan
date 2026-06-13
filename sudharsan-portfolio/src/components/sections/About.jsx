import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { about, site, ui } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import SectionLabel from '../ui/SectionLabel'

function Monogram() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-48 w-48 md:h-56 md:w-56"
      role="img"
      aria-label={ui.monogramAlt}
    >
      <rect x="1" y="1" width="198" height="198" stroke="#27272A" strokeWidth="1" />
      <rect x="20" y="20" width="160" height="160" stroke="#2563EB" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="#27272A" strokeWidth="1" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeWidth="1" />
      <text
        x="100"
        y="112"
        textAnchor="middle"
        className="fill-text-primary font-display text-5xl font-semibold"
        style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '48px', fontWeight: 600 }}
      >
        {site.initials}
      </text>
    </svg>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{about.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {about.title}
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="flex justify-center lg:col-span-4 lg:justify-start"
              variants={reducedMotion ? undefined : fadeUp}
            >
              <Monogram />
            </motion.div>

            <motion.div
              className="space-y-6 lg:col-span-8"
              variants={reducedMotion ? undefined : fadeUp}
            >
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-body-lg text-text-body">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border-subtle pt-10">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold text-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
