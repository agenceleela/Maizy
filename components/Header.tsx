'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { cn } from '@/lib/utils';
import logo from '../image1.png';

interface HeaderProps {
  onSearchOpen?: () => void;
}

export default function Header({ onSearchOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/shop', label: 'NOUVEAUTÉS' },
    { href: '/shop', label: 'BOUTIQUE' },
    { href: '/collections', label: 'COLLECTIONS' },
    { href: '/about', label: 'À PROPOS' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-8 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-maizy-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="MAIZY"
                width={120}
                height={48}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wider text-maizy-charcoal hover:text-maizy-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icônes */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onSearchOpen}
                className="p-2 hover:bg-maizy-green/10 rounded-full transition-colors"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5 text-maizy-charcoal" />
              </button>

              <button
                className="hidden md:block p-2 hover:bg-maizy-green/10 rounded-full transition-colors"
                aria-label="Compte"
              >
                <User className="w-5 h-5 text-maizy-charcoal" />
              </button>

              <CartButton totalItems={getTotalItems()} />

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 hover:bg-maizy-green/10 rounded-full transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5 text-maizy-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-maizy-cream animate-slide-up">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-display text-lg font-bold">MENU</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-maizy-green/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium tracking-wider py-2 border-b border-gray-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function CartButton({ totalItems }: { totalItems: number }) {
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 hover:bg-maizy-green/10 rounded-full transition-colors"
      aria-label="Panier"
    >
      <ShoppingBag className="w-5 h-5 text-maizy-charcoal" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-maizy-red text-white text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}
