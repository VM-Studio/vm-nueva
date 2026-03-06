/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

const ETICKETPRO = "/eticketproo.gif";
const Yesica = "/yesica-oviedo.gif";
const AJR = "/ajr.gif";
const Aspen = "/aspen.gif";
const Allbroker = "/allbroker.gif";

// Case study type
interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  client: string;
  industry: string;
  services: string[];
  results: string;
  slug: string;
  image?: any;
}

export default function CaseStudiesPage() {
  
  // Case studies data - currently only e-ticketpro
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'E-ticketpro: La ticketera del futuro',
      excerpt: 'Desarrollamos una plataforma completa para la venta de entradas online, con sistema de gestión para organizadores de eventos y experiencia optimizada para compradores.',
      client: 'E-ticketpro',
      industry: 'EVENTOS & ENTRETENIMIENTO',
      services: ['Desarrollo Web', 'App Mobile', 'Sistema de Pagos', 'Automatizaciones'],
      results: '+100 eventos creados, +5K entradas vendidas',
      slug: 'https://e-ticketpro.com/',
      image: ETICKETPRO,
    },
    {
      id: '2',
      title: 'Yesica Oviedo: Desarrollo Inmobiliario',
      excerpt: 'Desarrollamos una página web completa con formulario de contacto, optimización de SEO, blog con artículos, llamadas a la acción y otras características para Yesica Oviedo.',
      client: 'Yesica Oviedo',
      industry: 'REAL ESTATE',
      services: ['Desarrollo Web', 'Optimización SEO', 'Blog', 'Formularios'],
      results: '+300% aumento en consultas, +50 contactos mensuales',
      slug: 'https://yesicaoviedo.com/',
      image: Yesica,
    },
    {
      id: '3',
      title: 'Organización AJR: Broker de Seguros',
      excerpt: 'Creamos una página web para el broker de seguros AJR, completamente optimizada para búsquedas locales en Google, perfiles de Google My Business, formularios de contacto y una interfaz para manejar consultas.',
      client: 'Organización AJR',
      industry: 'SEGUROS',
      services: ['Desarrollo Web', 'SEO Local', 'Google My Business', 'Formularios'],
      results: '+120% en tráfico orgánico, +40 consultas mensuales',
      slug: 'https://www.organizacionajr.com/',
      image: AJR,
    },
    {
      id: '4',
      title: 'The Aspen Sound: Banda en vivo',
      excerpt: 'Desarrollamos una página web para la reconocida banda The Aspen Sound, presentando su repertorio, historial de eventos, formularios de contacto para contratación y optimización en Google.',
      client: 'The Aspen Sound',
      industry: 'BANDA MUSICAL',
      services: ['Desarrollo Web', 'SEO', 'Formularios de Contratación', 'Galería Multimedia'],
      results: '+25 contrataciones directas, +200% en alcance online',
      slug: 'https://www.theaspensound.com/',
      image: Aspen,
    },
    {
      id: '5',
      title: 'All Broker',
      excerpt: 'Desarrollamos una página web básica para un broker de seguros en Buenos Aires. Incluye secciones informativas del broker, formularios de contacto y presencia básica en Google.',
      client: 'All Broker SRL',
      industry: 'BROKER DE SEGUROS',
      services: ['Desarrollo Web', 'SEO Básico', 'Formularios'],
      results: '+80% visibilidad local, +15 consultas mensuales',
      slug: 'https://www.allbrokersrl.com/',
      image: Allbroker,
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        {/* Very subtle pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
              [ CASOS DE ESTUDIO ]
            </span>
            <h1 className="mt-4 text-[clamp(3rem,8vw,4rem)] font-light leading-[0.9] tracking-[-0.02em] mb-6 text-black">
              Proyectos que {' '}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                cambiaron empresas
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Conocé cómo ayudamos a empresas locales a crecer.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid gap-12">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.id}
                className="group"
              >
                <Link href={`${caseStudy.slug}`} className="block" target="_blank" rel="noopener noreferrer">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-[200px] md:h-full xl:h-full lg:h-full bg-gray-100">
                      {caseStudy.image && (
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12">
                      {/* Industry */}
                      <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500">
                        {caseStudy.industry}
                      </span>

                      {/* Title */}
                      <h2 className="mt-2 text-3xl font-light mb-4 text-black group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>

                      {/* CTA */}
                      <div className="mt-6">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                          Ver página web
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-gray-600 mb-2">
              Más casos próximamente
            </h3>
            <p className="text-gray-500 mb-8">
              Estamos trabajando en nuevos proyectos increíbles
            </p>
            <Link
              href="/contacto"
              className="
                inline-block px-8 py-4
                bg-gradient-to-r from-gray-900 to-blue-700
                text-white
                text-sm font-medium tracking-wider
                transition-all duration-300
                hover:shadow-2xl hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              EMPEZÁ TU PROYECTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
