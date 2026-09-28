import { ArrowUpRight, Terminal } from 'lucide-react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { cpFocusAreas, cpProfiles } from '@/lib/site-config'

export function CompetitiveProgramming() {
  return (
    <Section
      id="competitive-programming"
      index="05"
      eyebrow="Competitive Programming"
      title="Sharpening logic, one problem at a time."
      description="Competitive programming is where I practice thinking clearly under constraints. I primarily use C++ and focus on building a strong grasp of data structures, algorithms, and structured problem solving."
    >
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {cpFocusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 60}>
              <article className="h-full rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Terminal className="size-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">Profiles</h3>
            </div>
            <ul className="divide-y divide-border">
              {cpProfiles.map((profile) => (
                <li key={profile.name}>
                  {profile.url ? (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 text-sm transition-colors hover:text-primary"
                    >
                      <span className="font-medium">{profile.name}</span>
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-between py-3.5 text-sm">
                      <span className="font-medium">{profile.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">link coming soon</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
