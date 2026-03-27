'use client'

interface Props {
  webTipo: string
  webPaginas: string
  webContacto: string[]
  webExtras: string[]
  onChange: (field: string, val: string | string[]) => void
}

const TIPOS = [
  { id: 'informativa', label: 'Web informativa / institucional' },
  { id: 'catalogo', label: 'Web con catálogo de productos (sin venta online)' },
  { id: 'ecommerce', label: 'Tienda online / E-commerce' },
  { id: 'reservas', label: 'Web con sistema de reservas / turnos' },
  { id: 'landing', label: 'Landing page (página de venta única)' },
]
const PAGINAS = ['1-3', '4-7', '8+']
const CONTACTO = ['whatsapp', 'formulario']
const EXTRAS = [
  { id: 'blog', label: 'Blog / Noticias' },
  { id: 'reservas', label: 'Reservas / Turnos online' },
  { id: 'carrito', label: 'Carrito de compras' },
  { id: 'catalogo', label: 'Catálogo sin carrito' },
  { id: 'pagos', label: 'Pasarela de pagos (MercadoPago)' },
  { id: 'login', label: 'Sistema de login de usuarios' },
  { id: 'panel_admin', label: 'Panel de administración propio' },
  { id: 'seo', label: 'SEO avanzado' },
  { id: 'multiidioma', label: 'Multiidioma' },
  { id: 'redes', label: 'Integración con redes sociales' },
  { id: 'analytics', label: 'Google Analytics + píxel' },
  { id: 'chat', label: 'Chat en vivo' },
]

export default function Step2Web({ webTipo, webPaginas, webContacto, webExtras, onChange }: Props) {
  const toggleArr = (field: string, arr: string[], id: string) => {
    const next = arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id]
    onChange(field, next)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 2</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu web</h2>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Qué tipo de web necesitás?</p>
        <div className="space-y-2">
          {TIPOS.map(t => (
            <button key={t.id} onClick={() => onChange('webTipo', t.id)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${webTipo === t.id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${webTipo === t.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cuántas páginas?</p>
        <div className="flex gap-3">
          {PAGINAS.map(p => (
            <button key={p} onClick={() => onChange('webPaginas', p)}
              className={`flex-1 py-2.5 text-sm border transition-all
                ${webPaginas === p ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cómo contactan tus clientes?</p>
        <div className="flex gap-3">
          {CONTACTO.map(c => (
            <button key={c} onClick={() => toggleArr('webContacto', webContacto, c)}
              className={`flex-1 py-2.5 text-sm border transition-all capitalize
                ${webContacto.includes(c) ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              {c === 'whatsapp' ? 'WhatsApp' : 'Formulario de contacto'}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">Funcionalidades adicionales (opcional)</p>
        <div className="space-y-2">
          {EXTRAS.map(e => (
            <button key={e.id} onClick={() => toggleArr('webExtras', webExtras, e.id)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${webExtras.includes(e.id) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 border-2 flex-shrink-0 ${webExtras.includes(e.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {e.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
