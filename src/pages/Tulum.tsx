import portada from "../assets/portada.jpg";

export default function Tulum() {
  return (
     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${portada})` }}
      />

      {/* Overlay con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20" />

      {/* Texto con animaciones */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Línea decorativa superior */}
        <div className="w-24 h-1 bg-[#D6FF57] mx-auto mb-8 animate-pulse" />
        
        {/* Texto principal */}
        <h1 className="text-[#D6FF57] text-5xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider animate-fade-in-down">
          Próximamente
        </h1>
        
        {/* Línea decorativa inferior */}
        <div className="w-16 h-1 bg-white/60 mx-auto mb-8 animate-expand" />
        
        {/* Subtítulo */}
        <p className="text-xl md:text-3xl font-light mb-12 tracking-widest animate-fade-in-up delay-300">
          Estamos trabajando en algo increíble
        </p>
        
        {/* Indicador de carga sutil */}
        <div className="inline-block">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#D6FF57] rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
