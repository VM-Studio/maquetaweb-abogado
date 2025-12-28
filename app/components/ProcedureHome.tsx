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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-12 sm:mb-16 md:mb-20 tracking-tight">
          ¿Cómo funciona?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center px-2">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 text-gray-900 font-light text-base sm:text-lg mb-4 sm:mb-6">
                {step.number}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-normal text-gray-900 mb-3 sm:mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20quiero%20consultar%20mi%20caso%20de%20sucesión"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary-light text-white text-sm sm:text-base font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Quiero consultar mi caso
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
