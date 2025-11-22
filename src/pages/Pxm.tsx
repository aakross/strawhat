import { useRef } from "react";
import Footer from "../components/ui/Footer";
import Alojamiento from "../components/ui/pxm/Alojamiento";
import CollagePxm from "../components/ui/pxm/CollagePxm";
import Experiencias from "../components/ui/pxm/Experiencias";
import HeaderPxm from "../components/ui/pxm/HeaderPxm";
import Instalaciones from "../components/ui/pxm/Instalaciones";
import PortadaPxm from "../components/ui/pxm/PortadaPxm";
import SemanaEspecial from "../components/ui/pxm/SemanaEspecial";
import Ubicacion from "../components/ui/pxm/Ubicacion";
import Volutariado from "../components/ui/Volutariado";
import WhatsApp from "../components/common/WhatsApp";

export default function Pxm() {
  const alojamientoRef = useRef<HTMLDivElement | null>(null);
  const actividadesRef = useRef<HTMLDivElement | null>(null);
  const experienciasRef = useRef<HTMLDivElement | null>(null);
  const voluntariadoRef = useRef<HTMLDivElement | null>(null);
  const contactoRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeaderPxm
        onNavigate={(section: string) => {
          switch (section) {
            case "accommodation":
              scrollToSection(alojamientoRef);
              break;
            case "activities":
              scrollToSection(actividadesRef);
              break;
            case "experiences":
              scrollToSection(experienciasRef);
              break;
            case "volunteer":
              scrollToSection(voluntariadoRef);
              break;
            case "contact":
              scrollToSection(contactoRef);
              break;
          }
        }}
      />
      <PortadaPxm />
      <div ref={alojamientoRef}>
        <Alojamiento />
      </div>
      <div>
        <Instalaciones />
      </div>
      <div>
        <CollagePxm />
      </div>
      <div ref={experienciasRef}>
        <Experiencias />
      </div>
      <div ref={actividadesRef}>
        <SemanaEspecial />
      </div>
      <div>
        <Ubicacion />
      </div>
      <div ref={voluntariadoRef}>
        <Volutariado />
      </div>
      <div ref={contactoRef}>
        <Footer />
      </div>
      <div>
        <WhatsApp />
      </div>
    </>
  );
}
