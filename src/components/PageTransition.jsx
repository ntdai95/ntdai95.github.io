import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.4, 0, 0.2, 1] } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
    >
      {children}
    </motion.div>
  )
}
