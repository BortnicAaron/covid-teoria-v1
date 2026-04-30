import { motion } from 'framer-motion'

/**
 * HUD fijo: aporta la sensación de “dossier confidencial”.
 * - Sello CLASIFICADO arriba a la derecha (parpadeo sutil).
 * - Folio del expediente abajo a la izquierda.
 * - Indicador de página abajo a la derecha.
 */
export default function ClassifiedHud({ current, total }) {
  return (
    <>
      <motion.div
        className="hud hud-stamp"
        initial={{ opacity: 0, rotate: -8, scale: 1.2 }}
        animate={{ opacity: [0.55, 0.95, 0.55], rotate: -8, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ◉ CLASIFICADO · NIVEL 4
      </motion.div>

      <div className="hud hud-folio">
        EXPEDIENTE&nbsp;<span className="red">12-19</span>&nbsp;/&nbsp;ARG-WUH
        <br />
        <span className="dim">USO INTERNO — NO DIVULGAR</span>
      </div>

      <div className="hud hud-page">
        FOLIO&nbsp;<span className="red">{String(current + 1).padStart(2, '0')}</span>
        &nbsp;/&nbsp;{String(total).padStart(2, '0')}
      </div>
    </>
  )
}
