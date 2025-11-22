import { useTranslation } from "react-i18next";
import portadapxm from "../../../assets/pxm/portadapxm.jpg";
import reservabtn from "../../../assets/pxm/svg/reserva.svg";
import btnpxm from "../../../assets/svg/pxm.svg";

export default function PortadaPxm() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative w-full h-screen md:h-[90vh]  mt-20">
        <img
          src={portadapxm}
          alt="Portada Puerto escondido"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-1 px-4 md:px-0">
          {/* Título principal */}
          <div className="font-agrandir font-bold text-3xl sm:text-4xl md:text-[33pt] text-white text-center">
            {t("pxm.welcome")}
          </div>

          {/* Título grande */}
          <span className="font-heaters text-[#D6FF57] text-[40pt] sm:text-[50pt] md:text-[85pt] text-center leading-[1]">
            {t("pxm.title")}
          </span>

          {/* Ubicación */}
          <span className="font-agrandir text-white font-bold text-2xl sm:text-3xl md:text-[35pt] text-center">
            {t("pxm.location")}
          </span>

          {/* Descripción */}
          <span className="w-full sm:w-3/4 md:w-1/2 font-agrandir font-normal text-white text-center text-base sm:text-[15pt] md:text-[23pt]">
            {t("pxm.description")}
          </span>

          {/* Botón */}
          <a href="https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn" target="_blanck" className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={reservabtn}
              alt=""
              className="w-[220px] sm:w-[280px] md:w-[320px]"
            />
          </a>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7 md:translate-y-10 z-20">
          <img
            src={btnpxm}
            alt="Decoración inferior"
            className=" w-[250px] z-50"
          />
        </div>
      </section>
    </>
  );
}
