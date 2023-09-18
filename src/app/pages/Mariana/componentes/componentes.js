"use client";
import React, { useState } from 'react';
import styles from './componentes.module.css';
import Image from 'next/image';
import img1 from '../imagenes/Wave.png';
import img2 from '../imagenes/image8.png';


function Header() {
    return (
        <div className={styles.Header}>
            <Image src={img1} className={styles.logo}></Image>
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
function Filap() {
    return (
        <div className={styles.fila}>
            <div className={styles.container}>
                <div className={styles.botones}>
                    <button type="button" className={styles.precio}><p1>$250 <br></br>Q1,755</p1></button>
                    <h1 className={styles.paquete}>START PACK</h1>
                </div>
                <Image src={img2} className={styles.img}></Image>
                <h1 className={styles.titulo}>PERSONAL ACCOUNT</h1>
                <p className={styles.texto}>1 sesión de fotos al mes 4 post mensuales en el feed 8 historias mensuales organización de highlights Pro Copyright</p>
            </div>
        </div>

    )
}

export { Header, PaletaDeColores, Filap };