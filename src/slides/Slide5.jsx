import { motion } from 'framer-motion'
import Slide from '../components/Slide.jsx'
import { Eyebrow, Red } from '../components/Typography.jsx'

/**
 * SLIDE 5 — “El por qué”
 * Cuatro capas en escalada: necesidad política → estado de excepción
 * → evidencia interna → objetivo real. La intensidad visual sube
 * con cada capa hasta el delirio final.
 */
export default function Slide5({ index }) {
  return (
    <Slide index={index} transition="slide" bg="#06060c">
      <Eyebrow>FOLIO 05 · ANÁLISIS DE MÓVIL · NO VERIFICADO</Eyebrow>

      <h1 className="slide-title slide-title--motive">
        EL <Red>POR QUÉ</Red>
      </h1>

      <p className="route-sub">
        UN PATRÓN SIN MÓVIL ES UNA COINCIDENCIA.{' '}
        <Red>UN MÓVIL SIN PATRÓN ES UNA SOSPECHA.</Red>
      </p>

      <div className="motive-stack">
        <Layer
          n="01"
          tag="CONTEXTO"
          headline="NECESIDAD POLÍTICA"
          delay={0}
        >
          <p className="motive-layer-body">
            Diciembre 2019. El nuevo gobierno asume con una herencia económica
            que volvía <Red>inocultable</Red> el primer fracaso. Sin un enemigo
            externo, cada caída sería atribuida a su gestión.
          </p>
          <p className="motive-layer-quote">
            “No heredó una crisis. <Red>Importó una excusa.</Red>”
          </p>
        </Layer>

        <Layer
          n="02"
          tag="ESTRUCTURA"
          headline="ESTADO DE EXCEPCIÓN"
          delay={0.15}
        >
          <p className="motive-layer-body">
            Cuarentena de <Red>+200 días</Red> — una de las más largas del
            planeta. Gobierno por DNU, sin debate parlamentario.
            Congreso virtual y vaciado. Suspensión de internas. Calles
            vigiladas. Un protocolo distinto cada semana.
          </p>
          <p className="motive-layer-quote">
            “No quería frenar la pandemia. <Red>Quería prolongarla.</Red>”
          </p>
        </Layer>

        <Layer
          n="03"
          tag="EVIDENCIA"
          headline="LO QUE SABÍA POR DENTRO"
          delay={0.3}
          tone="warn"
        >
          <p className="motive-layer-body">
            Olivos durante la cuarentena más estricta. Cumpleaños de Fabiola.
            Vacunatorio VIP. Reuniones sin distancia, sin barbijo,{' '}
            <Red>sin miedo</Red>.
          </p>
          <p className="motive-layer-quote">
            “El que sabe que el peligro es real{' '}
            <Red>no organiza fiestas en el ojo del huracán</Red>.
            Lo hace quien sabe que el peligro fue diseñado.”
          </p>
        </Layer>

        <Layer
          n="04"
          tag="OBJETIVO REAL"
          headline="CUARENTENA PERMANENTE"
          delay={0.45}
          tone="hot"
        >
          <p className="motive-layer-body">
            La pandemia fue el ensayo. El virus, la versión 1.0. El verdadero
            objetivo nunca fue sanitario: era instalar un{' '}
            <Red>estado de excepción que se renueva solo</Red> — sin
            elecciones, sin Congreso, sin oposición. La emergencia como
            forma <Red>permanente</Red> de gobierno.
          </p>
          <p className="motive-layer-quote">
            “No quería gobernar Argentina. <Red>Quería congelarla.</Red>”
          </p>
        </Layer>
      </div>

      <div className="bridge fragment fade-in">
        <span className="bridge-num">
          NO BUSCABA UN VIRUS. <Red>BUSCABA UN PRETEXTO.</Red>
        </span>
      </div>

      <p className="closer fragment fade-up">
        Todo gobierno necesita un enemigo.{' '}
        <Red>Pocos lo fabrican.</Red>
      </p>
    </Slide>
  )
}

function Layer({ n, tag, headline, children, delay = 0, tone = 'normal' }) {
  const cls =
    'motive-layer' +
    (tone === 'warn' ? ' motive-layer--warn' : '') +
    (tone === 'hot' ? ' motive-layer--hot' : '')
  return (
    <motion.div
      className={cls}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      <div className="motive-layer-head">
        <span className="motive-layer-num">CAPA {n}</span>
        <span className="motive-layer-tag">{tag}</span>
      </div>
      <h3 className="motive-layer-headline">{headline}</h3>
      {children}
    </motion.div>
  )
}
