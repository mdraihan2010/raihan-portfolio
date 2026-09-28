import {
  BookOpen,
  Braces,
  Code2,
  Globe,
  GraduationCap,
  Lightbulb,
  Plane,
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
  { icon: Globe, label: 'Web Development' },
  { icon: BookOpen, label: 'Continuous Learning' },
]

const currentFocus = ['Programming', 'Data Structures', 'Algorithms', 'Web Development']

const facts: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: GraduationCap, label: 'University', value: 'Jashore University of Science and Technology' },
  { icon: Braces, label: 'Department', value: 'Computer Science and Engineering' },
  { icon: BookOpen, label: 'Current Status', value: '3rd Year, 1st Semester' },
  { icon: Plane, label: 'Long-term Goal', value: "Master's degree abroad" },
]

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About Me" title="A CSE student who enjoys solving problems.">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="space-y-10">
          <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m <span className="font-medium text-foreground">MD Raihan</span>, a Computer Science and
              Engineering student at Jashore University of Science and Technology (JUST), currently in my 3rd Year,
              1st Semester.
            </p>
            <p>
              My journey in CSE has grown into a genuine interest in technology, especially competitive programming,
              problem solving, software engineering, and web development. I believe in continuous learning and try to
              improve a little every day.
            </p>
            <p>
              Looking ahead, my long-term goal is to pursue{' '}
              <span className="font-medium text-foreground">higher studies abroad</span> and complete a Master&apos;s
              degree in a relevant field of Computer Science.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently developing
            </h3>
            <ul className="flex flex-wrap gap-2">
              {currentFocus.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={100}>
            <dl className="divide-y divide-border rounded-xl border border-border bg-card">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 px-5 py-4">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/60">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm font-medium leading-snug">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Interests</h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {interests.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
