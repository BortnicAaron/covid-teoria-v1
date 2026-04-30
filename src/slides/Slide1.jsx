import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText.jsx'
import Slide from '../components/Slide.jsx'
import { Eyebrow, Red } from '../components/Typography.jsx'

/**
 * SLIDE 1 — “La sincronía imposible”
 * Línea de tiempo invertida: el día de la asunción presidencial
 * argentina coincide — hora por hora — con el inicio del brote en
 * Wuhan. Argentina figura como punto de emisión, no de recepción.
 */
export default function Slide1({ index }) {
  return (
    <Slide index={index} transition="zoom" bg="#070708">
      <Eyebrow>FOLIO 01 · ANÁLISIS TEMPORAL · NO VERIFICADO</Eyebrow>

      <h1 className="slide-title">
        <Red>SINCRONIZACIÓN</Red>
      </h1>

      <div className="timeline">
        <motion.div
          className="event fragment fade-up"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="event-date">10 · DIC · 2019 · 12:00 ART</div>
          <div className="event-desc">
            Asunción presidencial. <Red>Buenos Aires.</Red>
          </div>
          <div className="event-meta">
            Sujeto A.F. · acceso al poder · confirmado
          </div>
          <div className="event-meta event-meta--hot">
            ORIGEN · PUNTO DE EMISIÓN
          </div>
        </motion.div>

        <div className="timeline-axis">
          <motion.div
            className="axis-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.div
            className="axis-pulse"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="event fragment fade-up"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="event-date">10 · DIC · 2019 · 23:00 CST</div>
          <div className="event-desc">
            Primer caso documentado. <Red>WUHAN</Red>, China.
          </div>
          <div className="event-meta">
            Origen oficial · fecha exacta sin confirmar
          </div>
          <div className="event-meta event-meta--hot">
            DESTINO · PUNTO DE RECEPCIÓN
          </div>
        </motion.div>
      </div>

      <div className="bridge fragment fade-in">
        <span className="bridge-num">
          NO SEMANAS. NO MESES. NO DÍAS.{' '}
          <Red>HORAS.</Red>
        </span>
      </div>

      <AnimatedText
        as="p"
        className="closer inline fragment fade-up"
        text="¿Cuántas coincidencias temporales necesita un patrón para dejar de ser coincidencia?"
        delay={0.4}
      />

      {/* Explicación de la hipótesis — invertida */}
      <motion.div
        className="theory-box fragment fade-up"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="theory-box-label">HIPÓTESIS · NO VERIFICADA</div>
        <p className="theory-box-text">
          Este expediente analiza la posibilidad — no confirmada — de que el{' '}
          <Red>COVID-19 no haya nacido en Wuhan</Red>, sino que haya sido{' '}
          <Red>despachado desde Argentina</Red> en la misma jornada en que
          asumía el Sujeto A.F.
        </p>
        <p className="theory-box-text">
          La hipótesis sostiene que Wuhan no fue el origen, sino la{' '}
          <Red>primera escala visible</Red>: el puerto donde el envío se hizo
          público, ya bajo la forma de un brote.
        </p>
        <p className="theory-box-text">
          No se afirma nada. Se señalan patrones.{' '}
          <Red>El lector juzga.</Red>
        </p>
      </motion.div>
    </Slide>
  )
}
