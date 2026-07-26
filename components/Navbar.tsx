'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              <img src="/img/logo.jpeg" alt="" className='w-30' />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#inicio" 
              className="text-gray-900 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="#servico" 
              className="text-gray-900 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Serviço
            </Link>
            <Link 
              href="#preco" 
              className="text-gray-900 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Preço
            </Link>
            <Link 
              href="#contato" 
              className="text-gray-900 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#solicitar"
              className="bg-[#024a59] hover:bg-[#013540] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Solicite Já
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="#inicio" 
            className="block text-gray-900 font-medium py-2 hover:text-emerald-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            href="#servico" 
            className="block text-gray-900 font-medium py-2 hover:text-emerald-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviço
          </Link>
          <Link 
            href="#preco" 
            className="block text-gray-900 font-medium py-2 hover:text-emerald-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Preço
          </Link>
          <Link 
            href="#contato" 
            className="block text-gray-900 font-medium py-2 hover:text-emerald-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <div className="pt-2">
            <Link
              href="#solicitar"
              className="block w-full text-center bg-[#024a59] text-white font-medium py-2.5 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicite Já
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}