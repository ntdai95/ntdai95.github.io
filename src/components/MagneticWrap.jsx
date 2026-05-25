import { useCallback } from 'react'

/**
 * Wraps a child in a span that slightly attracts toward the cursor —
 * the "magnetic button" effect common on premium agency sites.
 */
export default function MagneticWrap({ children, strength = 0.3 }) {
  const onMove = useCallback(
    (e) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * strength
      const y = (e.clientY - rect.top - rect.height / 2) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    },
    [strength]
  )

  const onLeave = useCallback((e) => {
    e.currentTarget.style.transform = ''
  }, [])

  return (
    <span
      style={{ display: 'inline-block', transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  )
}
