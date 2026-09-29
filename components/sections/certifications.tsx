import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { certifications } from '@/lib/site-config'

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="08"
      eyebrow="Certifications"
      title="Learning beyond the classroom."
      description="Certificates from courses and learning programs that have contributed to my technical and personal development."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-5 flex items-center justify-between">
                <BadgeCheck className="size-5 text-primary" aria-hidden="true" />

                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {item.date}
                </span>
              </div>

              <h3 className="font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-primary">
                {item.issuer}
              </p>

             <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
             {item.description}
             </p>
       <a
        href={item.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/10"
        >
           View Certificate
           <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}