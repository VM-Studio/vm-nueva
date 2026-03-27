'use client'

interface Props {
  nombre: string
  email: string
  total: number
  tiempoEstimado: string
  pdfUrl: string
  presupuestoNumber: string
  onReset: () => void
}

export default function ResultadoCotizacion({ nombre, email, total, tiempoEstimado, pdfUrl, presupuestoNumber, onReset }: Props) {
  const fmt = (n: number) => `$${n.toLocaleString('es-AR')} ARS`
  const waText = encodeURIComponent(`Hola! Acabo de generar el presupuesto ${presupuestoNumber} en vmstudioweb.online y quiero más información`)
  const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491112345678'}?text=${waText}`
  const pdfFullUrl = pdfUrl.startsWith('http') ? pdfUrl : `https://app.vmstudioweb.online${pdfUrl}`

  return (
    <div className="bg-white p-6 sm:p-8 shadow-sm text-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">✅</span>
      </div>
      <h2 className="text-2xl font-light text-gray-900 mb-1">¡Tu presupuesto está listo!</h2>
      <p className="text-sm text-gray-500 mb-8">Hola <strong>{nombre}</strong>, preparamos una estimación para tu proyecto.</p>

      <div className="bg-[#0F172A] p-6 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Inversión estimada</p>
        <p className="text-3xl font-light text-white">DESDE {fmt(total)}</p>
      </div>

      <div className="bg-gray-50 p-4 mb-6 text-left">
        <p className="text-sm text-gray-600">⏱️ <strong>Tiempo estimado:</strong> {tiempoEstimado}</p>
      </div>

      <p className="text-xs text-gray-400 mb-6">
        📧 Te enviamos el presupuesto a <strong>{email}</strong>. Revisá también tu carpeta de spam.
      </p>

      <div className="space-y-3">
        <a href={pdfFullUrl} target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
          📄 DESCARGAR PRESUPUESTO PDF
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 border border-gray-300 text-gray-700 text-sm font-medium tracking-widest uppercase hover:bg-gray-50 transition-colors">
          💬 HABLAR POR WHATSAPP
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Nuestro equipo te contactará en menos de 24 horas hábiles 🚀
      </p>

      <button onClick={onReset} className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline transition-colors">
        Hacer otra cotización
      </button>
    </div>
  )
}
