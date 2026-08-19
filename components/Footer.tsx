import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-maizy-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-maizy-green transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?category=T-Shirts" className="hover:text-maizy-green transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Hoodies" className="hover:text-maizy-green transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Pants" className="hover:text-maizy-green transition-colors">
                  Pants
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Accessories" className="hover:text-maizy-green transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-maizy-green transition-colors">
                  About MAIZY
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-maizy-green transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-maizy-green transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-maizy-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-maizy-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">SOCIAL</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-maizy-green transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-maizy-green transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Statement */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">MAIZY</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Contemporary streetwear inspired by French Guiana, tropical environments, and modern urban culture.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MAIZY. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-maizy-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-maizy-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
