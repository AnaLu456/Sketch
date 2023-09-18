import styles from "./styles.module.css";
import Carousel from "../../exports/carousel";
import img1 from "../../../../public/imagencarrusel1.jpg";
import img2 from "../../../../public/imagencarrusel2.jpg";
import img3 from "../../../../public/imagencarrusel3.jpg";
import img4 from "../../../../public/imagencarrusel4.jpg";


const imagenes = [
  
  img1,
  
  img2,
  
  img3,

  img4,
];


export default function Home() {
  return (
    
    <main>
      <header className={styles.conocemas}>
      </header>

        <div className={styles.conocemas}>
        *carrusel*
          
          <Carousel images={imagenes}></Carousel>
        </div>
        <div className="carinteractivo">
          carruselinteractivo
        <carrusel></carrusel>

        </div>
        <div className="video">
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
