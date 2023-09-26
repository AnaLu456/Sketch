import styles from "./page.module.css";
import Carousel from "../app/componentes/carousel.js";
import img1 from "../../public/imagencarrusel1.jpg";
import img2 from "../../public/imagencarrusel2.jpg";
import img3 from "../../public/imagencarrusel3.jpg";
import img4 from "../../public/imagencarrusel4.jpg";
import img5 from "../../public/hombre.jpg";
import img6 from "../../public/cafe.jpg";
import img7 from "../../public/modelo.jpg";
import Video from "../app/componentes/video.js";
import { Header } from "../app/componentes/componentes.js";
import Image from "next/image";
import img8 from "../../public/fondonosotros.jpeg";
import { ContactPage } from "./packages/outside/componentes/components";
import Link from "next/link";

const imagenes = [
  img1,
  img2,
  img3,
  img4,
];

export default function Home() {
  return (
    <main className={styles.todo}>
      <Header></Header>

      <div>
        <Carousel images={imagenes}></Carousel>
      </div>

      <div className={styles.videocont}>
        <Video className={styles.video}></Video>
      </div>

      <div
      className={styles.nosotros}
        style={{
          backgroundImage: `url(${img8.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className={styles.nosotrostitulo}>Nosotros</h1>
        <div className={styles.nosotrosinfo}>
          <p className={styles.nosotrosparrafo}>
            Somos una empresa de marketing que tiene como mision impulsar el
            crecimiento y visibilidad de tu empresa mediante una gestion
            estrategica de redes, creación de contenido digital de alta calidad y
            analisis de mercado.
          </p>
        </div>
      </div>

      <div className={styles.paquetes}>
        <div className={styles.personal1}>
          <Image src={img6} className={styles.personalimage}></Image>
          <div className={styles.personal2texto}>
            <h1 className={styles.personaltitle}>PERSONAL ACCOUNT</h1>
            <Link className={styles.personalbutton} href="/packages/personal"> More Info</Link>
          </div>
        </div>
        <div className={styles.personal2}>
          <Image src={img7} className={styles.personalimage}></Image>
          <div className={styles.personal2texto}>
            <h1 className={styles.personaltitle}>COMPANY</h1>
            <Link className={styles.personalbutton} href="/packages/company">More Info</Link>
          </div>
        </div>

        <div className={styles.personal3}>
          <Image src={img5} className={styles.personalimage}></Image>
          <div className={styles.personal2texto}>
            <h1 className={styles.personaltitle}>OUTSIDE COMBOS</h1>
            <Link className={styles.personalbutton} href="/packages/outside">More Info</Link>
          </div>
        </div>
      </div>
      <div className="contactus">
        <ContactPage></ContactPage>
      </div>
    </main>
  );
}