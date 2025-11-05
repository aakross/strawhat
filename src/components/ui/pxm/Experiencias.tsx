import { useTranslation } from "react-i18next";
import fondovia from "../../../assets/pxm/fondoviajeros.jpg";
import emma from "../../../assets/pxm/svg/emma.svg";
import lucia from "../../../assets/pxm/svg/lucia.svg";
import intza from "../../../assets/pxm/svg/intza.svg";
import mariam from "../../../assets/pxm/svg/mariam.svg";
import richard from "../../../assets/pxm/svg/richard.svg";

export default function Experiencias() {
  const { t } = useTranslation();

  // Arreglo de imágenes organizadas en filas
  const primeraFila = [emma, lucia, intza];
  const segundaFila = [mariam, richard];

  return (
    <>
      <section className="relative w-full h-[65vh] md:min-h-[110vh] overflow-hidden">
        <img
          src={fondovia}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
          {/* Textos */}
          <div className="flex flex-col justify-center items-center text-center mb-2 md:mb-16 lg:mb-2">
            <span className="font-agrandir font-black text-lg md:text-2xl lg:text-3xl drop-shadow-lg mb-2">
              {t("pxm.amenity4")}
            </span>
            <span className="font-agrandir font-black text-2xl md:text-3xl lg:text-5xl drop-shadow-lg">
              {t("pxm.amenity5")}
            </span>
          </div>

          {/* Grid de imágenes */}
          <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
            {/* ← Menos espacio entre filas */}
            {/* Primera fila - 3 imágenes */}
            <div className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8">
              {/* ← Menos espacio horizontal */}
              {primeraFila.map((imagen, index) => (
                <div key={index} className="flex justify-center ">
                  <img
                    src={imagen}
                    alt={`Viajero ${index + 1}`}
                    className="w-28 h-28 md:w-40 md:h-40 lg:w-[400px] lg:h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            {/* Segunda fila - 2 imágenes */}
            <div className="flex justify-center items-center space-x-6 md:space-x-8 lg:space-x-10">
              {/* ← Menos espacio horizontal */}
              {segundaFila.map((imagen, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={imagen}
                    alt={`Viajero ${index + 4}`}
                    className="w-28 h-28 md:w-40 md:h-40 lg:w-[400px] lg:h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
