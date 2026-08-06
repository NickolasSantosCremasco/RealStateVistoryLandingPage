'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#01262e] text-slate-300 border-t border-slate-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="space-y-4">
            <Link href="/" className="block w-28">
              <Image 
                src="/img/logo2.jpg" 
                alt="Logo Dougnickvistorias" 
                width={112}
                height={50}
                className="rounded-2xl object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Laudos técnicos e vistorias imobiliárias de alta precisão. Garantia técnica e jurídica para compradores, proprietários e construtoras.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#inicio" className="hover:text-[#00e699] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servico" className="hover:text-[#00e699] transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#anatomia" className="hover:text-[#00e699] transition-colors">
                  Anatomia do Laudo
                </Link>
              </li>
              <li>
                <Link href="#preco" className="hover:text-[#00e699] transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#00e699] transition-colors">
                  Solicitar Agendamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Modalidades de Vistoria */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Tipos de Vistoria
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="text-[#00e699]">•</span> Recebimento de Imóvel Novo (Chaves)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#00e699]">•</span> Vistoria de Entrada e Saída de Locação
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#00e699]">•</span> Análise Termográfica de Infiltrações
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-base">📍</span> 
                <span>São Paulo & Região Metropolitana</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">✉️</span> 
                <a href="mailto:douglasgc@ymail.com" className="hover:text-white transition-colors">
                  douglasgc@ymail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior: Copyright e Créditos com UX de Botão/Email */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center md:text-left">
          <p>
            © {currentYear} Dougnickvistorias. Todos os direitos reservados.
          </p>

          {/* Botão de Crédito com Ação de E-mail Explícita */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Desenvolvido por:</span>
            <a 
              href="mailto:nck.tec.suporte@gmail.com?subject=Contato%20via%20dougnickvistorias" 
              className="inline-flex items-center gap-1.5 bg-slate-800/90 hover:bg-[#00e699]/10 text-slate-200 hover:text-[#00e699] px-3 py-1.5 rounded-lg border border-slate-700 hover:border-[#00e699]/40 transition-all group"
              title="Clique para enviar um e-mail para Nickolas Cremasco"
            >
              <svg 
                className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00e699] transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-xs">Nickolas Cremasco</span>
              <span className="text-[10px] text-slate-400 group-hover:text-[#00e699]/80 font-normal ml-0.5">
                (Clique para Enviar e-mail)
              </span>
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}