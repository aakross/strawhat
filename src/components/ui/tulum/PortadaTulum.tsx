import portada from "../../../assets/tulum/bienvenidotulum.svg";
import fondoportada from "../../../assets/tulum/fondoportada.jpg";
import { useTranslation } from "react-i18next";
import reservabtn from "../../../assets/pxm/svg/reserva.svg";

export default function PortadaTulum() {
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${fondoportada})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo centrado */}
        <img
          src={portada}
          alt="Bienvenido a Tulum"
          className="h-auto max-h-[40vh] w-auto max-w-[90%] object-contain"
        />

        {/* Texto debajo del logo */}
        <div className="font-agrandir text-3xl sm:text-4xl md:text-[30pt] text-white text-center px-40 mb-10">
          {t("tulum.header.description")}
        </div>
        <a
          href="https://hotels.cloudbeds.com/es/reservation/Y3kEMm?currency=mxn"
          target="_blanck"
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={reservabtn}
            alt=""
            className="w-[220px] sm:w-[280px] md:w-[320px]"
          />
        </a>
      </div>
    </div>
  );
}
