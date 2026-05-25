import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  // Only show on the very first page load of a session
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem('visited') } catch { return false }
  })

  useEffect(() => {
    if (!show) return
    try { sessionStorage.setItem('visited', '1') } catch {}
    const t = setTimeout(() => setShow(false), 1100)
    return () => clearTimeout(t)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <motion.p
            className="preloader-name"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            TDN
          </motion.p>
          <div className="preloader-bar-wrap">
            <motion.div
              className="preloader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
