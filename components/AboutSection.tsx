'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 text-slate-800 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* COLUNA DA ESQUERDA: Imagem Estática + Slogan + Parceiro QuintoAndar */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            
            {/* Card Principal da Imagem */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xl relative">
              
              {/* Badge Flutuante do Topo (+3.000) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white text-[#023b47] rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-100">
                  🏆
                </div>
                <div>
                  <span className="text-lg font-black block leading-none font-mono text-[#023b47]">
                    +3.000
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Laudos Emitidos
                  </span>
                </div>
              </div>

              {/* Imagem Estática (Sem animação de hover/movimento do mouse) */}
              <div className="rounded-2xl overflow-hidden bg-slate-100 h-[280px] sm:h-[320px] w-full relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="Casa simples - Vistoria Imobiliária"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Slogan do Cliente (Posicionado Embaixo da Foto) */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center mb-4">
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  PROPÓSITO
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#023b47] leading-snug">
                  "A vistoria para alugar seu imóvel com o laudo em seu celular."
                </p>
              </div>

              {/* Seção Empresa Parceira com Imagem / Logo do QuintoAndar */}
              <div className="bg-[#023b47] text-white p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0">
                    {/* Substitua a URL abaixo pela imagem/logo oficial do QuintoAndar se preferir */}
                    <img 
                      src="https://tse1.mm.bing.net/th/id/OIP.y7XmKOnI1QYpIeX9G43ZqwHaHa?rs=1&pid=ImgDetMain" 
                      alt="Logo Grupo QuintoAndar" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00e699] block uppercase tracking-wider">
                      EMPRESA PARCEIRA
                    </span>
                    <strong className="text-xs font-extrabold text-white block leading-tight">
                      Grupo QuintoAndar
                    </strong>
                  </div>
                </div>

                <span className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded text-slate-300 font-semibold border border-white/10">
                  OFICIAL
                </span>
              </div>

            </div>

          </div>

          {/* COLUNA DA DIREITA: Texto Fixo da História */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-6 lg:pt-0">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                
                {/* Header da Seção */}
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 tracking-widest uppercase mb-2 block">
                    ENTENDA NOSSA HISTÓRIA
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#023b47] tracking-tight leading-snug">
                    DougNickVistorias
                  </h2>
                </div>

                {/* Texto Fiel do Cliente */}
                <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  <p>
                    Fundada em <strong className="text-slate-800">28/03/2020</strong> como empresa parceira do <strong className="text-slate-800">Grupo QuintoAndar</strong> — a maior plataforma de moradia da América Latina —, a <strong className="text-slate-800">DougNickVistorias</strong> nasceu no momento mais desafiador da história recente: bem no início da pandemia.
                  </p>

                  <p>
                    Mesmo diante desse cenário incerto, decidimos entrar em campo para oferecer um atendimento humanizado e seguro a proprietários e inquilinos que precisavam alugar. Juntando nossa experiência prévia com pequenos reparos, fotografia e Inteligência Artificial, começamos a elaborar laudos imobiliários para quem não podia — ou não queria — sair de casa.
                  </p>

                  <p>
                    Com o suporte e a capacitação técnica do Grupo QuintoAndar, já realizamos mais de 3.000 laudos. Essa trajetória revelou uma carência no mercado: faltavam profissionais realmente capacitados e empáticos, capazes de unir inspeções seguras, plataformas digitais confiáveis, agilidade e zero burocracia.
                  </p>

                  <p className="font-semibold text-slate-800 pt-1">
                    É para preencher essa lacuna que existimos. A DougNickVistorias nasceu para simplificar o seu aluguel.
                  </p>
                </div>

                {/* Slogan de Encerramento */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs sm:text-sm font-bold text-[#023b47] italic">
                    "A vistoria para alugar seu imóvel com o laudo em seu celular."
                  </p>
                </div>

              </div>

              {/* Botão de Ação */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold text-slate-400">
                  DESDE 2020
                </span>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-[#023b47] hover:bg-[#012730] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer shrink-0"
                >
                  <span>Solicitar Vistoria</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}