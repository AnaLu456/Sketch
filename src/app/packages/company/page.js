
import { EstructuraFila } from "@/app/componentes/componentes";
import img1 from "../company/imagenes/26.jpg"
import img2 from "../company/imagenes/58.jpg"
import img3 from "../company/imagenes/64.jpg"
import { Header } from "@/app/componentes/componentes";
import styles from "../../componentes/componentes.module.css"
import { ContactPage } from "../outside/componentes/components";

export default function Home() {
  return (
    <div>

      <Header></Header>
      <EstructuraFila account={"COMPANY ACCOUNT"} imagenes={img1} texto="1 sesión del fotos al mes
           16 post mensuales en el feed
           12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics Client Service. " clase={styles.texto} precioD="585" precioQ="4,095" paquete="MANTAIN" />
      <EstructuraFila account={"COMPANY ACCOUNT"} imagenes={img2} texto="2 sesión del fotos al mes, 20 post mensuales en el feed, (16 fotos y 4 reels) 20 historias mensuales + organización de highlights Pro Copyright Monthly Analytics Client Service Adds Consultancies." clase={styles.texto} precioD="978" precioQ="6,850" paquete="IDEAL" />

      <EstructuraFila account={"COMPANY ACCOUNT"} imagenes={img3} texto="2 sesión del fotos al mes, 20 post mensuales en el feed, (12 fotos y 8 reels) 28 historias al mes + organización de highlights Pro Copyright Monthly Analytics Client Service Adds Consultancies." clase={styles.texto} precioD="1,170" precioQ="8,190" paquete="MANTAIN" />

      <ContactPage></ContactPage>

    </div>

  );
}