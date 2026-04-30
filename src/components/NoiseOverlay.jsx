/**
 * Overlay de ruido + viñeta + scanlines.
 * Usa un SVG inline con feTurbulence (sin assets externos).
 * Está en pointer-events: none para no bloquear la interacción.
 */
export default function NoiseOverlay() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
    </>
  )
}
