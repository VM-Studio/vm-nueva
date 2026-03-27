'use client'

interface Props {
  servicios: string[]
  googleInversion: string
  metaInversion: string
  tieneCuentaAds: boolean | undefined
  onChange: (field: string, val: string | boolean) => void
}

const GOOGLE_OPCIONES = [
  { id: '80-100', label: 'Entre $80.000 y $100.000 (recomendado para empezar)' },
  { id: '100-200', label: 'Entre $100.000 y $200.000' },
  { id: '200-500', label: 'Entre $200.000 y $500.000' },
  { id: '500+', label: 'Más de $500.000' },
  { id: 'indefinido', label: 'Todavía no lo tengo definido' },
]
const META_OPCIONES = [
  { id: '150', label: '$150.000 (recomendado para empezar)' },
  { id: '150-300', label: 'Entre $150.000 y $300.000' },
  { id: '300-600', label: 'Entre $300.000 y $600.000' },
  { id: '600+', label: 'Más de $600.000' },
  { id: 'indefinido', label: 'Todavía no lo tengo definido' },
]

export default function Step4Ads({ servicios, googleInversion, metaInversion, tieneCuentaAds, onChange }: Props) {
  const showGoogle = servicios.includes('google_ads') || servicios.includes('combo_ads')
  const showMeta = servicios.includes('meta_ads') || servicios.includes('combo_ads')

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 4</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu publicidad</h2>
      </div>
      {showGoogle && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cuánto querés invertir en Google mensualmente?</p>
          <div className="space-y-2">
            {GOOGLE_OPCIONES.map(o => (
              <button key={o.id} onClick={() => onChange('googleInversion', o.id)}
                className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                  ${googleInversion === o.id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${googleInversion === o.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {showMeta && (
        <div>
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cuánto querés invertir en Meta mensualmente?</p>
          <div className="space-y-2">
            {META_OPCIONES.map(o => (
              <button key={o.id} onClick={() => onChange('metaInversion', o.id)}
                className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                  ${metaInversion === o.id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${metaInversion === o.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Tenés cuenta publicitaria creada?</p>
        <div className="flex gap-3">
          {[{ val: true, label: 'Sí, ya tengo cuenta' }, { val: false, label: 'No, necesito ayuda' }].map(o => (
            <button key={String(o.val)} onClick={() => onChange('tieneCuentaAds', o.val)}
              className={`flex-1 py-2.5 text-sm border transition-all
                ${tieneCuentaAds === o.val ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              {o.label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 italic">
        La inversión publicitaria va directamente a Google/Meta, no es parte del servicio de VM Studio.
      </p>
    </div>
  )
}
