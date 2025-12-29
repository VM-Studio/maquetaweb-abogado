'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header de la página */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-5">
              ¿Listo para resolver tu <span className="text-amber-700">sucesión</span>?
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Escribinos por <span className="font-bold">WhatsApp</span> y contanos tu situación. Te respondemos <span className="font-bold">rápido</span>, sin 
              compromiso y con toda la información que necesitás.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-center mb-12 sm:mb-16">
            <a 
              href="https://wa.me/5491112345678?text=Hola,%20quiero%20resolver%20mi%20sucesión"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-600 text-white text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <p className="text-sm sm:text-base font-medium text-gray-600 mt-4 sm:mt-5">
              Atendemos consultas de <span className="text-amber-700 font-bold">lunes a viernes</span> de 9 a 18 hs.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12 sm:pt-16"></div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Formulario */}
            <div>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 sm:p-5 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm sm:text-base font-bold text-gray-900">
                    ✓ Mensaje enviado exitosamente. Te contactaremos pronto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-700 focus:ring-0 outline-none transition bg-transparent text-gray-900 text-sm sm:text-base"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-700 focus:ring-0 outline-none transition bg-transparent text-gray-900 text-sm sm:text-base"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-700 focus:ring-0 outline-none transition bg-transparent text-gray-900 text-sm sm:text-base"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Área de consulta
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-700 focus:ring-0 outline-none transition bg-transparent text-gray-900 text-sm sm:text-base"
                  >
                    <option value="">Seleccioná un área</option>
                    <option value="sucesiones">Sucesiones</option>
                    <option value="declaratoria">Declaratoria de Herederos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-700 focus:ring-0 outline-none transition resize-none bg-transparent text-gray-900 text-sm sm:text-base"
                    placeholder="Contanos brevemente tu caso..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-800 to-amber-600 text-white text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Consulta →'}
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-12">
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    Teléfono
                  </h3>
                  <a 
                    href="tel:+5491112345678" 
                    className="text-lg sm:text-xl font-bold text-gray-900 hover:text-amber-700 transition-colors"
                  >
                    +54 9 11 1234-5678
                  </a>
                  <p className="text-sm font-medium text-gray-600 mt-2">
                    Lun a Vie, 9:00 - 18:00hs
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    Email
                  </h3>
                  <a 
                    href="mailto:contacto@augustofili.com" 
                    className="text-lg sm:text-xl font-bold text-gray-900 hover:text-amber-700 transition-colors break-all"
                  >
                    contacto@augustofili.com
                  </a>
                  <p className="text-sm font-medium text-gray-600 mt-2">
                    Respondemos en 24hs
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    Oficina
                  </h3>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 leading-relaxed">
                    Av. Corrientes 1234, Piso 5
                    <br />
                    Ciudad Autónoma de Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/5491112345678" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold text-gray-900 hover:text-amber-700 transition-colors"
                  >
                    Chatear ahora →
                  </a>
                  <p className="text-sm font-medium text-gray-600 mt-2">
                    Respuesta inmediata
                  </p>
                </div>
              </div>

              {/* Garantía */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Toda la información que compartas está protegida por <span className="font-bold">secreto profesional</span>. 
                  <span className="font-bold"> Primera consulta gratuita</span> y sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
