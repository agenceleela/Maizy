'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, collections } from '@/data/products';

const collectionImages: Record<string, string> = {
  'new-arrivals': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80',
  'essentials': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  'tees': 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=1200&q=80',
  'outerwear': 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80',
  'accessories': 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1200&q=80',
};

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const getCollectionProducts = (slug: string) => {
    switch (slug) {
      case 'new-arrivals': return products.filter(p => p.newArrival);
      case 'essentials': return products.filter(p => p.featured);
      case 'tees': return products.filter(p => p.category === 'T-Shirts');
      case 'outerwear': return products.filter(p => p.category === 'Jackets');
      case 'accessories': return products.filter(p => p.category === 'Accessories');
      default: return products;
    }
  };

  const filteredProducts = selectedCollection ? getCollectionProducts(selectedCollection) : [];

  return (
    <main className="pt-20">
      <section className="py-16 px-4 bg-maizy-charcoal text-white text-center">
        <p className="text-maizy-yellow text-xs tracking-[0.3em] mb-4">973 — FRENCH GUIANA</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">COLLECTIONS</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Curated selections that define the MAIZY aesthetic.</p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {!selectedCollection && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => {
                const collectionProducts = getCollectionProducts(collection.slug);
                return (
                  <button
                    key={collection.slug}
                    onClick={() => setSelectedCollection(collection.slug)}
                    className="group relative aspect-[4/5] overflow-hidden bg-gray-100 text-left"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={collectionImages[collection.slug]}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex gap-1 mb-3">
                        <span className="w-6 h-0.5 bg-maizy-green" />
                        <span className="w-6 h-0.5 bg-maizy-yellow" />
                        <span className="w-6 h-0.5 bg-maizy-red" />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-sm opacity-80">{collectionProducts.length} PRODUCTS</p>
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
