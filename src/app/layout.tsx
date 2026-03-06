import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import MetaPixel from '../components/MetaPixel';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ============================================
// CONFIGURACIÓN DEL META PIXEL
// ============================================
// Reemplazá 'YOUR_PIXEL_ID_HERE' con tu ID del Meta Pixel
// Ejemplo: const META_PIXEL_ID = '1234567890123456';
const META_PIXEL_ID = 'YOUR_PIXEL_ID_HERE';
// ============================================

export const metadata: Metadata = {
  title: 'El mejor desarrollo de páginas Web en Pilar - Servicios Web Diseño ',
  description: 'Página Web y publicidad de Google optimizada para generar clientes nuevos en 30 días - Garantizado. Ponemos a tu empresa en frente de personas buscando tus servicios.',
  keywords: 'google ads, meta ads, marketing digital, diseño web, publicidad online, generación de leads, argentina',
  openGraph: {
    title: 'VM STUDIO - Clientes Nuevos en 30 Días Garantizado',
    description: 'Página Web y publicidad de Google optimizada para generar clientes nuevos. Empezando este mes.',
    url: 'vmstudioweb.com',
    siteName: 'VM STUDIO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VM Studio - Marketing Digital',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM Studio - Clientes Nuevos Garantizados',
    description: 'Página Web y publicidad optimizada para generar clientes nuevos en 30 días.',
    images: ['/twitter-image.jpg'],
  },
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
  alternates: {
    canonical: 'vmstudioweb.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Script to prevent FOUC (Flash of Unstyled Content) */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme') || 'light';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Meta Pixel */}
        <MetaPixel pixelId={META_PIXEL_ID} />
        
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "VM Studio",
              "description": "Agencia de marketing digital especializada en generación de leads con garantía de resultados",
              "url": "https://www.vmstudioweb.com/",
              "telephone": "+54 11 1234-5678",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "postalCode": "C1425",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-34.6037",
                "longitude": "-58.3816"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.linkedin.com/company/e-ticketpro",
                "https://twitter.com/e_ticketpro",
                "https://www.instagram.com/vmstudio"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Google Ads Management",
                  "description": "Gestión profesional de campañas en Google Ads con garantía de resultados"
                },
                {
                  "@type": "Offer",
                  "name": "Meta Ads Management",
                  "description": "Campañas optimizadas en Facebook e Instagram"
                },
                {
                  "@type": "Offer",
                  "name": "Landing Page Development",
                  "description": "Páginas web optimizadas para conversión"
                }
              ],
              "review": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
