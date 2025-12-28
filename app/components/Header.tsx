'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl md:text-3xl tracking-tight">
              <span className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-montserrat)' }}>AUGUSTO</span>{' '}
              <span className="font-bold text-primary" style={{ fontFamily: 'var(--font-roboto-slab)' }}>Filí</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/preguntas-frecuentes" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/preguntas-frecuentes') 
                  ? 'text-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Preguntas Frecuentes
            </Link>
            <Link 
              href="/nosotros" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/nosotros') 
                  ? 'text-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="ml-4 px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="px-4 py-3 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/preguntas-frecuentes" 
                className="px-4 py-3 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preguntas Frecuentes
              </Link>
              <Link 
                href="/nosotros" 
                className="px-4 py-3 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="mx-4 mt-4 px-6 py-3 text-sm font-light bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
