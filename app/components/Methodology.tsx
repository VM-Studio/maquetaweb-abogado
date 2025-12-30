export default function Methodology() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tu caso en detalle. Primera consulta incluida en el costo del trabajo para entender tu situación y necesidades legales.',
      time: 'MISMO DÍA'
    },
    {
      number: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos una estrategia legal específica para tu caso. Te explicamos cada paso del proceso de forma clara.',
      time: '48 HORAS'
    },
    {
      number: '03',
      title: 'Acción Legal',
      description: 'Ejecutamos la estrategia con precisión. Te mantenemos informado en todo momento sobre los avances del caso.',
      time: 'CONTINUO'
    },
    {
      number: '04',
      title: 'Seguimiento y Cierre',
      description: 'Seguimiento completo hasta resolver tu caso exitosamente. Asesoramiento post-resolución incluido.',
      time: 'HASTA RESOLUCIÓN'
    }
  ];

  return (
    <section id="metodologia" className="py-20 px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            [ METODOLOGÍA ]
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cómo trabajamos tu caso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso claro y eficiente diseñado para obtener los mejores resultados
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line for desktop */}
              {index < steps.length - 2 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-blue-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Transparencia total en cada etapa</h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Vas a saber exactamente qué está pasando con tu caso en todo momento. Sin sorpresas, sin letra chica.
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
