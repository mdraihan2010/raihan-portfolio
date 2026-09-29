import Image from 'next/image'
import { BookOpen, Braces, MapPin, type LucideIcon } from 'lucide-react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

const details: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Braces, label: 'Department', value: siteConfig.department },
  { icon: BookOpen, label: 'Academic Status', value: siteConfig.academicStatus },
  { icon: MapPin, label: 'Country', value: siteConfig.location },
]

export function Education() {
  return (
    <Section id="education" index="02" eyebrow="Education" title="Where I'm building my foundation.">
      <ol className="relative">
        <li className="relative pl-10 md:pl-14">
          <div
            className="absolute left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[19px]"
            aria-hidden="true"
          />
          <span
            className="absolute left-0 top-6 flex size-8 items-center justify-center rounded-full border border-primary/40 bg-background md:size-10"
            aria-hidden="true"
          >
            <span className="size-2.5 rounded-full bg-primary shadow-[0_0_0_4px] shadow-primary/15" />
          </span>

          <Reveal>
            <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <header className="flex flex-col gap-5 border-b border-border p-6 sm:flex-row sm:items-start sm:justify-between md:p-8">
                <div className="flex items-start gap-4 md:gap-5">
<div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white md:size-20">
  <Image
    src="/just-logo.png"
    alt="Jashore University of Science and Technology logo"
    width={96}
    height={96}
    className="size-14 object-contain md:size-18"
  />
</div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">University</p>
                    <h3 className="mt-1.5 text-balance text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                      {siteConfig.university}
                    </h3>
                  </div>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  <span className="relative flex size-1.5" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  Currently Studying
                </span>
              </header>

              <dl className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-5 md:p-6">
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
            </article>
          </Reveal>
        </li>
      </ol>
    </Section>
  )
}
