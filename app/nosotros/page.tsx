import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

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

  return (
    <>
      <Header />
      
      {/* Main Content */}
      <section className="pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-28 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center mb-20 sm:mb-24 md:mb-28">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image 
                src="/hero.jpeg" 
                alt="Dr. Augusto Filí"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                Dr. Augusto Filí
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                El <span className="font-bold">Dr. Filí y su equipo</span> se especializan en <span className="font-bold">sucesiones y 
                declaratorias de herederos</span> en Córdoba. Con más de <span className="font-bold">20 años de experiencia</span>, 
                atendemos casos de cualquier magnitud: desde trámites simples hasta situaciones 
                complejas con conflictos familiares o bienes en distintas provincias.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Entendemos que no siempre se cuenta con <span className="font-bold">dinero en efectivo</span> para arrancar. 
                Por eso ofrecemos <span className="font-bold">facilidades de pago</span>, incluyendo tarjeta de crédito y cobro 
                parcial a resultados.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Nuestros <span className="font-bold">honorarios se pactan con transparencia</span> desde el primer contacto, 
                evitando las regulaciones judiciales que pueden llegar hasta el 20% o 30%.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-12 sm:mb-16">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1.5px solid rgba(150, 60, 0, 0.15)',
                    boxShadow: '0 2px 8px rgba(150, 60, 0, 0.05)'
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-5">
            ¿Listo para comenzar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Agenda tu consulta y te explicamos cómo podemos ayudarte con tu caso.
          </p>
          <a 
            href="https://wa.me/5493515186325?text=Hola,%20quiero%20consultar%20mi%20caso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e9a459] text-white px-8 sm:px-10 py-4 rounded-md text-base sm:text-lg font-bold  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Consultar mi caso
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
