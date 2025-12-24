import { useTranslation } from "react-i18next";

export interface ServiceItem {
  icon: string;
  text: string;
}

export interface ServicesData {
  services: ServiceItem[];
  amenities: ServiceItem[];
  recommendations: ServiceItem[];
}

// Importa tus iconos aquí o pásalos como parámetro

import alberca from "../assets/pxm/svg/alberca.svg";
import wifi from "../assets/pxm/svg/wifi.svg";
import coworking from "../assets/pxm/svg/coworking.svg";
import cocinaHuespedes from "../assets/pxm/svg/cocina_huéspedes.svg";
import lockers from "../assets/pxm/svg/lockers.svg";
import toursactividades from "../assets/pxm/svg/tours.svg";
import areaajardinada from "../assets/pxm/svg/area_ajardinada.svg";
import zonafumadores from "../assets/pxm/svg/zona_fumadores.svg";
import barra from "../assets/pxm/svg/barra.svg";
import habitacionesPriv from "../assets/pxm/svg/habitaciones_privadas.svg";
import dormitorioscompartidos from "../assets/pxm/svg/dormitorios_compartidos.svg";
import aireacondicionado from "../assets/pxm/svg/aire_acondicionado.svg";
import enchufesenergia from "../assets/pxm/svg/enchufes_energía.svg";
import juegosmesalibros from "../assets/pxm/svg/juegos_libros.svg";
import lucescama from "../assets/pxm/svg/luces_cama.svg";
import toallas from "../assets/pxm/svg/toallas.svg";
import tablassurf from "../assets/pxm/svg/renta_tablas.svg";
import rentascooters from "../assets/pxm/svg/renta_bicis_scouters.svg";
import seguridad from "../assets/pxm/svg/seguridad.svg";
import reservaclubs from "../assets/pxm/svg/reserva_clubs.svg";

export const useServices = (): ServicesData => {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    // {
    //   icon: barResta,
    //   text: t("pxm.service1"),
    // },
    {
      icon: aireacondicionado,
      text: t("pxm.recommendation1"),
    },
    {
      icon: alberca,
      text: t("pxm.service2"),
    },
    {
      icon: wifi,
      text: t("pxm.service3"),
    },
    {
      icon: coworking,
      text: t("pxm.service4"),
    },
    {
      icon: cocinaHuespedes,
      text: t("pxm.service5"),
    },
    {
      icon: lockers,
      text: t("pxm.service6"),
    },
    {
      icon: toursactividades,
      text: t("pxm.service7"),
    },
  ];

  const amenities: ServiceItem[] = [
    {
      icon: areaajardinada,
      text: t("pxm.service8"),
    },
    {
      icon: zonafumadores,
      text: t("pxm.service9"),
    },
    {
      icon: barra,
      text: t("pxm.service10"),
    },
    {
      icon: habitacionesPriv,
      text: t("pxm.service11"),
    },
    {
      icon: dormitorioscompartidos,
      text: t("pxm.service12"),
    },
    {
      icon: aireacondicionado,
      text: t("pxm.recommendation1"),
    },
    {
      icon: enchufesenergia,
      text: t("pxm.recommendation2"),
    },
  ];

  const recommendations: ServiceItem[] = [
    {
      icon: juegosmesalibros,
      text: t("pxm.recommendation3"),
    },
    {
      icon: lucescama,
      text: t("pxm.recommendation4"),
    },
    {
      icon: toallas,
      text: t("pxm.recommendation5"),
    },
    {
      icon: tablassurf,
      text: t("pxm.recommendation6"),
    },
    {
      icon: rentascooters,
      text: t("pxm.recommendation7"),
    },
    {
      icon: seguridad,
      text: t("pxm.recommendation8"),
    },
    {
      icon: reservaclubs,
      text: t("pxm.recommendation9"),
    },
  ];

  return {
    services,
    amenities,
    recommendations,
  };
};