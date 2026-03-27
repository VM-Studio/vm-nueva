'use client'

import { useState, useEffect } from 'react';
import StepIndicator from './StepIndicator';
import Step1Servicio, { type ServicioType } from './steps/Step1Servicio';
import Step2Web from './steps/Step2Web';
import Step3App from './steps/Step3App';
import Step4Ads from './steps/Step4Ads';
import Step5General from './steps/Step5General';
import Step6Datos from './steps/Step6Datos';
import ResultadoCotizacion from './ResultadoCotizacion';

const LS_KEY = 'vm_cotizador_progress';

interface FormData {
  servicios: ServicioType[];
  web: { tipo: string; paginas: string; contacto: string[]; funcionalidades: string[] };
  app: { tipo: string; rubro: string; funcionalidades: string[] };
  ads: { googlePresupuesto: string; metaPresupuesto: string; cuentaCreada: string };
  general: { etapa: string; tieneWeb: string; urlWeb: string; cuando: string; comoConociste: string };
  datos: { nombre: string; empresa: string; email: string; whatsapp: string; contactoPreferido: string; acepta: boolean };
}

const defaultFormData: FormData = {
  servicios: [],
  web: { tipo: '', paginas: '', contacto: [], funcionalidades: [] },
  app: { tipo: '', rubro: '', funcionalidades: [] },
  ads: { googlePresupuesto: '', metaPresupuesto: '', cuentaCreada: '' },
  general: { etapa: '', tieneWeb: '', urlWeb: '', cuando: '', comoConociste: '' },
  datos: { nombre: '', empresa: '', email: '', whatsapp: '', contactoPreferido: 'whatsapp', acepta: false },
};

type StepKey = 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6';

interface StepConfig {
  key: StepKey;
  label: string;
  condition: (fd: FormData) => boolean;
}

const allSteps: StepConfig[] = [
  { key: 'step1', label: 'Servicio', condition: () => true },
  { key: 'step2', label: 'Sitio Web', condition: (fd) => fd.servicios.includes('web') },
  { key: 'step3', label: 'App', condition: (fd) => fd.servicios.includes('app') },
  {
    key: 'step4',
    label: 'Publicidad',
    condition: (fd) =>
      fd.servicios.includes('google_ads') ||
      fd.servicios.includes('meta_ads') ||
      fd.servicios.includes('combo_ads'),
  },
  { key: 'step5', label: 'Tu negocio', condition: () => true },
  { key: 'step6', label: 'Tus datos', condition: () => true },
];

function getActiveSteps(fd: FormData): StepConfig[] {
  return allSteps.filter((s) => s.condition(fd));
}

interface Resultado {
  total: string;
  tiempoEstimado: string;
  presupuestoNumber: string;
  pdfUrl: string;
}

export default function CotizadorWizard() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Restore from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.formData) setFormData(parsed.formData);
        if (typeof parsed.currentStepIndex === 'number') setCurrentStepIndex(parsed.currentStepIndex);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ formData, currentStepIndex }));
    } catch {
      // ignore
    }
  }, [formData, currentStepIndex, mounted]);

  const activeSteps = getActiveSteps(formData);
  const currentStep = activeSteps[currentStepIndex];

  const handleNext = () => {
    // Re-calculate active steps after potential formData change
    const steps = getActiveSteps(formData);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  };

  const handleServiciosChange = (servicios: ServicioType[]) => {
    const newFormData = { ...formData, servicios };
    setFormData(newFormData);
    // Adjust step index if current step becomes invalid
    const newActiveSteps = getActiveSteps(newFormData);
    if (currentStepIndex >= newActiveSteps.length) {
      setCurrentStepIndex(newActiveSteps.length - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;
      const res = await fetch(`${apiUrl}/api/cotizador/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error al procesar tu presupuesto');
      const data = await res.json();
      setResultado(data);
      localStorage.removeItem(LS_KEY);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setCurrentStepIndex(0);
    setResultado(null);
    setError(null);
    localStorage.removeItem(LS_KEY);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (resultado) {
    return (
      <div className="max-w-[680px] mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <ResultadoCotizacion
            resultado={resultado}
            nombre={formData.datos.nombre}
            email={formData.datos.email}
          />
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-4"
            >
              Hacer una nueva cotización
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stepLabels = activeSteps.map((s) => ({ label: s.label }));

  return (
    <div className="max-w-[680px] mx-auto">
      <StepIndicator
        currentStep={currentStepIndex + 1}
        totalSteps={activeSteps.length}
        steps={stepLabels}
      />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 mt-6">
        {/* Step content */}
        <div className="min-h-[300px]">
          {currentStep?.key === 'step1' && (
            <Step1Servicio
              selected={formData.servicios}
              onChange={handleServiciosChange}
            />
          )}
          {currentStep?.key === 'step2' && (
            <Step2Web
              data={formData.web}
              onChange={(web) => setFormData((fd) => ({ ...fd, web }))}
            />
          )}
          {currentStep?.key === 'step3' && (
            <Step3App
              data={formData.app}
              onChange={(app) => setFormData((fd) => ({ ...fd, app }))}
            />
          )}
          {currentStep?.key === 'step4' && (
            <Step4Ads
              data={formData.ads}
              servicios={formData.servicios}
              onChange={(ads) => setFormData((fd) => ({ ...fd, ads }))}
            />
          )}
          {currentStep?.key === 'step5' && (
            <Step5General
              data={formData.general}
              onChange={(general) => setFormData((fd) => ({ ...fd, general }))}
            />
          )}
          {currentStep?.key === 'step6' && (
            <Step6Datos
              data={formData.datos}
              isSubmitting={isSubmitting}
              onChange={(datos) => setFormData((fd) => ({ ...fd, datos }))}
              onSubmit={handleSubmit}
            />
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 flex items-start gap-2">
            <span>⚠️</span>
            <div>
              <p>{error}</p>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-2 text-red-700 underline underline-offset-2 text-xs"
              >
                Reintentar
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {currentStep?.key !== 'step6' && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep?.key === 'step1' && formData.servicios.length === 0}
              className="px-8 py-3 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-[0.15em] rounded-lg transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        )}

        {currentStep?.key === 'step6' && currentStepIndex > 0 && (
          <div className="mt-4">
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30"
            >
              ← Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
