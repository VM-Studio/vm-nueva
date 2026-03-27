import type { Metadata } from "next";
import CotizadorWizard from "../../components/cotizador/CotizadorWizard";

export const metadata: Metadata = {
  title: "Cotizá tu proyecto digital | VM Studio",
  description: "Calculá el precio estimado de tu página web, app o campaña publicitaria. Sin registrarte, sin compromiso.",
  alternates: { canonical: "https://vmstudioweb.online/cotizador" },
  openGraph: {
    title: "Cotizá tu proyecto digital | VM Studio",
    description: "Calculá el precio estimado de tu página web, app o campaña publicitaria. Sin registrarte, sin compromiso.",
    url: "https://vmstudioweb.online/cotizador",
  },
};

export default function CotizadorPage() {
  return (
    <section className="relative min-h-screen bg-gray-50">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
            [ COTIZADOR ]
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black">
            Calculá el precio de tu{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              proyecto
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-600 font-light max-w-xl mx-auto">
            Sin registrarte. Sin compromiso.{" "}
            <span className="block mt-1">
              Recibís tu presupuesto estimado por email.
            </span>
          </p>
        </div>

        <CotizadorWizard />
      </div>
    </section>
  );
}
