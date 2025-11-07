import portada from "../../assets/portada.jpg";
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

      {/* SVG de texto centrado - Mejorado responsive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <img 
          src={texto} 
          alt="Texto" 
          className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] mx-auto"
        />
      </div>

      {/* Contenedor de botones - Mejorado responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          <button className="hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
            <img 
              src={tulum} 
              alt="Tulum" 
              className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[500px] mx-auto"
            />
          </button>

          <button className="hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
            <Link to="/pxm">
              <img
                src={pxm}
                alt="Puerto Escondido"
                className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[500px] mx-auto"
              />
            </Link>
          </button>

          <button className="hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
            <img 
              src={cdmx} 
              alt="CDMX" 
              className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[500px] mx-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
}