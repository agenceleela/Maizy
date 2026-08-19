export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  featured: boolean;
  newArrival: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'maizy-core-tee',
    name: 'MAIZY Core Tee',
    price: 55,
    category: 'T-Shirts',
    description: 'Essential cotton tee with MAIZY branding. Premium heavyweight fabric for a structured fit.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Olive'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '2',
    slug: 'maizy-jungle-tee',
    name: 'MAIZY Jungle Tee',
    price: 65,
    category: 'T-Shirts',
    description: 'Graphic tee inspired by the tropical landscapes of French Guiana.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green', 'Black'],
    featured: true,
    newArrival: true,
    inStock: true,
  },
  {
    id: '3',
    slug: 'maizy-973-hoodie',
    name: 'MAIZY 973 Hoodie',
    price: 125,
    category: 'Hoodies',
    description: 'Premium fleece hoodie featuring the 973 department code of French Guiana.',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Olive'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '4',
    slug: 'maizy-signal-tee',
    name: 'MAIZY Signal Tee',
    price: 60,
    category: 'T-Shirts',
    description: 'Bold graphic statement tee with urban-inspired design elements.',
    images: [
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Black', 'White'],
    featured: false,
    newArrival: true,
    inStock: true,
  },
  {
    id: '5',
    slug: 'maizy-essential-hoodie',
    name: 'MAIZY Essential Hoodie',
    price: 110,
    category: 'Hoodies',
    description: 'Minimalist essential hoodie crafted from premium cotton blend fleece.',
    images: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Black', 'Charcoal'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '6',
    slug: 'maizy-tropic-overshirt',
    name: 'MAIZY Tropic Overshirt',
    price: 145,
    category: 'Jackets',
    description: 'Lightweight overshirt perfect for layering. Features tropical-inspired detailing.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Navy', 'Sand'],
    featured: true,
    newArrival: true,
    inStock: true,
  },
  {
    id: '7',
    slug: 'maizy-cargo-pant',
    name: 'MAIZY Cargo Pant',
    price: 120,
    category: 'Pants',
    description: 'Technical cargo pant with multiple pockets and adjustable fit.',
    images: [
      'https://images.unsplash.com/photo-1552975084-6e027cd345af?w=800&q=80',
      'https://images.unsplash.com/photo-1552975084-6e027cd345af?w=800&q=80',
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black', 'Olive', 'Khaki'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '8',
    slug: 'maizy-track-pant',
    name: 'MAIZY Track Pant',
    price: 95,
    category: 'Pants',
    description: 'Athletic-inspired track pant with signature stripe detailing.',
    images: [
      'https://images.unsplash.com/photo-1552975084-6e027cd345af?w=800&q=80',
      'https://images.unsplash.com/photo-1552975084-6e027cd345af?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey'],
    featured: false,
    newArrival: false,
    inStock: true,
  },
  {
    id: '9',
    slug: 'maizy-core-cap',
    name: 'MAIZY Core Cap',
    price: 45,
    category: 'Accessories',
    description: 'Classic six-panel cap with embroidered MAIZY logo.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80',
    ],
    sizes: ['One Size'],
    colors: ['Black', 'Olive', 'Navy'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '10',
    slug: 'maizy-jungle-cap',
    name: 'MAIZY Jungle Cap',
    price: 50,
    category: 'Accessories',
    description: 'Bucket hat with tropical print lining and adjustable chin strap.',
    images: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    ],
    sizes: ['One Size'],
    colors: ['Olive', 'Black'],
    featured: false,
    newArrival: true,
    inStock: true,
  },
  {
    id: '11',
    slug: 'maizy-logo-tote',
    name: 'MAIZY Logo Tote',
    price: 40,
    category: 'Accessories',
    description: 'Canvas tote bag with bold MAIZY branding. Perfect for everyday carry.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    sizes: ['One Size'],
    colors: ['Natural', 'Black'],
    featured: false,
    newArrival: false,
    inStock: true,
  },
  {
    id: '12',
    slug: 'maizy-973-hoodie-black',
    name: 'MAIZY 973 Hoodie Black',
    price: 125,
    salePrice: 95,
    category: 'Hoodies',
    description: 'The iconic 973 hoodie in classic black. Limited edition colorway.',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    featured: true,
    newArrival: false,
    inStock: true,
  },
  {
    id: '13',
    slug: 'maizy-bomber-jacket',
    name: 'MAIZY Bomber Jacket',
    price: 195,
    category: 'Jackets',
    description: 'Premium bomber jacket with quilted lining and ribbed trim.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Olive', 'Navy'],
    featured: true,
    newArrival: true,
    inStock: true,
  },
  {
    id: '14',
    slug: 'maizy-graphic-tee-red',
    name: 'MAIZY Graphic Tee Red',
    price: 65,
    category: 'T-Shirts',
    description: 'Statement graphic tee featuring bold typography and vibrant colors.',
    images: [
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black'],
    featured: false,
    newArrival: false,
    inStock: true,
  },
];

export const categories = ['All', 'T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Accessories'];

export const collections = [
  { slug: 'new-arrivals', name: 'New Arrivals' },
  { slug: 'essentials', name: 'Essentials' },
  { slug: 'tees', name: 'Tees' },
  { slug: 'outerwear', name: 'Outerwear' },
  { slug: 'accessories', name: 'Accessories' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.newArrival);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}
