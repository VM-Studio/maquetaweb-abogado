'use client';

import { useState } from 'react';

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto cuesta la consulta inicial?',
      answer: 'La primera consulta es incluida en el costo del trabajo. Te explicamos tus opciones y presupuesto sin compromiso.'
    },
    {
      question: '¿Cuánto tiempo demora una sucesión?',
      answer: 'Con la nueva Oficina de Procesos Sucesorios, los tiempos se redujeron significativamente. Te daremos un estimado según tu caso.'
    },
    {
      question: '¿Cómo funcionan los honorarios?',
      answer: 'Trabajamos con transparencia total. Ofrecemos facilidades de pago, tarjeta de crédito y cobro parcial a resultados.'
    },
    {
      question: '¿Necesito viajar a Córdoba para el trámite?',
      answer: 'No. Todo el proceso es 100% online. Te representamos sin que tengas que viajar.'
    },
    {
      question: '¿Qué pasa si hay conflictos entre herederos?',
      answer: 'Negociamos para llegar a acuerdos justos y evitar juicios largos con regulaciones judiciales elevadas.'
    },
    {
      question: '¿Trabajan casos en otras provincias?',
      answer: 'Sí. Si la sucesión debe tramitarse en Córdoba, te representamos sin importar dónde vivas.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 md:py-28 px-6 sm:px-8 md:px-10 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Título centrado minimalista */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.3em] block mb-4 sm:mb-6">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight px-4">
            ¿Tenés dudas?
          </h2>
        </div>

        {/* FAQ Items - Compactos */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border-2 transition-all duration-300"
              style={{ 
                borderColor: openIndex === index ? 'rgba(150, 60, 0, 0.3)' : 'rgba(150, 60, 0, 0.1)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {faq.question}
                </span>
                <span className="shrink-0 text-lg font-bold text-gray-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
