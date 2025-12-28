export default function Services() {
  const services = [
    {
      icon: '👨‍⚖️',
      title: 'Derecho Civil',
      description: 'Contratos, sucesiones, daños y perjuicios, mediación y resolución de conflictos patrimoniales.',
      features: ['Contratos', 'Sucesiones', 'Daños y Perjuicios', 'Mediación']
    },
    {
      icon: '🏢',
      title: 'Derecho Comercial',
      description: 'Asesoramiento integral para empresas, constitución de sociedades y contratos comerciales.',
      features: ['Sociedades', 'Contratos Comerciales', 'Asesoría Empresarial', 'Due Diligence']
    },
    {
      icon: '👔',
      title: 'Derecho Laboral',
      description: 'Defensa de derechos laborales, despidos, accidentes de trabajo y negociaciones colectivas.',
      features: ['Despidos', 'ART', 'Negociación Colectiva', 'Asesoría a Empresas']
    },
    {
      icon: '🏠',
      title: 'Derecho Inmobiliario',
      description: 'Compraventa, alquileres, escrituración y resolución de conflictos relacionados con propiedades.',
      features: ['Compraventa', 'Alquileres', 'Escrituración', 'Desalojos']
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Derecho de Familia',
      description: 'Divorcios, regímenes de visita, cuotas alimentarias y protección de menores.',
      features: ['Divorcios', 'Régimen de Visitas', 'Alimentos', 'Violencia Familiar']
    },
    {
      icon: '⚖️',
      title: 'Derecho Penal',
      description: 'Defensa penal integral, desde la instrucción hasta el juicio oral y casación.',
      features: ['Defensa Penal', 'Querella', 'Amparos', 'Excarcelaciones']
    }
  ];

  return (
    <section id="areas" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            [ ÁREAS DE PRÁCTICA ]
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios legales especializados en múltiples áreas del derecho para proteger tus intereses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿No encontrás tu caso? Consultanos por otras especialidades
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            Consultar mi caso
          </a>
        </div>
      </div>
    </section>
  );
}
