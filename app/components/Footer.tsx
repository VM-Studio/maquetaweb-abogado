import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl font-light tracking-tight text-gray-900">
                AUGUSTO <span className="font-semibold">Filí</span>
              </span>
            </Link>
            <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
              Estudio jurídico con más de 20 años de experiencia brindando asesoramiento legal 
              integral en toda Argentina.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">
              Navegación
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/areas-de-practica" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                  Áreas de Práctica
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">
              Contacto
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:+5491112345678" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                  +54 9 11 1234-5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@augustofili.com" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors break-all">
                  contacto@augustofili.com
                </a>
              </li>
              <li className="text-sm font-light text-gray-600">
                CABA, Argentina
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} AUGUSTO Filí & Asociados
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
