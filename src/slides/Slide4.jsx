import Slide from '../components/Slide.jsx'
import { Eyebrow, Red } from '../components/Typography.jsx'
import ShipRoute from '../components/ShipRoute.jsx'

/**
 * SLIDE 4 — “La ruta invisible”
 * Dossier visual: mapa de la ruta marítima Argentina → Wuhan,
 * panel de hipótesis y nota anexa al pie.
 */
export default function Slide4({ index }) {
  return (
    <Slide index={index} transition="convex" bg="#05050a" className="slide-route">
      <header className="route-header">
        <Eyebrow>FOLIO 04 · RECONSTRUCCIÓN HIPOTÉTICA · SIN CONFIRMAR</Eyebrow>
        <h1 className="slide-title route-title">
          LA RUTA <Red>INVISIBLE</Red>
        </h1>
        <p className="route-sub">
          LOS NÚMEROS NO SE CONTRADICEN.{' '}
          <Red>SE SUPERPONEN.</Red>
        </p>
      </header>

      <div className="route-grid">
        <div className="route-map-col">
          <ShipRoute />
        </div>

        <aside className="hypothesis-panel">
          <h3 className="panel-title">SEGÚN ESTA RECONSTRUCCIÓN</h3>
          <p>
            No vino en avión. No vino del cielo.
            <Red> Salió por el mar.</Red>
          </p>
          <hr className="panel-rule" />
          <ul className="hypothesis-icons">
            <li>
              <IconContainer />
              <div>
                <span className="hi-title">FLUJO CONSTANTE</span>
                <span className="hi-text">
                  Miles de contenedores del Río de la Plata.
                  Sin inspección interna.
                </span>
              </div>
            </li>
            <li>
              <IconCrew />
              <div>
                <span className="hi-title">TRIPULACIONES · SIN RASTRO</span>
                <span className="hi-text">
                  Relevos en puertos intermedios.
                  Fuera del radar sanitario chino.
                </span>
              </div>
            </li>
            <li>
              <IconClock />
              <div>
                <span className="hi-title">INCUBACIÓN · 14 DÍAS</span>
                <span className="hi-text">
                  Travesía: 25–35 días. Llega a Wuhan{' '}
                  <Red>sin síntomas</Red>.
                </span>
              </div>
            </li>
          </ul>
        </aside>
      </div>

      <aside className="route-note route-note--strip">
        <span className="note-tape note-tape--l" />
        <span className="note-tape note-tape--r" />
        <h4 className="note-title">⚠ NOTA ANEXA</h4>
        <p>
          Esto no es prueba. Es reconstrucción.
          Mientras el mundo miraba a Wuhan,{' '}
          <strong>nadie miraba al sur</strong>.{' '}
          <Red>El remitente figura como víctima.</Red>
        </p>
      </aside>
    </Slide>
  )
}

/* ───────── iconos SVG inline ───────── */

function IconContainer() {
  return (
    <svg viewBox="0 0 40 40" className="hi-icon" aria-hidden="true">
      <rect x="6" y="14" width="28" height="16" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <line x1="11" y1="14" x2="11" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="14" x2="16" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="21" y1="14" x2="21" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="26" y1="14" x2="26" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="31" y1="14" x2="31" y2="30" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function IconCrew() {
  return (
    <svg viewBox="0 0 40 40" className="hi-icon" aria-hidden="true">
      <circle cx="13" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="20" cy="13" r="3.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="27" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M 7 28 Q 13 22 19 28" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M 13 28 Q 20 20 27 28" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M 21 28 Q 27 22 33 28" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 40 40" className="hi-icon" aria-hidden="true">
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <line x1="20" y1="20" x2="20" y2="11" stroke="currentColor" strokeWidth="1.3" />
      <line x1="20" y1="20" x2="27" y2="22" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

