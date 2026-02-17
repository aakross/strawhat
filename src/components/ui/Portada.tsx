import portada from "../../assets/portada.webp";
import tulum from "../../assets/svg/tulum.svg";
import pxm from "../../assets/svg/pxm.svg";
import cdmx from "../../assets/svg/cdmx.svg";
import texto from "../../assets/texto.svg";
import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden mt-20">
      {/* Imagen de fondo */}
      <img src={portada} alt="Portada" className="w-full h-full object-cover" />

      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/20" />

      {/* SVG de texto centrado - Subido en móvil */}
      <div className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <img
          src={texto}
          alt="Texto"
          className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] mx-auto"
        />
      </div>

      {/* Contenedor de botones sobre la imagen */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <button className="hover:scale-110 transition-transform duration-300">
          <Link to="/tulum">
            <img
              src={tulum}
              alt="Tulum"
              className="w-32 sm:w-40 md:w-[500px]"
            />
          </Link>
        </button>

        <button className="hover:scale-110 transition-transform duration-300">
          <Link to="/pxm">
            <img
              src={pxm}
              alt="Puerto Escondido"
              className="w-32 sm:w-40 md:w-[500px]"
            />
          </Link>
        </button>

        <button className="hover:scale-110 transition-transform duration-300">
          <Link to="/cdmx">
            <img src={cdmx} alt="CDMX" className="w-32 sm:w-40 md:w-[500px]" />
          </Link>
        </button>
      </div>
    </section>
  );
}
