import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

type Info = { title: string; sections: { heading: string; text: string }[] };

const infoPages: Record<string, Info> = {
  shipping: {
    title: 'SHIPPING',
    sections: [
      { heading: 'Delivery', text: 'Orders are processed within 2–4 business days and shipped worldwide from our EU and French Guiana facilities.' },
      { heading: 'Free shipping', text: 'Free standard shipping on all orders over €150. Express options are available at checkout.' },
    ],
  },
  returns: {
    title: 'RETURNS',
    sections: [
      { heading: '30-day returns', text: 'Unworn items with original tags can be returned within 30 days of delivery for a full refund or exchange.' },
      { heading: 'How to return', text: 'Contact us with your order number and we will send you a prepaid return label (EU) or return instructions (worldwide).' },
    ],
  },
  faq: {
    title: 'FAQ',
    sections: [
      { heading: 'Sizing', text: 'MAIZY pieces fit true to size with a regular cut. Size up for an oversized fit.' },
      { heading: 'Restocks', text: 'Drops are limited. Sold-out colorways are rarely restocked — sign up to the newsletter for first access.' },
    ],
  },
  contact: {
    title: 'CONTACT',
    sections: [
      { heading: 'Email', text: 'hello@maizy.studio — we answer within 48 hours, Monday to Friday.' },
      { heading: 'Social', text: 'DM us on Instagram or TikTok @maizy for quick questions and drop previews.' },
    ],
  },
  privacy: {
    title: 'PRIVACY POLICY',
    sections: [
      { heading: 'Your data', text: 'We only collect the information needed to process your orders and never sell your personal data to third parties.' },
    ],
  },
  terms: {
    title: 'TERMS OF SERVICE',
    sections: [
      { heading: 'Terms', text: 'By using this website you accept our terms of sale, return policy and privacy policy. All designs are the property of MAIZY.' },
    ],
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = infoPages[params.slug];
  return { title: page ? `${page.title} | MAIZY` : 'MAIZY' };
}

export default function InfoPage({ params }: { params: { slug: string } }) {
  const page = infoPages[params.slug];
  if (!page) notFound();

  return (
    <main className="pt-20">
      <section className="py-16 px-4 bg-maizy-charcoal text-white text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">{page.title}</h1>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl font-bold mb-3 border-l-4 border-maizy-green pl-4">
                {s.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-maizy-charcoal text-white text-sm tracking-wider hover:bg-maizy-green transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </section>
    </main>
  );
}
