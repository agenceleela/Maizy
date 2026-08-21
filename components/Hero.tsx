import Image from 'next/image';
import Link from 'next/link';
import headerImage from '../imageheader.png';
import headerImageMobile from '../imageheader-mobile.png';

export default function Hero() {
  return (
    <section className="relative mt-28 h-[calc(100vh-7rem)] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        {/* Version mobile (portrait) */}
        <Image
          src={headerImageMobile}
          alt="MAIZY"
          fill
          priority
          className="object-cover md:hidden"
        />
        {/* Version desktop (paysage) */}
        <Image
          src={headerImage}
          alt="MAIZY"
          fill
          priority
          className="object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* MOBILE : slogan en haut sous la navbar, en bold */}
      <div className="absolute top-6 inset-x-0 px-4 text-center text-white space-y-1 md:hidden animate-fade-in">
        <p className="text-base font-bold tracking-wide">FROM GUIANA,</p>
        <p className="text-base font-bold tracking-wide">TO THE WORLD.</p>
      </div>

      {/* DESKTOP : contenu centré (inchangé) */}
      <div className="relative h-full hidden md:flex items-center justify-center text-center text-white px-4">
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

      {/* DESKTOP : CTA (inchangé) */}
      <Link
        href="/shop"
        className="hidden md:inline-block absolute bottom-24 left-1/2 -translate-x-1/2 px-10 py-4 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-yellow hover:text-maizy-charcoal transition-colors duration-300 whitespace-nowrap"
      >
        DÉCOUVRIR LA COLLECTION
      </Link>

      {/* MOBILE : CTA plus petit, en bas, avec l'animation bounce */}
      <div className="md:hidden absolute bottom-8 inset-x-0 flex justify-center px-4">
        <Link
          href="/shop"
          className="animate-bounce px-6 py-3 bg-maizy-green text-white text-sm font-medium tracking-wider whitespace-nowrap"
        >
          DÉCOUVRIR LA COLLECTION
        </Link>
      </div>

      {/* DESKTOP : souris animée (cachée sur mobile) */}
      <div className="hidden md:flex absolute bottom-8 inset-x-0 justify-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
