import { useState, useEffect } from 'react'

export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 45, pauseMs = 2000) {
  const [{ wordIdx, charIdx, deleting, paused }, setState] = useState({
    wordIdx: 0, charIdx: 0, deleting: false, paused: false,
  })

  useEffect(() => {
    const word = words[wordIdx]

    if (paused) {
      const t = setTimeout(
        () => setState(s => ({ ...s, paused: false, deleting: true })),
        pauseMs
      )
      return () => clearTimeout(t)
    }

    const delay = deleting ? deleteSpeed : typeSpeed
    const t = setTimeout(() => {
      if (!deleting) {
        const next = charIdx + 1
        setState(s => ({ ...s, charIdx: next, paused: next === word.length }))
      } else {
        const next = charIdx - 1
        setState(s => ({
          ...s,
          charIdx: next,
          deleting: next > 0,
          wordIdx: next === 0 ? (wordIdx + 1) % words.length : wordIdx,
        }))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [wordIdx, charIdx, deleting, paused, words, typeSpeed, deleteSpeed, pauseMs])

  return words[wordIdx].slice(0, charIdx)
}
