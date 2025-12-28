import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros | AUGUSTO Filí & Asociados',
  description: 'Conocé nuestro estudio jurídico. Más de 20 años de experiencia, compromiso y transparencia en cada caso.',
};

export default function Nosotros() {
  const values = [
    {
      title: 'Experiencia',
      description: 'Más de 20 años defendiendo exitosamente casos complejos en múltiples áreas del derecho.'
    },
    {
      title: 'Compromiso',
      description: 'Tu caso es nuestra prioridad. Estamos con vos desde la primera consulta hasta la resolución final.'
    },
    {
      title: 'Transparencia',
      description: 'Comunicación clara y honesta. Honorarios transparentes desde el primer día sin sorpresas.'
    },
    {
      title: 'Personalización',
      description: 'Cada caso es único. Diseñamos estrategias específicas adaptadas a tu situación particular.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tu caso en detalle. Primera consulta gratuita para entender tu situación.',
      time: 'Mismo día'
    },
    {
      number: '02',
      title: 'Estrategia',
      description: 'Diseñamos un plan legal específico. Te explicamos cada paso de forma clara.',
      time: '48 horas'
    },
    {
      number: '03',
      title: 'Acción Legal',
      description: 'Ejecutamos la estrategia con precisión. Te mantenemos informado constantemente.',
      time: 'Continuo'
    },
    {
      number: '04',
      title: 'Resolución',
      description: 'Seguimiento completo hasta resolver exitosamente. Asesoramiento post-resolución.',
      time: 'Hasta el final'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-gray-400 uppercase block mb-4 sm:mb-6">
              Nuestro Estudio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight px-4">
              +20 años resolviendo sucesiones en Córdoba
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4">
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-700 leading-relaxed">
              El Dr. Filí y su equipo se especializan exclusivamente en sucesiones y 
              declaratorias de herederos. Con más de 20 años de experiencia, esto nos permite 
              atender casos de cualquier magnitud: desde trámites simples hasta situaciones 
              complejas con conflictos familiares o bienes en distintas provincias.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-700 leading-relaxed">
              Entendemos que no siempre se cuenta con dinero en efectivo para arrancar. 
              Por eso ofrecemos facilidades de pago, incluyendo tarjeta de crédito y cobro 
              parcial a resultados. Podemos pactar una parte inicial y el resto cuando se vendan los bienes.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-700 leading-relaxed">
              Nuestros honorarios se pactan con transparencia desde el primer contacto. Evitamos 
              las regulaciones judiciales que pueden llegar hasta el 20% o 30%, reduciendo 
              considerablemente los costos del trámite para vos.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-gray-400 uppercase">
              Nuestros Valores
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-12"
              >
                <h3 className="text-xl font-light text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div className="max-w-6xl mx-auto mb-32 border-t border-gray-100 pt-32">
          <div className="text-center mb-16">
            <span className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase block mb-6">
              Metodología
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Cómo Trabajamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-light text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="text-xs font-light text-gray-400 uppercase tracking-wider">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="max-w-6xl mx-auto border-t border-gray-100 pt-24">
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">+20</div>
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">500+</div>
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Casos Resueltos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">98%</div>
              <div className="text-xs font-light text-gray-400 uppercase tracking-wider">Tasa de Éxito</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-32 border-t border-gray-100 pt-24 text-center">
          <p className="text-gray-500 font-light mb-8">
            ¿Listo para comenzar?
          </p>
          <Link 
            href="/contacto"
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
          >
            Agenda tu Consulta →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
