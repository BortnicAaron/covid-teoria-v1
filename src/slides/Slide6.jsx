import Slide from '../components/Slide.jsx'
import { Eyebrow, Red } from '../components/Typography.jsx'
import ConspiracyBoard from '../components/ConspiracyBoard.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

/**
 * SLIDE 6 — “El patrón completo”
 * Tablero de conspiración con 5 nodos: los 4 vectores + el móvil
 * central. El nodo de móvil queda en el centro, irradiando hilos
 * hacia los demás (estrella cerrada).
 * Cierre dramático y disclaimer en pequeño (sátira).
 */
export default function Slide6({ index }) {
  const pins = [
    { x: 180, y: 110, label: 'ASUNCIÓN = DESPACHO · 10·DIC·2019', rot: -3 },
    { x: 760, y: 130, label: 'BS AS ↔ WUHAN · ANTÍPODA EXACTA', rot: 2 },
    { x: 200, y: 420, label: '“LLEGAMOS DE LOS BARCOS” · CONFESIÓN', rot: 4 },
    { x: 780, y: 440, label: 'RUTA INVERSA · CONO SUR → ASIA', rot: -2 },
    { x: 480, y: 270, label: 'MÓVIL · CUARENTENA PERMANENTE', rot: 1 },
  ]

  // Conexiones “punto a punto” + estrella desde el móvil central (4) hacia los demás.
  const threads = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
  ]

  return (
    <Slide index={index} transition="zoom" bg="#040407">
      <Eyebrow>FOLIO 06 · SÍNTESIS · CLASIFICADO</Eyebrow>

      <h1 className="slide-title slide-title--patron">
        EL <Red>PATRÓN</Red>
      </h1>

      <ConspiracyBoard pins={pins} threads={threads} />

      {/* Síntesis dirigida: cinco vectores apuntando al mismo nombre. */}
      <div className="pattern-verdict fragment fade-up">
        <div className="pattern-verdict-label">CONVERGENCIA</div>
        <p className="pattern-verdict-text">
          Cinco vectores independientes.{' '}
          <Red>Un solo nombre en la intersección.</Red>
        </p>
        <p className="pattern-verdict-name">
          SUJETO <Red>A.F.</Red>
        </p>
      </div>

      {/* Cierre en tres golpes: sin animación, aparece directo como si ya estuviera escrito. */}
      <div className="pattern-close fragment fade-in">
        <span className="pc-line">No es una prueba.</span>
        <span className="pc-line">Es un <Red>patrón</Red>.</span>
        <span className="pc-line pc-final">
          Y los patrones rara vez son <Red>accidentales</Red>.
        </span>
      </div>

      <p className="footer-disclaimer">
        OBRA DE FICCIÓN · EJERCICIO NARRATIVO · SÁTIRA.
        Este expediente no representa hechos reales.
      </p>
    </Slide>
  )
}
