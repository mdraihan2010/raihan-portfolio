'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Number ta 0 theke `to` porjonto gune gune bare — kintu shudhu tokhon-i
 * jokhon element ta screen e ashe (IntersectionObserver).
 *
 * Animation logic (requestAnimationFrame):
 *   t        = elapsed / duration          -> 0 theke 1
 *   eased    = 1 - (1 - t)^3               -> shuru te druto, sheshe dhire (ease-out)
 *   value    = round(eased * to)
 */
export function CountUp({ to, duration = 1200, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect() // ekbar-i animate korbo

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(eased * to))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}
