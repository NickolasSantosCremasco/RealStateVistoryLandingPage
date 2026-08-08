'use client';

import React, { useState } from 'react';

const laudos = [
  {
    id: 'enjoy',
    title: 'Condomínio Enjoy',
    address: 'Rua Pedro de Toledo, 1355 - Ibirapuera, SP',
    photos: 261,
    file: '/laudos/vistoria-5-entrada-condominio-enjoy-zmT4S_NstKpY_HRGhnTC.pdf',
    highlights: ['261 Fotos', '3 Vídeos', '54.00m²'],
  },
  {
    id: 'uptow',
    title: 'Up Tow Duplex',
    address: 'Rua Mateus Grou, 575 - Pinheiros, SP',
    photos: 397,
    file: '/laudos/vistoria-10-entrada-up-tow-duplex-OxtBE_uVS82O_9eWzz5L[1].pdf',
    highlights: ['397 Fotos', 'Mobiliado', '73.00m²'],
  },
  {
    id: 'vilamadalena',
    title: 'Sobrado Vila Madalena',
    address: 'Rua Dr. Baeta Neves, 73 - Vila Madalena, SP',
    photos: 274,
    file: '/laudos/vistoria-21-entrada-sobrado-vila-madalena-UNfIq_O6iPm1_PM879LG.pdf',
    highlights: ['274 Fotos', 'Semi Mobiliado', '90.00m²'],
  },
  {
    id: 'mariahelena',
    title: 'Edifício Maria Helena',
    address: 'Rua Jaguaribe, 66 - Santa Cecília, SP',
    photos: 149,
    file: '/laudos/vistoria-22-entrada-edificio-maria-helena-7EYJc_R5s9PY_TS7btA5.pdf',
    highlights: ['149 Fotos', 'Mobiliado', '58.00m²'],
  },
];
export default function ReportsShowcase() {
  const [activeReport, setActiveReport] = useState(laudos[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="exemplo-laudos" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-2">
            // TRANSPARÊNCIA & IMPARCIALIDADE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#023b47] tracking-tight">
            Exemplos de Laudos Técnicos Completos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Navegue pelos documentos originais emitidos e veja o nível de detalhamento fotográfico das nossas vistorias.
          </p>
        </div>

        {/* Abas de Seleção dos Imóveis */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {laudos.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveReport(item)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                activeReport.id === item.id
                  ? 'bg-[#023b47] text-white border-[#023b47] shadow-lg scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-[#00e699] uppercase block mb-1">
                {item.highlights[0]} • {item.highlights[2]}
              </span>
              <strong className="text-sm font-bold block truncate">
                {item.title}
              </strong>
              <span className="text-xs opacity-75 truncate block mt-0.5">
                {item.address}
              </span>
            </button>
          ))}
        </div>

        {/* CONTAINER DE VISUALIZAÇÃO DIRETA (ESTILO IFRAME EMBUTIDO) */}
        <div className="bg-slate-900 rounded-3xl p-3 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Barra Superior de Controle do Leitor */}
          <div className="bg-slate-800/90 text-white px-5 py-3 rounded-2xl flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <strong className="text-xs font-bold block">
                  {activeReport.title}
                </strong>
                <span className="text-[10px] text-slate-400 font-mono">
                  {activeReport.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={activeReport.file}
                download
                className="bg-[#00e699] text-[#023b47] hover:bg-emerald-400 font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>📥</span>
                <span>Baixar PDF</span>
              </a>

              <button
                onClick={() => setIsFullscreen(true)}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                🔍 Expandir
              </button>
            </div>
          </div>

          {/* Objeto de Visualização do PDF Integrado */}
          <div className="w-full h-[650px] bg-slate-100 rounded-2xl overflow-hidden relative">
            <object
              data={`${activeReport.file}#toolbar=0&navpanes=0`}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full text-slate-600 p-6 text-center">
                <p className="text-sm font-semibold mb-4">
                  Seu navegador não suporta a visualização direta de PDFs.
                </p>
                <a
                  href={activeReport.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#023b47] text-white text-xs font-bold px-6 py-3 rounded-xl"
                >
                  Abrir Laudo em Nova Aba
                </a>
              </div>
            </object>
          </div>

        </div>

      </div>

      {/* MODAL FULLSCREEN PARA LEITURA EXPANDIDA */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col p-4 animate-fadeIn">
          <div className="flex items-center justify-between text-white mb-3 px-2">
            <div>
              <strong className="text-sm font-bold block">{activeReport.title}</strong>
              <span className="text-xs text-slate-400 font-mono">{activeReport.address}</span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 text-xs font-bold transition-colors cursor-pointer"
            >
              ✕ Fechar Tela Cheia
            </button>
          </div>

          <div className="flex-1 bg-white rounded-2xl overflow-hidden">
            <object
              data={activeReport.file}
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}