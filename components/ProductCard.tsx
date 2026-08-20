'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCartStore } from '@/lib/cart';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, 1, product.sizes[1] || 'M', product.colors[0] || 'Black');
  };

  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isHovered ? 'scale-105' : 'scale-100'
          )}
          priority={false}
        />

        {product.newArrival && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-maizy-green text-white text-xs font-bold tracking-wider">
            NOUVEAU
          </span>
        )}

        {hasSale && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-maizy-red text-white text-xs font-bold tracking-wider">
            SOLDE
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          className={cn(
            'absolute bottom-0 left-0 right-0 py-3 bg-maizy-charcoal text-white font-medium tracking-wider',
            'transition-all duration-300 transform',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          AJOUT RAPIDE
        </button>
      </Link>

      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium text-sm text-maizy-charcoal hover:text-maizy-green transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500">{product.category}</p>
        <div className="flex items-center gap-2">
          {hasSale && (
            <span className="text-xs text-gray-400 line-through">€{product.price}</span>
          )}
          <span className="text-sm font-medium">€{displayPrice}</span>
        </div>
      </div>
    </div>
  );
}
