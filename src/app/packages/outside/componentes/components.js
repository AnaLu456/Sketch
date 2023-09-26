import React from 'react';
import styles from './components.module.css';
import Image from 'next/image';
import Wave from '../imágenes/Wave.png';
import img1 from '../imágenes/img1.jpg';
import Tw from '../imágenes/Tw.png';
import Yt from '../imágenes/Yt.png';
import Insta from '../imágenes/Insta.png';
import Fb from '../imágenes/Fb.png';

function Header() {
    return (
        <div className={styles.Header}>
            <Image src={Wave} className={styles.logo} />
        </div>
    );
}

function PaletaDeColores() {
    return (
        <div className={styles.paleta}>
            <div className={styles.color1}>#000000</div>
            <div className={styles.color2}>#F3EEE1</div>
            <div className={styles.color3}>#EC5E32</div>
            <div className={styles.color4}>#F3F1A2</div>
        </div>
    );
}

const Imagecomponents = () => {
    return (
        <div className={`${styles.section} ${styles.headerImageContainer}`}>
            <div className={styles.PrimerText}>
                <h1>FOTOGRAFÍA</h1>
            </div>
        </div>
    );
}

function BloquePrecios() {
    return (
        <div className={styles.BloquePrecios}>
             <div className={styles.PreciosCuadro}>
                <div className={styles.Cantidades}>
                    <p className={styles.texto}>$110</p>
                    <p className={styles.texto}>Q770</p>
                </div>
            </div>
            <div className={styles.TituloPrecios}>
                <h1>SESION DE FOTOS</h1>
            </div>
        </div>
    );
}

const Imagecomponents2 = () => {
    return (
        <div className={`${styles.section2} ${styles.headerImageContainer2}`}>
            <div className={styles.SegundoText}>
                <h1>VIDEOGRAFÍA</h1>
            </div>
        </div>
    );
}

function BloquePrecios2() {
    return (
        <div className={styles.BloquePrecios2}>
             <div className={styles.PreciosCuadro2}>
                <div className={styles.Cantidades2}>
                    <p className={styles.texto}>1xQ350 - 1x$50</p>
                    <p className={styles.texto}>2xQ600 - 2x$86</p>
                    <p className={styles.texto}>4xQ2,000 - 4x$286</p>
                </div>
            </div>
            <div className={styles.TituloPrecios2}>
                <h1>VIDEO PACK</h1>
            </div>
        </div>
    );
}

const Imagecomponents3 = () => {
    return (
        <div className={`${styles.section3} ${styles.headerImageContainer3}`}>
            <div className={styles.TercerText}>
                <h1>MEDIA MANAGEMENT</h1>
            </div>
            <div className={styles.Description}>
                <h1>Optimiza tu presencia en línea con nuestro análisis de mercado y estrategia digital. Aumenta leads, tráfico y conversiones mientras te destacas frente a la competencia.</h1>
            </div>
        </div>
    );
}

function BloquePrecios3() {
    return (
        <div className={styles.BloquePrecios3}>
             <div className={styles.PreciosCuadro3}>
                <div className={styles.Cantidades3}>
                    <p className={styles.texto}>$156</p>
                    <p className={styles.texto}>Q1,095</p>
                </div>
            </div>
            <div className={styles.TituloPrecios3}>
                <h1>DIGITAL AUDIT</h1>
            </div>
        </div>
    );
}

const Imagecomponents4 = () => {
    return (
        <div className={`${styles.section4} ${styles.headerImageContainer4}`}>
            <div className={styles.CuartoText}>
                <h1>MEDIA MANAGEMENT</h1>
            </div>
            <div className={styles.Description2}>
                <h1>Construccion de un buyer perona para una comunicacion efectiva.</h1>
            </div>
        </div>
    );
}

function BloquePrecios4() {
    return (
        <div className={styles.BloquePrecios4}>
             <div className={styles.PreciosCuadro4}>
                <div className={styles.Cantidades4}>
                    <p className={styles.texto}>$137</p>
                    <p className={styles.texto}>Q959</p>
                </div>
            </div>
            <div className={styles.TituloPrecios4}>
                <h1>COSTUMER IDENTIFICATION</h1>
            </div>
        </div>
    );
}

function ContactPage() {
    return (
        <div className={styles.Container}>
            <div className={styles.LeftSide}>
                <main className={styles.Main}>
                    <div className={styles.Logo} paginaweb={styles.Logo}>
                        <Image className={styles.LogoImg}  src={Wave} alt="Logo" />
                    </div>

                    <div className={styles.RedesSociales} paginaweb={styles.BotonTw}>
                        <a href="#">
                            <div className={styles.BotonTwLinkIcono}>
                                <Image className={styles.TwImg} src={Tw} alt="Twitter" />
                                <p className={styles.Nombre}>@waveattheworld</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.RedesSociales} paginaweb={styles.BotonYt}>
                        <a href="#">
                            <div className={styles.BotonYtLinkIcono}>
                                <Image className={styles.YtImg} src={Yt} alt="Youtube" />
                                <p className={styles.Nombre}>waveattheworld</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.RedesSociales} paginaweb={styles.BotonInsta}>
                        <a href="https://www.instagram.com/waveattheworld/?igshid=MzRlODBiNWFlZA==">
                            <div className={styles.BotonInstaLinkIcono}>
                                <Image className={styles.InstaImg} src={Insta} alt="Instagram" />
                                <p className={styles.Nombre}>waveattheworld</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.RedesSociales} paginaweb={styles.BotonFb}>
                        <a href="#">
                            <div className={styles.BotonFbLinkIcono}>
                                <Image className={styles.FbImg} src={Fb} alt="Facebook" />
                                <p className={styles.Nombre}>waveattheworld</p>
                            </div>
                        </a>
                    </div>
                </main>
                
            </div>
            <div className={styles.RightSide}>
                <main className={styles.Main}>
                    <div className={styles.wrapper}>
                        
                        <form className={styles.Form} method="POST" action="https://formspree.io/f/moqokldg">
                            <h1 className={styles.Contacto}>Contact Us</h1>
                            <div className={styles.Caja}>
                                <input name="text" type="text" id="Nombre" placeholder="Nombre:" required></input>
                                <i className={styles.bxCaja1}></i>
                            </div>
                            <div className={styles.Caja}>
                                <input name="email" type="email" id="Email" placeholder="Email:" required></input>
                                <i className={styles.bxCaja2}></i>
                            </div>
                            <div className={styles.Caja}>
                                <input name="mensaje" id="Mensaje" placeholder="Mensaje:" required></input>
                                <i className={styles.bxCaja3}></i>
                            </div>
                            <button className={styles.button} type="submit">ENVIAR</button>
                        </form>
                    </div>
                    <p className={styles.Final}>@ 2023 WAVE</p>
                </main>
            </div>
        </div>
    );
}

export {Header, Imagecomponents, BloquePrecios, Imagecomponents2, BloquePrecios2, Imagecomponents3, BloquePrecios3, Imagecomponents4, BloquePrecios4, ContactPage};
