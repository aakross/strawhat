import { useTranslation } from "react-i18next";
import fondoubicacion from "../../../assets/pxm/fondoubicacion.jpg";
import taxi from "../../../assets/pxm/svg/taxi.svg";
import { useState } from "react";

export default function Ubicacion() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src={fondoubicacion}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
          {/* Mapa - ocupa 8 columnas en desktop */}
          <div className="lg:col-span-8 w-full h-[400px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black bg-opacity-90 flex items-center justify-center z-10 rounded-lg">
                <div className="text-center space-y-4">
                  {/* Spinner con logo de carga */}
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-[#D6FF57] border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#D6FF57] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  {/* Texto de carga */}
                  <div>
                    <p className="text-[#D6FF57] font-agrandir font-bold text-xl mb-2">
                      STRAW HAT
                    </p>
                    <p className="text-white font-montserrat text-lg">
                      Cargando ubicación...
                    </p>
                  </div>
                </div>
              </div>
            )}
            <iframe
              title="Mapa Straw Hat Surf Hostel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2040826660173!2d-97.05231552404095!3d15.845867584801749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f99f06e40035%3A0x1a81182423804975!2sStraw%20Hat%20Surf%20Hostel%20%26%20Bar!5e0!3m2!1ses!2smx!4v1762137408295!5m2!1ses!2smx"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          {/* Información - ocupa 4 columnas en desktop, pegado al mapa */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6 lg:pl-4 text-center lg:text-left">
            {/* Título recomendaciones */}
            <div>
              <h2 className="font-montserrat font-extrabold text-[#D6FF57] text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
                {t("pxm.recommendationsTitle")}
              </h2>
            </div>

            {/* Transporte desde Aeropuerto */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-montserrat font-semibold text-white text-xl md:text-2xl">
                {t("pxm.transportTitle")}
              </h3>
              <h4 className="font-montserrat font-semibold text-white text-lg md:text-xl">
                {t("pxm.fromAirport")}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <img
                    src={taxi}
                    alt="Taxi"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                  <span className="font-montserrat text-white text-base md:text-lg">
                    {t("pxm.airportOption1")}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <img
                    src={taxi}
                    alt="Taxi"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                  <span className="font-montserrat text-white text-base md:text-lg">
                    {t("pxm.airportOption2")}
                  </span>
                </div>
              </div>
            </div>

            {/* Transporte desde ADO */}
            <div className="space-y-2 md:space-y-3">
              <h4 className="font-montserrat font-semibold text-white text-lg md:text-xl">
                {t("pxm.fromAdo")}
              </h4>
              <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                <img
                  src={taxi}
                  alt="Taxi"
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
                <span className="font-montserrat text-white text-base md:text-lg">
                  {t("pxm.adoOption1")}
                </span>
              </div>
            </div>

            {/* Dirección */}
            <div className="space-y-2 md:space-y-3">
              <p className="font-montserrat text-white text-sm md:text-base lg:text-lg leading-relaxed">
                C/ Huayacán, esquina Nogales, S/N. Colonia Los Tamarindos.
                70934, Puerto Escondido, Oaxaca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
