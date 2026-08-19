import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts, getNewArrivals } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import EditorialSection from '@/components/EditorialSection';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523396870777-e91d40dc55cd?w=1920&q=80"
            alt="MAIZY Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              MAIZY
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wider">
              BORN IN THE TROPICS.
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wider">
              BUILT FOR EVERYWHERE.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-8 px-10 py-4 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-yellow hover:text-maizy-charcoal transition-colors duration-300"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">NEW ARRIVALS</h2>
            <Link href="/shop" className="text-sm font-medium tracking-wider hover:text-maizy-green transition-colors">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section 1 */}
      <EditorialSection
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
        title="URBAN EXPLORER"
        subtitle="Designed for those who move through the city with purpose. Our latest collection blends technical functionality with street-ready style."
        ctaText="SHOP OUTERWEAR"
        ctaHref="/shop?category=Jackets"
      />

      {/* Featured Collection */}
      <section className="py-16 md:py-24 px-4 bg-maizy-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">FEATURED</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential pieces that define the MAIZY aesthetic. Premium materials, bold designs, and unmistakable style.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section 2 */}
      <EditorialSection
        image="https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?w=1200&q=80"
        title="973 FOREVER"
        subtitle="Representing French Guiana on the global stage. Our signature collection pays homage to the department code that connects us to our roots."
        ctaText="SHOP 973 COLLECTION"
        ctaHref="/shop"
        reverse
      />

      {/* Brand Statement */}
      <section className="py-24 px-4 bg-maizy-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            MAIZY
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We are a contemporary streetwear brand born from the intersection of tropical heritage and urban culture. 
            Drawing inspiration from French Guiana's vibrant landscapes and the energy of modern youth culture, 
            we create pieces that speak to those who dare to stand out.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 border border-white text-white font-medium tracking-wider hover:bg-white hover:text-maizy-charcoal transition-colors"
          >
            LEARN MORE
          </Link>
        </div>
      </section>
    </main>
  );
}
