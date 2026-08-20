import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import HeaderWithSearch from '@/components/HeaderWithSearch'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import AnnouncementBar from '@/components/AnnouncementBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'MAIZY | Streetwear né dans les tropiques',
  description: 'Streetwear contemporain inspiré de la Guyane française, des environnements tropicaux et de la culture urbaine moderne.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <AnnouncementBar />
        <HeaderWithSearch />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
