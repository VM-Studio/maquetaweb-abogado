
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ¿Tenés dudas?
          </h2>
        </div>


        {/* FAQ Items */}
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
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-800 text-white rotate-0'
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
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
