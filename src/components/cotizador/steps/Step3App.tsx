'use client'

interface Props {
  appTipo: string
  appRubro: string
  appExtras: string[]
  onChange: (field: string, val: string | string[]) => void
}

const TIPOS = [
  { id: 'web', label: 'Aplicación Web (PWA)', desc: 'Instalable desde el browser en cualquier celular' },
  { id: 'mobile', label: 'Aplicación Móvil Nativa (Android + iOS)', desc: 'Disponible en Play Store y App Store' },
]
const RUBROS = ['Comercio / Ventas', 'Restaurante / Gastronomía', 'Servicios profesionales', 'Salud / Bienestar', 'Educación', 'Entretenimiento', 'Otro']
const EXTRAS = [
  { id: 'usuarios', label: 'Sistema de usuarios y perfiles' },
  { id: 'push', label: 'Notificaciones push' },
  { id: 'chat', label: 'Chat en tiempo real' },
  { id: 'pagos', label: 'Pagos dentro de la app' },
  { id: 'geo', label: 'Geolocalización / Mapas' },
  { id: 'dashboard', label: 'Dashboard con estadísticas' },
  { id: 'api', label: 'Integración con sistema externo' },
  { id: 'admin', label: 'Panel de administración' },
  { id: 'reservas', label: 'Sistema de reservas / turnos' },
  { id: 'ecommerce', label: 'Tienda / E-commerce' },
  { id: 'idiomas', label: 'Multiidioma' },
  { id: 'offline', label: 'Modo sin conexión (offline)' },
]

export default function Step3App({ appTipo, appRubro, appExtras, onChange }: Props) {
  const toggleExtra = (id: string) => {
    const next = appExtras.includes(id) ? appExtras.filter(x => x !== id) : [...appExtras, id]
    onChange('appExtras', next)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 3</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu aplicación</h2>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Qué tipo de aplicación?</p>
        <div className="space-y-3">
          {TIPOS.map(t => (
            <button key={t.id} onClick={() => onChange('appTipo', t.id)}
              className={`w-full p-4 border text-left transition-all
                ${appTipo === t.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
              <p className={`text-sm font-medium ${appTipo === t.id ? 'text-blue-700' : 'text-gray-800'}`}>{t.label}</p>
              <p className="text-xs text-gray-400 mt-1">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Para qué rubro?</p>
        <div className="space-y-2">
          {RUBROS.map(r => (
            <button key={r} onClick={() => onChange('appRubro', r)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${appRubro === r ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${appRubro === r ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {r}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">Funcionalidades (opcional)</p>
        <div className="space-y-2">
          {EXTRAS.map(e => (
            <button key={e.id} onClick={() => toggleExtra(e.id)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 border-2 flex-shrink-0 ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {e.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
