'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Bar - Solo Desktop - GRIS */}
      <div className="hidden md:block bg-gray-800 text-white py-1.5 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center">
          <p className="text-xs font-medium">
            ✓ Tramitamos más de <span className="font-bold">50 declaratorias de herederos por año</span>. Todo el proceso <span className="font-bold">100% online</span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed md:top-6 top-0 left-0 right-0 z-40 bg-black border-b border-gray-900 shadow-lg">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Más grande y pegado al margen */}
            <Link href="/" className="flex items-center -ml-2">
              <div className="relative h-10 sm:h-12 md:h-14 w-auto">
                <Image
                  src="/navv.png"
                  alt="Augusto Filí & Asociados"
                  width={180}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link 
                href="/" 
                className={`px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-amber-600' 
                    : 'text-white hover:text-amber-600'
                }`}
              >
                Inicio
              </Link>
              <Link 
                href="/#servicios" 
                className="px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium text-white hover:text-amber-600 transition-colors"
                scroll={true}
              >
                Servicios
              </Link>
              <Link 
                href="/preguntas-frecuentes" 
                className={`px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors ${
                  isActive('/preguntas-frecuentes') 
                    ? 'text-amber-600' 
                    : 'text-white hover:text-amber-600'
                }`}
              >
                FAQ
              </Link>
              <Link 
                href="/nosotros" 
                className={`px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors ${
                  isActive('/nosotros') 
                    ? 'text-amber-600' 
                    : 'text-white hover:text-amber-600'
                }`}
              >
                Nosotros
              </Link>
            <Link 
              href="/contacto" 
              className="ml-2 lg:ml-3 px-4 lg:px-5 py-2 text-xs lg:text-sm font-bold bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-md"
            >
              Contacto
            </Link>
          </div>            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation - Optimizado */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-900">
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className={`px-6 py-4 text-base font-bold transition-colors text-center ${
                    isActive('/')
                      ? 'text-amber-600 bg-gray-900'
                      : 'text-white hover:text-amber-600 hover:bg-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  href="/#servicios" 
                  className="px-6 py-4 text-base font-bold transition-colors text-center text-white hover:text-amber-600 hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Servicios
                </Link>
                <Link 
                  href="/preguntas-frecuentes" 
                  className={`px-6 py-4 text-base font-bold transition-colors text-center ${
                    isActive('/preguntas-frecuentes')
                      ? 'text-amber-600 bg-gray-900'
                      : 'text-white hover:text-amber-600 hover:bg-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Preguntas Frecuentes
                </Link>
                <Link 
                  href="/nosotros" 
                  className={`px-6 py-4 text-base font-bold transition-colors text-center ${
                    isActive('/nosotros')
                      ? 'text-amber-600 bg-gray-900'
                      : 'text-white hover:text-amber-600 hover:bg-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link 
                  href="/contacto" 
                  className="mx-6 mt-4 px-8 py-5 text-base font-bold bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 text-white text-center hover:shadow-lg transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
