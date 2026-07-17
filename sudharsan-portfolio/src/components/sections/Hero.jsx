import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PiArrowRight } from 'react-icons/pi'
import { hero, site, ui } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../ui/Button'

function Typewriter({ roles }) {
  const reducedMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) return undefined

    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, displayText.length + 1)
          setDisplayText(next)
          if (next === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          const next = currentRole.slice(0, displayText.length - 1)
          setDisplayText(next)
          if (next === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles, reducedMotion])

  const text = reducedMotion ? roles[0] : displayText

  return (
    <p className="font-display text-xl text-text-muted md:text-2xl">
      <span className="text-text-faint">{ui.typewriterPrefix} </span>
      <span className="text-text-body">{text}</span>
      {!reducedMotion && (
        <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-accent-blue align-middle" />
      )}
    </p>
  )
}

function GeometricArt() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full max-w-md"
      role="img"
      aria-label={ui.geometricArtAlt}
    >
      <rect x="40" y="40" width="180" height="180" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="340" cy="120" r="80" stroke="#10B981" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="220" y1="220" x2="400" y2="360" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="60" y1="400" x2="420" y2="80" stroke="#10B981" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="280" y="280" width="140" height="140" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1" transform="rotate(12 350 350)" />
      <circle cx="160" cy="360" r="50" fill="#10B981" fillOpacity="0.06" />
      <circle cx="160" cy="360" r="50" stroke="#10B981" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="100" y="100" width="60" height="60" fill="#2563EB" fillOpacity="0.08" />
      <line x1="220" y1="40" x2="220" y2="440" stroke="#27272A" strokeWidth="1" />
      <line x1="40" y1="240" x2="440" y2="240" stroke="#27272A" strokeWidth="1" />
      <circle cx="340" cy="120" r="4" fill="#10B981" fillOpacity="0.6" />
      <circle cx="160" cy="360" r="4" fill="#2563EB" fillOpacity="0.6" />
      <rect x="360" y="60" width="8" height="8" fill="#2563EB" fillOpacity="0.4" />
    </svg>
  )
}

const delays = { name: 0, role: 0.1, desc: 0.2, ctas: 0.3, art: 0.4 }

export default function Hero() {
  const reducedMotion = useReducedMotion()

  const motionProps = (delay) =>
    reducedMotion
      ? {}
      : {
          initial: 'hidden',
          animate: 'visible',
          variants: {
            ...fadeUp,
            visible: {
              ...fadeUp.visible,
              transition: { ...fadeUp.visible.transition, delay },
            },
          },
        }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <motion.div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border-subtle bg-bg-surface px-4 py-2"
            {...motionProps(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            <span className="font-body text-label uppercase tracking-widest text-text-muted">
              {site.availabilityBadge}
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-hero"
            {...motionProps(delays.name)}
          >
            {hero.name}
          </motion.h1>

          <motion.div className="mt-6" {...motionProps(delays.role)}>
            <Typewriter roles={hero.roles} />
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl text-body-lg text-text-muted"
            {...motionProps(delays.desc)}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            {...motionProps(delays.ctas)}
          >
            <Button href={hero.ctas.primary.href} variant="primary">
              {hero.ctas.primary.label}
            </Button>
            <Button href={hero.ctas.secondary.href} variant="ghost">
              {hero.ctas.secondary.label}
            </Button>
            <Button
              href={hero.ctas.tertiary.href}
              variant="text"
              className="gap-1.5 text-sm"
            >
              {hero.ctas.tertiary.label}
              <PiArrowRight size={16} />
            </Button>
            <a
              href="https://drive.google.com/file/d/1InCClJHz-19ppO7ZsEXuqPTBCWLDHjM8/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-blue-dark transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center lg:col-span-2"
          {...motionProps(delays.art)}
        >
          <GeometricArt />
        </motion.div>
      </div>
    </section>
  )
}
