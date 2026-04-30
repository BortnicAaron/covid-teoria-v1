import { createContext } from 'react'

// Contexto: índice del slide visible. Permite a cada slide saber si está
// activo y disparar/sincronizar animaciones de Framer Motion.
export const SlideContext = createContext({ current: 0 })
