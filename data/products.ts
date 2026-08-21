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

// ➡️ AJOUTE TES 3 MODÈLES DE T-SHIRTS ICI (on le fera ensemble ensuite)
export const products: Product[] = [];

export const categories = ['All', 'T-Shirts'];

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
