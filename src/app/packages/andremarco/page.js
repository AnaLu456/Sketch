import styles from "./styles.module.css";
import Carousel from "../../componentes/carousel";
import img1 from "../../../../public/imagencarrusel1.jpg";
import img2 from "../../../../public/imagencarrusel2.jpg";
import img3 from "../../../../public/imagencarrusel3.jpg";
import img4 from "../../../../public/imagencarrusel4.jpg";
import Video from "../../componentes/video.js";
import {Header} from "../../componentes/componentes.js"


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
      
      
      
      <div className={styles.video}>
        
        <Video className={styles.video}></Video>

      </div>

      <div className={styles.nosotros}>
        <h1 className={styles.nosotrostitulo}>Nosotros</h1>
        <div className="nosotrosinfo">
          <p className={styles.nosotrosparrafo}>Somos una empresa de marketing que tiene como mision impulsar el crecimiento y visibilidad de tu empresa mediante una gestion estrategica de redes, creacion de contenido digital de alta calidad y analisis de mercado.
          </p>
        </div>
      </div>
      <div className="paquetes">

        
      </div>
      <div className="contactus" >
      
      </div>
    </main>

  );
}