import portada from "../../assets/portada.jpg";
import tulum from "../../assets/svg/tulum.svg";
import pxm from "../../assets/svg/pxm.svg";
import cdmx from "../../assets/svg/cdmx.svg";

export default function Portada() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden mt-20">
      {/* Imagen de fondo */}
      <img src={portada} alt="Portada" className="w-full h-full object-cover" />

      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenedor de botones sobre la imagen */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <button className="hover:scale-110 transition-transform duration-300">
          <img src={tulum} alt="Tulum" className="w-32 sm:w-40 md:w-48" />
        </button>

        <button className="hover:scale-110 transition-transform duration-300">
          <img
            src={pxm}
            alt="Puerto Escondido"
            className="w-32 sm:w-40 md:w-48"
          />
        </button>

        <button className="hover:scale-110 transition-transform duration-300">
          <img src={cdmx} alt="CDMX" className="w-32 sm:w-40 md:w-48" />
        </button>
      </div>
    </section>
  );
}
