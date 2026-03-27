'use client'

import Link from 'next/link';

interface ResultadoProps {
  resultado: {
    total: string;
    tiempoEstimado: string;
    presupuestoNumber: string;
    pdfUrl: string;
  };
  nombre: string;
  email: string;
}

export default function ResultadoCotizacion({ resultado, nombre, email }: ResultadoProps) {
  const waText = encodeURIComponent(
    `Hola! Acabo de generar el presupuesto ${resultado.presupuestoNumber} en vmstudioweb.online. Me gustaría hablar con alguien del equipo.`
  );
  const waUrl = `https://wa.me/541124508191?text=${waText}`;

  return (
    <div className="text-center space-y-8">
      {/* Header */}
      <div>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-2">
          ¡Tu presupuesto está listo!
        </h2>
        <p className="text-sm text-gray-500">
          Hola <strong>{nombre}</strong>, te enviamos los detalles a{' '}
          <span className="text-blue-600">{email}</span>
        </p>
      </div>

      {/* Card principal */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-4">
        <div className="text-center border-b border-gray-200 pb-4">
          <p className="text-xs font-medium tracking-[0.2em] text-gray-500 mb-1">
            [ PRESUPUESTO ESTIMADO ]
          </p>
          <p className="text-4xl font-light text-black">
            DESDE <span className="font-medium">${resultado.total}</span>{' '}
            <span className="text-lg text-gray-500">ARS</span>
          </p>
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-500">Tiempo estimado de desarrollo</span>
          <span className="text-sm font-medium text-black">{resultado.tiempoEstimado}</span>
        </div>

        <div className="flex items-center justify-between py-2 border-t border-gray-100">
          <span className="text-sm text-gray-500">Número de presupuesto</span>
          <span className="text-sm font-medium text-gray-700 font-mono">
            #{resultado.presupuestoNumber}
          </span>
        </div>
      </div>

      {/* Botones */}
      <div className="space-y-3">
        {resultado.pdfUrl && (
          <button
            type="button"
            onClick={() => window.open(resultado.pdfUrl, '_blank')}
            className="w-full py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-[0.15em] rounded-lg transition-opacity hover:opacity-90"
          >
            DESCARGAR PRESUPUESTO PDF ↓
          </button>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 border border-gray-900 text-gray-900 text-sm font-medium tracking-[0.15em] rounded-lg transition-colors hover:bg-gray-50"
        >
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.845L0 24l6.335-1.663A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.369l-.36-.214-3.727.978.995-3.645-.235-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          HABLAR POR WHATSAPP
        </a>
      </div>

      {/* Footer */}
      <div className="space-y-3 pt-2">
        <p className="text-sm text-gray-500">
          Nuestro equipo te contactará en menos de 24 horas hábiles 🚀
        </p>
        <Link
          href="/casos-de-estudio"
          className="inline-block text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          Ver nuestros casos de estudio →
        </Link>
      </div>
    </div>
  );
}
