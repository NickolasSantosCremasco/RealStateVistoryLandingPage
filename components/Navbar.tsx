'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Aplica sombra e opacidade dinâmicas para evitar colisão visual no scroll (ex: ao passar por cima do Footer)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-1' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Contida (sem extrapolar o container) */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/img/logo.png" 
                alt="Logo VistoriaPro" 
                width={120}
                height={48}
                priority
                className="h-10 sm:h-12 w-auto object-contain rounded-xl transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#inicio" 
              className="text-slate-700 hover:text-[#00e699] font-bold text-sm transition-colors"
            >
              Início
            </Link>
            <Link 
              href="#servico" 
              className="text-slate-700 hover:text-[#00e699] font-bold text-sm transition-colors"
            >
              Serviço
            </Link>
            <Link 
              href="#anatomia" 
              className="text-slate-700 hover:text-[#00e699] font-bold text-sm transition-colors"
            >
              Anatomia do Laudo
            </Link>
            <Link 
              href="#preco" 
              className="text-slate-700 hover:text-[#00e699] font-bold text-sm transition-colors"
            >
              Preço
            </Link>
            <Link 
              href="#contato" 
              className="text-slate-700 hover:text-[#00e699] font-bold text-sm transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contato"
              className="bg-[#00e699] hover:bg-[#00cc88] text-[#023b47] font-extrabold text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Solicite Já
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-slate-700 hover:text-[#023b47] p-2 rounded-lg focus:outline-none"
              aria-label="Alternar menu de navegação"
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

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <Link 
            href="#inicio" 
            className="block text-slate-800 font-semibold py-2 hover:text-[#00e699]"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            href="#servico" 
            className="block text-slate-800 font-semibold py-2 hover:text-[#00e699]"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviço
          </Link>
          <Link 
            href="#anatomia" 
            className="block text-slate-800 font-semibold py-2 hover:text-[#00e699]"
            onClick={() => setIsMenuOpen(false)}
          >
            Anatomia do Laudo
          </Link>
          <Link 
            href="#preco" 
            className="block text-slate-800 font-semibold py-2 hover:text-[#00e699]"
            onClick={() => setIsMenuOpen(false)}
          >
            Preço
          </Link>
          <Link 
            href="#contato" 
            className="block text-slate-800 font-semibold py-2 hover:text-[#00e699]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <div className="pt-2">
            <Link
              href="#contato"
              className="block w-full text-center bg-[#00e699] text-[#023b47] font-extrabold py-3 rounded-xl shadow-sm"
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