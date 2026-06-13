import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PiArrowUpRight } from 'react-icons/pi'
import { projects, ui } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Badge from '../ui/Badge'
import SectionLabel from '../ui/SectionLabel'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{projects.label}</SectionLabel>
            <h2 className="font-display text-3xl text-text-primary md:text-section">
              {projects.title}
            </h2>
          </motion.div>

          <div className="mt-16 space-y-20">
            {projects.items.map((project) => (
              <motion.article
                key={project.number}
                variants={reducedMotion ? undefined : fadeUp}
                className="grid grid-cols-1 gap-6 border-b border-border-subtle pb-20 last:border-0 last:pb-0 md:grid-cols-12 md:gap-8"
              >
                <p className="font-mono text-sm text-text-faint md:col-span-1">
                  {project.number}
                </p>

                <div className="md:col-span-11">
                  <h3 className="font-display text-2xl font-semibold text-text-primary md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-text-muted">{project.problem}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <p className="mt-6 text-text-body">
                    <span className="text-accent-green">{project.outcome}</span>
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                      >
                        {projects.linkLabels.live} {ui.arrow}
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                      >
                        {projects.linkLabels.github}
                        <PiArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
