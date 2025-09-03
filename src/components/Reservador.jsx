import home from "../assets/home.svg";
import calendar from "../assets/calendar.svg";
import user from "../assets/user.svg";

export default function Reservador() {
  return (
    <>
      <div className="flex items-start gap-4 mb-10">
        <div className="bg-white grid grid-cols-4 mb-10 rounded-xl flex-1">
          {/* Contenedor Alojamiento */}
          <div className="grid grid-cols-2 items-center">
            {/* Icono */}
            <div className="flex items-center justify-center h-full">
              <img src={home} alt="home" className="w-6 h-6" />
            </div>

            {/* Texto + Select */}
            <div className="flex flex-col justify-center">
              <span className="text-[#3E4958] text-sm">Alojamiento</span>
              <select className="border-black text-[#3E4958] text-lg">
                <option
                  value="Puerto Escondido"
                  className="text-lg text-[#3E4958]"
                >
                  Puerto Escondido
                </option>
                <option value="CDMX" className="text-lg text-[#3E4958]">
                  CDMX
                </option>
                <option value="Tulum" className="text-lg text-[#3E4958]">
                  Tulum
                </option>
              </select>
            </div>
          </div>

          {/* Date input */}
          <div className="grid grid-cols-2 items-center">
            {/* Icono */}
            <div className="flex items-center justify-center h-full">
              <img src={calendar} alt="home" className="w-6 h-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[#3E4958] text-sm">Check-in</span>
              <input
                type="date"
                className="w-full text-black text-sm border rounded px-2 py-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            {/* Icono */}
            <div className="flex items-center justify-center h-full">
              <img src={calendar} alt="home" className="w-6 h-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[#3E4958] text-sm">Check-out </span>
              <input
                type="date"
                className="w-full text-black text-sm border rounded px-2 py-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            {/* Icono */}
            <div className="flex items-center justify-center h-full">
              <img src={user} alt="home" className="w-6 h-6" />
            </div>

            {/* Texto + Select */}
            <div className="flex flex-col justify-center">
              <span className="text-[#3E4958] text-sm">Huespedes</span>
              <select className="border-black text-[#3E4958] text-lg">
                <option
                  value="Puerto Escondido"
                  className="text-lg text-[#3E4958]"
                >
                  1 Adulto
                </option>
                <option value="CDMX" className="text-lg text-[#3E4958]">
                  2 Adultos
                </option>
                <option value="Tulum" className="text-lg text-[#3E4958]">
                  3 Adultos
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#E7AC72] font-bold text-white text-lg p-3 rounded-xl hover:cursor-pointer">
            Reservar
          </button>
        </div>
      </div>
    </>
  );
}
