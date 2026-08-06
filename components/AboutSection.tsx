'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

const storyChapters = [
  {
    number: '01',
    chapter: 'Fundação',
    title: 'Inovação & Empatia Desde 2020',
    subtitle: 'Nascidos na pandemia para trazer segurança jurídica e transparência.',
    paragraph1: 'Fundada em 28/03/2020 como parceira do Grupo QuintoAndar, a DougNickVistorias nasceu no momento em que a proteção e a gestão do lar se tornaram prioridades globais.',
    paragraph2: 'Nossa missão inicial foi redefinir o padrão de inspeção imobiliária, combinando rigidez técnica e atendimento humanizado para garantir laudos imparciais que trazem tranquilidade tanto para proprietários quanto para inquilinos.',
  },
  {
    number: '02',
    chapter: 'Estrutura',
    title: 'Análise Técnica & Rigor Operacional',
    subtitle: 'Mapeamento das bases do imóvel para evitar surpresas.',
    paragraph1: 'Assim como uma estrutura sólida sustenta uma grande edificação, nossa operação se consolidou sobre pilares de precisão. Mapeamos detalhadamente redes elétricas, tubulações, esquadrias e o estado real de conservação do mobiliário.',
    paragraph2: 'Com mais de 3.000 vistorias concluídas, desenvolvemos metodologias que identificam anomalias sutis e previnem divergências antes mesmo da entrega oficial das chaves.',
  },
  {
    number: '03',
    chapter: 'Acabamento',
    title: 'Tecnologia Térmica & IA Aplicada',
    subtitle: 'Ferramentas avançadas para identificar o que os olhos não veem.',
    paragraph1: 'O refino dos nossos laudos está na tecnologia de ponta. Incorporamos câmeras infravermelhas e algoritmos de inteligência artificial para detecção prévia de infiltrações ocultas e avarias de acabamento.',
    paragraph2: 'O resultado é um relatório digital de alta resolução, intuitivo e com validação imediata, enviado diretamente para o celular do cliente sem burocracia.',
  },
  {
    number: '04',
    chapter: 'Chaves na Mão',
    title: 'Entrega Transparente & Sem Atritos',
    subtitle: 'Garantia de transição justa para todas as partes envolvidas.',
    paragraph1: 'A entrega das chaves é o encerramento do ciclo de locação. Nosso compromisso é entregar um documento técnico incontestável que zera conflitos e atritos na devolução do imóvel.',
    paragraph2: 'Preenchemos a lacuna do mercado imobiliário unindo agilidade digital, respaldo jurídico e empatia do primeiro ao último cômodo inspecionado.',
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section id="sobre" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 text-slate-800 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Coluna da Esquerda: Imagem com Badges */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            
            {/* Moldura da Imagem */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group h-[440px] sm:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Inspeção técnica e vistoria imobiliária"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023b47]/90 via-transparent to-transparent" />
              
              {/* Slogan */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00e699] text-[#023b47] px-2.5 py-1 rounded-md mb-2 inline-block">
                  // PROPÓSITO
                </span>
                <p className="text-sm font-semibold leading-snug text-slate-100">
                  "A vistoria para o seu imóvel, com o laudo direto no seu celular."
                </p>
              </div>
            </div>

            {/* Badge Topo */}
            <div className="absolute -top-5 -right-2 sm:-right-4 bg-white text-[#023b47] rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold border border-emerald-100">
                🏆
              </div>
              <div>
                <span className="text-xl font-black block leading-none font-mono text-[#023b47]">
                  +3.000
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Laudos Emitidos
                </span>
              </div>
            </div>

            {/* Badge Base */}
            <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-[#023b47] text-white rounded-2xl p-3.5 shadow-xl border border-slate-700/50 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl border border-white/10">
                🤝
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00e699] block uppercase tracking-wider">
                  PARCEIRO OFICIAL
                </span>
                <span className="text-xs font-extrabold text-slate-100">
                  Grupo QuintoAndar
                </span>
              </div>
            </div>

          </div>

          {/* Coluna da Direita: Swiper Claro */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-6 lg:pt-0">
            
            {/* Navegação por Capítulos em Tema Claro */}
            <div className="mb-6">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-3">
                ENTENDA NOSSA HISTÓRIA
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                {storyChapters.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTabClick(idx)}
                    className={`py-2.5 px-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? 'bg-[#023b47] text-white font-black shadow-md scale-[1.02]'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider opacity-75">
                        {item.number}
                      </span>
                      {activeIndex === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e699]" />
                      )}
                    </div>
                    <span className="text-xs block truncate mt-0.5 font-bold">
                      {item.chapter}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CARD EDITORIAL CLARO */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative flex-1 flex flex-col justify-between overflow-hidden">
              
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full"
              >
                {storyChapters.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="space-y-5">
                      
                      {/* Número do Capítulo em Marca D'água Soft */}
                      <div className="absolute -top-2 right-2 text-8xl font-black font-mono text-slate-100 select-none pointer-events-none">
                        {slide.number}
                      </div>

                      {/* Título e Subtítulo */}
                      <div className="relative z-10 pr-10">
                        <span className="text-xs font-mono font-bold text-emerald-600 tracking-widest uppercase mb-1.5 block">
                          CAPÍTULO {slide.number} • {slide.chapter}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#023b47] tracking-tight leading-snug">
                          {slide.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-1.5">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* Texto Editorial Limpo */}
                      <div className="space-y-3 relative z-10 pt-1">
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {slide.paragraph1}
                        </p>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {slide.paragraph2}
                        </p>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Barra de Progresso e Botão no Rodapé */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="text-[#023b47] font-bold">{storyChapters[activeIndex].number}</span>
                  <div className="w-24 sm:w-36 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      className="h-full bg-[#023b47] transition-all duration-500 rounded-full"
                      style={{ width: `${((activeIndex + 1) / storyChapters.length) * 100}%` }}
                    />
                  </div>
                  <span>04</span>
                </div>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-[#023b47] hover:bg-[#012730] text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer shrink-0"
                >
                  <span>Conheça Vistorias</span>
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