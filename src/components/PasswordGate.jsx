import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * Portón de acceso al expediente.
 *
 * NOTA TÉCNICA: este es un sitio estático. La contraseña vive en
 * el bundle JS y cualquiera la encuentra abriendo DevTools. No es
 * una cerradura — es un sello ceremonial, parte de la sátira.
 *
 * Para cambiar la clave: editá la constante PASSWORD de abajo.
 */
const PASSWORD = 'argentina'

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [state, setState] = useState('idle') // idle | checking | denied | granted
  const [attempts, setAttempts] = useState(0)
  const [dots, setDots] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Animación de "VERIFICANDO..." (puntitos crecientes)
  useEffect(() => {
    if (state !== 'checking') return
    const id = setInterval(() => setDots((n) => (n + 1) % 4), 220)
    return () => clearInterval(id)
  }, [state])

  const submit = (e) => {
    e.preventDefault()
    if (state !== 'idle') return
    setState('checking')
    setDots(0)
    setTimeout(() => {
      const ok = value.trim().toLowerCase() === PASSWORD.toLowerCase()
      if (ok) {
        setState('granted')
        setTimeout(onUnlock, 950)
      } else {
        setState('denied')
        setAttempts((a) => a + 1)
        setTimeout(() => {
          setState('idle')
          setValue('')
          inputRef.current?.focus()
        }, 1100)
      }
    }, 750)
  }

  const buttonText = (() => {
    if (state === 'checking') return `VERIFICANDO${'.'.repeat(dots)}`
    if (state === 'denied') return '◤ ACCESO DENEGADO ◢'
    if (state === 'granted') return '◤ ACCESO CONCEDIDO ◢'
    return '▣ VERIFICAR'
  })()

  return (
    <div className="gate-stage">
      <div className="gate-scanlines" aria-hidden />
      <div className="gate-vignette" aria-hidden />

      <motion.form
        className={`gate-card gate-card--${state}`}
        onSubmit={submit}
        animate={state === 'denied' ? { x: [0, -10, 10, -8, 8, -4, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="gate-stamp"
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: [0.5, 1, 0.5], rotate: -8 }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ◉ ACCESO RESTRINGIDO · NIVEL 4
        </motion.div>

        <div className="gate-id">
          EXPEDIENTE&nbsp;<span className="red">12-19</span>&nbsp;·&nbsp;ARG-WUH
        </div>

        <hr className="gate-rule" />

        <label className="gate-label" htmlFor="gate-input">
          INGRESE CLAVE DE DESCIFRADO
        </label>

        <input
          id="gate-input"
          ref={inputRef}
          className="gate-input"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          spellCheck={false}
          disabled={state === 'checking' || state === 'granted'}
          aria-label="Clave de descifrado"
        />

        <button
          className="gate-submit"
          type="submit"
          disabled={state !== 'idle'}
          data-state={state}
        >
          {buttonText}
        </button>

        {attempts > 0 && state !== 'granted' && (
          <div className="gate-attempts">
            INTENTOS FALLIDOS: <span className="red">{String(attempts).padStart(2, '0')}</span>
          </div>
        )}

        <div className="gate-hint">
          Pista: pregúntele a quien le pasó este expediente.
        </div>
      </motion.form>

      <div className="gate-footer">
        ESTE TERMINAL ESTÁ SIENDO MONITOREADO · USO INTERNO — NO DIVULGAR
      </div>
    </div>
  )
}
