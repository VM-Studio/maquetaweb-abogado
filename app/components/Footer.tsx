import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Column - Logo centrado en mobile */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-14 sm:h-16 md:h-20 w-auto">
                <Image
                  src="/navv.png"
                  alt="Augusto Filí & Asociados"
                  width={200}
                  height={70}
                  className="object-contain h-full w-auto"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs text-center md:text-left">
              Estudio jurídico con más de <span className="font-bold text-white">20 años de experiencia</span> en sucesiones y declaratorias de herederos.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-[#e9a459] uppercase tracking-wider mb-4 sm:mb-5">
                Navegación
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/preguntas-frecuentes" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm font-medium text-gray-300 hover:text-[#e9a459] transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-5 justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/abogado.fili/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e9a459] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/filiaugustoarg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#e9a459] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.636 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.253 0 12.774-6.833 12.774-12.774 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.698z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-xs sm:text-sm font-medium text-gray-500 text-center">
            ©️ {new Date().getFullYear()} <span className="font-bold text-gray-400">AUGUSTO Filí & Asociados</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
