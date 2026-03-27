'use client'

import { useState } from 'react';

interface Step6Props {
  data: {
    nombre: string;
    empresa: string;
    email: string;
    whatsapp: string;
    contactoPreferido: string;
    acepta: boolean;
  };
  isSubmitting: boolean;
  onChange: (data: Step6Props['data']) => void;
  onSubmit: () => void;
}

const contactoOps = [
  { value: 'whatsapp', label: '💬 WhatsApp' },
  { value: 'email', label: '✉️ Email' },
  { value: 'llamada', label: '📞 Llamada' },
];

export default function Step6Datos({ data, isSubmitting, onChange, onSubmit }: Step6Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof Step6Props['data']>(field: K, value: Step6Props['data'][K]) => {
    onChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!data.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Ingresá un email válido';
    }
    if (!data.whatsapp.trim()) newErrors.whatsapp = 'El WhatsApp es requerido';
    if (!data.acepta) newErrors.acepta = 'Debés aceptar para continuar';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-light text-black mb-1">
          ¡Ya casi terminás!
        </h2>
        <p className="text-sm text-gray-500">
          Completá tus datos para recibir tu presupuesto personalizado.
        </p>
      </div>

      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5 tracking-wider">
            NOMBRE *
          </label>
          <input
            type="text"
            value={data.nombre}
            onChange={(e) => update('nombre', e.target.value)}
            placeholder="Tu nombre"
            className={`w-full px-4 py-3 border rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none transition-colors ${
              errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'
            }`}
          />
          {errors.nombre && <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>}
        </div>

        {/* Empresa */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5 tracking-wider">
            EMPRESA{' '}
            <span className="font-normal text-gray-400 normal-case tracking-normal">(opcional)</span>
          </label>
          <input
            type="text"
            value={data.empresa}
            onChange={(e) => update('empresa', e.target.value)}
            placeholder="Nombre de tu empresa o proyecto"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5 tracking-wider">
            EMAIL *
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="tu@email.com"
            className={`w-full px-4 py-3 border rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5 tracking-wider">
            WHATSAPP *
          </label>
          <input
            type="tel"
            value={data.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            placeholder="+54 9 11 ..."
            className={`w-full px-4 py-3 border rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none transition-colors ${
              errors.whatsapp ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'
            }`}
          />
          {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
        </div>

        {/* Contacto preferido */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2 tracking-wider">
            ¿CÓMO PREFERÍS QUE TE CONTACTEMOS?
          </label>
          <div className="flex flex-wrap gap-2">
            {contactoOps.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => update('contactoPreferido', c.value)}
                className={`px-4 py-2 border rounded-full text-sm transition-all duration-200 ${
                  data.contactoPreferido === c.value
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Acepta */}
        <div>
          <label className={`flex items-start gap-3 cursor-pointer ${errors.acepta ? 'text-red-500' : ''}`}>
            <input
              type="checkbox"
              checked={data.acepta}
              onChange={(e) => update('acepta', e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-blue-600 cursor-pointer flex-shrink-0"
            />
            <span className="text-xs text-gray-500">
              Acepto que VM Studio se contacte conmigo para brindarme información sobre mi presupuesto. No enviamos spam.
            </span>
          </label>
          {errors.acepta && <p className="text-xs text-red-500 mt-1 ml-7">{errors.acepta}</p>}
        </div>
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-[0.15em] rounded-lg transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Estamos calculando tu presupuesto... ⚡
          </span>
        ) : (
          'CALCULAR MI PRESUPUESTO →'
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        🔒 Tus datos están seguros. No los compartimos con terceros.
      </p>
    </div>
  );
}
