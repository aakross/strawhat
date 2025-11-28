import whatsapp from "../../assets/svg/whatsapp.svg";

interface WhatsAppProps {
  numero: string;
  mensaje?: string; // Opcional, con valor por defecto
}

export default function WhatsApp({
  numero,
  mensaje = "Hola, bienvenido a Straw Hat Hostal, ¿en donde te gustaría hospedarte en tu próximo viaje?",
}: WhatsAppProps) {
  const mensajeCodificado = encodeURIComponent(mensaje);
  const enlaceWhatsApp = `https://api.whatsapp.com/send/?phone=${numero}&text=${mensajeCodificado}&type=phone_number&app_absent=0`;

  return (
    <>
      <div className="fixed bottom-2 right-0 z-[9999]">
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
          <img
            src={whatsapp}
            alt="Contactar por WhatsApp"
            className="w-16 h-16 md:w-[200px] md:h-[100px]"
          />
        </a>
      </div>
    </>
  );
}
