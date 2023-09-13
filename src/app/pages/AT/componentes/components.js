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
            <Image src={img1} className={styles.Imagecomponents} />
        </div>
    );
}

function BloquePrecios() {
    return (
        <div className={styles.BloquePrecios}>
            {/* Contenido de BloquePrecios */}
        </div>
    );
}

export { Header, Imagecomponents, BloquePrecios };
