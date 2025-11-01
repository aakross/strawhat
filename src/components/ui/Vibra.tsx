import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import fondovibra from "../../assets/fondovibra.jpg";
import vibra from "../../assets/svg/vibra.svg";
import foto1 from "../../assets/vibra/1.jpg";
import foto2 from "../../assets/vibra/2.jpg";
import foto3 from "../../assets/vibra/3.jpg";
import foto4 from "../../assets/vibra/4.jpg";
import foto5 from "../../assets/vibra/5.jpg";
import foto6 from "../../assets/vibra/6.jpg";

export default function Vibra() {
  // Array de arrays - cada subarray contiene las fotos para cada carrusel
  const carousels = [
    [foto1, foto2, foto3], // Fotos para el primer carrusel
    [foto4, foto5, foto6], // Fotos para el segundo carrusel
    [foto1, foto2, foto3], // Fotos para el tercer carrusel
    [foto4, foto5, foto6], // Fotos para el cuarto carrusel
    [foto1, foto2, foto3], // Fotos para el quinto carrusel
    [foto4, foto5, foto6], // Fotos para el sexto carrusel
  ];

  return (
    <section className="relative w-full h-1/2">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src={fondovibra}
          alt="Fondo Vibra"
          className="w-full h-full md:h-3/4 object-cover"
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative  h-[50%] z-10 flex flex-col items-center px-6 pt-16 space-y-16 max-w-7xl mx-auto">
        <img src={vibra} alt="" className="w-2/3 md:w-1/4" />

        {/* 📱 Carrusel solo en móvil */}
        <div className="md:hidden w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500 }}
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

        {/* 💻 Collage con carruseles individuales solo en desktop */}
        <div className="hidden md:block w-2/3 relative">
          <div className="grid grid-cols-12 gap-3 relative">
            {/* Carrusel 1 - posición original de foto1 */}
            <div className="col-span-7 h-2/3">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="h-full"
              >
                {carousels[0].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img src={foto} alt={`Carrusel 1 - Foto ${index + 1}`} className="h-full"/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 2 - posición original de foto2 */}
            <div className="col-span-5 h-full">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 350 }}
                className="h-4/5"
              >
                {carousels[1].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 2 - Foto ${index + 1}`}
                      className="h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 3 - posición original de foto3 */}
            <div className="col-span-7 -translate-y-52">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 320 }}
                className="h-1/2"
              >
                {carousels[2].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 3 - Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 4 - posición original de foto4 */}
            <div className="col-span-4 absolute top-[512px] w-[405px] h-[400px] right-0">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 380 }}
                className="h-full"
              >
                {carousels[3].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 4 - Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 5 - posición original de foto5 */}
            <div className="col-span-6 -translate-y-[565px] h-[403px]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 340 }}
                className="h-full"
              >
                {carousels[4].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 5 - Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 6 - posición original de foto6 */}
            <div className="col-span-6 top-[925px] right-0 w-[405px] h-[280px] absolute">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 360 }}
                className="h-full"
              >
                {carousels[5].map((foto, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={foto}
                      alt={`Carrusel 6 - Foto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
