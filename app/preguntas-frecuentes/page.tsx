import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | AUGUSTO Filí & Asociados',
  description: 'Preguntas frecuentes sobre sucesiones y declaratorias de herederos en Córdoba. Resolvemos tus dudas sobre trámites, costos y procedimientos.',
};

export default function PreguntasFrecuentes() {
  const faqs = [
    {
      question: "¿Puedo hacer todo el trámite sin ir a Córdoba?",
      answer: "Sí. Trabajamos 100% online. Desde la primera consulta hasta la finalización, no necesitás viajar. Te representamos en la Oficina de Procesos Sucesorios y en todo el proceso judicial."
    },
    {
      question: "¿Cuánto cuesta iniciar una sucesión?",
      answer: "Depende de cada caso. Te damos un presupuesto claro antes de arrancar. Pactamos honorarios transparentes para evitar regulaciones judiciales que pueden llegar al 20% o 30%. Ofrecemos facilidades de pago, tarjeta de crédito y cobro parcial a resultados."
    },
    {
      question: "¿Por qué la sucesión se hace en Córdoba si yo vivo en otra provincia?",
      answer: "La ley indica que el trámite debe hacerse donde falleció la persona, sin importar dónde estén los bienes o dónde vivan los herederos. Si el causante falleció en Córdoba, todo el proceso sucesorio debe tramitarse acá."
    },
    {
      question: "¿Qué pasa si hay conflictos con otros herederos?",
      answer: "Negociamos para llegar a acuerdos justos y evitar subastas. Nuestra gestión está enfocada en concluir con acuerdos que respeten los derechos de todos, evitando juicios largos, costosos y regulaciones judiciales elevadas."
    },
    {
      question: "¿Cómo funcionan las facilidades de pago?",
      answer: "Aceptamos tarjeta de crédito y ofrecemos cobro parcial a resultados. Podemos pactar una parte inicial y el resto cuando se vendan los bienes. También incluimos la redacción de instrumentos para la venta sin cobrar el costo de seña o reserva."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase block mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Preguntas frecuentes
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre sucesiones y declaratorias de herederos en Córdoba.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-6 mb-20">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-8 hover:border-primary hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              ¿Tenés otra consulta?
            </h2>
            <p className="text-base text-gray-600 font-light mb-8">
              Contactanos por WhatsApp y te respondemos rápido, sin compromiso.
            </p>
            <a 
              href="https://wa.me/5491112345678?text=Hola,%20tengo%20una%20consulta%20sobre%20sucesiones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contactanos por WhatsApp
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
