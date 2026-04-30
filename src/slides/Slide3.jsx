import { motion } from 'framer-motion'
import Slide from '../components/Slide.jsx'
import { Eyebrow, Quote, Red } from '../components/Typography.jsx'

/**
 * SLIDE 3 — “La narrativa”
 * La frase pública como cortina eurocentrista: menciona Europa
 * para desviar la atención del verdadero eje (Argentina ↔ China).
 */
export default function Slide3({ index }) {
  return (
    <Slide index={index} transition="slide" bg="#08080c">
      <Eyebrow>FOLIO 03 · ANÁLISIS DE DISCURSO · FUENTE PÚBLICA</Eyebrow>

      <h1 className="slide-title slide-title--narrativa">
        LA <Red>NARRATIVA</Red>
      </h1>

      <Quote source="A. F. — declaración pública · 2021 · fuente verificable">
        Los <Red>argentinos</Red> llegamos de los{' '}
        <Red>barcos</Red>… de Europa.
      </Quote>

      <div className="ship-grid">
        <motion.div
          className="reinterpret fragment fade-up"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="card-title">LECTURA OFICIAL</h3>
          <p>Una frase identitaria. Conocida. Sin consecuencias.</p>
        </motion.div>

        <motion.div
          className="reinterpret reinterpret-alt fragment fade-up"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="card-title">
            SEGÚN ESTA <Red>RECONSTRUCCIÓN</Red>
          </h3>
          <p>
            No eligió <Red>"Europa"</Red> al azar:
            la eligió para que <Red>no pensaras en China</Red>.
            Cortina eurocentrista — apunta al norte
            para que no mires al este.
          </p>
        </motion.div>
      </div>

      <ul className="trade-stats">
        <li className="fragment fade-up">
          <span className="stat">≈ 16%</span>
          <span className="stat-label">
            del comercio exterior argentino se mueve{' '}
            <Red>con China</Red>
          </span>
        </li>
        <li className="fragment fade-up">
          <span className="stat">90%</span>
          <span className="stat-label">
            de ese intercambio viaja <Red>por mar</Red>
          </span>
        </li>
        <li className="fragment fade-up">
          <span className="stat">35–45 días</span>
          <span className="stat-label">
            de tránsito <Red>Cono Sur → Asia</Red>
          </span>
        </li>
      </ul>

      <p className="closer fragment fade-up">
        El que dice <Red>"Europa"</Red> en voz alta…{' '}
        <Red>piensa en China en voz baja</Red>.
      </p>
    </Slide>
  )
}
