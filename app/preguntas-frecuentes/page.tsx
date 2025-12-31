'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppLink from '../components/Whatsapplink';

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo lleva el proceso de sucesión?',
      answer: 'El tiempo de una sucesión varía según cada caso. En promedio, un proceso judicial puede llevar entre 12 y 24 meses, dependiendo de la complejidad patrimonial, cantidad de herederos y si existen conflictos entre las partes. En casos más simples y con acuerdo entre todos los herederos, el proceso puede resolverse en menor tiempo.'
    },
    {
      question: '¿Qué documentos necesito para iniciar una sucesión?',
      answer: 'Los documentos básicos incluyen: partida de defunción del causante, DNI de todos los herederos, partida de matrimonio (si corresponde), partidas de nacimiento de los herederos, documentación de bienes (escrituras, títulos de propiedad), última declaración jurada de bienes personales o AFIP, y testamento (si existe). Nuestro equipo te guiará en la recopilación completa de la documentación necesaria.'
    },
    {
      question: '¿Puedo vender una propiedad heredada antes de finalizar la sucesión?',
      answer: 'No es posible vender legalmente una propiedad hasta que la sucesión esté finalizada y los herederos estén inscriptos como nuevos propietarios en el Registro de la Propiedad. Sin embargo, se pueden hacer "boletos de compraventa con condición suspensiva" donde se acuerda la venta pero se concreta después de finalizada la sucesión. Te asesoramos en todas las alternativas legales disponibles.'
    },
    {
      question: '¿Qué pasa si hay menores de edad entre los herederos?',
      answer: 'Cuando hay menores de edad entre los herederos, se requiere la intervención del Ministerio Público y del Asesor de Menores para proteger sus intereses. Los menores heredan igual que los mayores, pero sus bienes quedan bajo administración de sus representantes legales hasta su mayoría de edad. Manejamos estos casos con especial cuidado y experiencia.'
    },
    {
      question: '¿Es obligatorio hacer la sucesión?',
      answer: 'Sí, la sucesión es obligatoria para transmitir legalmente los bienes del fallecido a sus herederos. Sin este trámite, no se pueden vender, transferir o disponer libremente de los bienes heredados. Además, los impuestos y tasas de los inmuebles deben seguir abonándose, y la falta de sucesión puede generar problemas legales y costos adicionales a futuro.'
    },
    {
      question: '¿Cuánto cuesta una sucesión?',
      answer: 'Los costos varían según el valor de los bienes, la complejidad del caso y si es judicial o extrajudicial. Incluyen: honorarios del abogado, tasas judiciales, publicaciones en el Boletín Oficial, certificados, escrituración e impuestos. En una primera consulta incluida en el costo del trabajo, evaluamos tu caso y te brindamos un presupuesto detallado y transparente de todos los costos involucrados.'
    },
    {
      question: '¿Qué es una sucesión extrajudicial y cuándo se puede hacer?',
      answer: 'La sucesión extrajudicial es un proceso más rápido y económico que se tramita directamente ante escribano, sin intervención judicial. Se puede realizar cuando todos los herederos son mayores de edad, tienen plena capacidad, están de acuerdo en la partición de bienes y no existe testamento que disponga otra cosa. Es ideal para casos sin conflictos entre herederos.'
    },
    {
      question: '¿Qué impuestos debo pagar en una sucesión?',
      answer: 'Los principales impuestos son: Impuesto a la Transmisión Gratuita de Bienes (varía según provincia), ITI (Impuesto a los Ingresos Brutos), sellos judiciales, y tasas de justicia. También pueden existir deudas del causante que deban saldarse. Te asesoramos sobre todas las obligaciones fiscales y cómo optimizar los costos impositivos de manera legal.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-4">
            Resolvé tus dudas
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Encontrá respuestas claras a las consultas más comunes sobre sucesiones. Si tu pregunta no está aquí, no dudes en contactarnos.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pt-2 pb-20 sm:pt-3 sm:pb-24 md:pt-4 md:pb-28 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-blue-300 shadow-md'
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors duration-200"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-blue-800 text-white'
                      : 'bg-slate-100 text-gray-500'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="px-5 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada caso de sucesión es único. Contactanos para una consulta personalizada y sin compromiso.
          </p>
          <WhatsAppLink
            message="Hola, tengo una pregunta sobre sucesiones"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
          >
            Consultar mi caso
          </WhatsAppLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}