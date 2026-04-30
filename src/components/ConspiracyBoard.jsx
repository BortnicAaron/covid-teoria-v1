import { motion } from 'framer-motion'

/**
 * Tablero de conspiración: notas con chinchetas conectadas por hilos rojos.
 * Cada nodo es un “pin” con un texto corto. Los hilos se dibujan como
 * líneas SVG superpuestas (z-index sobre el fondo, debajo de las notas).
 */
export default function ConspiracyBoard({ pins, threads }) {
  return (
    <div className="board">
      <svg className="board-threads" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
        {threads.map((t, i) => {
          const a = pins[t[0]]
          const b = pins[t[1]]
          if (!a || !b) return null
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#e6322a"
              strokeWidth="1.6"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.4, delay: 0.6 + i * 0.25, ease: 'easeInOut' }}
            />
          )
        })}
      </svg>

      {pins.map((p, i) => (
        <motion.div
          key={i}
          className="pin"
          style={{ left: `${p.x / 10}%`, top: `${p.y / 6}%` }}
          initial={{ opacity: 0, y: 18, rotate: p.rot ?? -2 }}
          animate={{ opacity: 1, y: 0, rotate: p.rot ?? -2 }}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease: 'easeOut' }}
          whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
        >
          <span className="pin-tack" />
          <span className="pin-label">{p.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
