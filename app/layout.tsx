import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cat Café Studio | Backend & Game Developer',
  description: 'Welcome to my cozy digital café – exploring backend development, game design, and WebGL experiences',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/profile.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/profile.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/profile.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/profile.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
