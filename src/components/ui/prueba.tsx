import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <section className="relative w-full">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src={fondovibra}
          alt="Fondo Vibra"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 space-y-16 max-w-7xl mx-auto">
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

        {/* 💻 Collage solo en desktop */}
        <div className="hidden md:block w-2/3 h-full relative">
          <div className="grid grid-cols-12 gap-3 relative">
            <div className="col-span-8">
              <img src={foto1} alt="" />
            </div>
            <div className="col-span-4">
              <img src={foto2} alt="" />
            </div>
            <div className="col-span-8 -translate-y-18">
              <img src={foto3} alt="" />
            </div>
            <div className="col-span-4 absolute bottom-[365px] w-[405px] h-[512px] right-0">
              <img src={foto4} alt="" className="h-full" />
            </div>
            <div className="col-span-6 -translate-y-18">
              <img src={foto5} alt="" />
            </div>
            <div className="col-span-6 bottom-18 right-0 w-[405px] h-[280px] absolute">
              <img src={foto6} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
