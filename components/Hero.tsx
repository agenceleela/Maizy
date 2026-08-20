import Image from 'next/image';
import Link from 'next/link';
import headerImage from '../imageheader.png';

export default function Hero() {
  return (
    <section className="relative mt-28 h-[calc(100vh-7rem)] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={headerImage}
          alt="MAIZY"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenu centré */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-5 animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            MAIZY
          </h1>
          <div className="space-y-1">
            <p className="text-base md:text-xl lg:text-2xl font-light tracking-wide">
              FROM GUIANA,
            </p>
            <p className="text-base md:text-xl lg:text-2xl font-light tracking-wide">
              TO THE WORLD.
            </p>
          </div>
        </div>
      </div>

      {/* CTA en bas, juste au-dessus de la souris */}
      <Link
        href="/shop"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 px-10 py-4 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-yellow hover:text-maizy-charcoal transition-colors duration-300 whitespace-nowrap"
      >
        DÉCOUVRIR LA COLLECTION
      </Link>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
