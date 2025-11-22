import whatsapp from "../../assets/svg/whatsapp.svg";

interface WhatsAppProps {
  numero: string;
}

export default function WhatsApp({ numero }: WhatsAppProps) {
  return (
    <>
      <div className="fixed bottom-2 right-0 z-[9999]">
        <a href={`tel:${numero}`}>
          <img
            src={whatsapp}
            alt=""
            className="w-16 h-16 md:w-[200px] md:h-[100px]"
          />
        </a>
      </div>
    </>
  );
}
