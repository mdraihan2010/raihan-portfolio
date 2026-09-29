import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'

type ContactItem = {
  label: string
  value: string
  href?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const items: ContactItem[] = [
  { label: 'Email', value: siteConfig.links.email, href: `mailto:${siteConfig.links.email}`, icon: Mail },
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
      <ul className="grid gap-4 sm:grid-cols-2">
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
