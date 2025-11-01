import { useTranslation } from "react-i18next";
import voluntario from "../../assets/voluntariado.png";
import buscamos from "../../assets/svg/buscamos.svg";

export default function Volutariado() {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-[#232323] grid justify-center w-full py-3 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex justify-center md:justify-end">
            <img src={voluntario} alt="" className="w-2/3 md:w-1/2" />
          </div>
          <div className="w-full md:w-2/3 px-2 lg:px-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="font-montserrat font-semibold pt-4 mb-5 text-xl lg:text-2xl text-center lg:text-left">
              {t("volunteers.description")}
            </div>
            <div className="my-3 font-montserrat font-semibold  text-base lg:text-lg text-center lg:text-left">
              {t("volunteers.description2")}
            </div>
            <div className="my-3 font-montserrat font-semibold  text-base lg:text-lg text-center lg:text-left">
              {t("volunteers.qualities")}
            </div>
            <div className="flex justify-center lg:justify-start font-montserrat font-semibold ">
              <img src={buscamos} alt="" className="w-50 my-2" />
            </div>
            <div className="mb-4 space-y-2 text-sm lg:text-base">
              <div className="text-center lg:text-left">
                • {t("volunteers.requirements.item1")}
              </div>
              <div className="text-center lg:text-left">
                • {t("volunteers.requirements.item2")}
              </div>
              <div className="text-center lg:text-left">
                • {t("volunteers.requirements.item3")}
              </div>
              <div className="text-center lg:text-left">
                • {t("volunteers.requirements.item4")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto px-4 mt-8 lg:mt-10">
          <div className="bg-[#D6FF57] w-1/3 lg:w-1/4 h-px mb-4 lg:mb-0"></div>
          <div className="text-[#D6FF57] mx-4 text-lg lg:text-xl font-montserrat font-semibold  text-center">
            {t("volunteers.howToApply.title")}
          </div>
          <div className="bg-[#D6FF57] w-1/3 lg:w-1/4 h-px mt-4 lg:mt-0"></div>
        </div>

        <div className="w-full text-center max-w-2xl mx-auto px-4 mt-6 lg:mt-8 font-montserrat font-semibold ">
          <div className="text-base lg:text-lg mb-2 ">
            {t("volunteers.howToApply.step1")}
          </div>
          <div className="text-base lg:text-lg mb-4">
            {t("volunteers.howToApply.step2")}
          </div>
          <div className="text-sm lg:text-base mb-2">
            {t("volunteers.contact.to")}
          </div>
          <div>
            <a
              href={`mailto:${t(
                "volunteers.contact.email"
              )}?subject=Solicitud de Voluntariado&body=Hola, me interesa participar en el programa de voluntariado. Adjunto mi CV y estoy disponible desde [fecha inicio] hasta [fecha fin].`}
            >
              <span className="border border-[#D6FF57] rounded-full px-4 py-2 text-sm lg:text-base inline-block hover:bg-[#D6FF57] hover:text-[#232323] transition-colors duration-300">
                {t("volunteers.contact.email")}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
