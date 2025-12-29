'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

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
      answer: 'Los costos varían según el valor de los bienes, la complejidad del caso y si es judicial o extrajudicial. Incluyen: honorarios del abogado, tasas judiciales, publicaciones en el Boletín Oficial, certificados, escrituración e impuestos. En una primera consulta gratuita, evaluamos tu caso y te brindamos un presupuesto detallado y transparente de todos los costos involucrados.'
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
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas claras a las consultas más comunes sobre sucesiones. Si tu pregunta no está aquí, no dudes en contactarnos.
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
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: openIndex === index 
                    ? '1.5px solid rgba(150, 60, 0, 0.3)' 
                    : '1.5px solid rgba(150, 60, 0, 0.1)',
                  boxShadow: openIndex === index 
                    ? '0 4px 12px rgba(150, 60, 0, 0.08)' 
                    : 'none'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                       style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg 
                      className="w-5 h-5 text-amber-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? 1 : 0
                  }}
                >
                  <p className="px-5 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada caso de sucesión es único. Contáctanos para una consulta personalizada y sin compromiso.
          </p>
          <Link 
            href="/contacto"
            className="inline-block bg-gradient-to-r from-amber-800 to-amber-600 text-white px-8 sm:px-10 py-4 rounded-md text-base sm:text-lg font-bold hover:from-amber-700 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Consultar mi caso
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
