import { useTranslation } from "react-i18next";
import fondoubicacion from "../../../assets/tulum/fondoubicacion.jpg";
import { useState } from "react";

export default function UbicacionTulum() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.042501208274!2d-87.46598102152349!3d20.21025539182643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd78e140c02ff%3A0x499255699beec09!2sStraw%20Hat%20Tulum!5e0!3m2!1ses!2smx!4v1766456308618!5m2!1ses!2smx"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          {/* Información - ocupa 4 columnas en desktop, pegado al mapa */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6 lg:pl-4 text-center lg:text-left">
            {/* Transporte desde Aeropuerto */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-montserrat  text-white text-xl md:text-2xl">
                {t("tulum.location.hotelAddress")}
                <br />
                {t("tulum.location.barAddress")}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
                  <span className="font-montserrat text-white text-base md:text-lg">
                    {t("tulum.location.fromTulumAirport.title")}{" "}
                    {t("tulum.location.fromTulumAirport.description")}
                  </span>
                </div>
              </div>
              <div
                className="text-[#D6FF57] hover:cursor-pointer hover:underline"
                onClick={openModal}
              >
                {t("tulum.location.info")}
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Tu modal centrado */}
            <div className="relative bg-black opacity-80 p-10 h-[70vh] w-[91vw] max-w-[1260px] rounded-4xl flex overflow-y-auto">
              {/* Botón X en esquina superior derecha */}
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-[#D6FF57] text-3xl font-light bg-black rounded-full hover:bg-gray-800 transition-all"
                aria-label="Cerrar"
              >
                ×
              </button>

              {/* Contenedor del contenido */}
              <div className=" w-full h-full">
                {/* Título pegado a la izquierda */}
                <div className="w-full  flex items-start">
                  <h2 className="text-[#D6FF57] font-agrandir font-bold text-2xl md:text-xl sticky top-0 mb-3">
                    {t("tulum.location.transportTips.title")}
                  </h2>
                </div>

                {/* Texto justificado que ocupa el resto */}
                <div className="w-full pl-6 overflow-y-auto">
                  <div className="text-white font-montserrat text-justify leading-relaxed space-y-4 pr-2">
                    {/* Aquí va tu contenido de texto */}
                    <p>
                      {t("tulum.location.fromTulumAirport.title")}{" "}
                      {t("tulum.location.fromTulumAirport.description")}
                    </p>
                    <p>
                      {t("tulum.location.transportTips.cancunAirport.title")}{" "}
                      {t(
                        "tulum.location.transportTips.cancunAirport.description"
                      )}
                      {t("tulum.location.transportTips.cancunAirport.note")}
                    </p>
                    <p>
                      {t("tulum.location.transportTips.transportOptions.title")}{" "}
                      <br />
                      {t("tulum.location.transportTips.transportOptions.ado")}
                      <br />
                      <br />
                      {t(
                        "tulum.location.transportTips.transportOptions.collective"
                      )}
                      <br />
                    </p>
                    <p>
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromCancun.title"
                      )}
                      <br />
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromCancun.description"
                      )}
                      <br />
                      <br />
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromPlaya.title"
                      )}
                      <br />
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromPlaya.description"
                      )}
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromBacalar.title"
                      )}
                      <br />
                      <br />
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromBacalar.description"
                      )}
                      <br />
                      <br />
                       {t(
                        "tulum.location.transportTips.collectiveRoutes.fromChiquila.title"
                      )}
                      
                      <br />
                      {t(
                        "tulum.location.transportTips.collectiveRoutes.fromChiquila.description"
                      )}
                    </p>
                    {/* Agrega más párrafos según necesites */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
