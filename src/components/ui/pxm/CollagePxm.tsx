import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import fondovibra from "../../../assets/fondovibra.jpg";
import { useTranslation } from "react-i18next";
import col1 from "../../../assets/pxm/col1.webp";
import col2 from "../../../assets/pxm/col2.webp";
import col3 from "../../../assets/pxm/col3.webp";
import col4 from "../../../assets/pxm/col4.webp";
import col5 from "../../../assets/pxm/col5.jpg";
import col6 from "../../../assets/pxm/col6.png";
import col7 from "../../../assets/pxm/col7.png";
import col8 from "../../../assets/pxm/col8.png";
import col9 from "../../../assets/pxm/col9.png";
import col10 from "../../../assets/pxm/col10.png";
import col11 from "../../../assets/pxm/col11.png";
import col12 from "../../../assets/pxm/col12.png";

export default function CollagePxm() {
  const { t } = useTranslation();
 const carousel1 = [col1, col2, col3, col4];
  const carousel2 = [col5, col6, col7, col8];
  const carousel3 = [col9, col10, col11, col12];
  const carousel4 = [col2, col5, col8, col11];
  const carousel5 = [col3, col6, col9, col12];
  const carousel6 = [col4, col7, col10];
  return (
    <>
      <section className="relative w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={fondovibra}
            alt="Fondo Vibra"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 pt-8 pb-16">
          <div className="w-full text-center mx-auto mb-12 font-agrandir text-3xl md:text-[40pt] font-black">
            {t("pxm.amenitiesTitle")}
          </div>
          {/* 📱 CARRUSEL SOLO PARA MÓVIL */}
          <div className="md:hidden w-full px-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 7500, disableOnInteraction: false }}
            >
              {[col1, col2, col3, col4, col5, col3].map((foto, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={foto}
                    alt={`Foto ${i + 1}`}
                    className="rounded-lg shadow-lg object-cover w-full h-[300px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* 🖥️ COLLAGE SOLO PARA DESKTOP */}
          <div
            className="hidden md:block mx-auto w-[1080px] relative"
            style={{ height: "1500px" }}
          >
            <div className="absolute top-0 left-0 w-[405px] h-[402px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel1.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 1 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-0 right-0 w-[665px] h-[500px] z-20">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7500, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel2.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 2 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* === FILA 2 === */}
            <div className="absolute top-[413px] left-0 w-[550px] h-[300px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7200, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel3.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 3 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-[510px] right-0 w-[518px] h-[512px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7800, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel4.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 4 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-[725px] left-0 w-[550px] h-[297px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7400, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel5.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 5 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-[1030px] right-0 w-full h-[263px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7600, disableOnInteraction: false }}
                className="h-full"
              >
                {carousel6.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 6 - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
