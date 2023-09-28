import Image from "next/image";
import img1 from "../outside/imágenes/img1.jpg";
import img2 from "../outside/imágenes/img2.jpg";
import img3 from "../outside/imágenes/img3.jpg";
import img4 from "../outside/imágenes/img4.jpg";
import styles from "../../componentes/componentes.module.css";
import { Header } from "@/app/componentes/componentes";
import { EstructuraFila } from "@/app/componentes/componentes";
import {ContactPage} from "./componentes/components";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <EstructuraFila imagenes={img1} precioD="250" precioQ="1,755" paquete="SESION DE FOTOS" account="FOTOGRAFÍA" />
      <EstructuraFila imagenes={img2} precioD="1x50" precioQ="1x350" paquete="VIDEO" account="VIDEOGRAFÍA" />
      <EstructuraFila imagenes={img3} texto="Optimiza tu presencia en línea con nuestro análisis de mercado y estrategia digital. Aumenta leads, tráfico y conversiones mientras te destacas frente a la competencia." clase={styles.texto} precioD="156" precioQ="1,095" paquete="DIGITAL AUDIT" account="MEDIA MANAGEMENT" />
      <EstructuraFila imagenes={img4} texto="Construccion de un buyer perona para una comunicacion efectiva" clase={styles.texto} precioD="137" precioQ="959" paquete="COSTUMER IDENTIFICATION" account="MEDIA MANAGEMENT" />
      <ContactPage></ContactPage>
    </div>
  );
}