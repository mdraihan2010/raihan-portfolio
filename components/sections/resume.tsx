import { Download, FileText } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Resume() {
  return (
    <Section id="resume" index="09" eyebrow="Resume" title="My resume, in one place.">
      <Reveal>
        <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-5">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <FileText className="size-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Download my resume</h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                A concise overview of my education, skills, and projects in PDF format.
              </p>
            </div>
          </div>
          <a href={siteConfig.resumeUrl} download className={cn(buttonVariants(), 'h-11 px-5')}>
            <Download aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
