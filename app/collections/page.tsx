'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, collections } from '@/data/products';
import Link from 'next/link';

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const getCollectionProducts = (slug: string) => {
    switch (slug) {
      case 'new-arrivals':
        return products.filter(p => p.newArrival);
      case 'essentials':
        return products.filter(p => p.featured);
      case 'tees':
        return products.filter(p => p.category === 'T-Shirts');
      case 'outerwear':
        return products.filter(p => p.category === 'Jackets');
      case 'accessories':
        return products.filter(p => p.category === 'Accessories');
      default:
        return products;
    }
  };

  const filteredProducts = selectedCollection 
    ? getCollectionProducts(selectedCollection)
    : [];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-maizy-charcoal text-white text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          COLLECTIONS
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Curated selections that define the MAIZY aesthetic.
        </p>
      </section>

      {/* Collection Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {!selectedCollection && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection, index) => {
                const collectionProducts = getCollectionProducts(collection.slug);
                return (
                  <button
                    key={collection.slug}
                    onClick={() => setSelectedCollection(collection.slug)}
                    className="group relative aspect-[4/5] overflow-hidden bg-gray-100 text-left"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={`https://images.unsplash.com/photo-${1523396870777 + index}?w=800&q=80`}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm opacity-80">
                        {collectionProducts.length} PRODUCTS
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {selectedCollection && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  {collections.find(c => c.slug === selectedCollection)?.name}
                </h2>
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="text-sm font-medium hover:text-maizy-green transition-colors"
                >
                  ← BACK TO COLLECTIONS
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
