import { useTranslation } from "react-i18next";
import fondo from "../../../assets/fondostrawhat.jpg";
import { useServices } from "../../../hooks/useServiceTulum";
import { ServiceColumnTulum } from "./ServiceColumnTulum";

export default function InstalacionesTulum() {
  const { t } = useTranslation();
  const { services, amenities } = useServices();

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src={fondo}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Overlay para mejor legibilidad */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
          {/* Título */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-[#D6FF57] font-agrandir font-black text-2xl md:text-3xl lg:text-5xl text-center drop-shadow-lg block">
              {t("pxm.facilitiesTitle")}
            </span>
          </div>

          {/* Grid de 3 columnas - SOLO EN DESKTOP */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            <ServiceColumnTulum items={services} />
            <ServiceColumnTulum items={amenities} />
            {/* <ServiceColumnTulum items={recommendations} /> */}
          </div>

          {/* Versión móvil con una columna - SOLO EN MÓVIL */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              {[...services, ...amenities].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className=" font-montserrat text-base font-medium flex-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
