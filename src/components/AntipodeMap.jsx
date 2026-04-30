import { motion } from 'framer-motion'

/**
 * Visualización SVG simple de antípodas: un círculo (Tierra de perfil)
 * con dos puntos enfrentados conectados por una línea punteada que
 * atraviesa el centro. Pulso rojo en cada punto.
 *
 * No pretende ser un mapamundi exacto — es una pieza simbólica.
 */
export default function AntipodeMap() {
  return (
    <div className="antipode-wrap">
      <svg viewBox="0 0 600 600" className="antipode-svg" aria-hidden="true">
        <defs>
          <radialGradient id="earthGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1a1a22" />
            <stop offset="100%" stopColor="#050507" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Esfera */}
        <circle cx="300" cy="300" r="240" fill="url(#earthGrad)" stroke="#2a2a32" strokeWidth="1.5" />

        {/* Meridianos decorativos */}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx="300"
            cy="300"
            rx={240 - i * 18}
            ry={240}
            fill="none"
            stroke="#1c1c22"
            strokeWidth="0.6"
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={`h-${i}`}
            cx="300"
            cy="300"
            rx="240"
            ry={240 - i * 32}
            fill="none"
            stroke="#1c1c22"
            strokeWidth="0.6"
          />
        ))}

        {/* Línea de antípodas — atraviesa el centro */}
        <motion.line
          x1="100"
          y1="160"
          x2="500"
          y2="440"
          stroke="#e6322a"
          strokeWidth="1.4"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* Punto Wuhan — DESTINO */}
        <PulseDot
          cx={100}
          cy={160}
          label="WUHAN · 30.59°N 114.30°E"
          role="◤ DESTINO ◢"
          align="left"
        />

        {/* Punto Argentina — ORIGEN (antípoda) */}
        <PulseDot
          cx={500}
          cy={440}
          label="BUENOS AIRES · 34.61°S 58.38°W"
          role="◤ ORIGEN ◢"
          align="right"
        />
      </svg>
    </div>
  )
}

function PulseDot({ cx, cy, label, role, align }) {
  const labelX = align === 'right' ? cx - 14 : cx + 14
  const anchor = align === 'right' ? 'end' : 'start'
  return (
    <g>
      <motion.circle
        cx={cx}
        cy={cy}
        r="22"
        fill="#e6322a"
        opacity="0.18"
        animate={{ r: [22, 38, 22], opacity: [0.25, 0, 0.25] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
      />
      <circle cx={cx} cy={cy} r="6" fill="#ff3b30" filter="url(#glow)" />
      <text
        x={labelX}
        y={cy + 4}
        fontSize="13"
        fill="#e8e8ee"
        textAnchor={anchor}
        style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.06em' }}
      >
        {label}
      </text>
      {role && (
        <text
          x={labelX}
          y={cy + 22}
          fontSize="10"
          fill="#ff3b30"
          textAnchor={anchor}
          style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.22em' }}
        >
          {role}
        </text>
      )}
    </g>
  )
}
