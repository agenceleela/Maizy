'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const categoryLabels: Record<string, string> = {
  'All': 'TOUT',
  'T-Shirts': 'T-SHIRTS',
  'Hoodies': 'HOODIES',
  'Jackets': 'VESTES',
  'Pants': 'PANTALONS',
  'Accessories': 'ACCESSOIRES',
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="pt-28">
      {/* Header */}
      <section className="py-16 px-4 bg-maizy-charcoal text-white text-center">
        <p className="text-maizy-yellow text-xs tracking-[0.3em] mb-4">973 — GUYANE FRANÇAISE</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          BOUTIQUE
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explorez notre collection complète d&apos;essentiels streetwear premium.
        </p>
      </section>

      {/* Filtres */}
      <section className="sticky top-8 z-40 bg-maizy-cream/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex items-center gap-2 md:gap-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wider transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-maizy-charcoal text-white'
                    : 'text-gray-600 hover:text-maizy-green'
                }`}
              >
                {categoryLabels[category] || category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500">Aucun produit dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
