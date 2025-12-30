import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Áreas de Práctica | AUGUSTO Filí & Asociados',
  description: 'Servicios legales especializados en Derecho Civil, Comercial, Laboral, Inmobiliario, Familia y Penal. Más de 20 años de experiencia.',
};

export default function AreasDePractica() {
  const areas = [
    {
      title: 'Derecho Civil',
      description: 'Contratos, sucesiones, daños y perjuicios. Resolución de conflictos patrimoniales y mediación.',
      services: ['Contratos', 'Sucesiones', 'Daños y Perjuicios', 'Mediación']
    },
    {
      title: 'Derecho Comercial',
      description: 'Asesoramiento integral para empresas. Constitución de sociedades y contratos comerciales.',
      services: ['Sociedades', 'Contratos Comerciales', 'Asesoría Empresarial', 'Due Diligence']
    },
    {
      title: 'Derecho Laboral',
      description: 'Defensa de derechos laborales. Despidos, accidentes de trabajo y negociaciones colectivas.',
      services: ['Despidos', 'ART', 'Negociación Colectiva', 'Asesoría a Empresas']
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Compraventa, alquileres y escrituración. Resolución de conflictos relacionados con propiedades.',
      services: ['Compraventa', 'Alquileres', 'Escrituración', 'Desalojos']
    },
    {
      title: 'Derecho de Familia',
      description: 'Divorcios, regímenes de visita y cuotas alimentarias. Protección de menores y violencia familiar.',
      services: ['Divorcios', 'Régimen de Visitas', 'Alimentos', 'Violencia Familiar']
    },
    {
      title: 'Derecho Penal',
      description: 'Defensa penal integral. Desde la instrucción hasta el juicio oral y casación.',
      services: ['Defensa Penal', 'Querella', 'Amparos', 'Excarcelaciones']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header de la página */}
          <div className="text-center mb-24">
            <span className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase block mb-6">
              Especialidades
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Áreas de Práctica
            </h1>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              Ofrecemos servicios legales especializados en múltiples
              <br className="hidden md:block" />
              áreas del derecho para proteger tus intereses
            </p>
          </div>

          {/* Grid de áreas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="group bg-white p-12 hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                  {area.title}
                </h3>
                
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm font-light text-gray-400">
                      <span className="w-1 h-1 bg-gray-300 rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA minimalista */}
          <div className="mt-24 text-center border-t border-gray-100 pt-24">
            <p className="text-gray-500 font-light mb-8">
              ¿No encontrás tu caso específico?
            </p>
            <a 
              href="https://wa.me/5493515186325?text=Hola,%20quiero%20consultar%20sobre%20un%20caso%20específico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Consultanos →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
