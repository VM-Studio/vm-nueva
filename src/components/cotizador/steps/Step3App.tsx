'use client'

interface Props {
  appTipo: string
  appRubro: string
  appExtras: string[]
  onChange: (field: string, val: string | string[]) => void
}

const TIPOS = [
  {
    id: 'web',
    label: 'App para usar desde el celular sin descargar nada',
    desc: 'Funciona como una app pero se abre desde el navegador del celular. No requiere ir a la Play Store ni App Store.',
  },
  {
    id: 'mobile',
    label: 'App para descargar en el celular (Android e iPhone)',
    desc: 'Aparece en la Play Store y App Store. Tus clientes la descargan como cualquier otra aplicación.',
  },
]
const RUBROS = [
  'Comercio / Ventas',
  'Restaurante / Gastronomía',
  'Servicios profesionales',
  'Salud / Bienestar',
  'Educación',
  'Entretenimiento',
  'Otro',
]
const EXTRAS = [
  {
    id: 'usuarios',
    label: 'Usuarios con cuenta propia',
    desc: 'Cada persona puede registrarse, iniciar sesión y tener su perfil dentro de la app',
  },
  {
    id: 'push',
    label: 'Notificaciones en el celular',
    desc: 'Podés mandarle avisos o alertas a tus usuarios directo en la pantalla del celular',
  },
  {
    id: 'chat',
    label: 'Chat entre usuarios o con el negocio',
    desc: 'Un sistema de mensajes dentro de la app para que los usuarios se comuniquen en tiempo real',
  },
  {
    id: 'pagos',
    label: 'Cobros dentro de la app',
    desc: 'Los usuarios pueden pagar con tarjeta o MercadoPago sin salir de la aplicación',
  },
  {
    id: 'geo',
    label: 'Ubicación y mapas',
    desc: 'Usar la ubicación del celular para mostrar mapas, calcular distancias o encontrar lugares cercanos',
  },
  {
    id: 'dashboard',
    label: 'Panel con estadísticas y métricas',
    desc: 'Una sección donde podés ver en gráficos cómo se está usando la app: ventas, usuarios, actividad, etc.',
  },
  {
    id: 'api',
    label: 'Conexión con otro sistema que ya usás',
    desc: 'Integrar la app con un software que ya tenés (stock, facturación, CRM, etc.)',
  },
  {
    id: 'admin',
    label: 'Panel para administrar la app',
    desc: 'Un panel web donde vos podés gestionar usuarios, contenido o configuraciones sin tocar código',
  },
  {
    id: 'reservas',
    label: 'Sistema de turnos o reservas',
    desc: 'Los usuarios eligen día y hora disponible, y el turno queda agendado automáticamente',
  },
  {
    id: 'ecommerce',
    label: 'Tienda o catálogo de productos',
    desc: 'Una sección donde los usuarios pueden ver y comprar productos desde la app',
  },
  {
    id: 'idiomas',
    label: 'App en más de un idioma',
    desc: 'Para que la app esté disponible en español e inglés (u otro idioma)',
  },
  {
    id: 'offline',
    label: 'Funciona sin internet',
    desc: 'Partes de la app siguen funcionando aunque el usuario no tenga conexión en ese momento',
  },
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
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cómo querés que funcione tu app?</p>
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
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿A qué rubro pertenece tu negocio?</p>
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
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Qué funciones necesitás? (opcional)</p>
        <p className="text-xs text-gray-400 mb-3">Si no sabés qué necesitás, no pasa nada — podés dejarlo sin seleccionar</p>
        <div className="space-y-2">
          {EXTRAS.map(e => (
            <button key={e.id} onClick={() => toggleExtra(e.id)}
              className={`w-full p-3 border text-left transition-all
                ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 border-2 flex-shrink-0 ${appExtras.includes(e.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                <span className="text-sm font-medium">{e.label}</span>
              </span>
              <p className="text-xs text-gray-400 mt-1 ml-7">{e.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
