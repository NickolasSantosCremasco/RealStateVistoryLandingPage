'use client';

import React, { useState } from 'react';

interface VideoSectionProps {
  videoUrl?: string; // Link do YouTube/Vimeo/MP4
}

export default function VideoSection({ 
  videoUrl = '/video/vistoria.mp4' // Altere para o ID do vídeo do seu cliente
}: VideoSectionProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Título da Seção */}
        <span className="text-xs font-bold text-[#024a59] uppercase tracking-wider bg-[#024a59]/10 px-3 py-1 rounded-full inline-block mb-3">
          Demonstração na Prática
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mb-8">
          Como Funciona Nosso Processo de Vistoria
        </h2>

        {/* Card do Player de Vídeo com Glassmorphism */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 group">
          
          {/* Imagem de Fundo (Poster do Imóvel/Vistoria) */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Processo de Vistoria Técnica"
            className="w-full h-80 sm:h-112.5 object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay com Efeito Glassmorphism Centralizado */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center p-4">
            
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 sm:p-10 max-w-lg w-full text-center shadow-xl transition-all duration-300 group-hover:bg-white/25 group-hover:scale-102">
              
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-2 drop-shadow-sm">
                Laudos com Inteligência Artificial
              </h3>
              
              <p className="text-xs sm:text-sm text-white/90 mb-6 font-medium max-w-xs mx-auto drop-shadow-sm">
                Veja o vídeo informativo
              </p>

              {/* Botão de Play com Animação de Pulso */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-emerald-400 text-[#024a59] rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer group/btn"
                aria-label="Assistir ao vídeo do processo"
              >
                {/* Efeito de Anel Pulsante ao Redor do Play */}
                <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-75"></span>
                
                {/* Ícone de Play */}
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="mt-4">
                <span className="text-xs font-semibold text-white/90 tracking-wider uppercase bg-black/30 px-3 py-1 rounded-full border border-white/20">
                  Assistir Vídeo (0:25 seg)
                </span>
              </div>

            </div>

          </div>

          {/* Texto de Canto (Inspirado no segundo mock) */}
          <div className="absolute bottom-6 left-6 hidden sm:block text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
              Vistoria Pro In Loco
            </span>
          </div>

        </div>

      </div>

      {/* ================= MODAL DO VÍDEO ================= */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar Modal */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 text-white/80 hover:text-white bg-black/60 hover:bg-black rounded-full w-9 h-9 flex items-center justify-center transition-colors text-lg font-bold border border-white/20"
              aria-label="Fechar vídeo"
            >
              ✕
            </button>

            {/* Container Iframe Responsivo 16:9 */}
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Vídeo de Apresentação da Vistoria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}