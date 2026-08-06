'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipoImovel: '',
    tipoVistoria: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta o texto formatado para envio direto ao WhatsApp
    const textoMensagem = 
      `*Novo Agendamento via Site* 🏢\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Tipo de Imóvel:* ${formData.tipoImovel}\n` +
      `*Tipo de Vistoria:* ${formData.tipoVistoria}\n` +
      `*Mensagem:* ${formData.mensagem || 'Nenhuma mensagem informada'}`;

    const urlEncoded = encodeURIComponent(textoMensagem);
    window.open(`https://wa.me/5511997069616?text=${urlEncoded}`, '_blank');
  };

  return (
    <section id="contato" className="w-full bg-[#f4f6ff] py-20 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-2 block">
            Atendimento Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023b47] tracking-tight mb-4">
            Agende sua Vistoria ou Tire suas Dúvidas
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nossa equipe técnica está pronta para oferecer o suporte necessário para a segurança do seu patrimônio.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna da Esquerda: Canais Diretos */}
          <div className="lg:col-span-4 space-y-8 pt-2">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-6">
                Canais Diretos
              </span>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5511997069616" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 text-xl group-hover:bg-emerald-50 transition-colors flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                      WhatsApp
                    </span>
                    <span className="text-sm font-bold text-[#023b47] group-hover:text-emerald-600 transition-colors">
                      Falar com Consultor
                    </span>
                  </div>
                </a>

                {/* E-mail */}
                <a 
                  href="mailto:douglasgc@ymail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 text-xl group-hover:bg-emerald-50 transition-colors flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                      E-mail
                    </span>
                    <span className="text-sm font-bold text-[#023b47] group-hover:text-emerald-600 transition-colors">
                      douglasgc@ymail.com
                    </span>
                  </div>
                </a>

                {/* Abrangência */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-red-500 text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                      Abrangência
                    </span>
                    <span className="text-sm font-bold text-[#023b47]">
                      São Paulo e Região Metropolitana
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso LGPD */}
            <div className="pt-6 border-t border-slate-200/60">
              <div className="flex items-start gap-2 text-slate-500">
                <span className="text-xs text-slate-400 mt-0.5">🛡️</span>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Ambiente Seguro
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Seus dados estão protegidos de acordo com a LGPD e serão utilizados apenas para o seu atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Card com Formulário */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome + WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    required
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  E-mail Corporativo ou Pessoal
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Tipo de Imóvel + Tipo de Vistoria */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Tipo de Imóvel
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                    value={formData.tipoImovel}
                    onChange={(e) => setFormData({ ...formData, tipoImovel: e.target.value })}
                  >
                    <option value="" disabled hidden>Selecione</option>
                    <option value="Studio / Apartamento Compacto">Studio / Apartamento Compacto</option>
                    <option value="Apartamento Padrão">Apartamento Padrão</option>
                    <option value="Casa / Sobrado">Casa / Sobrado</option>
                    <option value="Comercial / Galpão">Comercial / Galpão</option>
                    <option value="Empreendimento / Construtora">Empreendimento / Construtora</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Tipo de Vistoria
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                    value={formData.tipoVistoria}
                    onChange={(e) => setFormData({ ...formData, tipoVistoria: e.target.value })}
                  >
                    <option value="" disabled hidden>Selecione</option>
                    <option value="Recebimento de Chaves (Imóvel Novo)">Recebimento de Chaves (Imóvel Novo)</option>
                    <option value="Entrada / Saída de Locação">Entrada / Saída de Locação</option>
                    <option value="Vistoria Cautelar de Vizinhança">Vistoria Cautelar de Vizinhança</option>
                    <option value="Outro / Diagnóstico Específico">Outro / Diagnóstico Específico</option>
                  </select>
                </div>
              </div>

              {/* Mensagem Opcional */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente sua necessidade..."
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                ></textarea>
              </div>

              {/* Botão de Envio Verde Neon / Mint */}
              <button
                type="submit"
                className="w-full bg-[#00e699] hover:bg-[#00cc88] text-[#023b47] font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/10 text-sm cursor-pointer"
              >
                Solicitar Agendamento
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}