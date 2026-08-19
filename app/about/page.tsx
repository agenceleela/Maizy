import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | MAIZY',
  description: 'MAIZY — contemporary streetwear born in French Guiana.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-4 bg-maizy-charcoal text-white text-center">
        <p className="text-maizy-yellow text-xs tracking-[0.3em] mb-6">973 — FRENCH GUIANA</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          BORN IN THE TROPICS.<br />BUILT FOR EVERYWHERE.
        </h1>
        <div className="flex justify-center gap-2">
          <span className="w-12 h-1 bg-maizy-green" />
          <span className="w-12 h-1 bg-maizy-yellow" />
          <span className="w-12 h-1 bg-maizy-red" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            MAIZY was born in French Guiana — where the Amazon meets the Atlantic, and where
            Creole, French, Hmong, Brazilian and Maroon cultures collide in one of the most
            vibrant corners of the world.
          </p>
          <p>
            We translate that energy into clothing: heavyweight fabrics, clean silhouettes and
            graphic language drawn from the streets of Cayenne, the rainforest, and the youth
            culture that moves between the tropics and the world&apos;s capitals.
          </p>
          <p>
            Not a tourist brand. Not a costume. A contemporary fashion label with a passport.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="border-t-4 border-maizy-green bg-white p-8">
            <h3 className="font-display text-xl font-bold mb-3">ROOTED IN GUYANE</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every drop carries a reference to the 973 — its landscapes, its codes, its people.
            </p>
          </div>
          <div className="border-t-4 border-maizy-yellow bg-white p-8">
            <h3 className="font-display text-xl font-bold mb-3">CRAFTED TO LAST</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Premium heavyweight materials and considered construction. Fewer, better pieces.
            </p>
          </div>
          <div className="border-t-4 border-maizy-red bg-white p-8">
            <h3 className="font-display text-xl font-bold mb-3">WORN EVERYWHERE</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Designed in the tropics, styled in Paris, Tokyo and New York. Built for everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-maizy-cream text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">JOIN THE MOVEMENT</h2>
        <Link
          href="/shop"
          className="inline-block px-10 py-4 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-charcoal transition-colors"
        >
          SHOP THE COLLECTION
        </Link>
      </section>
    </main>
  );
}
