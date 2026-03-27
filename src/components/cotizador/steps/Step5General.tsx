'use client'

interface Props {
  etapaNegocio: string
  tieneWeb: boolean | undefined
  urlWebActual: string
  cuandoEmpezar: string
  comoNosConocio: string
  onChange: (field: string, val: string | boolean) => void
}

export default function Step5General({ etapaNegocio, tieneWeb, urlWebActual, cuandoEmpezar, comoNosConocio, onChange }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paso 5</p>
        <h2 className="text-xl font-light text-gray-900 mb-4">Contanos sobre tu negocio</h2>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿En qué etapa está tu negocio?</p>
        <div className="space-y-2">
          {['Estoy empezando (nuevo negocio)', 'Tengo negocio pero sin presencia online', 'Tengo presencia online pero quiero mejorarla', 'Ya tengo todo, quiero escalar'].map(e => (
            <button key={e} onClick={() => onChange('etapaNegocio', e)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${etapaNegocio === e ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${etapaNegocio === e ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {e}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Tenés sitio web actualmente?</p>
        <div className="flex gap-3">
          {[{ val: true, label: 'Sí' }, { val: false, label: 'No' }].map(o => (
            <button key={String(o.val)} onClick={() => onChange('tieneWeb', o.val)}
              className={`flex-1 py-2.5 text-sm border transition-all
                ${tieneWeb === o.val ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
              {o.label}
            </button>
          ))}
        </div>
        {tieneWeb && (
          <input
            type="url"
            placeholder="¿Cuál es tu web?"
            value={urlWebActual}
            onChange={e => onChange('urlWebActual', e.target.value)}
            className="w-full mt-3 px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
          />
        )}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cuándo querés empezar?</p>
        <div className="space-y-2">
          {['Lo antes posible', 'En el próximo mes', 'En 2 o 3 meses', 'Solo estoy investigando precios'].map(c => (
            <button key={c} onClick={() => onChange('cuandoEmpezar', c)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${cuandoEmpezar === c ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${cuandoEmpezar === c ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">¿Cómo nos conociste?</p>
        <div className="space-y-2">
          {['Google', 'Instagram', 'Facebook', 'Recomendación', 'Otro'].map(c => (
            <button key={c} onClick={() => onChange('comoNosConocio', c)}
              className={`w-full flex items-center gap-3 p-3 border text-left text-sm transition-all
                ${comoNosConocio === c ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${comoNosConocio === c ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
