'use client'

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
    // Lógica para envio de formulário ou integração com API
    console.log('Dados do formulário:', formData);
  };

  return (
    <section id="contato" className="w-full bg-[#012f38] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Agende sua Vistoria ou Tire suas Dúvidas
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl mx-auto">
            Preencha os dados abaixo e nossa equipe entrará em contato em breve.
          </p>
        </div>

        {/* Grid Principal (Formulário + Coluna de Informações) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formulário (8 Colunas em telas grandes) */}
          <form 
            onSubmit={handleSubmit} 
            className="lg:col-span-7 space-y-4 text-gray-800"
          >
            {/* Nome e WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp / Telefone"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
            </div>

            {/* E-mail */}
            <div>
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Tipo de Imóvel */}
            <div>
              <select
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
                value={formData.tipoImovel}
                onChange={(e) => setFormData({ ...formData, tipoImovel: e.target.value })}
              >
                <option value="" disabled hidden>
                  Selecione o Tipo de Imóvel
                </option>
                <option value="studio">Studio / Apartamento Compacto</option>
                <option value="apartamento">Apartamento Padrão</option>
                <option value="casa">Casa / Sobrado</option>
                <option value="comercial">Comercial / Sala / Galpão</option>
                <option value="construtora">Construtora / Empreendimento</option>
              </select>
            </div>

            {/* Tipo de Vistoria */}
            <div>
              <select
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
                value={formData.tipoVistoria}
                onChange={(e) => setFormData({ ...formData, tipoVistoria: e.target.value })}
              >
                <option value="" disabled hidden>
                  Selecione o Tipo de Vistoria
                </option>
                <option value="entrada_saida">Entrada / Saída de Locação</option>
                <option value="recebimento_chave">Recebimento de Chaves (Imóvel Novo)</option>
                <option value="cautelar">Vistoria Cautelar de Vizinhança</option>
                <option value="outro">Outro / Diagnóstico Específico</option>
              </select>
            </div>

            {/* Mensagem Opcional */}
            <div>
              <textarea
                rows={4}
                placeholder="Mensagem (Opcional)"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400 resize-none"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              ></textarea>
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full bg-[#035868] hover:bg-[#024350] border border-emerald-400/40 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-sm sm:text-base shadow-lg mt-2"
            >
              Solicitar Agendamento / Contato
            </button>
          </form>

          {/* Coluna de Informações (5 Colunas em telas grandes) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5511997069616"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-emerald-950/40 border-2 border-emerald-500/80 p-4 rounded-xl hover:bg-emerald-900/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500 text-white p-2.5 rounded-full text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Prefere falar agora?
                  </h4>
                  <p className="text-xs text-emerald-300 font-medium group-hover:underline">
                    Chamar no WhatsApp &rarr;
                  </p>
                </div>
              </div>
            </a>

            {/* Informações de Atendimento */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-base text-gray-900 border-b border-gray-100 pb-2">
                Informações de Atendimento
              </h3>

              <div className="flex items-start gap-2.5">
                <span className="text-base shrink-0">📍</span>
                <p>
                  <strong className="text-gray-900">Região:</strong> Atendemos Capital e Região Metropolitana de São Paulo.
                </p>
              </div>

           

              <div className="flex items-start gap-2.5">
                <span className="text-base shrink-0">✉️</span>
                <p>
                  <strong className="text-gray-900">E-mail:</strong> douglasgc@ymail.com
                </p>
              </div>

              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}