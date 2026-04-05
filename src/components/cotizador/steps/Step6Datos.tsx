'use client'

import Link from 'next/link'

interface Props {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
  preferenciaContacto: string
  aceptaContacto: boolean
  onChange: (field: string, val: string | boolean) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function Step6Datos({ nombre, empresa, email, whatsapp, preferenciaContacto, aceptaContacto, onChange, onSubmit, isSubmitting }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 6</p>
        <h2 className="text-xl font-light text-gray-900 mb-2">¡Ya casi terminás!</h2>
        <p className="text-sm text-gray-500">Completá tus datos para recibir tu presupuesto personalizado</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">NOMBRE COMPLETO *</label>
          <input type="text" value={nombre} onChange={e => onChange('nombre', e.target.value)}
            placeholder="Tu nombre"
            className="w-full mt-1 px-4 py-3 border border-gray-200 text-base text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">EMPRESA / NEGOCIO</label>
          <input type="text" value={empresa} onChange={e => onChange('empresa', e.target.value)}
            placeholder="Nombre de tu empresa (opcional)"
            className="w-full mt-1 px-4 py-3 border border-gray-200 text-base text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">EMAIL *</label>
          <input type="email" value={email} onChange={e => onChange('email', e.target.value)}
            placeholder="tu@email.com"
            className="w-full mt-1 px-4 py-3 border border-gray-200 text-base text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">WHATSAPP *</label>
          <input type="tel" value={whatsapp} onChange={e => onChange('whatsapp', e.target.value)}
            placeholder="+54 9 11 1234-5678"
            className="w-full mt-1 px-4 py-3 border border-gray-200 text-base text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 block">¿CÓMO PREFERÍS QUE TE CONTACTEMOS?</label>
          <div className="flex gap-3">
            {[
              { id: 'whatsapp', label: 'WhatsApp' },
              { id: 'email', label: 'Email' },
              { id: 'llamada', label: 'Llamada' },
            ].map(o => (
              <button key={o.id} onClick={() => onChange('preferenciaContacto', o.id)}
                className={`flex-1 py-2.5 text-sm border transition-all
                  ${preferenciaContacto === o.id ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-3 min-h-[44px] cursor-pointer" onClick={() => onChange('aceptaContacto', !aceptaContacto)}>
          <div
            className={`w-5 h-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all pointer-events-none
              ${aceptaContacto ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
            {aceptaContacto && <span className="text-white text-xs">✓</span>}
          </div>
          <p className="text-xs text-gray-500">
            Acepto que VM Studio me contacte con información sobre mi presupuesto *
          </p>
        </div>
      </div>
      <button
        onClick={onSubmit}
        disabled={isSubmitting || !nombre || !email || !whatsapp || !aceptaContacto}
        className="w-full py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Calculando...' : 'CALCULAR MI PRESUPUESTO →'}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Al enviar aceptás nuestros{' '}
        <Link href="/terminos-y-condiciones" className="underline hover:text-gray-600 transition-colors">
          Términos y Condiciones
        </Link>
        {' '}y nuestra{' '}
        <Link href="/politica-de-privacidad" className="underline hover:text-gray-600 transition-colors">
          Política de Privacidad
        </Link>
        . Tu información es confidencial y solo será utilizada para preparar tu propuesta.
      </p>
    </div>
  )
}
