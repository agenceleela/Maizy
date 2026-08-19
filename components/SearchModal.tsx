'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { searchProducts } from '@/data/products';
import { Product } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchProducts(query);
      setResults(searchResults.slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-maizy-cream shadow-xl max-h-[80vh] overflow-hidden"
          >
            <div className="max-w-4xl mx-auto p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  autoFocus
                  className="flex-1 text-2xl font-display font-bold bg-transparent focus:outline-none"
                />
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Results */}
              {query.trim() && (
                <div className="border-t pt-6">
                  {results.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          onClick={onClose}
                          className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="relative w-20 h-24 flex-shrink-0">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm truncate">{product.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                            <p className="text-sm font-medium mt-2">
                              €{product.salePrice || product.price}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-12">No products found</p>
                  )}
                </div>
              )}

              {!query.trim() && (
                <div className="text-center text-gray-400 py-12">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Start typing to search products</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
