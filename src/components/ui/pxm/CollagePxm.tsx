import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import fondovibra from "../../../assets/fondovibra1.webp";
import { useTranslation } from "react-i18next";
import col1 from "../../../assets/pxm/col1.webp";
import col2 from "../../../assets/pxm/col2.webp";
import col3 from "../../../assets/pxm/col3.webp";
import col4 from "../../../assets/pxm/col4.webp";
import col5 from "../../../assets/pxm/col5.webp";
import col6 from "../../../assets/pxm/col6.png";
import col7 from "../../../assets/pxm/col7.png";
import col8 from "../../../assets/pxm/col8.webp";
import col9 from "../../../assets/pxm/col9.png";
import col10 from "../../../assets/pxm/col10.png";
import col11 from "../../../assets/pxm/col11.png";
import col12 from "../../../assets/pxm/col12.webp";
import { useState } from "react";

export default function CollagePxm() {
  const { t } = useTranslation();
  const carousel1 = [col1, col2, col3, col4];
  const carousel2 = [col5, col6, col7, col8];
  const carousel3 = [col9, col10, col11, col12];
  const carousel4 = [col2, col5, col8, col11];
  const carousel5 = [col3, col6, col9, col12];
  const carousel6 = [col4, col7, col10];
  // Estados para el modal
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState<string | null>(null);
  const [carruselActual, setCarruselActual] = useState<string | null>(null);

  // Función para abrir el modal
  const abrirModal = (imagen: string, carrusel: string) => {
    setImagenActual(imagen);
    setCarruselActual(carrusel);
    setModalAbierto(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual(null);
    setCarruselActual(null);
  };

  // Función para navegar entre imágenes del mismo carrusel
  const cambiarImagen = (direccion: "anterior" | "siguiente") => {
    if (!carruselActual || !imagenActual) return;

    const carruseles: { [key: string]: string[] } = {
      movil: [col1, col2, col3, col4, col5, col3],
      carousel1,
      carousel2,
      carousel3,
      carousel4,
      carousel5,
      carousel6,
    };

    const carrusel = carruseles[carruselActual];
    const indiceActual = carrusel.indexOf(imagenActual);

    if (direccion === "siguiente") {
      const nuevoIndice = (indiceActual + 1) % carrusel.length;
      setImagenActual(carrusel[nuevoIndice]);
    } else {
      const nuevoIndice =
        (indiceActual - 1 + carrusel.length) % carrusel.length;
      setImagenActual(carrusel[nuevoIndice]);
    }
  };

  // Cerrar modal al hacer click fuera de la imagen
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      cerrarModal();
    }
  };

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
                  <div
                    className="cursor-pointer"
                    onClick={() => abrirModal(foto, "movil")}
                  >
                    <img
                      src={foto}
                      alt={`Foto ${i + 1}`}
                      className="rounded-lg shadow-lg object-cover w-full h-[300px] hover:opacity-90 transition-opacity"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 🖥️ COLLAGE SOLO PARA DESKTOP */}
          <div
            className="hidden md:block mx-auto w-[1080px] relative"
            style={{ height: "830px" }}
          >
            {/* Carrusel 1 */}
            <div className="absolute top-0 left-0 w-[405px] h-[222px]">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel1")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 1 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 2 */}
            <div className="absolute top-0 right-0 w-[665px] h-[270px] z-20">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel2")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 2 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* === FILA 2 === */}
            {/* Carrusel 3 */}
            <div className="absolute top-[230px] left-0 w-[550px] h-[170px]">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel3")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 3 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 4 */}
            <div className="absolute top-[280px] right-0 w-[518px] h-[281px]">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel4")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 4 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 5 */}
            <div className="absolute top-[410px] left-0 w-[550px] h-[150px]">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel5")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 5 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Carrusel 6 */}
            <div className="absolute top-[570px] right-0 w-full h-[263px]">
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
                    <div
                      className="cursor-pointer h-full"
                      onClick={() => abrirModal(foto, "carrusel6")}
                    >
                      <img
                        src={foto}
                        alt={`Carrusel 6 - ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL PARA IMAGEN AMPLIADA */}
      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleBackdropClick}
        >
          {/* Botón cerrar */}
          <button
            onClick={cerrarModal}
            className="cursor-pointer absolute top-4 right-4 text-white text-3xl z-60 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
          >
            ×
          </button>

          {/* Botones de navegación - Solo visibles en móvil */}
          <button
            onClick={() => cambiarImagen("anterior")}
            className="absolute left-4 text-white text-2xl z-60 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all md:hidden"
          >
            ‹
          </button>

          <button
            onClick={() => cambiarImagen("siguiente")}
            className="absolute right-4 text-white text-2xl z-60 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all md:hidden"
          >
            ›
          </button>

          {/* Imagen ampliada */}
          <div className="relative max-w-xl max-h-full">
            <img
              src={imagenActual || ""}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
