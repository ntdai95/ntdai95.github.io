import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedNumber({
  to,
  from = 0,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1400,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(from)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(from + (to - from) * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, from, to, duration])

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value)
  return <span ref={ref}>{`${prefix}${formatted}${suffix}`}</span>
}
