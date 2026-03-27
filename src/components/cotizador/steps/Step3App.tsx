'use client'

interface Step3Props {
  data: {
    tipo: string;
    rubro: string;
    funcionalidades: string[];
  };
  onChange: (data: Step3Props['data']) => void;
}

const tiposApp = [
  { value: 'pwa', label: 'PWA', desc: 'Funciona como app desde el navegador, sin instalar' },
  { value: 'nativa', label: 'Nativa Android + iOS', desc: 'App descargable en Google Play y App Store' },
];

const rubros = [
  { value: 'comercio', label: '🛍️ Comercio' },
  { value: 'restaurante', label: '🍽️ Restaurante / Gastronomía' },
  { value: 'servicios', label: '🔧 Servicios' },
  { value: 'salud', label: '🏥 Salud' },
  { value: 'educacion', label: '📚 Educación' },
  { value: 'entretenimiento', label: '🎮 Entretenimiento' },
  { value: 'otro', label: '💡 Otro' },
];

const funcionalidadesOps = [
  'Registro de usuarios', 'Notificaciones push', 'Chat en tiempo real',
  'Pagos in-app', 'Geolocalización', 'Dashboard de métricas',
  'Integración con API externa', 'Panel de administración',
  'Sistema de reservas', 'eCommerce', 'Multiidioma', 'Modo offline',
];

export default function Step3App({ data, onChange }: Step3Props) {
  const update = (field: keyof Step3Props['data'], value: string | string[]) => {
    onChange({ ...data, [field]: value });
  };

  const toggleFuncionalidad = (val: string) => {
    const arr = data.funcionalidades;
    if (arr.includes(val)) {
      update('funcionalidades', arr.filter((v) => v !== val));
    } else {
      update('funcionalidades', [...arr, val]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-1">
          Contanos sobre tu aplicación
        </h2>
        <p className="text-sm text-gray-500">Elegí las opciones que mejor describan tu proyecto.</p>
      </div>

      {/* Tipo de app */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Qué tipo de aplicación necesitás?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiposApp.map((t) => (
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

      {/* Rubro */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿A qué rubro pertenece tu negocio?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {rubros.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => update('rubro', r.value)}
              className={`flex items-center gap-2 p-3 border rounded-lg text-sm transition-all duration-200 ${
                data.rubro === r.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium shadow-sm'
                  : 'border-gray-200 bg-white text-black hover:border-gray-400'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Funcionalidades */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Funcionalidades{' '}
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
                onClick={() => toggleFuncionalidad(f)}
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
