import Footer from "../components/ui/Footer";
import Volutariado from "../components/ui/Volutariado";
import StrawHat from "../components/ui/StrawHat";
import Portada from "../components/ui/Portada";
import Header from "../components/ui/Header";
import Vibra from "../components/ui/Vibra";
import { useRef } from "react";

const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const strawhatRef = useRef<HTMLDivElement | null>(null);
  const vibraRef = useRef<HTMLDivElement | null>(null);
  const voluntariadoRef = useRef<HTMLDivElement | null>(null);
  const contactoRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header
        onNavigate={(section: string) => {
          switch (section) {
            case "strawhat":
              scrollToSection(strawhatRef);
              break;
            case "vibra":
              scrollToSection(vibraRef);
              break;
            case "voluntariado":
              scrollToSection(voluntariadoRef);
              break;
            case "contacto":
              scrollToSection(contactoRef);
              break;
          }
        }}
      />

      <Portada />
      <div ref={strawhatRef}>
        <StrawHat />
      </div>
      <div ref={vibraRef}>
        <Vibra />
      </div>
      <div ref={voluntariadoRef}>
        <Volutariado />
      </div>
      <div ref={contactoRef}>
        <Footer />
      </div>
    </>
  );
}
