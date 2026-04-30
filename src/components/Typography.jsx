import { motion } from 'framer-motion'

/**
 * Pequeña librería tipográfica con la voz del proyecto.
 * Mantiene consistencia visual entre slides.
 */

export function Eyebrow({ children, className = '' }) {
  return <div className={`eyebrow ${className}`}>{children}</div>
}

export function Title({ children, className = '', as = 'h1' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={`slide-title ${className}`}
      initial={{ letterSpacing: '0.6em', opacity: 0 }}
      animate={{ letterSpacing: '0.04em', opacity: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}

export function Subtitle({ children, className = '' }) {
  return <p className={`slide-subtitle ${className}`}>{children}</p>
}

export function Quote({ children, source }) {
  return (
    <motion.blockquote
      className="quote"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
    >
      <span className="quote-mark">“</span>
      <span className="quote-text">{children}</span>
      <span className="quote-mark close">”</span>
      {source && <footer className="quote-source">— {source}</footer>}
    </motion.blockquote>
  )
}

export function Red({ children }) {
  return <span className="red">{children}</span>
}

export function Mono({ children }) {
  return <span className="mono">{children}</span>
}
