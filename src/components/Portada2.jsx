import cuarto1 from "../assets/cuarto1.jpg";

export default function Portada2() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-20 flex flex-col md:flex-row items-center gap-10 border-l-4 border-[#023F76] my-16">
      {/* Texto */}
      <div className="flex-1 text-[#023F76] text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hospedaje cómodo con ambiente único
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Bienvenido a Strawhat Hostel. Nuestras habitaciones y espacios están
          pensados para que te relajes, conozcas gente y disfrutes de tu viaje.
          Deja atrás la rutina diaria y vive experiencias únicas en un ambiente
          divertido y acogedor.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#E7AC72] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d9985b] transition-colors">
            Explora
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={cuarto1}
          alt="Habitación Strawhat Hostel"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}
