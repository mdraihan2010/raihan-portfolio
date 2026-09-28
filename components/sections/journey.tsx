import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { journey } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Journey() {
  return (
    <Section
      id="journey"
      index="06"
      eyebrow="Learning Journey"
      title="How my path has taken shape."
      description="The languages and areas I've explored so far, in the order they became part of my learning."
    >
      <ol className="relative ml-3 border-l border-border md:ml-4">
        {journey.map((step, i) => (
          <li key={step.title} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
            <span
              className={cn(
                'absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 bg-background',
                step.current ? 'border-primary bg-primary' : 'border-primary/60',
              )}
              aria-hidden="true"
            />
            <Reveal delay={i * 60}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">Step {String(i + 1).padStart(2, '0')}</span>
                {step.current && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                    In progress
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
