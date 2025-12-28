export default function WhyUs() {
  const competitors = [
    { feature: 'Contratos de largo plazo obligatorios', hasIt: false },
    { feature: 'Comunicación limitada', hasIt: false },
    { feature: 'Honorarios poco claros', hasIt: false },
    { feature: 'Sin garantías de resultado', hasIt: false }
  ];

  const ourFeatures = [
    { feature: 'Primera consulta gratuita', icon: '✓' },
    { feature: 'Comunicación constante y clara', icon: '✓' },
    { feature: 'Honorarios transparentes desde el día 1', icon: '✓' },
    { feature: 'Compromiso con tu caso hasta el final', icon: '✓' }
  ];

  return (
    <section id="nosotros" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            [ DIFERENCIAL ]
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por qué elegirnos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No somos como otros estudios jurídicos. Trabajamos diferente.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Otros Estudios */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Otros Estudios
            </h3>
            <ul className="space-y-4">
              {competitors.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 text-xl shrink-0">✕</span>
                  <span className="text-gray-600">{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros */}
          <div className="bg-blue-600 rounded-2xl p-8 border-2 border-blue-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold">
              RECOMENDADO
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center mt-4">
              AUGUSTO Filí & Asociados
            </h3>
            <ul className="space-y-4">
              {ourFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white text-xl shrink-0 bg-blue-700 rounded-full w-6 h-6 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-blue-50">{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enfoque Personalizado</h3>
            <p className="text-gray-600">
              Cada caso es único. Diseñamos estrategias específicas para tu situación.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💼</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Experiencia Comprobada</h3>
            <p className="text-gray-600">
              Más de 20 años defendiendo exitosamente casos complejos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compromiso Total</h3>
            <p className="text-gray-600">
              Tu caso es nuestra prioridad. Estamos con vos hasta el final.
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center border-2 border-blue-200">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Garantía
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Si después de la primera consulta sentís que no somos el estudio indicado para tu caso, 
              no hay ningún compromiso. Trabajamos con total transparencia y honestidad desde el primer día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
