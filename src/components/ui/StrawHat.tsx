import fondo from "../../assets/fondostrawhat.jpg";
import straw1 from "../../assets/straw1.jpg";
import { useTranslation } from "react-i18next";

export default function StrawHat() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full text-white min-h-screen">
      {/* Imagen de fondo */}
      <img
        src={fondo}
        alt="Fondo Straw Hat"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenedor de todo el contenido */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 space-y-16 max-w-7xl mx-auto">
        {/* Textos principales */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-[#D6FF57] text-3xl md:text-5xl font-lostar">
            {t("strawHat.title")}
          </h1>

          <h4 className="text-lg md:text-2xl text-[#E8F7BA]">
            <span className="font-bold font-agrandir">
              {t("strawHat.subtitle1")}
            </span>{" "}
            <span className="fon">{t("strawHat.subtitle2")}</span>
          </h4>

          <h1 className="text-4xl md:text-6xl font-bold font-agrandir">
            {t("strawHat.memories")}
          </h1>

          <div className="text-sm md:text-base uppercase tracking-widest text-[#D6FF57]">
            <span className="font-montserrat">{t("strawHat.since1")}</span>{" "}
            <span className="font-montserrat font-bold">{t("strawHat.since2")}</span>
          </div>
        </div>

        {/* Sección de descripción + imagen */}
        <div className="grid md:grid-cols-2 gap-2 w-2/3 ">
          <div className="leading-relaxed text-justify text-white font-montserrat">
            {t("strawHat.description")}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={straw1}
              alt="Straw Hat Hostel"
              className="rounded-lg shadow-lg w-full h-full md:w-4/5 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
