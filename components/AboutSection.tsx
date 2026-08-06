'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-slate-800 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Container Grid (Imagem/Métricas na Esquerda + História na Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna da Esquerda: Imagem com Badges e Métricas */}
          <div className="lg:col-span-5 relative">
            
            {/* Moldura de Imagem Principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Inspeção técnica e vistoria imobiliária"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023b47]/80 via-transparent to-transparent"></div>
              
              {/* Slogan no rodapé da foto */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#00e699] text-[#023b47] px-2.5 py-1 rounded-md mb-2 inline-block">
                  Propósito
                </span>
                <p className="text-sm font-semibold leading-snug">
                  "A vistoria para o seu imóvel, com o laudo direto no seu celular."
                </p>
              </div>
            </div>

            {/* Badge Flutuante Topo Direita: +3.000 Laudos */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                🏆
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#023b47] block leading-none">
                  +3.000
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Laudos Emitidos
                </span>
              </div>
            </div>

            {/* Badge Flutuante Inferior Esquerda: Parceiro QuintoAndar */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#023b47] text-white rounded-2xl p-4 shadow-xl border border-slate-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                🤝
              </div>
              <div>
                <span className="text-xs font-bold text-[#00e699] block uppercase tracking-wider">
                  Empresa Parceira
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  Grupo QuintoAndar
                </span>
              </div>
            </div>

          </div>

          {/* Coluna da Direita: Conteúdo Textual Formatado */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            
            {/* Tag e Título */}
            <div>
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-2 block">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023b47] tracking-tight leading-tight mb-4">
                Inovação, Empatia e Precisão Técnica Desde 2020
              </h2>
            </div>

            {/* Parágrafo Introdutório */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fundada em <strong className="text-slate-800">28/03/2020</strong> como parceira do <strong className="text-slate-800">Grupo QuintoAndar</strong>, a <strong className="text-slate-800">DougNickVistorias</strong> nasceu no início da pandemia com a missão de entregar um atendimento humanizado e seguro para proprietários e inquilinos.
            </p>

            {/* Grid de Diferenciais (Substitui os parágrafos longos por tópicos diretos) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <span className="text-xl shrink-0">🤖</span>
                <div>
                  <h4 className="text-xs font-bold text-[#023b47] uppercase tracking-wider mb-1">
                    Tecnologia & IA
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Unimos fotografia detalhada e inteligência artificial para emitir laudos confiáveis sem burocracia.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <span className="text-xl shrink-0">⚡</span>
                <div>
                  <h4 className="text-xs font-bold text-[#023b47] uppercase tracking-wider mb-1">
                    Agilidade Digital
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Inspeções rápidas e envio do laudo completo direto no celular do cliente em tempo recorde.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <span className="text-xl shrink-0">👥</span>
                <div>
                  <h4 className="text-xs font-bold text-[#023b47] uppercase tracking-wider mb-1">
                    Atendimento Humanizado
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Vistoriadores empatizantes e capacitados para garantir segurança técnica e jurídica para ambas as partes.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                <span className="text-xl shrink-0">📋</span>
                <div>
                  <h4 className="text-xs font-bold text-[#023b47] uppercase tracking-wider mb-1">
                    Sem Burocracia
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Preenchemos a lacuna do mercado simplificando todo o processo de locação de imóveis.
                  </p>
                </div>
              </div>

            </div>

            {/* Chamada para Ação Interna */}
            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-[#023b47] hover:bg-[#012730] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <span>Conheça Nossas Vistorias</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}