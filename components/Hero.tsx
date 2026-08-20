import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1920&q=80"
          alt="MAIZY"
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
            NÉ DANS LES TROPIQUES.
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wider">
            PORTÉ PARTOUT.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-8 px-10 py-4 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-yellow hover:text-maizy-charcoal transition-colors duration-300"
          >
            DÉCOUVRIR LA COLLECTION
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
