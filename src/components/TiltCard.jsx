import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

const variant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function TiltCard({ children, className, ...props }) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 180, damping: 28 })
  const springY = useSpring(rawY, { stiffness: 180, damping: 28 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7])

  return (
    <motion.article
      className={className}
      variants={variant}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        rawX.set((e.clientX - r.left) / r.width - 0.5)
        rawY.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { rawX.set(0); rawY.set(0) }}
      {...props}
    >
      {children}
    </motion.article>
  )
}
