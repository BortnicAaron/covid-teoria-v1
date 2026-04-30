import { useEffect, useRef, useState } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'

import { SlideContext } from './context/SlideContext.js'
import NoiseOverlay from './components/NoiseOverlay.jsx'
import ClassifiedHud from './components/ClassifiedHud.jsx'
import PasswordGate from './components/PasswordGate.jsx'
import SlideTitle from './slides/SlideTitle.jsx'
import Slide0 from './slides/Slide0.jsx'
import Slide1 from './slides/Slide1.jsx'
import Slide2 from './slides/Slide2.jsx'
import Slide3 from './slides/Slide3.jsx'
import Slide4 from './slides/Slide4.jsx'
import Slide5 from './slides/Slide5.jsx'
import Slide6 from './slides/Slide6.jsx'

import './styles/slides.css'

const STORAGE_KEY = 'arg-wuh-unlocked'

export default function App() {
  const deckRef = useRef(null)
  const revealRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (!unlocked) return
    if (!deckRef.current || revealRef.current) return

    // Reveal.js — transiciones lentas tipo documental.
    // 'fade' como transición global aporta esa estética sobria.
    revealRef.current = new Reveal(deckRef.current, {
      hash: true,
      controls: true,
      progress: true,
      slideNumber: 'c/t',
      transition: 'fade',
      transitionSpeed: 'slow',
      backgroundTransition: 'fade',
      width: 1280,
      height: 800,
      margin: 0.06,
      minScale: 0.2,
      maxScale: 2.0,
    })

    revealRef.current.initialize().then(() => {
      revealRef.current.on('slidechanged', (e) => setCurrent(e.indexh))
    })

    // ─────────────────────────────────────────────────────────────
    // Sugerencia: música de suspenso ambiental
    // 1) Coloca un archivo MP3 en /public/suspense.mp3
    // 2) Descomenta el siguiente bloque
    // ─────────────────────────────────────────────────────────────
    // const audio = new Audio('/suspense.mp3')
    // audio.loop = true
    // audio.volume = 0.25
    // const playOnFirstInteraction = () => {
    //   audio.play().catch(() => {})
    //   window.removeEventListener('click', playOnFirstInteraction)
    //   window.removeEventListener('keydown', playOnFirstInteraction)
    // }
    // window.addEventListener('click', playOnFirstInteraction)
    // window.addEventListener('keydown', playOnFirstInteraction)

    return () => {
      try {
        revealRef.current?.destroy()
      } catch (e) {
        /* noop */
      }
      revealRef.current = null
    }
  }, [unlocked])

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, '1')
          } catch {
            /* noop */
          }
          setUnlocked(true)
        }}
      />
    )
  }

  return (
    <SlideContext.Provider value={{ current }}>
      {/* Capa de ruido encima de TODO para textura de filmación antigua. */}
      <NoiseOverlay />
      {/* HUD tipo dossier clasificado, fijo en pantalla. */}
      <ClassifiedHud current={current} total={8} />

      <div className="reveal" ref={deckRef}>
        <div className="slides">
          <SlideTitle index={0} />
          <Slide0 index={1} />
          <Slide1 index={2} />
          <Slide2 index={3} />
          <Slide3 index={4} />
          <Slide4 index={5} />
          <Slide5 index={6} />
          <Slide6 index={7} />
        </div>
      </div>
    </SlideContext.Provider>
  )
}
