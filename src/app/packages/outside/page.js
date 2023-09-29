import Image from "next/image";
import img1 from "../outside/imágenes/img1.jpg";

import img3 from "../outside/imágenes/img3.jpg";
import img4 from "../outside/imágenes/img4.jpg";
import styles from "../../componentes/componentes.module.css";
import { Header } from "@/app/componentes/componentes";
import { EstructuraFila } from "@/app/componentes/componentes";
import {ContactPage} from "./componentes/components";
import { Outside } from "@/app/componentes/componentes";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Outside></Outside>
      <ContactPage></ContactPage>
    </div>
  );
}