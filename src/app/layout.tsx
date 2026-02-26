import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Robex Solutions | High-Performance CNC Machinery for Manufacturing',
  description:
    'Robex Solutions provides advanced CNC machining centers, turning centers, and 5-axis machines for China\'s manufacturing sector. Precision engineering, lifecycle support, and a dedicated partnership to elevate your production.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Robex Solutions: Engineering Precision for Modern Manufacturing',
    description:
      'Discover high-performance CNC machinery and automation solutions designed to give China\'s leading manufacturers a decisive competitive edge.',
    type: 'website',
    images: [{ url: '/images/hero-main.png', alt: 'Robex Solutions manufacturing floor with CNC machines' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
