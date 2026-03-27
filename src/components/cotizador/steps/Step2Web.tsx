'use client'

interface Step2Props {
  data: {
    tipo: string;
    paginas: string;
    contacto: string[];
    funcionalidades: string[];
  };
  onChange: (data: Step2Props['data']) => void;
}

const tiposWeb = [
  { value: 'informativa', label: 'Sitio Informativo', desc: 'Presentá tu empresa o servicio' },
  { value: 'catalogo', label: 'Catálogo de Productos', desc: 'Mostrá tu portfolio o catálogo' },
  { value: 'ecommerce', label: 'Tienda Online (eCommerce)', desc: 'Vendé tus productos online' },
  { value: 'reservas', label: 'Sistema de Reservas', desc: 'Turnos, agendas y reservas online' },
  { value: 'landing', label: 'Landing Page', desc: 'Una página de conversión' },
];

const paginasOps = [
  { value: '1-3', label: '1 a 3 páginas' },
  { value: '4-7', label: '4 a 7 páginas' },
  { value: '8+', label: '8 o más páginas' },
];

const contactoOps = [
  { value: 'whatsapp', label: '💬 WhatsApp' },
  { value: 'formulario', label: '📝 Formulario de contacto' },
];

const funcionalidadesOps = [
  'Blog', 'Sistema de reservas', 'Carrito de compras', 'Catálogo de productos',
  'MercadoPago', 'Login de usuarios', 'Panel de administración',
  'SEO avanzado', 'Multiidioma', 'Integración con redes sociales',
  'Google Analytics', 'Chat en vivo',
];

export default function Step2Web({ data, onChange }: Step2Props) {
  const update = (field: keyof Step2Props['data'], value: string | string[]) => {
    onChange({ ...data, [field]: value });
  };

  const toggleArray = (field: 'contacto' | 'funcionalidades', val: string) => {
    const arr = data[field];
    if (arr.includes(val)) {
      update(field, arr.filter((v) => v !== val));
    } else {
      update(field, [...arr, val]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-1">
          Contanos sobre tu sitio web
        </h2>
        <p className="text-sm text-gray-500">Elegí las opciones que mejor describan tu proyecto.</p>
      </div>

      {/* Tipo de web */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Qué tipo de sitio web necesitás?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiposWeb.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => update('tipo', t.value)}
              className={`text-left p-4 border rounded-lg transition-all duration-200 ${
                data.tipo === t.value
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-black">{t.label}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{t.desc}</p>
                </div>
                {data.tipo === t.value && <span className="text-blue-600 text-lg">✓</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Cantidad de páginas */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Cuántas páginas aproximadamente?</p>
        <div className="flex flex-wrap gap-3">
          {paginasOps.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => update('paginas', p.value)}
              className={`px-5 py-2.5 border rounded-lg text-sm transition-all duration-200 ${
                data.paginas === p.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium shadow-sm'
                  : 'border-gray-200 bg-white text-black hover:border-gray-400'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contacto */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Cómo querés que te contacten? (puede ser más de uno)</p>
        <div className="flex flex-wrap gap-3">
          {contactoOps.map((c) => {
            const sel = data.contacto.includes(c.value);
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => toggleArray('contacto', c.value)}
                className={`flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm transition-all duration-200 ${
                  sel
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium shadow-sm'
                    : 'border-gray-200 bg-white text-black hover:border-gray-400'
                }`}
              >
                {c.label}
                {sel && <span className="text-blue-600">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Funcionalidades extras */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Funcionalidades adicionales{' '}
          <span className="font-normal text-gray-400">(opcional)</span>
        </p>
        <p className="text-xs text-gray-400 mb-3">Seleccioná todo lo que se aplique.</p>
        <div className="flex flex-wrap gap-2">
          {funcionalidadesOps.map((f) => {
            const sel = data.funcionalidades.includes(f);
            return (
              <button
                key={f}
                type="button"
                onClick={() => toggleArray('funcionalidades', f)}
                className={`px-4 py-2 border rounded-full text-xs transition-all duration-200 ${
                  sel
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
