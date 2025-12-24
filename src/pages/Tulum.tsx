import portada from "../assets/portada.jpg";
import AlojamientoTulum from "../components/ui/tulum/AlojamientoTulum";
import FooterTulum from "../components/ui/tulum/FooterTulum";
import HeaderTulum from "../components/ui/tulum/HeaderTulum";
import InstalacionesTulum from "../components/ui/tulum/InstalacionesTulum";
import PortadaTulum from "../components/ui/tulum/PortadaTulum";
import SemanaEspecialTulum from "../components/ui/tulum/SemanaEspecialTulum";
import UbicacionTulum from "../components/ui/tulum/UbicacionTulum";

export default function Tulum() {
  return (
    <>
      <HeaderTulum onNavigate={(section: string) => {}} />
      <PortadaTulum />
      <AlojamientoTulum />
      <InstalacionesTulum />
      <SemanaEspecialTulum />
      <UbicacionTulum />
      <FooterTulum />
    </>
  );
}
