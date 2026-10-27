'use client'

import { useEffect, useState } from 'react'

type TypingTextProps = {
  words: string[]
  typeSpeed?: number // prottek letter type korte koto ms
  deleteSpeed?: number // prottek letter muchte koto ms
  pause?: number // pura word dekhanor por koto ms thambe
}

/**
 * Typing animation — ekta "state machine" er moto kaj kore:
 *
 *   1. TYPING   : text e ekta kore letter jog hoy
 *   2. PAUSE    : pura word lekha hole kichukkhon thame
 *   3. DELETING : ekta kore letter muche jay
 *   4. tarpor porer word e jay (wordIndex + 1), abar 1 theke shuru
 *
 * Protiti step e ekta setTimeout chalai. State change hole useEffect
 * abar chole ar porer step er timeout set kore.
 */
export function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1600,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const word = words[wordIndex % words.length]

    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = pause // pura lekha shesh -> thamo

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduceMotion])

  // Motion kom chaile animation chara shudhu prothom word dekhai
  const shown = reduceMotion ? words[0] : text

  return (
    <span className="inline-flex items-center">
      <span>{shown}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-[blink_1s_steps(1)_infinite] bg-primary"
      />
    </span>
  )
}
