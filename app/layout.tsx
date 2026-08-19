'use client';

import { useState } from 'react';
import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <Header onSearchOpen={() => setIsSearchOpen(true)} />
        {children}
        <Footer />
        <CartDrawer />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </body>
    </html>
  );
}
