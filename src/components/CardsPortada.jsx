import puerto from "../assets/puerto.webp";

export default function CardsPortada({ ciudad }) {
  return (
    <div className="bg-white rounded-xl mt-5 hover:cursor-pointer p-2">
      <img src={puerto} alt={ciudad} className="w-full mx-auto rounded-xl" />
      
      <div className="text-[#023F76] text-xl mt-2 flex items-center h-[50px] gap-2 p-2">
        <span className="leading-none">Viaja a {ciudad}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#023F76]"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}
