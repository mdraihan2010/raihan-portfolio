import Image from 'next/image'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GitHubIcon } from '@/components/brand-icons'
import { PlaceholderBadge, Section, Tag } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { projects, type Project } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function ProjectCard({ project }: { project: Project }) {
  const external = (url: string) =>
    url.startsWith('http')
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">

{/* Project Preview */}
<div className="-mx-6 -mt-6 mb-6 aspect-video overflow-hidden rounded-t-xl border-b border-border bg-secondary/30">
  {project.name === 'Personal Portfolio Website' ? (
    <Image
      src="/projects/portfolio-preview.png"
      alt="Personal Portfolio Website preview"
      width={1280}
      height={720}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full items-center justify-center">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Project Preview
      </span>
    </div>
  )}
</div>

      {/* Project Icon & Placeholder */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <FolderGit2 className="size-6 text-primary" aria-hidden="true" />

        {project.placeholder && <PlaceholderBadge />}
      </div>

      {/* Project Title */}
      <h3 className="text-lg font-semibold tracking-tight">
        {project.name}
      </h3>

      {/* Project Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Technologies */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      {/* Project Links */}
      <div className="mt-6 flex gap-2 border-t border-border pt-5">
        <a
          href={project.githubUrl}
          {...external(project.githubUrl)}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-9 flex-1 px-3'
          )}
        >
          <GitHubIcon className="size-4" />
          GitHub
          <span className="sr-only">
            {' '}
            repository for {project.name}
          </span>
        </a>

        <a
          href={project.liveUrl}
          {...external(project.liveUrl)}
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'h-9 flex-1 px-3'
          )}
        >
          <ExternalLink aria-hidden="true" />
          Live Demo
          <span className="sr-only">
            {' '}
            of {project.name}
          </span>
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title="Selected work."
      description="A showcase of things I've built. Project details will be updated here as they are completed."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={`${project.name}-${i}`} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}