import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Importar todas las imágenes
import salon1 from "../../../assets/tulum/salon1.jpg";
import salon2 from "../../../assets/tulum/salon2.jpg";
import salon3 from "../../../assets/tulum/salon3.jpg";
import salon4 from "../../../assets/tulum/salon4.jpg";
import salon5 from "../../../assets/tulum/salon5.jpg";
import salon6 from "../../../assets/tulum/salon6.jpg";
import salon7 from "../../../assets/tulum/salon7.jpg";
import salon8 from "../../../assets/tulum/salon8.jpg";
import salon9 from "../../../assets/tulum/salon9.jpg";
import salon10 from "../../../assets/tulum/salon10.jpg";
import salon11 from "../../../assets/tulum/salon11.jpg";
import salon12 from "../../../assets/tulum/salon12.jpg";
import salon13 from "../../../assets/tulum/salon13.jpg";
import logo from "../../../assets/tulum/salonsombrerologo.svg";

export default function SalonSombrero() {
  const { t } = useTranslation();

  // Array de imágenes para el slider izquierdo
  const leftImages = [salon1, salon3, salon5, salon7, salon9, salon11, salon13];

  // Array de imágenes para el slider derecho
  const rightImages = [salon2, salon4, salon6, salon8, salon10, salon12];

  return (
    <div className="bg-[#0B161A] min-h-screen">
      {/* Versión Desktop (se mantiene igual) */}
      <div className="hidden md:block">
        <div className="w-full grid grid-cols-3 gap-4 place-items-center p-12 lg:p-24 xl:p-52">
          {/* Columna izquierda - Desktop */}
          <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
            <div className="w-full h-64 lg:h-80">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {leftImages
                  .filter((_, index) => index % 2 === 0)
                  .map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón Sombrero ${index * 4 + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="w-full h-64 lg:h-80">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {leftImages
                  .filter((_, index) => index % 2 === 1)
                  .map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón Sombrero ${index * 4 + 3}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>

          {/* Columna central - Desktop */}
          <div className="row-span-2 bg-[#151E23] h-[calc(100%+4rem)] w-full flex flex-col justify-between items-center p-4 lg:p-8 rounded-lg -translate-y-8">
            <div className="flex justify-center items-start w-full px-4">
              <img
                src={logo}
                alt="Salón Sombrero Logo"
                className="w-full max-w-xs lg:max-w-none h-auto"
              />
            </div>

            <div className="flex flex-col justify-end items-center text-white text-center space-y-3 lg:space-y-4 px-4">
              <p className="text-base lg:text-lg">
                {t("salonSombrero.description")}
              </p>
              <p className="text-sm lg:text-base">
                {t("salonSombrero.experience")}
              </p>

              <div className="space-y-1 lg:space-y-2 mt-1 lg:mt-2">
                <p className="text-sm lg:text-base">
                  {t("salonSombrero.hours.title")}
                </p>
                <p className="text-sm lg:text-base">
                  {t("salonSombrero.hours.time")}
                </p>

                <p className="font-bold mt-1 lg:mt-2 text-sm lg:text-base">
                  {t("salonSombrero.price.title")}
                </p>
                <p className="font-bold text-sm lg:text-base">
                  {t("salonSombrero.price.range")}
                </p>
              </div>

              <p className="text-sm lg:text-base mt-1 lg:mt-2">
                {t("salonSombrero.tagline")}
              </p>
              <p className="text-lg lg:text-xl font-bold mt-1 lg:mt-2 text-[#EBFC0D]">
                {t("salonSombrero.simple")}
              </p>
            </div>
          </div>

          {/* Columna derecha - Desktop */}
          <div className="flex flex-col gap-4 h-full justify-center items-center w-full">
            <div className="w-full h-64 lg:h-80">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {rightImages
                  .filter((_, index) => index % 2 === 0)
                  .map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón Sombrero ${index * 4 + 2}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="w-full h-64 lg:h-80">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3700,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {rightImages
                  .filter((_, index) => index % 2 === 1)
                  .map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón Sombrero ${index * 4 + 4}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Versión Móvil */}
      <div className="md:hidden">
        <div className="flex flex-col items-center justify-center px-4 py-8">
          {/* Logo en móvil */}
          <div className="w-full max-w-xs mb-8">
            <img
              src={logo}
              alt="Salón Sombrero Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Slider principal en móvil - Horizontal */}
          <div className="w-full max-w-2xl mb-8">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay]}
              className="w-full"
            >
              {[...leftImages, ...rightImages].map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="h-64 md:h-80">
                    <img
                      src={image}
                      alt={`Salón Sombrero ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Contenido de texto en móvil */}
          <div className="bg-[#151E23] w-full max-w-2xl rounded-lg p-6">
            <div className="flex flex-col items-center text-white text-center space-y-4">
              <p className="text-lg">{t("salonSombrero.description")}</p>
              <p className="text-base">{t("salonSombrero.experience")}</p>

              <div className="space-y-2 mt-2 w-full">
                <div>
                  <p className="font-medium">
                    {t("salonSombrero.hours.title")}
                  </p>
                  <p className="text-sm">{t("salonSombrero.hours.time")}</p>
                </div>

                <div>
                  <p className="font-bold mt-2">
                    {t("salonSombrero.price.title")}
                  </p>
                  <p className="font-bold">{t("salonSombrero.price.range")}</p>
                </div>
              </div>

              <p className="mt-4">{t("salonSombrero.tagline")}</p>
              <p className="text-xl font-bold mt-2 text-[#EBFC0D]">
                {t("salonSombrero.simple")}
              </p>
            </div>
          </div>

          {/* Mini sliders en móvil (opcional, debajo del contenido) */}
          <div className="w-full max-w-2xl mt-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Mini slider izquierdo */}
              <div className="h-48">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full h-full"
                >
                  {leftImages.slice(0, 3).map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Mini slider derecho */}
              <div className="h-48">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full h-full"
                >
                  {rightImages.slice(0, 3).map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Salón ${index + 4}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
