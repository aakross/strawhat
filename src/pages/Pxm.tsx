import Footer from "../components/ui/Footer";
import Alojamiento from "../components/ui/pxm/Alojamiento";
import Experiencias from "../components/ui/pxm/Experiencias";
import HeaderPxm from "../components/ui/pxm/HeaderPxm";
import Instalaciones from "../components/ui/pxm/Instalaciones";
import PortadaPxm from "../components/ui/pxm/PortadaPxm";
import SemanaEspecial from "../components/ui/pxm/SemanaEspecial";
import Ubicacion from "../components/ui/pxm/Ubicacion";

export default function Pxm() {
  return (
    <>
      <HeaderPxm />
      <PortadaPxm />
      <Alojamiento />
      <Instalaciones />
      <SemanaEspecial />
      <Experiencias />
      <Ubicacion />
      <Footer />
    </>
  );
}
