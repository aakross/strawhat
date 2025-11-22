import whatsapp from "../../assets/svg/whatsapp.svg";

export default function WhatsApp() {
  return (
    <>
      <div className="fixed bottom-2 right-0 z-[9999]">
        <img
          src={whatsapp}
          alt=""
          className="w-16 h-16 md:w-[200px] md:h-[100px]"
        />
      </div>
    </>
  );
}
