import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const siteUrl = 'https://www.dougnickvistorias.com.br';

export const viewport: Viewport = {
  themeColor: '#023b47',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DougNickVistorias | Vistorias Imobiliárias em São Paulo e Região',
    template: '%s | DougNickVistorias',
  },
  description:
    'Vistorias imobiliárias técnicas e detalhadas de entrada e saída de locação para proprietários e inquilinos em São Paulo e Região Metropolitana. Relatório fotográfico entregue no celular.',
  keywords: [
    'vistoria imobiliaria',
    'vistoria de entrada',
    'vistoria de saida',
    'laudo de vistoria sp',
    'vistoria de aluguel sao paulo',
    'vistoria apartamento sp',
    'relatorio fotografico imovel',
    'DougNickVistorias',
  ],
  authors: [{ name: 'DougNickVistorias' }],
  creator: 'DougNickVistorias',
  publisher: 'DougNickVistorias',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'DougNickVistorias',
    title: 'DougNickVistorias | Vistorias Imobiliárias em São Paulo',
    description:
      'Relatórios e vistorias de constatação visual para aluguel de imóveis em SP. Agilidade, precisão e laudo entregue em seu celular.',
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`, 
        width: 1200,
        height: 630,
        alt: 'DougNickVistorias - Vistorias Imobiliárias em SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DougNickVistorias | Vistorias Imobiliárias em São Paulo',
    description:
      'Vistorias de entrada e saída para locação em São Paulo. Relatórios fotográficos completos entregues em tempo recorde.',
    images: [`${siteUrl}/img/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Puxa estritamente da variável de ambiente .env.local
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Schema JSON-LD para Negócio Local (LocalBusiness) no Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DougNickVistorias',
    image: `${siteUrl}/img/logo2.jpg`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+5511997069616',
    email: 'douglasgc@ymail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Cotinga, 50',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '08032-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.518,
      longitude: -46.425,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'São Paulo e Região Metropolitana',
    },
    description:
      'Serviços especializados de vistoria imobiliária de entrada e saída para locação comercial e residencial.',
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-slate-800 bg-white">
        {children}

        {/* Só renderiza se a variável de ambiente existir */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}