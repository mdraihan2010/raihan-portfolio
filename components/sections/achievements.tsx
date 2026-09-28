import { Award } from 'lucide-react'
import { PlaceholderBadge, Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { achievements } from '@/lib/site-config'

export function Achievements() {
  return (
    <Section
      id="achievements"
      index="07"
      eyebrow="Achievements"
      title="Milestones along the way."
      description="This space is reserved for contest results, certifications, and other recognitions. It will be updated as new milestones are reached."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={i} delay={i * 60}>
            <article className="flex h-full flex-col rounded-xl border border-dashed border-border bg-card/50 p-6">
              <div className="mb-5 flex items-center justify-between">
                <Award className="size-5 text-muted-foreground" aria-hidden="true" />
                <PlaceholderBadge />
              </div>
              <h3 className="font-semibold text-muted-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
