import { motion } from 'framer-motion'

/**
 * Splits text into words and reveals each one by sliding up from behind
 * a clipping mask — the "masked text reveal" used by Apple, Linear, Stripe.
 */
export default function SplitText({ children, delay = 0, className, tag: Tag = 'span' }) {
  const words = children.split(' ')

  return (
    <Tag className={className} style={{ display: 'block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '115%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.62,
              delay: delay + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
