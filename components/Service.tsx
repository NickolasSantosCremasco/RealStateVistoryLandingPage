import React from 'react';

export default function AnatomySection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" id='Service'>
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Título e Subtítulo */}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-gray-900 tracking-tight mb-4">
          Anatomia de um Laudo Técnico de Alta Precisão
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Nossos relatórios não são apenas checklists; são análises detalhadas<br className="hidden sm:inline" />
          com rigor de engenharia diagnóstica e validade jurídica.
        </p>
      </div>

      {/* Container Principal da Visualização Interactiva do Laudo */}
      <div className="relative max-w-5xl mx-auto py-8">
        
        {/* ================= CALLOUTS FLUTUANTES (DESKTOP) ================= */}
        
        {/* 1. Callout: Termografia Avançada (Esquerda Superior) */}
        <div className="hidden lg:flex items-start gap-3 absolute -left-12 top-16 z-20 max-w-xs bg-white p-4 rounded-xl shadow-xl border border-gray-100 text-left">
          <div className="bg-amber-50 p-2 rounded-lg text-2xl flex-shrink-0">
            🔍
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">
              Termografia Avançada:
            </h4>
            <p className="text-xs text-gray-600 leading-snug">
              Identificação de vícios ocultos e infiltrações não visíveis a olho nu.
            </p>
          </div>
        </div>

        {/* 2. Callout: Garantia Jurídica (Esquerda Inferior) */}
        <div className="hidden lg:flex items-start gap-3 absolute -left-16 bottom-24 z-20 max-w-xs bg-white p-4 rounded-xl shadow-xl border border-gray-100 text-left">
          <div className="bg-blue-50 p-2 rounded-lg text-2xl flex-shrink-0">
            ⚖️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">
              Garantia Jurídica e Técnica:
            </h4>
            <p className="text-xs text-gray-600 leading-snug">
              Assinado por Engenheiro Civil credenciado com ART (Anotação de Responsabilidade Técnica) emitida pelo CREA.
            </p>
          </div>
        </div>

        {/* 3. Callout: Análise Diagnóstica (Direita Superior) */}
        <div className="hidden lg:flex items-start gap-3 absolute -right-12 top-12 z-20 max-w-xs bg-white p-4 rounded-xl shadow-xl border border-gray-100 text-left">
          <div className="bg-emerald-50 p-2 rounded-lg text-2xl flex-shrink-0">
            ✍️
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">
              Análise Diagnóstica Fundamentada:
            </h4>
            <p className="text-xs text-gray-600 leading-snug">
              Relato técnico detalhado com citação de normas ABNT aplicáveis.
            </p>
          </div>
        </div>

        {/* 4. Callout: Registro Fotográfico (Direita Inferior) */}
        <div className="hidden lg:flex items-start gap-3 absolute -right-16 bottom-32 z-20 max-w-xs bg-white p-4 rounded-xl shadow-xl border border-gray-100 text-left">
          <div className="bg-indigo-50 p-2 rounded-lg text-2xl flex-shrink-0">
            📸
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">
              Registro Fotográfico Geolocalizado:
            </h4>
            <p className="text-xs text-gray-600 leading-snug">
              Fotos de alta resolução com data, hora e coordenadas GPS da inspeção.
            </p>
          </div>
        </div>


        {/* ================= PÁGINA DO LAUDO (SIMULAÇÃO PDF) ================= */}
        <div className="bg-white mx-auto shadow-2xl rounded-sm border border-gray-200 p-8 sm:p-12 max-w-[680px] text-left text-gray-800 text-[11px] leading-relaxed relative z-10 font-sans">
          
          {/* Header da Folha */}
          <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-6">
            <div>
              <span className="font-black text-gray-900 text-sm tracking-widest">[LOGO]</span>
            </div>
            <div className="text-right text-[10px] text-gray-500 leading-tight">
              <p className="font-bold text-gray-800">VISTORIA TÉCNICA EM IMÓVEL</p>
              <p>Desenvolvimento CREA RIO</p>
              <p>Tol.Pres.Vargas, 810 | CEP 20071-001</p>
              <p>Laudo em conformidade com CREA/IBAPE</p>
            </div>
          </div>

          {/* Seção 1: Identificação do Imóvel */}
          <div className="mb-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] border-b border-gray-200 pb-1 mb-2">
              IDENTIFICAÇÃO DO IMÓVEL
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
              <p><strong className="text-gray-900">Identificação:</strong> Res. San Marino</p>
              <p><strong className="text-gray-900">Proprietário:</strong> Eng. Roberto Silva</p>
              <p><strong className="text-gray-900">Endereço do imóvel:</strong> R. das Palmeiras, 450</p>
              <p><strong className="text-gray-900">Finalidade laudo:</strong> Garantia / Entrega da Obra</p>
            </div>
          </div>

          {/* Seção 2: Dados do Cliente */}
          <div className="mb-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] border-b border-gray-200 pb-1 mb-2">
              DADOS DO CLIENTE
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
              <p><strong className="text-gray-900">Dados do cliente:</strong> Fernando M. A.</p>
              <p><strong className="text-gray-900">CPF/CNPJ:</strong> ***.498.201-**</p>
              <p><strong className="text-gray-900">Contato:</strong> (11) 98765-4321</p>
              <p><strong className="text-gray-900">E-mail:</strong> cliente@email.com</p>
            </div>
          </div>

          {/* Seção 3: Parecer Técnico */}
          <div className="mb-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] border-b border-gray-200 pb-1 mb-2">
              PARECER TÉCNICO
            </h3>
            <p className="text-gray-600 mb-2 leading-relaxed">
              O presente laudo técnico pericial tem por objetivo o levantamento das anomalias e falhas construtivas aparentes e ocultas no imóvel inspecionado, em conformidade com as diretrizes da norma ABNT NBR 13752 e procedimentos do IBAPE.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Durante a inspeção técnica, identificou-se ponto crítico de infiltração na parede limítrofe da suíte master com histórico de impermeabilização inadequada. Registros térmicos confirmam a área afetada e extensão do dano oculto.
            </p>
          </div>

          {/* Seção 4: Fotografias e Análise */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-[11px] border-b border-gray-200 pb-1 mb-3">
              FOTOGRAFIAS E ANÁLISE
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {/* Foto 1: Termografia */}
              <div className="relative rounded overflow-hidden border border-gray-200 aspect-video bg-gradient-to-tr from-amber-500 via-red-500 to-purple-800 flex items-center justify-center">
                {/* Efeito Visual Simulado da Câmera Térmica */}
                <div className="absolute inset-0 bg-opacity-30 bg-yellow-300 rounded mix-blend-overlay"></div>
                <span className="relative z-10 text-[9px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                  TERMOGRAFIA (FLIR)
                </span>
              </div>
              
              {/* Foto 2: Vista Externa / Ambiente */}
              <div className="rounded overflow-hidden border border-gray-200 aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" 
                  alt="Inspeção 1" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Foto 3: Detalhe Revestimento */}
              <div className="rounded overflow-hidden border border-gray-200 aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80" 
                  alt="Inspeção 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Assinatura e ART */}
          <div className="pt-4 border-t border-gray-200 flex justify-between items-end">
            <div>
              <p className="font-bold text-gray-900 text-[10px]">Visualizar a eficiência e a profundidade que oferecemos.</p>
            </div>
           
          </div>

          {/* Número de página */}
          <div className="text-right text-[8px] text-gray-400 mt-4">
            Página 1
          </div>
        </div>

        {/* ================= CARDS EM LAYOUT MOBILE (Exibidos em telas menores) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:hidden">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-start gap-3">
            <span className="text-2xl">🔍</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Termografia Avançada</h4>
              <p className="text-xs text-gray-600">Identificação de vícios ocultos e infiltrações não visíveis a olho nu.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-start gap-3">
            <span className="text-2xl">✍️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Análise Diagnóstica Fundamentada</h4>
              <p className="text-xs text-gray-600">Relato técnico detalhado com citação de normas ABNT aplicáveis.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-start gap-3">
            <span className="text-2xl">📸</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Registro Fotográfico Geolocalizado</h4>
              <p className="text-xs text-gray-600">Fotos de alta resolução com data, hora e coordenadas GPS da inspeção.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-start gap-3">
            <span className="text-2xl">⚖️</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Garantia Jurídica e Técnica</h4>
              <p className="text-xs text-gray-600">Assinado por Engenheiro Civil credenciado com ART (Anotação de Responsabilidade Técnica) emitida pelo CREA.</p>
            </div>
          </div>
        </div>

      </div>

    
    </section>
  );
}