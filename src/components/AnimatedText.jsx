import { motion } from 'framer-motion'

/**
 * Texto que aparece palabra por palabra (efecto “máquina de escribir
 * filtrada”). Útil para frases sentenciosas tipo voz en off.
 */
export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.06,
  as = 'p',
}) {
  const Tag = motion[as] || motion.p
  const words = text.split(' ')

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.35em' }}
          variants={{
            hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
