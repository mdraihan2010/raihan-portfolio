import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

// /sitemap.xml banay: Google ke site er page gulor list dey
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
