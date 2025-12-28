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
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 tracking-tight">
          Especializados exclusivamente<br />en sucesiones
        </h2>

        <p className="text-lg md:text-xl font-light text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Nos dedicamos a esto todos los días. Conocemos cada detalle del proceso en 
          los tribunales de Córdoba y la nueva Oficina de Procesos Sucesorios. No todos los estudios están preparados para esta especialización.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-light text-gray-500 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20quiero%20iniciar%20mi%20consulta%20ahora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Iniciá tu consulta ahora
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
