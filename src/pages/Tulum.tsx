import { useRef } from "react";
import AlojamientoTulum from "../components/ui/tulum/AlojamientoTulum";
import FooterTulum from "../components/ui/tulum/FooterTulum";
import HeaderTulum from "../components/ui/tulum/HeaderTulum";
import InstalacionesTulum from "../components/ui/tulum/InstalacionesTulum";
import PortadaTulum from "../components/ui/tulum/PortadaTulum";
import SemanaEspecialTulum from "../components/ui/tulum/SemanaEspecialTulum";
import UbicacionTulum from "../components/ui/tulum/UbicacionTulum";

export default function Tulum() {
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
      <HeaderTulum
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
      <PortadaTulum />
      <div ref={alojamientoRef}>
        <AlojamientoTulum />
      </div>
      <div ref={actividadesRef}>
        <InstalacionesTulum />
      </div>
      <div ref={voluntariadoRef}>
        <SemanaEspecialTulum />
      </div>
      <div ref={experienciasRef}>
        <UbicacionTulum />
      </div>
      <div ref={contactoRef}>
        <FooterTulum />
      </div>
    </>
  );
}
