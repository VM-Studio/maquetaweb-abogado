
'use client';

export default function ProcedureHome() {
  const steps = [
    {
      number: "1",
      title: "Nos contactás por WhatsApp",
      description: "Contanos tu situación. Te respondemos rápido, sin compromiso, y te explicamos si tu trámite debe hacerse en Córdoba."
    },
    {
      number: "2",
      title: "Pactamos honorarios",
      description: "Te damos un presupuesto claro y transparente. Ofrecemos facilidades de pago, tarjeta de crédito y cobro parcial a resultados."
    },
    {
      number: "3",
      title: "Arrancamos el trámite 100% online",
      description: "No importa dónde vivas. Nos encargamos de la gestión completa en la Oficina de Procesos Sucesorios de Córdoba."
    },
    {
      number: "4",
      title: "Te acompañamos hasta el final",
      description: "Seguimos tu caso hasta que puedas disponer de los bienes. Si hay conflictos, negociamos para evitar regulaciones judiciales elevadas."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            Proceso Simple
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea conectora - solo desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-5">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Número */}
                <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 z-10 mb-4">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
