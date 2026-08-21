import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-maizy-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-lg font-bold mb-4">BOUTIQUE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-maizy-green transition-colors">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-maizy-green transition-colors">
                  T-Shirts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">INFORMATIONS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-maizy-green transition-colors">
                  À propos de MAIZY
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-maizy-green transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-maizy-green transition-colors">
                  Retours
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

          <div>
            <h3 className="font-display text-lg font-bold mb-4">RÉSEAUX SOCIAUX</h3>
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

          <div>
            <h3 className="font-display text-lg font-bold mb-4">MAIZY</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Streetwear contemporain inspiré de la Guyane française, des environnements tropicaux et de la culture urbaine moderne.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MAIZY. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-maizy-green transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="hover:text-maizy-green transition-colors">
              Conditions générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
