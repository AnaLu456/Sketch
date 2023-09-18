import React from 'react';
import styles from './components.module.css';
import Image from 'next/image';
import Wave from '../imágenes/Wave.png';
import img1 from '../imágenes/img1.jpg';

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
                <h1>SESIÓN DE FOTOS</h1>
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

export { Header, Imagecomponents, BloquePrecios, Imagecomponents2, BloquePrecios2};
