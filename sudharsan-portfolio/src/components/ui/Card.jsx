import { motion } from 'framer-motion'
import { scaleIn } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Card({ children, className = '', hover = true, ...props }) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion || !hover) {
    return (
      <div
        className={`rounded-lg border border-border bg-bg-surface p-6 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.015, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.5)' }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg border border-border bg-bg-surface p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
