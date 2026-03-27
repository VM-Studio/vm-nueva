'use client'

import { type ServicioType } from './Step1Servicio';

interface Step4Props {
  data: {
    googlePresupuesto: string;
    metaPresupuesto: string;
    cuentaCreada: string;
  };
  servicios: ServicioType[];
  onChange: (data: Step4Props['data']) => void;
}

const presupuestosGoogle = [
  { value: '15000', label: 'Hasta $15.000 ARS / mes' },
  { value: '30000', label: 'Hasta $30.000 ARS / mes' },
  { value: '60000', label: 'Hasta $60.000 ARS / mes' },
  { value: '100000', label: 'Hasta $100.000 ARS / mes' },
  { value: '100000+', label: 'Más de $100.000 ARS / mes' },
];

const presupuestosMeta = [
  { value: '10000', label: 'Hasta $10.000 ARS / mes' },
  { value: '25000', label: 'Hasta $25.000 ARS / mes' },
  { value: '50000', label: 'Hasta $50.000 ARS / mes' },
  { value: '80000', label: 'Hasta $80.000 ARS / mes' },
  { value: '80000+', label: 'Más de $80.000 ARS / mes' },
];

export default function Step4Ads({ data, servicios, onChange }: Step4Props) {
  const update = (field: keyof Step4Props['data'], value: string) => {
    onChange({ ...data, [field]: value });
  };

  const tieneGoogle = servicios.includes('google_ads') || servicios.includes('combo_ads');
  const tieneMeta = servicios.includes('meta_ads') || servicios.includes('combo_ads');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-1">
          Configuremos tus campañas
        </h2>
        <p className="text-sm text-gray-500">
          Elegí el presupuesto que mejor se adapte a tu negocio.
        </p>
      </div>

      {/* Google Ads budget */}
      {tieneGoogle && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            📢 Presupuesto mensual para Google Ads
          </p>
          <div className="space-y-2">
            {presupuestosGoogle.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => update('googlePresupuesto', p.value)}
                className={`w-full flex items-center justify-between p-4 border rounded-lg text-sm text-left transition-all duration-200 ${
                  data.googlePresupuesto === p.value
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <span className={data.googlePresupuesto === p.value ? 'font-medium text-blue-700' : 'text-black'}>
                  {p.label}
                </span>
                {data.googlePresupuesto === p.value && <span className="text-blue-600">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Meta Ads budget */}
      {tieneMeta && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            📣 Presupuesto mensual para Meta Ads (Facebook / Instagram)
          </p>
          <div className="space-y-2">
            {presupuestosMeta.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => update('metaPresupuesto', p.value)}
                className={`w-full flex items-center justify-between p-4 border rounded-lg text-sm text-left transition-all duration-200 ${
                  data.metaPresupuesto === p.value
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <span className={data.metaPresupuesto === p.value ? 'font-medium text-blue-700' : 'text-black'}>
                  {p.label}
                </span>
                {data.metaPresupuesto === p.value && <span className="text-blue-600">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Cuenta publicitaria */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          ¿Ya tenés cuenta publicitaria creada?
        </p>
        <div className="flex gap-3">
          {['si', 'no'].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => update('cuentaCreada', op)}
              className={`flex-1 py-3 border rounded-lg text-sm font-medium transition-all duration-200 ${
                data.cuentaCreada === op
                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                  : 'border-gray-200 bg-white text-black hover:border-gray-400'
              }`}
            >
              {op === 'si' ? 'Sí, ya tengo' : 'No, es nueva'}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400 border border-gray-100 rounded-lg p-3 bg-gray-50">
        💡 La inversión publicitaria va directamente a Google y/o Meta. No forma parte del servicio de VM Studio.
      </p>
    </div>
  );
}
