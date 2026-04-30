import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Slide from '../components/Slide.jsx'
import { Red } from '../components/Typography.jsx'
import { SlideContext } from '../context/SlideContext.js'

/**
 * SLIDE TITLE — “La verdad sobre el COVID”
 * Apertura tipo expediente: credenciales auto-anuladas
 * (4 AÑOS · 0 FUENTES · 1 SOSPECHA), y un título cuya palabra
 * "COVID" aparece tachada por una barra de redacción que se
 * derrite con un glitch hasta revelarla en rojo.
 */
export default function SlideTitle({ index }) {
  const { current } = useContext(SlideContext)
  const isActive = current === index
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (isActive) setTick((t) => t + 1)
  }, [isActive])

  return (
    <Slide index={index} transition="fade" bg="#020203">
      <div className="title-stage" key={tick}>
        <motion.div
          className="title-creds"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="title-creds-label"
            variants={fadeUp}
          >
            UNA INVESTIGACIÓN DE
          </motion.div>
          <div className="title-creds-stack">
            <motion.span variants={fadeUp}>4 AÑOS</motion.span>
            <motion.span variants={fadeUp} className="dot">·</motion.span>
            <motion.span variants={fadeUp}>0 FUENTES</motion.span>
            <motion.span variants={fadeUp} className="dot">·</motion.span>
            <motion.span variants={fadeUp} className="hot">
              <Red>1 SOSPECHA</Red>
            </motion.span>
          </div>
        </motion.div>

        <h1 className="title-redacted">
          <RedactWord delay={1.0}>LA</RedactWord>
          <RedactWord delay={1.4}>VERDAD</RedactWord>
          <RedactWord delay={1.8}>SOBRE EL</RedactWord>
          <RedactWord delay={2.5} red>
            COVID
          </RedactWord>
        </h1>

        <motion.p
          className="title-fineprint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 3.3 }}
        >
          * fuentes: tuiteros · primos del autor · una sospecha bien hilada
          · el algoritmo de YouTube · alguien con razón
        </motion.p>

        <motion.div
          className="title-next"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1, 0.6, 1] }}
          transition={{
            duration: 2.4,
            delay: 3.7,
            repeat: Infinity,
            repeatDelay: 1.8,
          }}
        >
          ◤ UNA VEZ QUE LO VEA, NO PODRÁ DESVERLO ◢
        </motion.div>
      </div>
    </Slide>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function RedactWord({ children, delay = 0, red = false }) {
  return (
    <span className="rw-wrap">
      {red ? (
        <motion.span
          className="rw-text rw-red"
          initial={{ scale: 0.94 }}
          animate={{ scale: [0.94, 1.08, 1.0] }}
          transition={{ delay: delay + 0.5, duration: 0.7, times: [0, 0.55, 1] }}
        >
          {children}
        </motion.span>
      ) : (
        <span className="rw-text">{children}</span>
      )}
      <motion.span
        className="rw-cover"
        aria-hidden
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{
          scaleX: [1, 1, 0.92, 1, 1, 0.05, 0],
          opacity: [1, 1, 0.4, 1, 0.7, 0.2, 0],
          x: [0, 0, -2, 1, -1, 0, 0],
        }}
        transition={{
          delay,
          duration: 0.7,
          times: [0, 0.45, 0.55, 0.65, 0.75, 0.92, 1],
        }}
        style={{ transformOrigin: '100% 50%' }}
      />
    </span>
  )
}
