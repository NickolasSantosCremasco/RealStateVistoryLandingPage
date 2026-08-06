'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Model as ApartmentModel } from './ApartmentModel';

const storyPoints = [
  {
    id: 'vistoria-entrada',
    title: 'Vistoria de Entrada',
    room: 'Sala & Áreas Comuns',
    desc: 'Mapeamento detalhado de pisos, pintura, instalações elétricas e esquadrias antes da entrega das chaves.',
    position: [-4, 2, 0.6] as [number, number, number],
  },
  {
    id: 'termografia',
    title: 'Análise Termográfica',
    room: 'Cozinha & Áreas Úmidas',
    desc: 'Detecção de infiltrações ocultas e vazamentos não visíveis a olho nu com câmera infravermelha.',
    position: [-3.5, 2, -2] as [number, number, number],
  },
  {
    id: 'laudo-tecnico',
    title: 'Laudo Digital com IA',
    room: 'Suíte / Dormitório',
    desc: 'Relatório fotográfico de alta precisão gerado com validação jurídica para proprietários e inquilinos.',
    position: [-2, 2, -3] as [number, number, number],
  },
];

export default function Interactive3DHistory() {
  const [activePoint, setActivePoint] = useState(storyPoints[0]);

  return (
    <section id="sobre" className="w-full bg-[#011a20] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#00e699] uppercase tracking-widest bg-[#00e699]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#00e699]/20">
            Diferencial Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Inspeção Minuciosa em Cada Cômodo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mt-2">
            Interaja com a maquete 3D para entender como realizamos a vistoria técnica no seu imóvel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Viewport 3D */}
          <div className="lg:col-span-8 h-[420px] sm:h-[480px] w-full bg-[#012228] rounded-3xl border border-[#024a59]/80 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-slate-300">
              🖱️ Arraste para girar • Scroll para zoom
            </div>

            <Canvas camera={{ position: [-800, 500, -500], fov: 45 }}>
              <ambientLight intensity={1.8} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />

              <Suspense fallback={null}>
                {/* Ajuste de Posição / Escala da Maquete */}
                <group position={[1, 0, -3]} scale={0.0012}>
                  <ApartmentModel />
                </group>

                {/* Marcadores Flutuantes */}
                {storyPoints.map((point) => (
                  <group key={point.id} position={point.position}>
                    <Html distanceFactor={8} center>
                      <button
                        onClick={() => setActivePoint(point)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer whitespace-nowrap shadow-lg ${
                          activePoint.id === point.id
                            ? 'bg-[#00e699] text-[#023b47] border-white scale-110 ring-2 ring-emerald-300'
                            : 'bg-[#023b47]/90 text-white border-[#00e699]/40 hover:bg-[#00e699] hover:text-[#023b47]'
                        }`}
                      >
                        {point.title}
                      </button>
                    </Html>
                  </group>
                ))}
              </Suspense>

              <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2.15} minDistance={3} maxDistance={10} />
            </Canvas>
          </div>

          {/* Painel Informativo Lateral */}
          <div className="lg:col-span-4 bg-[#012830] border border-[#00e699]/30 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[350px]">
            <div>
              <span className="text-[11px] font-bold text-[#00e699] uppercase tracking-wider block mb-1">
                {activePoint.room}
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                {activePoint.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activePoint.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#024a59] flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Ponto de Inspeção
              </span>
              <div className="flex gap-1.5">
                {storyPoints.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setActivePoint(pt)}
                    className={`h-2.5 rounded-full transition-all ${
                      activePoint.id === pt.id ? 'w-8 bg-[#00e699]' : 'w-2.5 bg-[#024a59]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}