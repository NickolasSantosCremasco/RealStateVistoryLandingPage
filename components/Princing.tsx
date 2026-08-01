'use client'



export default function PricingSection() {
  const plans = [
    {
      id: 'compacto',
      tag: 'Ideal para Compactos/Kitnets',
      isPopular: false,
      icon: (
        <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'COMPACTO & STUDIO',
      pricePrefix: '',
      price: 'R$ 199',

      features: [
        'Inspeção de até 45m²',
        'Studio / 1 dormitório + 1 banheiro',
        'Teste elétrico de tomadas/interruptores',
        'Mapeamento fotográfico completo',
        'Fotos HD geolocalizadas',
        'Laudo técnico em PDF (até 24h)',
      ],
    },
    {
      id: 'padrao',
      tag: '⭐ MAIS POPULAR',
      isPopular: true,
      icon: (
        <svg className="w-10 h-10 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'PADRÃO / INTERMEDIÁRIO',
      pricePrefix: '',
      price: 'R$ 299',

      features: [
        'Inspeção de 46m² a 100m²',
        'Até 3 dormitórios + 2 banheiros',
        'Teste elétrico e hidráulico completo',
        'Verificação de esquadrias/janelas',
        'Caimento de ralos e escoamento',
        'Mapeamento detalhado de avarias',
        'Fotos HD geolocalizadas',
      ],
    },
    {
      id: 'especial',
      tag: 'Para Coberturas e Casas Grandes',
      isPopular: false,
      icon: (
        <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: 'ESPECIAL & ALTO PADRÃO',
      pricePrefix: 'A partir de ',
      price: 'R$ 399',
     
      features: [
        'Inspeção acima de 100m²',
        'Dormitórios ilimitados / Varanda Gourmet',
        'Análise diagnóstica avançada',
        'Verificação de móveis planejados',
        'Verficação de vagas de garagem, depósito e áreas externas',
       
      ],
    },
  ];

  return (
    <section id="preco" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
          Nossos Planos e Preços Transparentes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-16 leading-relaxed">
          Dimensionados de acordo com o tamanho e a necessidade do seu imóvel residencial. Sem taxas ocultas.
        </p>

        {/* Grid dos Cards de Preço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-[#024a59] text-white shadow-2xl md:-translate-y-2 border-2 border-[#024a59]'
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200 hover:shadow-xl'
              }`}
            >
              {/* Badge Flutuante no Topo */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-max">
                <span className="bg-[#024a59] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-emerald-400/30">
                  {plan.tag}
                </span>
              </div>

              {/* Parte Superior do Card */}
              <div className="pt-8 px-6 pb-6 border-b border-gray-100/20 text-center">
                {/* Ícone Ilusrativo */}
                <div className="flex justify-center mb-3 mt-2">
                  {plan.icon}
                </div>

                {/* Título do Plano */}
                <h3
                  className={`text-base font-extrabold tracking-wide mb-4 uppercase ${
                    plan.isPopular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.title}
                </h3>

                {/* Preço */}
                <div className="mb-1">
                  {plan.pricePrefix && (
                    <span className={`text-xs block font-medium mb-0.5 ${plan.isPopular ? 'text-emerald-200' : 'text-gray-500'}`}>
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                </div>

               
               
              </div>

              {/* Lista de Features */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-3.5 text-left text-xs sm:text-sm font-medium mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className={`font-bold mt-0.5 ${
                          plan.isPopular ? 'text-emerald-300' : 'text-gray-900'
                        }`}
                      >
                        ✓
                      </span>
                      <span className={plan.isPopular ? 'text-emerald-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Botão de Ação */}
                <a
                  href="https://wa.me/5511997069616"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-center transition-colors block ${
                    plan.isPopular
                      ? 'bg-emerald-400 hover:bg-emerald-300 text-[#024a59] shadow-md'
                      : 'bg-[#024a59] hover:bg-[#013540] text-white'
                  }`}
                >
                  Contratar Vistoria
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}