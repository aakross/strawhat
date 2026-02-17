import { useState, useEffect } from "react";
import whatsapp from "../../assets/svg/whatsapp.svg";

interface WhatsAppProps {
  // Opcionalmente puedes mantener props generales
  mensajeBase?: string;
}

interface Ubicacion {
  nombre: string;
  numero: string;
  mensaje: string;
}

export default function WhatsApp({ 
  mensajeBase = "Hola, vi su página web y me gustaría hacer una reservación para …"
}: WhatsAppProps) {
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [animacion, setAnimacion] = useState("");

  // Definimos las ubicaciones con sus números y mensajes
  const ubicaciones: Ubicacion[] = [
    {
      nombre: "PXM",
      numero: "+5219715642523",
      mensaje: `${mensajeBase} PXM`
    },
    {
      nombre: "Tulum",
      numero: "+5219541389232",
      mensaje: `${mensajeBase} Tulum`
    },
    // {
    //   nombre: "CDMX",
    //   numero: "+5219715642523", // Usando el de PXM temporalmente
    //   mensaje: `${mensajeBase} CDMX`
    // }
  ];

  const abrirWhatsApp = (ubicacion: Ubicacion) => {
    const mensajeCodificado = encodeURIComponent(ubicacion.mensaje);
    const enlaceWhatsApp = `https://api.whatsapp.com/send/?phone=${ubicacion.numero}&text=${mensajeCodificado}&type=phone_number&app_absent=0`;
    window.open(enlaceWhatsApp, '_blank');
    setMostrarOpciones(false);
  };

  const toggleOpciones = () => {
    if (mostrarOpciones) {
      setAnimacion("salida");
      setTimeout(() => setMostrarOpciones(false), 300);
    } else {
      setMostrarOpciones(true);
      setAnimacion("entrada");
    }
  };

  // Cerrar opciones al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mostrarOpciones && !target.closest('.whatsapp-container')) {
        setAnimacion("salida");
        setTimeout(() => setMostrarOpciones(false), 300);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mostrarOpciones]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999] whatsapp-container">
        {/* Opciones desplegables */}
        {mostrarOpciones && (
          <div className={`mb-4 flex flex-col gap-3 ${animacion === "entrada" ? "animate-fadeInUp" : "animate-fadeOutDown"}`}>
            {ubicaciones.map((ubicacion) => (
              <button
                key={ubicacion.nombre}
                onClick={() => abrirWhatsApp(ubicacion)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 min-w-[120px]"
              >
                <span className="text-lg">📍</span>
                <span>{ubicacion.nombre}</span>
              </button>
            ))}
          </div>
        )}

        {/* Botón principal de WhatsApp */}
        <button
          onClick={toggleOpciones}
          className="relative bg-green-600 hover:bg-green-700 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          
          {/* Indicador de opciones */}
          <span className="absolute -top-1 -right-1 bg-white text-green-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
            {ubicaciones.length}
          </span>
          
          {/* Efecto de pulso */}
          <div className="absolute inset-0 border-4 border-green-400 rounded-full animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Agregar estilos CSS para animaciones */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        
        .animate-fadeOutDown {
          animation: fadeOutDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}