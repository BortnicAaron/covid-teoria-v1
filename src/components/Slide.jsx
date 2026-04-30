import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SlideContext } from '../context/SlideContext.js'

/**
 * Wrapper genérico de slide.
 * - Inyecta atributos data-* que Reveal interpreta (transition, fondo).
 * - Usa Framer Motion para animar la entrada del contenido cuando el
 *   slide pasa a estar activo (key cambia => re-mount => animación).
 */
export default function Slide({
  index,
  children,
  transition = 'fade',
  bg = '#070708',
  className = '',
  eyebrow,
  title,
}) {
  const { current } = useContext(SlideContext)
  const isActive = current === index

  return (
    <section
      data-transition={transition}
      data-background-color={bg}
      className={`slide ${className}`}
    >
      <motion.div
        // El cambio de key fuerza una nueva animación cuando el slide
        // se vuelve activo, incluso si el componente no se desmontó.
        key={isActive ? `active-${index}` : `idle-${index}`}
        className="slide-inner"
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={
          isActive
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 1, y: 0, filter: 'blur(0px)' }
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h1 className="slide-title">{title}</h1>}
        {children}
      </motion.div>
    </section>
  )
}
