import { useTranslation } from "react-i18next";
import salon1 from "../../../assets/tulum/salon1.jpg";
import salon2 from "../../../assets/tulum/salon2.jpg";
import salon3 from "../../../assets/tulum/salon3.jpg";
import salon4 from "../../../assets/tulum/salon4.jpg";
// import salon5 from "../../../assets/tulum/salon5.jpg";
// import salon6 from "../../../assets/tulum/salon6.jpg";
// import salon7 from "../../../assets/tulum/salon7.jpg";
// import salon8 from "../../../assets/tulum/salon8.jpg";
// import salon9 from "../../../assets/tulum/salon9.jpg";
// import salon10 from "../../../assets/tulum/salon10.jpg";
// import salon11 from "../../../assets/tulum/salon11.jpg";
// import salon12 from "../../../assets/tulum/salon12.jpg";
// import salon13 from "../../../assets/tulum/salon13.jpg";
import logo from "../../../assets/tulum/salonsombrerologo.svg";

export default function SalonSombrero() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0B161A] min-h-screen">
      <div className="w-full grid grid-cols-3 gap-4 place-items-center p-52">
        {/* Columna izquierda - 2 imágenes apiladas */}
        <div className="flex flex-col gap-4 h-full justify-center items-center">
          <div className="w-full">
            <img
              src={salon1}
              alt=""
              className="w-[454px] h-80 object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <img
              src={salon3}
              alt=""
              className="w-[454px] h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Columna central - que sobresalga arriba y abajo */}
        <div className="row-span-2 bg-[#151E23] h-[calc(100%+4rem)] w-full flex flex-col justify-between items-center p-8 rounded-lg -translate-y-8">
          {/* Logo en la parte superior */}
          <div className="flex justify-center items-start ">
            <img
              src={logo}
              alt="Salón Sombrero Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Texto en la parte inferior */}
          <div className="flex flex-col justify-end items-center text-white text-center space-y-4 ">
            <p className="text-lg">{t("salonSombrero.description")}</p>
            <p className="text-base">{t("salonSombrero.experience")}</p>

            {/* Horarios y precio */}
            <div className="space-y-2 mt-2">
              <p className="">{t("salonSombrero.hours.title")}</p>
              <p>{t("salonSombrero.hours.time")}</p>

              <p className="font-bold mt-2">{t("salonSombrero.price.title")}</p>
              <p className="font-bold">{t("salonSombrero.price.range")}</p>
            </div>

            {/* Tagline */}
            <p className=" mt-2">{t("salonSombrero.tagline")}</p>
            <p className="text-xl font-bold mt-2 text-[#EBFC0D]">
              {t("salonSombrero.simple")}
            </p>
          </div>
        </div>

        {/* Columna derecha - 2 imágenes apiladas */}
        <div className="flex flex-col gap-4 h-full justify-center items-center">
          <div className="w-full">
            <img
              src={salon2}
              alt=""
              className="w-[454px] h-80 object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <img
              src={salon4}
              alt=""
              className="w-[454px] h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
