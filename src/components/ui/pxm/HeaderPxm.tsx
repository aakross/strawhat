import { useState } from "react";
import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderPxm() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className="flex w-full bg-[#141414] fixed top-0 z-50 px-4 md:px-10 py-3 font-agrandir ">
        {/* Contenedor principal: separa logo y hamburguesa en móvil */}
        <div className="flex w-full items-center justify-between md:justify-center">
          {/* LOGO */}
          <nav className="shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="straw hat hostels"
                className="w-[130px] h-auto"
              />
            </Link>
          </nav>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex text-white items-center gap-5 ml-20">
            <h1>{t("header.accommodation")}</h1>
            <h1>{t("header.activities")}</h1>
            <h1>{t("header.experiences")}</h1>
            <h1>{t("header.volunteer")}</h1>
            <h1>{t("header.contact")}</h1>
            {/* <h1 className="text-yellow-400 font-semibold">{t("bookNow")}</h1> */}

            {/* Selector de idioma */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => changeLanguage("es")}
                className={`px-2 py-1 rounded ${
                  i18n.language === "es"
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-1 rounded ${
                  i18n.language === "en"
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-white hover:text-yellow-400"
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
            <h1>{t("strawhat")}</h1>
            <h1>{t("vibe")}</h1>
            <h1>{t("volunteer")}</h1>
            <h1>{t("contact")}</h1>
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
    </>
  );
}
