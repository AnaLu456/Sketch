import styles from "./styles.css";
import Carousel from "../../exports/carousel";
import img1 from "../../../../public/imagencarrusel1.jpg";
import img2 from "../../../../public/imagencarrusel2.jpg";
import img3 from "../../../../public/imagencarrusel3.jpg";
import img4 from "../../../../public/imagencarrusel4.jpg";
import Video from "../../exports/video.js";


  const imagenes=[
  img1,img2,img3,img4
]


export default function Home() {
  return (

    
    <main>
      <header className="encabezado">
      </header>

        <div className={styles.Carousel}>
        *carrusel*
          <h1>Impulsa tu crecimiento</h1>
          <Carousel images={imagenes}></Carousel>
        </div>
        <div className="video">
          <Video></Video>
        </div>

        <div className="Nosotros">
            <h1 className="nosotrostitulo">Nosotros</h1>
            <div className="nosotrosinfo">
            <p className="nosotrosparrafo">parrafo
            </p>
            </div>
        </div>
        <div className="paquetes">

          <div className="personalaccount">
            <div className="moreinfo">
            <button className="moreinfo_button"></button>
            </div>
          </div>

          <div className="companyaccount">
            <div className="companymoreinfo">
            <button className="companymoreinfobutton"></button>
            </div>
          </div>

          <div className="outsidecombo">
            <div className="outsidemoreinfo">
            <button className="outsidemoreinfobutton"></button>
            </div>
          </div>
        </div>
        <div className="contactus" >

        </div>
    </main>
    
  );
}