import fb from "../../assets/svg/fb.svg";
import insta from "../../assets/svg/insta.svg";
import tiktok from "../../assets/svg/tiktok.svg";
import logopara from "../../assets/logoparabellum.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-[#1C1C1C] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-white text-center text-2xl sm:text-3xl md:text-4xl py-3 font-agrandir font-black">
            {t("footer.findus")}
          </div>
          <div className="flex justify-center py-3 space-x-4 sm:space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100092259690805"
              className="transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
              />
            </a>
            <a
              href="https://www.instagram.com/strawhathostels?igsh=MXN1OGl0MGJ3Z3hqNw%3D%3D&utm_source=qr"
              className="transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
              />
            </a>
            <a
              href="https://www.tiktok.com/@strawhathostels?_t=ZS-90wIkTwyKsD&_r=1"
              className="transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiktok}
                alt="TikTok"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
              />
            </a>
          </div>
          <div className="text-center text-white space-y-2 mt-4">
            <div className="font-montserrat">
              <a
                href="https://maps.app.goo.gl/SEUpfE1QhBuUMbP38"
                className="hover:text-gray-300 transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                C/ Huayacán, esquina Nogales, S/N. Colonia Los Tamarindos.
                70934, Puerto Escondido, Oaxaca.
              </a>
            </div>
            <a
              href="tel:+529842044034"
              className="text-sm sm:text-base font-montserrat hover:text-[#D6FF57] transition-colors"
            >
              +52 984 204 4034
            </a>
          </div>
        </div>

        {/* Contenedor del logo que ocupa todo el ancho */}
        <div className="bg-[#262614] w-full py-4">
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/parabellumcreativa.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logopara}
                alt="Logo"
                className="w-64 h-8 sm:w-72 sm:h-9 md:w-80 md:h-10 lg:w-[300px] lg:h-[35px]"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
