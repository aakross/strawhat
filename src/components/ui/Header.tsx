import { useState } from "react";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type HeaderProps = {
  onNavigate: (section: string) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [openDestinos, setOpenDestinos] = useState(false);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="flex w-full bg-[#141414] fixed top-0 z-50 px-4 md:px-10 py-3 font-agrandir ">
      {/* Contenedor principal: separa logo y hamburguesa en móvil */}
      <div className="flex w-full items-center justify-between md:justify-center">
        {/* LOGO */}
        <div className="shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="straw hat hostels"
              className="w-[130px] h-auto"
            />
          </Link>
        </div>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex text-white items-center gap-5 ml-20 cursor-pointer">
          {/* Elementos de navegación con efectos hover */}
          <h1
            onClick={() => onNavigate("strawhat")}
            className="relative group font-agrandir font-black transition-all duration-300 hover:text-yellow-400"
          >
            {t("strawhat")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </h1>

          <h1
            onClick={() => onNavigate("vibra")}
            className="relative group font-agrandir font-black transition-all duration-300 hover:text-yellow-400"
          >
            {t("vibe")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </h1>

          <h1
            onClick={() => onNavigate("voluntariado")}
            className="relative group font-agrandir font-black transition-all duration-300 hover:text-yellow-400"
          >
            {t("volunteer")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </h1>

          <h1
            onClick={() => onNavigate("contacto")}
            className="relative group font-agrandir font-black transition-all duration-300 hover:text-yellow-400"
          >
            {t("contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </h1>

          {/* Book Now con efecto diferente */}
          {/* <a
            href="https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn"
            target="_blank"
            className="group"
          >
            <h1 className="text-yellow-400 font-agrandir font-semibold relative overflow-hidden p-2 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black border border-yellow-400">
              {t("bookNow")}
              <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 -z-10"></span>
            </h1>
          </a> */}
          <div className="relative">
            <h1
              onClick={() => setOpenDestinos(!openDestinos)}
              className="text-yellow-400 font-agrandir font-semibold relative overflow-hidden p-2 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black border border-yellow-400 flex items-center gap-2"
            >
              {/* Flecha a la izquierda */}
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDestinos ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>

              {t("bookNow")}

              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </h1>

            {/* DROPDOWN */}
            {openDestinos && (
              <div className="absolute top-10 left-0 bg-[#141414] border border-yellow-400 rounded-lg py-2 shadow-xl flex flex-col z-[9999] w-32">
                <a
                  href="https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn"
                  target="_blank"
                  className="px-4 py-2 hover:bg-yellow-400 hover:text-black transition-all"
                >
                  PXM
                </a>
                <a
                  href="https://hotels.cloudbeds.com/es/reservation/Y3kEMm?currency=mxn"
                  target="_blank"
                  className="px-4 py-2 hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Tulum
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="px-4 py-2 hover:bg-yellow-400 hover:text-black transition-all"
                >
                  CDMX
                </a>
              </div>
            )}
          </div>

          {/* Selector de idioma con efectos */}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => changeLanguage("es")}
              className={`px-3 py-1 rounded-lg transition-all duration-300 ${
                i18n.language === "es"
                  ? "bg-yellow-400 text-black font-semibold shadow-lg"
                  : "text-white hover:text-yellow-400 hover:bg-yellow-400 hover:bg-opacity-20 border border-transparent hover:border-yellow-400"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-lg transition-all duration-300 ${
                i18n.language === "en"
                  ? "bg-yellow-400 text-black font-semibold shadow-lg"
                  : "text-white hover:text-yellow-400 hover:bg-yellow-400 hover:bg-opacity-20 border border-transparent hover:border-yellow-400"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* BOTÓN HAMBURGUESA (móvil) */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-[#141414] text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <h1 onClick={() => onNavigate("strawhat")}>{t("strawhat")}</h1>
          <h1 onClick={() => onNavigate("vibra")}>{t("vibe")}</h1>
          <h1 onClick={() => onNavigate("voluntariado")}>{t("volunteer")}</h1>
          <h1 onClick={() => onNavigate("contacto")}>{t("contact")}</h1>
          <h1 className="text-yellow-400 font-semibold">{t("bookNow")}</h1>

          {/* Selector de idioma móvil */}
          <div className="flex gap-4">
            <button
              onClick={() => changeLanguage("es")}
              className={`px-3 py-1 rounded ${
                i18n.language === "es"
                  ? "bg-yellow-400 text-black font-semibold"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded ${
                i18n.language === "en"
                  ? "bg-yellow-400 text-black font-semibold"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
