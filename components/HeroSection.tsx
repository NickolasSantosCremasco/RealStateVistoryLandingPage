'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Função com todas as animações GSAP do Hero
    const startHeroAnimations = () => {
      const textToType = "VISTORIAS TÉCNICAS DE ALTA PRECISÃO EM IMÓVEIS";

      // Garante que o título inicie limpo para a digitação
      if (titleRef.current) titleRef.current.textContent = "";

      // Digitação do título
      gsap.to(titleRef.current, {
        duration: 2.5,
        text: textToType,
        ease: 'none',
      });

      // Cursor piscando
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      // Contador dinâmico até 3000
      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: 3000,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `+${Math.floor(counterObj.value)}`;
          }
        },
      });
    };

    // Handler que escuta o término do Preloader
    const handleLoaderComplete = () => {
      startHeroAnimations();
    };

    window.addEventListener('loaderComplete', handleLoaderComplete);

    // Fallback: caso o evento já tenha passado antes do listener (ex: carregamento instantâneo via cache)
    const fallbackTimer = setTimeout(() => {
      if (titleRef.current && titleRef.current.textContent === "") {
        startHeroAnimations();
      }
    }, 2500);

    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
      clearTimeout(fallbackTimer);
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge Credenciados */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-gray-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Vistoriadores Credenciados
        </div>

        {/* Título Principal com Cursor */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl mb-6 min-h-[3em] sm:min-h-[2.2em] text-center uppercase">
          <span ref={titleRef} className="inline"></span>
          <span
            ref={cursorRef}
            className="inline-block w-0.75 h-[0.8em] bg-[#024a59] ml-1.5 translate-y-0.5"
          ></span>
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mb-10 leading-relaxed font-normal">
          Laudos técnicos com garantia jurídica para proprietários, locatários e investidores.<br className="hidden sm:inline" />
          Laudos completos em até 24h
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <a
            href="https://wa.me/5511997069616"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#024a59] hover:bg-[#013540] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm sm:text-base shadow-sm text-center"
          >
            Solicitar Orçamento / Agendar Vistoria
          </a>
          <button
            type="button"
            onClick={() => setIsPdfModalOpen(true)}
            className="bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3.5 rounded-lg border border-gray-300 transition-colors text-sm sm:text-base cursor-pointer"
          >
            Ver Exemplo de Laudo Técnico (PDF)
          </button>
        </div>

        {/* Grid de Cards Prova Social / Imagem / SLA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl items-stretch text-left">
          
          {/* Card 1: Métricas Animadas (+3000) */}
          <div className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span ref={countRef} className="text-4xl sm:text-5xl font-extrabold text-gray-900 block mb-2 font-mono">
                +0
              </span>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                Laudos Técnicos Emitidos
              </p>
            </div>
            <div className="flex gap-2 pt-8 mt-auto border-t border-gray-100">
              <span className="text-xs bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600">
                Residencial
              </span>
              <span className="text-xs bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600">
                Comercial
              </span>
            </div>
          </div>

          {/* Card 2: Imagem do Imóvel com Pin */}
          <div className="relative rounded-2xl overflow-hidden min-h-[220px] bg-gray-200 shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Ambiente vistoriado"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md text-xs font-semibold text-gray-800 flex items-center gap-1.5 border border-gray-100">
              <span className="text-red-500">📍</span>
              <span>Vedações: OK</span>
            </div>
          </div>

          {/* Card 3: SLA Agilidade Digital 24h */}
          <div className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-bold">
                  ⚡
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-100/80 text-emerald-800 px-2.5 py-1 rounded-md uppercase border border-emerald-200">
                  Agilidade Digital
                </span>
              </div>
              
              <strong className="text-3xl sm:text-4xl font-extrabold text-gray-900 block leading-none font-mono">
                24 Horas
              </strong>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mt-1">
                Envio do Laudo Completo
              </span>
            </div>

            <p className="text-xs text-gray-600 italic border-t border-gray-100 pt-3 mt-auto leading-relaxed">
              "Relatório fotográfico minucioso e organizado enviado direto no celular em tempo recorde."
            </p>
          </div>

        </div>

      </div>

      {/* MODAL DE EXEMPLO EM PDF */}
      {isPdfModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-left border border-gray-100 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors text-lg font-bold cursor-pointer"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="mb-4 pr-6">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                Demonstração
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Laudo Técnico Pericial de Vistoria
              </h3>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-inner group mb-6">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.zCh1_E6tuDZCfbsOy1OeaQHaEm?r=0&pid=Api"
                alt="Preview do Laudo Técnico em PDF"
                className="w-full h-56 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="text-xs font-medium text-emerald-300">📄 Formato PDF Oficial (A4)</p>
                  <p className="text-sm font-semibold">Inspecionado e Assinado com ART / CREA</p>
                </div>
              </div>
            </div>

            <a
              href="/exemplo-laudo-tecnico.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#024a59] hover:bg-[#013540] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base shadow-md text-center"
            >
              <span>📥</span>
              <span>Clique aqui para ver um exemplo de PDF completo como você teria em mãos</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}