import Image from 'next/image';
import Link from 'next/link';

interface EditorialSectionProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  reverse?: boolean;
}

export default function EditorialSection({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref,
  reverse = false,
}: EditorialSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden image-zoom-container">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            <Link
              href={ctaHref}
              className="inline-block px-8 py-4 bg-maizy-charcoal text-white font-medium tracking-wider hover:bg-maizy-green transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
