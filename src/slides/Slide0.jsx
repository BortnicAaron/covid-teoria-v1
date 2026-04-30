import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Slide from '../components/Slide.jsx'
import { SlideContext } from '../context/SlideContext.js'

/**
 * SLIDE 0 — INTRO “EXPEDIENTE”
 * Retrato de Alberto en blanco y negro con tratamiento VHS:
 * tracking error, roll vertical, separación cromática, scanlines y
 * head-switching noise en la base. Se reproduce como una cinta
 * vieja recuperada del archivo.
 */
export default function Slide0({ index }) {
  const { current } = useContext(SlideContext)
  const isActive = current === index
  const [tick, setTick] = useState(0)

  // Reinicia la animación de error cada vez que el slide se activa,
  // para que la "cinta" arranque siempre con el mismo glitch inicial.
  useEffect(() => {
    if (isActive) setTick((t) => t + 1)
  }, [isActive])

  return (
    <Slide index={index} transition="fade" bg="#020203">
      <div className="vhs-stage" key={tick}>
        <div className="vhs-frame">
          <img
            src={`${import.meta.env.BASE_URL}Gemini_Generated_Image_538ixd538ixd538i.png`}
            alt="Sujeto del expediente"
            className="vhs-image"
            draggable={false}
          />

          {/* Capa de separación cromática (ghost rojo desplazado) */}
          <img
            src={`${import.meta.env.BASE_URL}Gemini_Generated_Image_538ixd538ixd538i.png`}
            alt=""
            aria-hidden
            className="vhs-image vhs-image--ghost"
            draggable={false}
          />

          {/* Banda de tracking que cruza la imagen */}
          <div className="vhs-tracking" />
          <div className="vhs-tracking vhs-tracking--alt" />

          {/* Tear / roll vertical ocasional */}
          <div className="vhs-tear" />

          {/* Ruido de "head switching" en la base */}
          <div className="vhs-headswitch" />

          {/* Scanlines de tubo */}
          <div className="vhs-scan" />

          {/* HUD de casetera (PLAY, REC, timecode) */}
          <div className="vhs-hud vhs-hud--tl">
            <span className="vhs-rec">●</span> REC
            <span className="vhs-sp">SP</span>
          </div>
          <div className="vhs-hud vhs-hud--tr">
            ► PLAY
          </div>
          <div className="vhs-hud vhs-hud--bl">
            ARG-WUH · CINTA 01 / 07
          </div>
          <div className="vhs-hud vhs-hud--br vhs-tc">
            00:00:<span className="vhs-tc-frames">12</span>
          </div>

          {/* Aviso de error parpadeante */}
          <motion.div
            className="vhs-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 0.8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 1.4 }}
          >
            ◤ TRACKING ERROR ◢
          </motion.div>
        </div>

        <div className="vhs-caption">
          <div className="vhs-caption-eyebrow">EXPEDIENTE 12-19 · ARG-WUH</div>
          <h1 className="vhs-caption-title">
            SUJETO <span className="red">A.F.</span>
          </h1>
          <div className="vhs-caption-meta">
            REGISTRO RECUPERADO — 10 · DIC · 2019 · 12:00 ART
          </div>
        </div>
      </div>
    </Slide>
  )
}
