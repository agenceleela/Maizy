'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCartStore } from '@/lib/cart';
import { ChevronLeft, Minus, Plus } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[1] || 'M');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'Black');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">PRODUCT NOT FOUND</h1>
          <Link href="/shop" className="text-maizy-green hover:underline">
            CONTINUE SHOPPING →
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
  };

  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  // Get related products (same category, excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/shop" className="flex items-center gap-2 text-sm text-gray-500 hover:text-maizy-charcoal transition-colors">
          <ChevronLeft className="w-4 h-4" />
          BACK TO SHOP
        </Link>
      </div>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden image-zoom-container bg-gray-100">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-24 h-32 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                      activeImage === index ? 'border-maizy-charcoal' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-500">{product.category}</p>
            </div>

            <div className="flex items-center gap-4">
              {hasSale && (
                <span className="text-lg text-gray-400 line-through">€{product.price}</span>
              )}
              <span className="text-2xl font-display font-bold">€{displayPrice}</span>
              {hasSale && (
                <span className="px-2 py-1 bg-maizy-red text-white text-xs font-bold">
                  SALE
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">COLOR</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedColor === color
                        ? 'border-maizy-charcoal bg-maizy-charcoal text-white'
                        : 'border-gray-300 hover:border-maizy-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">SIZE</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-maizy-charcoal bg-maizy-charcoal text-white'
                        : 'border-gray-300 hover:border-maizy-charcoal'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium mb-2 block">QUANTITY</label>
              <div className="flex items-center border w-max">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full py-4 bg-maizy-charcoal text-white font-medium tracking-wider hover:bg-maizy-green transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
            </button>

            {/* Product Details Accordion */}
            <div className="border-t pt-6 space-y-4">
              <div>
                <h3 className="font-medium text-sm mb-2">PRODUCT DETAILS</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Premium quality materials</li>
                  <li>Designed in French Guiana</li>
                  <li>Regular fit</li>
                  <li>Model is wearing size M</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-2">CARE INSTRUCTIONS</h3>
                <p className="text-sm text-gray-600">
                  Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-2">SHIPPING</h3>
                <p className="text-sm text-gray-600">
                  Free shipping on orders over €150. Worldwide delivery available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 bg-maizy-cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
