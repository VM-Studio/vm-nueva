'use client'

export type ServicioType = 'web' | 'app' | 'google_ads' | 'meta_ads' | 'combo_ads';

interface Step1Props {
  selected: ServicioType[];
  onChange: (value: ServicioType[]) => void;
}

const opciones: { value: ServicioType; emoji: string; label: string; badge?: string }[] = [
  { value: 'web', emoji: '🌐', label: 'Desarrollo Web' },
  { value: 'app', emoji: '📱', label: 'Aplicación' },
  { value: 'google_ads', emoji: '📢', label: 'Google Ads' },
  { value: 'meta_ads', emoji: '📣', label: 'Meta Ads' },
  { value: 'combo_ads', emoji: '🚀', label: 'Google Ads + Meta Ads', badge: 'Ahorro incluido' },
];

export default function Step1Servicio({ selected, onChange }: Step1Props) {
  const toggle = (val: ServicioType) => {
    // Si elige combo, quitar google y meta por separado
    if (val === 'combo_ads') {
      if (selected.includes('combo_ads')) {
        onChange(selected.filter((s) => s !== 'combo_ads'));
      } else {
        onChange([...selected.filter((s) => s !== 'google_ads' && s !== 'meta_ads'), 'combo_ads']);
      }
      return;
    }
    // Si elige google+meta por separado, sugerir combo
    let next: ServicioType[];
    if (selected.includes(val)) {
      next = selected.filter((s) => s !== val);
    } else {
      next = [...selected, val];
    }
    // Auto-sugerir combo si selecciona ambos por separado
    if (next.includes('google_ads') && next.includes('meta_ads')) {
      next = next.filter((s) => s !== 'google_ads' && s !== 'meta_ads');
      next.push('combo_ads');
    }
    onChange(next);
  };

  const isSelected = (val: ServicioType) => selected.includes(val);

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">
        Calculá el precio de tu proyecto sin registrarte
      </p>
      <h2 className="text-2xl sm:text-3xl font-light text-black mb-2">
        ¿Qué necesitás para tu negocio?
      </h2>
      <p className="text-sm text-gray-500 mb-8">Podés seleccionar más de una opción.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opciones.map((op) => {
          const sel = isSelected(op.value);
          const isComboSuggested =
            op.value === 'combo_ads' &&
            !sel &&
            (selected.includes('google_ads') || selected.includes('meta_ads'));

          return (
            <button
              key={op.value}
              type="button"
              onClick={() => toggle(op.value)}
              className={`relative flex items-center gap-4 p-4 border rounded-lg text-left transition-all duration-200 ${
                sel
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : isComboSuggested
                  ? 'border-blue-300 bg-blue-50/50'
                  : 'border-gray-200 bg-white hover:border-gray-400'
              }`}
            >
              <span className="text-2xl">{op.emoji}</span>
              <div className="flex-1">
                <span className="text-sm font-medium text-black">{op.label}</span>
                {op.badge && (
                  <span className="ml-2 text-[10px] font-medium tracking-wider text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                    {op.badge}
                  </span>
                )}
                {isComboSuggested && (
                  <span className="ml-2 text-[10px] font-medium tracking-wider text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    RECOMENDADO
                  </span>
                )}
              </div>
              {sel && (
                <span className="text-blue-600 font-medium text-lg">✓</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
