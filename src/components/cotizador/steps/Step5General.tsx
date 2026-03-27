'use client'

interface Step5Props {
  data: {
    etapa: string;
    tieneWeb: string;
    urlWeb: string;
    cuando: string;
    comoConociste: string;
  };
  onChange: (data: Step5Props['data']) => void;
}

const etapas = [
  { value: 'empezando', label: '🌱 Estoy empezando mi negocio' },
  { value: 'sin-presencia', label: '🏢 Tengo negocio pero sin presencia online' },
  { value: 'mejorar', label: '📈 Quiero mejorar lo que ya tengo' },
  { value: 'escalar', label: '🚀 Quiero escalar y crecer más' },
];

const cuandoOps = [
  { value: 'ya', label: '⚡ Lo antes posible' },
  { value: 'mes', label: '📅 El próximo mes' },
  { value: '2-3-meses', label: '🗓️ En 2 o 3 meses' },
  { value: 'investigando', label: '🔍 Solo estoy investigando opciones' },
];

const comoOps = [
  { value: 'google', label: '🔍 Google' },
  { value: 'instagram', label: '📸 Instagram' },
  { value: 'facebook', label: '👥 Facebook' },
  { value: 'recomendacion', label: '🤝 Recomendación' },
  { value: 'otro', label: '💡 Otro' },
];

export default function Step5General({ data, onChange }: Step5Props) {
  const update = <K extends keyof Step5Props['data']>(field: K, value: Step5Props['data'][K]) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-1">
          Contanos un poco más
        </h2>
        <p className="text-sm text-gray-500">Nos ayuda a personalizar mejor tu presupuesto.</p>
      </div>

      {/* Etapa del negocio */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿En qué etapa está tu negocio?</p>
        <div className="space-y-2">
          {etapas.map((e) => (
            <button
              key={e.value}
              type="button"
              onClick={() => update('etapa', e.value)}
              className={`w-full flex items-center justify-between p-4 border rounded-lg text-sm text-left transition-all duration-200 ${
                data.etapa === e.value
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-400'
              }`}
            >
              <span className={data.etapa === e.value ? 'font-medium text-blue-700' : 'text-black'}>
                {e.label}
              </span>
              {data.etapa === e.value && <span className="text-blue-600">✓</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ¿Tenés web? */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Actualmente tenés un sitio web?</p>
        <div className="flex gap-3">
          {['si', 'no'].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => update('tieneWeb', op)}
              className={`flex-1 py-3 border rounded-lg text-sm font-medium transition-all duration-200 ${
                data.tieneWeb === op
                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                  : 'border-gray-200 bg-white text-black hover:border-gray-400'
              }`}
            >
              {op === 'si' ? 'Sí' : 'No'}
            </button>
          ))}
        </div>

        {data.tieneWeb === 'si' && (
          <div className="mt-3">
            <input
              type="url"
              placeholder="https://tu-sitio.com"
              value={data.urlWeb}
              onChange={(e) => update('urlWeb', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        )}
      </div>

      {/* ¿Cuándo empezar? */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Cuándo querés empezar?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {cuandoOps.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => update('cuando', c.value)}
              className={`flex items-center justify-between p-4 border rounded-lg text-sm text-left transition-all duration-200 ${
                data.cuando === c.value
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-400'
              }`}
            >
              <span className={data.cuando === c.value ? 'font-medium text-blue-700' : 'text-black'}>
                {c.label}
              </span>
              {data.cuando === c.value && <span className="text-blue-600">✓</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ¿Cómo nos conociste? */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">¿Cómo nos conociste?</p>
        <div className="flex flex-wrap gap-2">
          {comoOps.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => update('comoConociste', c.value)}
              className={`px-5 py-2.5 border rounded-full text-sm transition-all duration-200 ${
                data.comoConociste === c.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
