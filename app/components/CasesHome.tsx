export default function CasesHome() {
  const stats = [
    {
      value: "+50",
      label: "sucesiones por año"
    },
    {
      value: "+20",
      label: "años de experiencia"
    },
    {
      value: "100%",
      label: "trámite online"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight px-4">
          Especializados exclusivamente<br className="hidden sm:block" />en sucesiones
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
          Nos dedicamos a esto todos los días. Conocemos cada detalle del proceso en 
          los tribunales de Córdoba y la nueva Oficina de Procesos Sucesorios. No todos los estudios están preparados para esta especialización.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-light text-gray-500 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20quiero%20iniciar%20mi%20consulta%20ahora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary-light text-white text-sm sm:text-base font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Iniciá tu consulta ahora
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
