import React from "react";
import styles from "./aboutus.module.css";
import wave from "./../../../public/wavelogo.PNG"
import ig from "./../../../public/iglogo.PNG"
import tw from "./../../../public/xlogo.PNG"
import yt from "./../../../public/ytlogo.PNG"
import fb from "./../../../public/fblogo.PNG"
import Image from 'next/image';

function Aboutus() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <main className={styles.main}>
                        <div className={styles.logo} >
                            <Image src={wave} className={styles.logo} />
                        </div>

                        <div className={styles.redesSociales}>
                            <a href=""></a>
                            <Image
                                className={styles.botontwlinkicono}
                                src={tw}
                            />
                            <p className={styles.p}>@waveattheworld</p>
                        </div>

                        <div className={styles.redesSociales}>
                            <a href="">
                                <Image
                                    className={styles.botonytlinicono}
                                    src={yt}
                                />
                            </a>
                            <p className={styles.p} >waveattheworld</p>
                        </div>

                        <div className={styles.redesSociales} >
                            <a href="https://www.instagram.com/waveattheworld/?igshid=MzRlODBiNWFlZA==">
                                <Image
                                    className={styles.botoninstalinkicono}
                                    src={ig}
                                />
                            </a>
                            <p className={styles.p}>waveattheworld</p>
                        </div>

                        <div className={styles.redesSociales} >
                            <a href="">
                                <Image
                                    className={styles.botonfblinkicono}
                                    src={fb}
                                />
                            </a>
                            <p className={styles.p} >waveattheworld</p>
                        </div>
                    </main>
                </div>
            </div>
            <div className={styles.rightSide}>
                <main>
                    <section className={styles.section} id="contacto">
                        <h1 className={styles.h1}>Contact Us</h1>
                        <form
                            className={styles.form}
                            method="POST"
                            action="https://formspree.io/f/xeqbzejy"
                        >
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre"></input>
                            <br></br>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"></input>
                            <br></br>
                            <label for="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje"></textarea>
                            <br></br>
                            <button type={styles.submit}>Enviar</button>
                        </form>
                        <p className={styles.p}>@ 2023 WAVE</p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export {Aboutus};