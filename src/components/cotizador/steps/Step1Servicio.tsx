'use client'

const SERVICIOS = [
  {
    id: 'web',
    label: 'Quiero una página web',
    desc: 'Para mostrar tu negocio, vender productos o conseguir clientes por internet',
  },
  {
    id: 'app',
    label: 'Quiero una aplicación',
    desc: 'Una app que tus clientes puedan descargar o usar desde el celular',
  },
  {
    id: 'google_ads',
    label: 'Quiero aparecer en Google cuando me buscan',
    desc: 'Publicidad paga en Google para que tus clientes te encuentren antes que a la competencia',
  },
  {
    id: 'meta_ads',
    label: 'Quiero publicidad en Instagram y Facebook',
    desc: 'Anuncios en redes sociales para llegar a más personas y generar consultas',
  },
  {
    id: 'combo_ads',
    label: 'Quiero publicidad en Google + Redes Sociales',
    desc: 'La combinación más completa: aparecés en Google y en Instagram/Facebook al mismo tiempo',
    badge: 'Más popular',
  },
]

interface Props {
  selected: string[]
  onChange: (val: string[]) => void
}

export default function Step1Servicio({ selected, onChange }: Props) {
  const toggle = (id: string) => {
    if (id === 'combo_ads') {
      const next = selected.includes('combo_ads')
        ? selected.filter(s => s !== 'combo_ads')
        : [...selected.filter(s => s !== 'google_ads' && s !== 'meta_ads'), 'combo_ads']
      onChange(next)
      return
    }
    if ((id === 'google_ads' || id === 'meta_ads') && selected.includes('combo_ads')) {
      onChange(selected.filter(s => s !== 'combo_ads'))
      return
    }
    const next = selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]
    if (next.includes('google_ads') && next.includes('meta_ads')) {
      onChange([...next.filter(s => s !== 'google_ads' && s !== 'meta_ads'), 'combo_ads'])
    } else {
      onChange(next)
    }
  }

  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 1</p>
      <h2 className="text-xl font-light text-gray-900 mb-2">¿Qué necesitás para tu negocio?</h2>
      <p className="text-xs text-gray-400 mb-6">Podés elegir más de una opción</p>
      <div className="grid grid-cols-1 gap-3">
        {SERVICIOS.map(s => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            className={`flex items-start gap-4 p-4 border text-left transition-all
              ${selected.includes(s.id)
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'}`}
          >
            <span className={`mt-0.5 w-4 h-4 flex-shrink-0 border-2 ${selected.includes(s.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
            <span className="flex-1">
              <span className="block text-sm font-medium text-gray-800">{s.label}</span>
              <span className="block text-xs text-gray-400 mt-0.5">{s.desc}</span>
            </span>
            {s.badge && (
              <span className="text-xs bg-blue-600 text-white px-2 py-0.5 flex-shrink-0">{s.badge}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
