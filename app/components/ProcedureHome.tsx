'use client';

export default function ProcedureHome() {
  const steps = [
    {
      number: "1",
      title: "Nos contactás por WhatsApp",
      description: "Contanos tu situación. Te respondemos rápido, sin compromiso, y te explicamos si tu trámite debe hacerse en Córdoba.",
      color: "bg-[#e9a459]"
    },
    {
      number: "2",
      title: "Pactamos honorarios",
      description: "Te damos un presupuesto claro y transparente. Ofrecemos facilidades de pago, tarjeta de crédito y cobro parcial a resultados.",
      color: "bg-blue-600"
    },
    {
      number: "3",
      title: "Arrancamos el trámite 100% online",
      description: "No importa dónde vivas. Nos encargamos de la gestión completa en la Oficina de Procesos Sucesorios de Córdoba.",
      color: "bg-[#e9a459]"
    },
    {
      number: "4",
      title: "Te acompañamos hasta el final",
      description: "Seguimos tu caso hasta que puedas disponer de los bienes. Si hay conflictos, negociamos para evitar regulaciones judiciales elevadas.",
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 px-6 sm:px-8 md:px-10 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Título centrado minimalista */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.3em] block mb-4 sm:mb-6">
            Proceso Simple
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight px-4">
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Línea vertical - termina en el último número */}
          <div className="absolute left-8 sm:left-12 top-0 w-0.5 bg-gray-200 hidden sm:block" 
               style={{ height: 'calc(100% - 2rem)' }}></div>
          
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-6 sm:gap-8 group">
                {/* Número con fondo de color */}
                <div className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 z-10`}>
                  <span className="text-white font-black text-xl sm:text-2xl">
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-2 sm:pt-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24">
          <a 
            href="https://wa.me/5493515186325?text=Hola,%20quiero%20consultar%20mi%20caso%20de%20sucesión"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center group px-6 py-3 bg-[#e9a459] text-white text-sm sm:text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-md"
          >
            Quiero consultar mi caso
            <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
