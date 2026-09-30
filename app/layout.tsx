import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { themeInitScript } from '@/lib/theme-script'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const title = 'MD Raihan — CSE Student & Competitive Programmer'

const description =
  'Portfolio of MD Raihan, a Computer Science and Engineering student at Jashore University of Science and Technology (JUST), Bangladesh, interested in competitive programming, software engineering, and web development.'

export const metadata: Metadata = {
  title: { default: title, template: '%s | MD Raihan' },
  description,
  applicationName: 'MD Raihan Portfolio',
  authors: [{ name: 'MD Raihan' }],
  creator: 'MD Raihan',
  keywords: [
    'MD Raihan',
    'Portfolio',
    'CSE Student',
    'Jashore University of Science and Technology',
    'JUST',
    'Competitive Programming',
    'Software Engineering',
    'Web Development',
    'C++',
    'Bangladesh',
  ],
  openGraph: {
    type: 'website',
    title,
    description,
    siteName: 'MD Raihan',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#fafafa',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#0f1115',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}