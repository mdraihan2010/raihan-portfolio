'use client'

import { useEffect, useRef } from 'react'

/**
 * Header er niche ekta patla bar — page koto tuku scroll hoyeche dekhay.
 *
 * Logic:
 *   progress = scrollY / (total page height - screen height)   -> 0 theke 1
 *   tarpor bar er width = progress * 100%  (transform: scaleX diye, jate smooth hoy)
 *
 * useState na use kore ref use korechi: protiti scroll e React re-render
 * hobe na, shudhu DOM e style change hobe -> fast.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
      }
    }

    // requestAnimationFrame: ek frame e ekbar-i update hobe
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="absolute inset-x-0 -bottom-px h-0.5" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-primary"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
