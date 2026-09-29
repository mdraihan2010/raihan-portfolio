import { ArrowRight, Download, GraduationCap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { ProfilePhoto } from '@/components/profile-photo'

const bigButton = 'h-11 px-5 text-sm'
const socialButton = cn(
  buttonVariants({ variant: 'ghost' }),
  'h-9 px-3 text-muted-foreground hover:text-foreground'
)

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative -mt-16 overflow-hidden pt-16"
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-16 md:px-8 md:pt-14 md:pb-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:pt-16 lg:pb-28">
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 lg:items-start lg:text-left">

          <h1
            id="hero-heading"
            className="mt-0 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </h1>

          <p
            aria-label={siteConfig.role}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-mono text-sm leading-relaxed text-primary sm:text-base lg:justify-start"
          >
            {siteConfig.role.split(' | ').map((part, index) => (
              <span
                key={part}
                className="inline-flex items-center gap-2.5 whitespace-nowrap"
                aria-hidden="true"
              >
                {index > 0 && (
                  <span className="text-primary/40">{'/'}</span>
                )}
                {part}
              </span>
            ))}
          </p>

          <p className="mt-5 flex items-center gap-2 text-balance text-sm text-foreground/80">
            <GraduationCap
              className="hidden size-4 shrink-0 text-muted-foreground sm:block"
              aria-hidden="true"
            />
            <span>{siteConfig.university}</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.shortIntro}
          </p>

          <p className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-primary/25 bg-primary/5 px-3.5 py-2 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Future Goal
            </span>

            <span
              className="h-4 w-px bg-primary/30"
              aria-hidden="true"
            />

            <span className="font-medium text-foreground">
              {siteConfig.futureGoal}
            </span>

            <span aria-hidden="true">{'🌍'}</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className={cn(buttonVariants(), bigButton)}
            >
              View My Projects
              <ArrowRight aria-hidden="true" />
            </a>

            <a
              href={siteConfig.resumeUrl}
              download
              className={cn(
                buttonVariants({ variant: 'outline' }),
                bigButton
              )}
            >
              <Download aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-5 flex items-center gap-1 lg:-ml-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialButton}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>

            <span
              className="h-4 w-px bg-border"
              aria-hidden="true"
            />

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialButton}
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-first animate-in fade-in slide-in-from-bottom-6 delay-150 duration-700 fill-mode-both lg:order-none">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  )
}