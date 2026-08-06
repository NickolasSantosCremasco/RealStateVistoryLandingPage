'use client';

import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

export default function Preloader() {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animação fluida da porcentagem de 0 a 100%
  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayProgress < Math.floor(progress)) {
        setDisplayProgress((prev) => Math.min(prev + 1, 100));
      }
    }, 12);
    return () => clearTimeout(timer);
  }, [progress, displayProgress]);

  // Trava o scroll da página enquanto o Preloader estiver ativo
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // Dispara o evento e oculta o preloader ao atingir 100%
  useEffect(() => {
    if (progress === 100 && displayProgress === 100) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        // Notifica o HeroSection para iniciar as animações do GSAP
        window.dispatchEvent(new Event('loaderComplete'));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress, displayProgress]);

  if (!isLoading) return null;

  // Cálculo da circunferência para o efeito de preenchimento SVG
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * displayProgress) / 100;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0d0e15] flex flex-col items-center justify-center text-white transition-opacity duration-700 ease-in-out ${
        displayProgress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-8 bg-[#12131c] rounded-3xl border border-white/10 shadow-2xl max-w-sm w-full mx-4">
        
        {/* Anel Circular de Progresso */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          <svg className="w-full h-full transform -rotate-90">
            {/* Trilha do Fundo */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              className="stroke-[#1e202e]"
              strokeWidth="5"
              fill="transparent"
            />
            {/* Anel Verde Neon Reativo */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              className="stroke-[#00e699] transition-all duration-150 ease-out"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Porcentagem Centralizada */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-mono font-bold text-white tracking-wider">
              {displayProgress}%
            </span>
          </div>
        </div>

        {/* Título Estilo GSAP Scrub */}
        <h3 className="text-xl font-black text-white tracking-tight mb-1 text-center">
          Carregando Vistoria 3D
        </h3>
        
        <p className="text-xs text-slate-400 font-mono text-center">
          Renderizando maquete e texturas...
        </p>

      </div>
    </div>
  );
}