import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import fondovibra from "../../assets/fondovibra.jpg";
import vibra from "../../assets/svg/vibra.svg";
import foto1 from "../../assets/vibra/1.jpg";
import foto2 from "../../assets/vibra/2.jpg";
import foto3 from "../../assets/vibra/3.jpg";
import foto4 from "../../assets/vibra/4.jpg";
import foto5 from "../../assets/vibra/5.jpg";
import foto6 from "../../assets/vibra/6.jpg";

export default function Prueba() {
  // Arrays de fotos para cada carrusel (excluyendo foto2)
  const carousel1 = [foto1, foto3, foto4, foto5, foto6];
  const carousel2 = [foto2,foto3, foto4, foto5]; // Solo foto2 ya que es diferente
  const carousel3 = [foto3, foto1, foto4, foto5, foto6];
  const carousel4 = [foto4, foto1, foto3, foto5, foto6];
  const carousel5 = [foto5, foto1, foto3, foto4, foto6];
  const carousel6 = [foto6, foto1, foto3, foto4, foto5];

  return (
    <section className="relative w-full">
      {/* Fondo que crece con el contenido */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondovibra}
          alt="Fondo Vibra"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 pt-8 pb-16">
        <img src={vibra} alt="Vibra" className="w-1/4 mx-auto mb-12" />

        {/* 📱 CARRUSEL SOLO PARA MÓVIL */}
        <div className="md:hidden w-full px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {[foto1, foto2, foto3, foto4, foto5, foto6].map((foto, i) => (
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
          {/* === FILA 1 === */}
          <div className="absolute top-0 left-0 w-[658px] h-[393px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
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

          <div className="absolute top-0 right-0 w-[412px] h-[624px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
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
          <div className="absolute top-[413px] left-0 w-[658px] h-[487px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
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

          <div className="absolute top-[633px] right-0 w-[660px] h-[512px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
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

          {/* === FILA 3 === */}
          <div className="absolute top-[910px] left-0 w-[413px] h-[508px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3400, disableOnInteraction: false }}
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

          <div className="absolute top-[1155px] right-0 w-[660px] h-[263px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3600, disableOnInteraction: false }}
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
  );
}
