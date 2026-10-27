import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

/**
 * Social share image (1200x630).
 * LinkedIn / Facebook / WhatsApp e site er link share korle ei chobi ta dekhabe.
 * Next.js build er shomoy ei JSX theke PNG image baniye dey.
 */
export const alt = `${siteConfig.name} — Portfolio`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const roles = siteConfig.role.split(' | ')
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0f1115',
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgba(45,212,191,0.22), transparent 45%)',
          color: '#f1f3f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#5eead4', fontFamily: 'monospace' }}>
          {'> md.raihan'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
          <div style={{ display: 'flex', marginTop: 20, fontSize: 28, color: '#5eead4' }}>
            {roles.join('  /  ')}
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 28, color: '#9aa3ad' }}>
            {siteConfig.university}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#9aa3ad' }}>
          {siteConfig.siteUrl.replace('https://', '')}
        </div>
      </div>
    ),
    size,
  )
}
