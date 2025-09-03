import { useState, useEffect } from "react";
import portada from "../assets/portada.jpg";
import CardsPortada from "./CardsPortada";
import Reservador from "./Reservador";
import Portada2 from "./Portada2";

export default function Portada() {
  const ciudades = ["Puerto Escondido", "Tulum", "CDMX"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ciudades.length);
    }, 2000); // cambia cada 2 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={portada}
          alt="Portada Alberca"
          className="h-full w-full object-cover"
        />
        <div className="text-white text-4xl font-semibold top-32 absolute p-2 ml-10">
          <div>
            <div>Strawhat Hostel</div>

            {/* Texto fijo + ciudad animada */}
            <div className="mt-4 font-light flex gap-2 h-[40px] items-center">
              <span>Descubre Strawhat Hostel en</span>
              <div className="overflow-hidden h-[40px]">
                <div
                  className="transition-transform duration-500"
                  style={{
                    transform: `translateY(-${index * 40}px)`,
                  }}
                >
                  {ciudades.map((ciudad, i) => (
                    <div key={i} className="h-[40px] flex items- font-bold">
                      {ciudad}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-5 w-1/2 mt-6">
              <CardsPortada ciudad={"Puerto Escondido"} />
              <CardsPortada ciudad={"Tulum"} />
              <CardsPortada ciudad={"CDMX"} />
            </div>

            <div className="bg-white/40 p-6 rounded-xl mt-5 mx-auto">
              <Reservador />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Portada2 />
        <Portada2 />
      </div>
    </>
  );
}
