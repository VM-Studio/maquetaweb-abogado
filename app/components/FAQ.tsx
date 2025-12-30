'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto cuesta la consulta inicial?',
      answer: 'La primera consulta es incluida en el costo del trabajo. En este encuentro analizamos tu caso, te explicamos tus opciones legales y te damos un presupuesto claro y sin sorpresas. Solo si decidís seguir adelante con nosotros comenzamos a trabajar.'
    },
    {
      question: '¿Cuánto tiempo demora resolver mi caso?',
      answer: 'El tiempo depende de la complejidad y tipo de caso. En la consulta inicial te daremos un estimado realista basado en nuestra experiencia. Algunos casos se resuelven en semanas, otros pueden llevar meses. Siempre te mantendremos informado del progreso.'
    },
    {
      question: '¿Cómo funcionan los honorarios?',
      answer: 'Trabajamos con total transparencia. Después de analizar tu caso, te presentamos un presupuesto detallado. Ofrecemos diferentes modalidades: honorarios fijos, por hora, o porcentaje según corresponda. Todo queda claramente establecido antes de comenzar.'
    },
    {
      question: '¿Qué necesito traer a la primera consulta?',
      answer: 'Traé toda la documentación relacionada con tu caso: contratos, notificaciones, emails, fotos, testigos, etc. Cuanta más información tengamos, mejor podremos asesorarte. Si no tenés todo, no te preocupes, podemos comenzar igual.'
    },
    {
      question: '¿Atienden casos en todo el país?',
      answer: 'Sí, trabajamos casos en toda Argentina. Contamos con una red de corresponsales en diferentes provincias que nos permite representarte donde sea necesario. También ofrecemos consultas virtuales para tu comodidad.'
    },
    {
      question: '¿Puedo comunicarme fuera del horario de oficina?',
      answer: 'Entendemos que las urgencias no tienen horario. Si bien el horario de atención regular es de lunes a viernes de 9 a 18hs, para casos urgentes tenemos líneas de contacto disponibles. Te daremos toda la información de contacto al tomar tu caso.'
    },
    {
      question: '¿Qué pasa si pierdo el caso?',
      answer: 'Analizamos cada caso cuidadosamente antes de tomarlo. Si consideramos que tu caso no tiene fundamento legal, te lo diremos honestamente en la primera consulta. Si decidimos representarte, es porque confiamos en tu caso y pondremos todo nuestro esfuerzo para ganar.'
    },
    {
      question: '¿Trabajan con empresas o solo con particulares?',
      answer: 'Trabajamos tanto con personas físicas como con empresas de todos los tamaños. Ofrecemos asesoramiento legal integral para empresas, desde la constitución hasta contratos comerciales, laborales y resolución de conflictos.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            [ PREGUNTAS FRECUENTES ]
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Todo lo que necesitás saber
          </h2>
          <p className="text-xl text-gray-600">
            Respondemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-2xl text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Tenés otra pregunta? Estamos para ayudarte
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            Hacer una consulta
          </a>
        </div>
      </div>
    </section>
  );
}
