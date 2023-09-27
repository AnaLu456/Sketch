"use client";
import React, { useState } from 'react';
import styles from './componentes.module.css';
import Image from 'next/image';
import img1 from '../packages/personal/imagenes/Wave.png';
import img2 from '../packages/personal/imagenes/80.jpg';
import img3 from '../packages/personal/imagenes/12.jpg';
import img4 from '../packages/personal/imagenes/23.jpg';
import Link from 'next/link'


function Header() {
    return (
        <div className={styles.Header}>
            <Link target='_self' href="localhost:3000/packages/andremarco">
                <button className={styles.botonLogo}>
                    <Image src={img1} className={styles.logo}></Image>
                </button>
            </Link>
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

function EstructuraFila({ imagenes, texto, clase, precioD, precioQ, paquete, account }) {
    return (
        <div className={styles.fila}>
            <div className={styles.container}>
                <Image src={imagenes} className={styles.img} />
                <h1 className={styles.titulo}>{account}</h1>
                <p className={clase}>{texto}</p>
                <div className={styles.botones}>
                    <h1 className={styles.paquete}>{paquete} PACK</h1>
                    <div className={styles.precios} >
                        <button type="button" className={styles.precioD}><p1>${precioD}</p1></button>
                        <button type="button" className={styles.precioQ}><p1>Q{precioQ}</p1></button>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Filap() {
    return (
        <div>
            <EstructuraFila imagenes={img2} texto="1 sesión de fotos al mes 4 post mensuales en el feed 8 historias mensuales organización de highlights Pro Copyright" clase={styles.texto} precioD="250" precioQ="1,755" paquete="START" account="PERSONAL ACCOUNT" />
            <EstructuraFila imagenes={img3} texto="1 sesión de fotos al mes 8 post mensuales en el feed 12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics." clase={styles.texto} precioD="470" precioQ="2,925" paquete="GROW" account="PERSONAL ACCOUNT" />
            <EstructuraFila imagenes={img4} texto="1 sesión de fotos al mes 8 post mensuales en el feed 12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics." clase={styles.texto3} precioD="585" precioQ="4,095" paquete="MANTAIN" account="PERSONAL ACCOUNT" />
        </div>
    );
}



export { Header, PaletaDeColores, Filap, EstructuraFila };