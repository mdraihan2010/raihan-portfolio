import { Braces, Cpu, Layout, Wrench } from 'lucide-react'
import { Section, Tag } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/site-config'

const icons = [Braces, Layout, Cpu, Wrench]

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Tools and topics I work with."
      description="Technologies I have been learning and practicing through coursework, contests, and personal exploration. I'm continuously working to deepen my understanding of each."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.title} delay={i * 60}>
              <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
