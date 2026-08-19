import { Inter, Syne } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'MAIZY | Streetwear Born in the Tropics',
  description: 'Contemporary streetwear inspired by French Guiana, tropical environments, and modern urban fashion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
