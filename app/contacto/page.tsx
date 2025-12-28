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
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header de la página */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-gray-400 uppercase block mb-4 sm:mb-6">
              Contacto
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight px-4">
              ¿Listo para resolver tu sucesión?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed px-4">
              Escribinos por WhatsApp y contanos tu situación. Te respondemos rápido, sin 
              compromiso y con toda la información que necesitás para dar el primer paso.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4">
            <a 
              href="https://wa.me/5491112345678?text=Hola,%20quiero%20resolver%20mi%20sucesión"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-primary to-primary-light text-white text-sm sm:text-base font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
              <span className="inline-block ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <p className="text-xs sm:text-sm font-light text-gray-500 mt-4 sm:mt-6">
              Atendemos consultas de lunes a viernes de 9 a 18 hs.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-12 sm:pt-16"></div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            {/* Formulario */}
            <div>
              {submitStatus === 'success' && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 border border-gray-200">
                  <p className="text-sm font-light text-gray-700">
                    Mensaje enviado exitosamente. Te contactaremos pronto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-light text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition bg-transparent text-gray-900 font-light"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-light text-gray-400 uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition bg-transparent text-gray-900 font-light"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-light text-gray-400 uppercase tracking-wider mb-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition bg-transparent text-gray-900 font-light"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-light text-gray-400 uppercase tracking-wider mb-3">
                    Área de consulta
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition bg-transparent text-gray-900 font-light"
                  >
                    <option value="">Seleccioná un área</option>
                    <option value="civil">Derecho Civil</option>
                    <option value="comercial">Derecho Comercial</option>
                    <option value="laboral">Derecho Laboral</option>
                    <option value="inmobiliario">Derecho Inmobiliario</option>
                    <option value="familia">Derecho de Familia</option>
                    <option value="penal">Derecho Penal</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-light text-gray-400 uppercase tracking-wider mb-3">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition resize-none bg-transparent text-gray-900 font-light"
                    placeholder="Contanos brevemente tu caso..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Consulta →'}
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="lg:border-l lg:border-gray-100 lg:pl-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4">
                    Teléfono
                  </h3>
                  <a 
                    href="tel:+5491112345678" 
                    className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    +54 9 11 1234-5678
                  </a>
                  <p className="text-sm font-light text-gray-400 mt-2">
                    Lun a Vie, 9:00 - 18:00hs
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4">
                    Email
                  </h3>
                  <a 
                    href="mailto:contacto@augustofili.com" 
                    className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    contacto@augustofili.com
                  </a>
                  <p className="text-sm font-light text-gray-400 mt-2">
                    Respondemos en 24hs
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4">
                    Oficina
                  </h3>
                  <p className="text-lg font-light text-gray-900">
                    Av. Corrientes 1234, Piso 5
                    <br />
                    Ciudad Autónoma de Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-light text-gray-400 uppercase tracking-wider mb-4">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/5491112345678" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Chatear ahora →
                  </a>
                  <p className="text-sm font-light text-gray-400 mt-2">
                    Respuesta inmediata
                  </p>
                </div>
              </div>

              {/* Garantía */}
              <div className="mt-16 pt-16 border-t border-gray-100">
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  Toda la información que compartas está protegida por secreto profesional. 
                  Primera consulta gratuita y sin compromiso.
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
