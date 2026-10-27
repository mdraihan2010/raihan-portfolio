import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

// /robots.txt banay: search engine ke bole site ta crawl korte parbe
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  }
}
