import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, index, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('border-t border-border/60 py-16 md:py-20', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
              <span>{index}</span>
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              <span>{eyebrow}</span>
            </p>
            <h2 id={headingId} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
            )}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  )
}

export function PlaceholderBadge({ label = 'Placeholder' }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-primary/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
      {label}
    </span>
  )
}
