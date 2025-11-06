import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import fondo from "../../../assets/fondovibra.jpg";
import alo1 from "../../../assets/pxm/alo1.png";
import alo2 from "../../../assets/pxm/alo2.jpg";
import alo3 from "../../../assets/pxm/alo3.png";
import alo4 from "../../../assets/pxm/alo4.jpg";
import reservaalo from "../../../assets/pxm/svg/reservaalo.svg";

// ... tus imports existentes

export default function Alojamiento() {
  const { t } = useTranslation();

  // Datos para cada slide del carrusel
  const accommodationSlides = [
    {
      id: 1,
      image: alo1,
      title: t("pxm.mixed8Title"),
      rate: t("pxm.mixed8Rate"),
      features: [
        t("pxm.mixed8Feature1"),
        t("pxm.mixed8Feature2"),
        t("pxm.mixed8Feature3"),
        t("pxm.mixed8Feature4"),
        t("pxm.mixed8Feature5"),
        t("pxm.mixed8Feature6"),
        t("pxm.mixed8Feature7"),
        t("pxm.mixed8Feature8"),
      ],
      link: "https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn",
    },
    {
      id: 2,
      image: alo2, // Asegúrate de importar alo2
      title: t("pxm.female8Title"),
      rate: t("pxm.female8Rate"),
      features: [
        t("pxm.female8Feature1"),
        t("pxm.female8Feature2"),
        t("pxm.female8Feature3"),
        t("pxm.female8Feature4"),
        t("pxm.female8Feature5"),
        t("pxm.female8Feature6"),
        t("pxm.female8Feature7"),
        t("pxm.female8Feature8"),
      ],
      link: "https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn",
    },
    {
      id: 3,
      image: alo3, // Asegúrate de importar alo2
      title: t("pxm.mixed6Title"),
      rate: t("pxm.mixed6Rate"),
      features: [
        t("pxm.mixed6Feature1"),
        t("pxm.mixed6Feature2"),
        t("pxm.mixed6Feature3"),
        t("pxm.mixed6Feature4"),
        t("pxm.mixed6Feature5"),
        t("pxm.mixed6Feature6"),
        t("pxm.mixed6Feature7"),
        t("pxm.mixed6Feature8"),
        t("pxm.mixed6Feature9"),
        t("pxm.mixed6Feature10"),
      ],
      link: "https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn",
    },
    {
      id: 4,
      image: alo4, // Asegúrate de importar alo2
      title: t("pxm.queenTitle"),
      rate: t("pxm.queenRate"),
      features: [
        t("pxm.queenFeature1"),
        t("pxm.queenFeature2"),
        t("pxm.queenFeature3"),
        t("pxm.queenFeature4"),
        t("pxm.queenFeature5"),
        t("pxm.queenFeature6"),
      ],
      link: "https://hotels.cloudbeds.com/es/reservation/5auK74?currency=mxn",
    },
    // Agrega más slides según necesites
  ];

  return (
    <section className="relative w-full min-h-screen">
      <img
        src={fondo}
        alt="fondo alojamiento Puerto escondido"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Títulos principales */}
        <div className="flex flex-col justify-center text-center mb-8 sm:mb-12 lg:mb-16 drop-shadow-lg">
          <span className="font-agrandir font-semibold text-lg sm:text-xl lg:text-2xl xl:text-[24pt]">
            {t("pxm.roomsTitle")}
          </span>
          <span className="font-agrandir font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[36pt] mt-2 sm:mt-4">
            {t("pxm.roomsSubtitle")}
          </span>
          <span className="font-agrandir font-normal text-base sm:text-lg lg:text-xl xl:text-[23pt] mt-3 sm:mt-4 max-w-4xl mx-auto px-2">
            {t("pxm.roomsDescription")}
          </span>
        </div>

        {/* Subtítulo alojamiento */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="font-agrandir font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[32pt] 2xl:text-[40pt] drop-shadow-lg">
            {t("pxm.accommodationTitle")}
          </span>
        </div>

        {/* CARRUSEL */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {accommodationSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-white grid grid-cols-1 lg:grid-cols-12 shadow-xl rounded-lg overflow-hidden">
                  {/* Imagen */}
                  <div className="lg:col-span-5">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-64 sm:h-80 lg:h-[421px] object-cover"
                    />
                  </div>

                  {/* Detalles */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div className="mb-6 sm:mb-8">
                      <span className="font-montserrat font-black text-xl sm:text-2xl lg:text-3xl block mb-3 sm:mb-4">
                        {slide.title}
                      </span>
                      <span className="font-montserrat font-semibold text-lg sm:text-xl lg:text-2xl  block mb-4 sm:mb-6">
                        {slide.rate}
                      </span>
                      <p className="font-montserrat text-gray-700 leading-relaxed text-sm sm:text-base lg:text-md">
                        {slide.features.join(", ")}
                      </p>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-105 transition-transform duration-300"
                      >
                        <button className="bg-[#141414] font-agrandir text-white rounded-full text-base sm:text-lg hover:bg-[#333] transition cursor-pointer">
                          {/* {t("bookNow")} */}
                          <img src={reservaalo} alt="" className="w-full"/>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas de navegación personalizadas - Solo en desktop */}
          <div className="hidden lg:block">
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-15 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-15 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Paginación - Solo en móvil/tablet */}
          <div className="swiper-pagination-custom mt-6 lg:mt-8 flex justify-center lg:hidden"></div>
        </div>
      </div>
    </section>
  );
}
