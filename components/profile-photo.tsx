import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function ProfilePhoto({ className }: { className?: string }) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:ml-auto lg:mr-0 lg:max-w-[20rem]', className)}>
      <div
        className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/30"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/30">
        <Image
          src="/images/profile.jpg"
          alt={`Portrait of ${siteConfig.name}`}
          width={864}
          height={1184}
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 224px"
          className="aspect-[4/5] h-auto w-full object-cover object-top"
        />
      </div>
    </figure>
  )
}
