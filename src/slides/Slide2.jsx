import Slide from '../components/Slide.jsx'
import { Eyebrow, Red } from '../components/Typography.jsx'
import AntipodeMap from '../components/AntipodeMap.jsx'

/**
 * SLIDE 2 — “El punto opuesto”
 * Mapa simbólico mostrando el eje Argentina ↔ Wuhan.
 * Lectura invertida: Argentina figura como punto de emisión,
 * Wuhan como destino diametral.
 */
export default function Slide2({ index }) {
  return (
    <Slide index={index} transition="fade" bg="#06060a">
      <Eyebrow>FOLIO 02 · ANÁLISIS GEOGRÁFICO · RECONSTRUCCIÓN ALTERNATIVA</Eyebrow>

      <h1 className="slide-title">
        EL PUNTO <Red>OPUESTO</Red>
      </h1>

      <div className="two-cols">
        <div className="col-map">
          <AntipodeMap />
        </div>

        <div className="col-text">
          <p className="lead fragment fade-up">
            Trazá una línea recta a través del centro del planeta.
          </p>

          <p className="lead fragment fade-up">
            En un extremo: el país que acababa de{' '}
            <Red>cambiar de gobierno</Red>.<br />
            En el otro: el lugar designado como{' '}
            <Red>origen oficial</Red> del brote.
          </p>

          <ul className="bullets">
            <li className="fragment fade-right">
              El punto de <Red>emisión</Red>: Buenos Aires.
            </li>
            <li className="fragment fade-right">
              El punto de <Red>recepción</Red>: Wuhan.
            </li>
            <li className="fragment fade-right">
              34.61° S · 58.38° O ←→ 30.59° N · 114.30° E.{' '}
              <Red>Casi exactos.</Red>
            </li>
            <li className="fragment fade-right">
              12 horas de diferencia: cuando uno{' '}
              <Red>despacha</Red>, el otro{' '}
              <Red>amanece</Red>.
            </li>
          </ul>

          <p className="whisper fragment fade-up">
            La geometría no miente.{' '}
            <Red>Las preguntas que genera… tampoco.</Red>
          </p>

          <p className="whisper fragment fade-up">
            Ningún punto del planeta está más lejos de Buenos Aires que Wuhan.{' '}
            <Red>Ningún destino más conveniente.</Red>
          </p>
        </div>
      </div>
    </Slide>
  )
}
