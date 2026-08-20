'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  const total = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-maizy-cream z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="font-display text-xl font-bold">PANIER</h2>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-maizy-green/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Votre panier est vide</p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="inline-block px-6 py-3 bg-maizy-charcoal text-white font-medium hover:bg-maizy-green transition-colors"
                    >
                      CONTINUER MES ACHATS
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <motion.div
                        key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="relative w-24 h-32 flex-shrink-0 image-zoom-container">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-1">{item.product.name}</h3>
                          <p className="text-xs text-gray-500 mb-2">
                            {item.selectedSize} / {item.selectedColor}
                          </p>
                          <p className="text-sm font-medium mb-3">
                            €{item.product.salePrice || item.product.price}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedSize,
                                    item.selectedColor,
                                    item.quantity - 1
                                  )
                                }
                                className="p-1 hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-3 text-sm">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedSize,
                                    item.selectedColor,
                                    item.quantity + 1
                                  )
                                }
                                className="p-1 hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                removeItem(item.product.id, item.selectedSize, item.selectedColor)
                              }
                              className="p-1 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">SOUS-TOTAL</span>
                    <span className="font-display text-xl font-bold">€{total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Frais de port et taxes calculés au paiement.
                  </p>
                  <button
                    className={cn(
                      'w-full py-4 font-medium tracking-wider transition-colors',
                      'bg-maizy-charcoal text-white hover:bg-maizy-green'
                    )}
                  >
                    PASSER LA COMMANDE
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full py-3 text-sm text-gray-500 hover:text-maizy-charcoal"
                  >
                    CONTINUER MES ACHATS
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
