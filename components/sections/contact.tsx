import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'
import { CopyButton } from '@/components/copy-button'

type ContactItem = {
  label: string
  value: string
  href?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.links.email}`

// Email ta upore alada boro card e ache, tai ekhane shudhu baki gulo
const items: ContactItem[] = [
  { label: 'Phone', value: siteConfig.links.phone, href: `tel:${siteConfig.links.phone}`, icon: Phone },
  { label: 'GitHub', value: siteConfig.links.github.replace('https://', ''), href: siteConfig.links.github, icon: GitHubIcon },
  { 
    label: 'LinkedIn', 
    value: siteConfig.links.linkedin.replace('https://www.', ''), 
    href: siteConfig.links.linkedin, 
    icon: LinkedInIcon, 
  },
  { label: 'Location', value: siteConfig.location, icon: MapPin }, 
]

export function Contact() {
  return (
    <Section
      id="contact"
      index="10"
      eyebrow="Contact"
      title="Let's connect."
      description="I'm always happy to talk about programming, learning opportunities, or collaboration. Feel free to reach out through any of the channels below."
    >
      <Reveal>
        <div className="mb-4 flex flex-col gap-5 rounded-xl border border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Best way to reach me
              </p>
              <p className="mt-1 break-all text-lg font-semibold md:text-xl">{siteConfig.links.email}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <CopyButton value={siteConfig.links.email} label="Copy email" />
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send email
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map(({ label, value, href, icon: Icon }, i) => {
          const content = (
            <>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-1 truncate font-medium">{value}</p>
              </div>
              {href && (
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              )}
            </>
          )
          const base = 'group flex items-center gap-4 rounded-xl border border-border bg-card p-5'
          return (
            <li key={label}>
              <Reveal delay={i * 60}>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`${base} transition-colors hover:border-primary/40`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={base}>{content}</div>
                )}
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
