import React from 'react';
import styles from './components.module.css';
import Image from 'next/image';
import Wave from '../imágenes/Wave.png';
import img1 from '../imágenes/img1.jpg';
import Tw from '../imágenes/Tw.png';
import Yt from '../imágenes/Yt.png';
import Insta from '../imágenes/Insta.png';
import Fb from '../imágenes/Fb.png';

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

export {ContactPage};
