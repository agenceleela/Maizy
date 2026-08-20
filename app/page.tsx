import Link from 'next/link';
import { getFeaturedProducts, getNewArrivals } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import EditorialSection from '@/components/EditorialSection';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <main>
      <Hero />

      {/* Nouveautés */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">NOUVEAUTÉS</h2>
            <Link href="/shop" className="text-sm font-medium tracking-wider hover:text-maizy-green transition-colors">
              TOUT VOIR →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Éditorial 1 */}
      <EditorialSection
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
        title="EXPLORATEUR URBAIN"
        subtitle="Conçu pour ceux qui traversent la ville avec intention. Notre dernière collection mêle technicité et style urbain."
        ctaText="DÉCOUVRIR LES VESTES"
        ctaHref="/shop"
      />

      {/* Sélection */}
      <section className="py-16 md:py-24 px-4 bg-maizy-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">SÉLECTION</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des pièces essentielles qui définissent l&apos;esthétique MAIZY. Matières premium, designs affirmés, style incomparable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Éditorial 2 */}
      <EditorialSection
        image="https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?w=1200&q=80"
        title="973 POUR TOUJOURS"
        subtitle="La Guyane française sur la scène internationale. Notre collection signature rend hommage au département qui nous relie à nos racines."
        ctaText="COLLECTION 973"
        ctaHref="/shop"
        reverse
      />

      {/* Manifeste */}
      <section className="py-24 px-4 bg-maizy-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            MAIZY
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Nous sommes une marque de streetwear contemporaine née à la croisée d&apos;un héritage tropical et de la culture urbaine.
            Inspirés par les paysages vibrants de la Guyane française et l&apos;énergie de la jeunesse actuelle,
            nous créons des pièces pour ceux qui osent se démarquer.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 border border-white text-white font-medium tracking-wider hover:bg-white hover:text-maizy-charcoal transition-colors"
          >
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
