import React from "react";

export default function Header() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between p-5 bg-transparent z-10">
        <div className="logo mx-2">
          <img src="/travel.svg" alt="Logo de Straw Hat" />
        </div>
        <div className="flex text-white font-semibold">
          <nav>
            <ul className="flex gap-[40px]">
              <li>
                <a
                  href="#habitaciones"
                  className="hover:border-white hover:border hover:rounded-md p-2"
                >
                  Habitaciones
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  className="hover:border-white hover:border hover:rounded-md p-2"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#ubicaciones"
                  className="hover:border-white hover:border hover:rounded-md p-2"
                >
                  Ubicaciones
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:border-white hover:border hover:rounded-md p-2"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
