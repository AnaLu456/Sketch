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
                    <h1>$110</h1>
                    <h1>Q770</h1>
                </div>
            </div>
            <div className={styles.TituloPrecios}>
                <h1>SESIÓN DE FOTOS</h1>
            </div>
        </div>
    );
}

export { Header, Imagecomponents, BloquePrecios };
