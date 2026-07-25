'use client'

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#012229] text-gray-300 border-t border-[#024a59]/40 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white tracking-tight block">
              [LOGO]
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Laudos técnicos e vistorias imobiliárias de alta precisão. Garantia técnica e jurídica para compradores, proprietários e construtoras.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#024a59]/50 border border-emerald-500/20 px-3 py-1 rounded text-[11px] text-emerald-300">
              <span>🛡️</span>
              <span>Engenharia Registrada CREA/IBAPE</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servico" className="hover:text-emerald-400 transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#anatomia" className="hover:text-emerald-400 transition-colors">
                  Anatomia do Laudo
                </Link>
              </li>
              <li>
                <Link href="#preco" className="hover:text-emerald-400 transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-emerald-400 transition-colors">
                  Solicitar Agendamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Modalidades de Vistoria */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Tipos de Vistoria
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>• Recebimento de Imóvel Novo (Chaves)</li>
              <li>• Vistoria de Entrada e Saída de Locação</li>
              <li>• Vistoria Cautelar de Vizinhança</li>
              <li>• Inspeção Predial Comercial</li>
              <li>• Análise Termográfica de Infiltrações</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">📍</span> São Paulo & Região Metropolitana
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">📞</span> (11) 98765-4321
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✉️</span> contato@vistoriapro.com.br
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">⏰</span> Seg. a Sáb. das 08h às 19h
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior: Copyright e Termos */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} VistoriaPro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}