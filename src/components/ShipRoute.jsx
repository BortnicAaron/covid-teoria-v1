import { motion } from 'framer-motion'

/**
 * Mapa mundial Pacific-centered con la ruta marítima
 * Argentina → Wuhan. Continentes simplificados, grilla
 * de coordenadas, ruta punteada y dos buques en tránsito.
 */
export default function ShipRoute() {
  // Curva bezier que sugiere la ruta inversa: Cono Sur → Pacífico Sur → SE Asia → China.
  const routeD =
    'M 990 462 C 870 500, 720 520, 600 510 C 470 480, 350 380, 280 280 C 240 220, 230 190, 215 165'

  return (
    <div className="route-map">
      <svg viewBox="0 0 1200 600" className="route-map-svg" aria-hidden="true">
        <defs>
          <linearGradient id="oceanBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0a0a12" />
            <stop offset="100%" stopColor="#04040a" />
          </linearGradient>
          <radialGradient id="pulseRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3b30" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff3b30" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="1200" height="600" fill="url(#oceanBg)" />

        {/* Grilla de meridianos / paralelos */}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 90}
            y1="0"
            x2={i * 90}
            y2="600"
            stroke="#13131c"
            strokeWidth="0.6"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 80}
            x2="1200"
            y2={i * 80}
            stroke="#13131c"
            strokeWidth="0.6"
          />
        ))}

        {/* Continentes — formas estilizadas (no cartográficas) */}
        <g fill="#1a1a24" stroke="#262633" strokeWidth="0.8">
          {/* Eurasia + China */}
          <path d="M 30 70 L 260 50 L 360 85 L 410 130 L 380 175 L 320 200 L 280 235 L 230 250 L 180 245 L 120 220 L 70 200 L 40 160 L 30 110 Z" />
          {/* India / SE Asia península */}
          <path d="M 280 240 L 330 245 L 360 290 L 340 330 L 300 320 L 285 285 Z" />
          {/* Indonesia (islas) */}
          <path d="M 380 320 L 430 315 L 460 335 L 420 350 Z" />
          <path d="M 470 340 L 510 335 L 530 355 L 490 365 Z" />
          {/* Australia */}
          <path d="M 410 410 L 510 395 L 555 415 L 545 460 L 480 470 L 420 455 Z" />
          {/* Europa */}
          <path d="M 30 60 L 130 50 L 170 80 L 130 110 L 60 105 Z" />
          {/* África */}
          <path d="M 95 175 L 165 165 L 210 200 L 230 270 L 220 350 L 175 410 L 130 415 L 110 360 L 90 290 L 80 220 Z" />
          {/* Norteamérica */}
          <path d="M 760 60 L 920 50 L 1010 90 L 1060 160 L 1020 230 L 950 270 L 880 270 L 820 230 L 770 180 L 740 120 Z" />
          {/* Centroamérica */}
          <path d="M 870 285 L 920 295 L 935 315 L 905 325 L 880 305 Z" />
          {/* Sudamérica */}
          <path d="M 920 335 L 1000 335 L 1030 380 L 1020 450 L 985 510 L 960 555 L 935 540 L 920 480 L 905 410 Z" />
          {/* Antártida (recorte) */}
          <path d="M 0 575 L 1200 565 L 1200 600 L 0 600 Z" />
        </g>

        {/* Ruta marítima — punteada */}
        <motion.path
          d={routeD}
          fill="none"
          stroke="#ff3b30"
          strokeWidth="1.8"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 3.4, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* Puntos de paso a lo largo de la ruta */}
        {[
          { cx: 940, cy: 485 },
          { cx: 850, cy: 510 },
          { cx: 730, cy: 500 },
          { cx: 600, cy: 450 },
          { cx: 470, cy: 380 },
          { cx: 350, cy: 290 },
          { cx: 270, cy: 215 },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="2.4"
            fill="#ff3b30"
            opacity="0.85"
          />
        ))}

        {/* Marker Wuhan — DESTINO */}
        <Pulse cx={215} cy={165} />
        <circle cx={215} cy={165} r="4.5" fill="#ff3b30" filter="url(#softGlow)" />
        <text
          x={215}
          y={148}
          textAnchor="middle"
          fontSize="13"
          fill="#f1f1ea"
          style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.18em' }}
        >
          WUHAN
        </text>
        <text
          x={215}
          y={134}
          textAnchor="middle"
          fontSize="9"
          fill="#ff3b30"
          style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.22em' }}
        >
          ◤ DESTINO ◢
        </text>

        {/* Marker Argentina — ORIGEN */}
        <Pulse cx={990} cy={462} />
        <circle cx={990} cy={462} r="4.5" fill="#ff3b30" filter="url(#softGlow)" />
        <text
          x={995}
          y={448}
          textAnchor="start"
          fontSize="13"
          fill="#f1f1ea"
          style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.18em' }}
        >
          ARGENTINA
        </text>
        <text
          x={995}
          y={434}
          textAnchor="start"
          fontSize="9"
          fill="#ff3b30"
          style={{ fontFamily: 'Special Elite, monospace', letterSpacing: '0.22em' }}
        >
          ◤ ORIGEN ◢
        </text>

        {/* Buques en ruta */}
        <motion.g
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 1.2 }}
          style={{ offsetPath: `path('${routeD}')`, offsetRotate: 'auto' }}
        >
          <Ship />
        </motion.g>
        <motion.g
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 9 }}
          style={{ offsetPath: `path('${routeD}')`, offsetRotate: 'auto' }}
        >
          <Ship />
        </motion.g>
      </svg>

      {/* Cajas flotantes superpuestas al mapa */}
      <div className="map-tag map-tag--ports-out">
        <span className="map-tag-title">PUERTOS DE DESTINO</span>
        <ul>
          <li>SHANGHÁI</li>
          <li>SHENZHEN</li>
          <li>NINGBO</li>
        </ul>
      </div>

      <div className="map-tag map-tag--ports-in">
        <span className="map-tag-title">PUERTOS DE ZARPE</span>
        <ul>
          <li>BUENOS AIRES</li>
          <li>ROSARIO</li>
          <li>SAN ANTONIO ESTE</li>
        </ul>
      </div>

      <div className="map-tag map-tag--travesia">
        <span className="map-tag-title">TRAVESÍA</span>
        <span className="map-tag-num">25 — 35 DÍAS</span>
        <span className="map-tag-sub">EN SILENCIO</span>
      </div>
    </div>
  )
}

function Pulse({ cx, cy }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="6"
      fill="url(#pulseRed)"
      animate={{ r: [6, 22, 6], opacity: [0.55, 0, 0.55] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

function Ship() {
  return (
    <g transform="translate(-12,-6)">
      <rect x="0" y="5" width="22" height="5" fill="#e8e8ee" />
      <polygon points="22,5 28,7.5 22,10" fill="#e8e8ee" />
      <rect x="5" y="2" width="5" height="3" fill="#ff3b30" />
      <rect x="12" y="0" width="3" height="5" fill="#e8e8ee" />
    </g>
  )
}
