import Link from 'next/link';
import { getNewArrivals } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
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

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newArrivals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-maizy-charcoal/10 py-20 px-6 text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="w-10 h-1 bg-maizy-green" />
                <span className="w-10 h-1 bg-maizy-yellow" />
                <span className="w-10 h-1 bg-maizy-red" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">DROP 001 — ARRIVE BIENTÔT</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Les premiers T-shirts MAIZY débarquent très bientôt. Inscris-toi à la newsletter pour être prévenu en premier.
              </p>
            </div>
          )}
        </div>
      </section>

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
