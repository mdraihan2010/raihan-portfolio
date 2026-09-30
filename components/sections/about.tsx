import {
  BookOpen,
  Code2,
  Globe,
  Lightbulb,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

type Item = { icon: LucideIcon; label: string }

const interests: Item[] = [
  { icon: Target, label: 'Competitive Programming' },
  { icon: Lightbulb, label: 'Problem Solving' },
  { icon: Code2, label: 'Software Engineering' },
  { icon: BookOpen, label: 'Research & Higher Studies' },
  { icon: Globe, label: 'Open Source' },
]

const currentFocus = [
  'Programming',
  'Data Structures',
  'Algorithms',
  'Web Development',
]

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About Me"
      title="A CSE student who enjoys solving problems."
    >
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* About Me */}
        <div>
          <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m{' '}
              <span className="font-medium text-foreground">MD Raihan</span>,
              a CSE student passionate about technology, problem solving,
              competitive programming, software engineering, and web
              development.
            </p>

            <p>
              I enjoy learning new technologies, building practical projects,
              solving algorithmic problems, and continuously improving my
              programming skills.
            </p>

            <p>
              Looking ahead, my long-term goal is to pursue{' '}
              <span className="font-medium text-foreground">
                higher studies abroad
              </span>{' '}
              and build a career in software engineering, research, and
              computer science.
            </p>
          </Reveal>
        </div>

        {/* Interests + Currently Developing */}
        <div className="space-y-8">
          <Reveal delay={100}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Interests
            </h3>

            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {interests.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <Icon
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently Developing
            </h3>

            <ul className="flex flex-wrap gap-2">
              {currentFocus.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  <span
                    className="size-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}