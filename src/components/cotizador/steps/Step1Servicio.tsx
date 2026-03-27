'use client'

const SERVICIOS = [
  { id: 'web', icon: '🌐', label: 'Desarrollo Web' },
  { id: 'app', icon: '📱', label: 'Aplicación' },
  { id: 'google_ads', icon: '📢', label: 'Google Ads' },
  { id: 'meta_ads', icon: '📣', label: 'Meta Ads' },
  { id: 'combo_ads', icon: '🚀', label: 'Google Ads + Meta Ads', badge: 'Ahorro incluido' },
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
      <h2 className="text-xl font-light text-gray-900 mb-6">¿Qué necesitás para tu negocio?</h2>
      <p className="text-xs text-gray-400 mb-6">Podés seleccionar más de una opción</p>
      <div className="grid grid-cols-1 gap-3">
        {SERVICIOS.map(s => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            className={`flex items-center gap-4 p-4 border text-left transition-all
              ${selected.includes(s.id)
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'}`}
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="flex-1 text-sm font-medium text-gray-800">{s.label}</span>
            {s.badge && (
              <span className="text-xs bg-blue-600 text-white px-2 py-0.5">{s.badge}</span>
            )}
            {selected.includes(s.id) && (
              <span className="text-blue-600 font-bold">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
