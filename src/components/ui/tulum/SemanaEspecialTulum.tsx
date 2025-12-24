import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import fondo from "../../../assets/fondostrawhat.jpg";
import flechaizq from "../../../assets/pxm/svg/flecha_izquierda.svg";
import flechader from "../../../assets/pxm/svg/flecha_derecha.svg";

import semesp1 from "../../../assets/tulum/semesp1.jpeg";
import semesp2 from "../../../assets/tulum/semesp2.jpeg";
import semesp3 from "../../../assets/tulum/semesp3.jpeg";
import semesp4 from "../../../assets/tulum/semesp4.jpeg";
import semesp5 from "../../../assets/tulum/semesp5.jpeg";
import semesp6 from "../../../assets/tulum/semesp6.jpeg";
import semesp7 from "../../../assets/tulum/semesp7.jpeg";
import semesp8 from "../../../assets/tulum/semesp8.jpeg";

import { useTranslation } from "react-i18next";

export default function SemanaEspecialTulum() {
  const { t } = useTranslation();
  // Arreglo de días de la semana
  const weekDays = [
    { id: 1, image: semesp1, day: "LUNES" },
    { id: 2, image: semesp2, day: "MARTES" },
    { id: 3, image: semesp3, day: "MIÉRCOLES" },
    { id: 4, image: semesp4, day: "JUEVES" },
    { id: 5, image: semesp5, day: "VIERNES" },
    { id: 6, image: semesp6, day: "SÁBADO" },
    { id: 7, image: semesp7, day: "SÁBADO" },
    { id: 8, image: semesp8, day: "SÁBADO" },
  ];

  // Dividir en grupos de 2 para el carrusel
  const groupedDays = [];
  for (let i = 0; i < weekDays.length; i += 2) {
    groupedDays.push(weekDays.slice(i, i + 2));
  }

  return (
    <>
      <section className="relative w-full min-h-screen pb-20">
        <img
          src={fondo}
          alt="Fondo Straw Hat"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 container mx-auto px-4">
          {/* Título */}
          <div className="flex justify-center items-start pt-12 md:pt-20 lg:pt-28 mb-8 md:mb-12 lg:mb-16">
            {/* <img
              src={sem_spec}
              alt="Tenemos una semana especial"
              className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 object-contain"
            /> */}
            <div className="drop-shadow-lg text-center">
              <div className="text-white font-agrandir font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                {t("pxm.amenity1")}
              </div>
              <div className="text-[#D6FF57]  font-agrandir font-black text-3xl md:text-4xl lg:text-[100px] mb-4">
                {/* {t("pxm.amenity2")} */} TULUM
              </div>
              <div className="text-white  font-agrandir font-black text-3xl md:text-xl lg:text-3xl">
                {t("pxm.amenity3")}
              </div>
            </div>
          </div>

          {/* Carrusel de semana */}
          <div className="relative max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-semana",
                prevEl: ".swiper-button-prev-semana",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
              className="w-full"
            >
              {groupedDays.map((dayGroup, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
                    {dayGroup.map((day) => (
                      <div key={day.id} className="relative group">
                        <img
                          src={day.image}
                          alt={day.day}
                          className="w-full h-90 sm:h-64 md:h-72 lg:h-80 xl:h-[500px] rounded-lg shadow-xl"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flechas de navegación personalizadas */}
            <div className="hidden md:block">
              <div className="swiper-button-prev-semana absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-20 w-10 h-10 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 transition-transform">
                <img
                  src={flechaizq}
                  alt="Anterior"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="swiper-button-next-semana absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-20 w-10 h-10 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 transition-transform">
                <img
                  src={flechader}
                  alt="Siguiente"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Textos al final - DENTRO del contenedor z-10 */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20 hidden">
            <div className="drop-shadow-lg">
              <div className="text-white font-agrandir font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                {t("pxm.amenity1")}
              </div>
              <div className="text-[#D6FF57]  font-agrandir font-black text-3xl md:text-4xl lg:text-5xl mb-4">
                {t("pxm.amenity2")}
              </div>
              <div className="text-white  font-agrandir font-black text-3xl md:text-xl lg:text-3xl">
                {t("pxm.amenity3")}
              </div>
            </div>

            {/* NUEVO CARRUSEL DE UNA SOLA IMAGEN */}
            {/* <div className="relative max-w-5xl mx-auto mt-12 md:mt-16 lg:mt-20">
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-tour",
                  prevEl: ".swiper-button-prev-tour",
                }}
                className="w-full"
              > */}
            {/* Misma imagen repetida 3 veces o las que necesites */}
            {/* <SwiperSlide>
                  <div className="flex justify-center">
                    <img
                      src={tour1}
                      alt="Tour 1"
                      className="w-full  h-full rounded-lg shadow-xl"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <img
                      src={tour1}
                      alt="Tour 2"
                      className="w-full  h-full rounded-lg shadow-xl"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <img
                      src={tour1}
                      alt="Tour 3"
                      className="w-full  h-full rounded-lg shadow-xl"
                    />
                  </div>
                </SwiperSlide>
              </Swiper> */}

            {/* Flechas de navegación para el carrusel de tour */}
            {/* <div className="hidden md:block swiper-button-prev-tour absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-12 lg:-translate-x-16 z-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 transition-transform">
                <img
                  src={flechaizq}
                  alt="Anterior"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden md:block swiper-button-next-tour absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12 lg:translate-x-16 z-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer hover:scale-110 transition-transform">
                <img
                  src={flechader}
                  alt="Siguiente"
                  className="w-full h-full object-contain"
                />
              </div>
            </div> */}
          </div>

          {/* SVG DENTRO del contenedor z-10 */}
          {/* <div className="flex justify-center mt-12 md:mt-16 lg:mt-1 pb-12 md:pb-0">
            <img
              src={tienes}
              alt="¿Tienes alguna duda?"
              className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/5 object-contain"
            />
          </div> */}
        </div>{" "}
        {/* ← Este cierra el contenedor z-10 */}
      </section>
    </>
  );
}
