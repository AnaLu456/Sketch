"use client";
import React, { useState } from 'react';
import styles from './componentes.module.css';
import Image from 'next/image';
import img1 from '../packages/personal/imagenes/Wave.png';
import img2 from '../packages/personal/imagenes/80.jpg';
import img3 from '../packages/personal/imagenes/12.jpg';
import img4 from '../packages/personal/imagenes/23.jpg';
import Link from 'next/link'
import imagO from "../packages/outside/imágenes/img1.jpg"
import imag1 from "../packages/outside/imágenes/img2.jpg"
import imag2 from "../packages/outside/imágenes/img3.jpg"
import imag3 from "../packages/outside/imágenes/img4.jpg"


function Precios3x2({imagenes, account}) {
    return (
        <div>
            <div className={styles.fila}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>{account}</h1>
                <Image src={imagenes} className={styles.img} />
                <div className={styles.precios1}>
                    <div className={styles.precios2}>
                        <h1 className={styles.preciostitulo}>VIDEO PACK</h1>
                    </div>
                <div className={styles.izquierda}>
                    <p className={styles.precioQue}>1xQ350</p>
                    <p className={styles.precioQue}>2xQ600</p>
                    <p className={styles.precioQue}>4xQ2,000</p>
                </div>
                <div className={styles.izquierda}>
                    <p className={styles.precioDol}>1x$50</p>
                    <p className={styles.precioDol}>2x$86</p>
                    <p className={styles.precioDol}>4x$286</p>
            </div>  
            </div>
        </div>
        </div>
        </div>
    )
}


function Header() {
    return (
        <div className={styles.Header}>
            <Link target='_self' href="/">
                <Image src={img1} className={styles.logo}></Image>

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
        <div className={styles.todo}>
            <div className={styles.img}>
                <Image src={imagenes} className={styles.imagenn} />
            </div>
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
    );
}

function Filap() {
    return (
        <div>
            <EstructuraFila imagenes={img2} texto="1 sesión de fotos al mes 4 post mensuales en el feed 8 historias mensuales organización de highlights Pro Copyright" clase={styles.texto} precioD="250" precioQ="1,755" paquete="START" account="PERSONAL ACCOUNT" />
            <EstructuraFila imagenes={img3} texto="1 sesión de fotos al mes 8 post mensuales en el feed 12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics." clase={styles.texto} precioD="470" precioQ="2,925" paquete="GROW" account="PERSONAL ACCOUNT" />
            <EstructuraFila imagenes={img4} texto="1 sesión de fotos al mes 8 post mensuales en el feed 12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics." clase={styles.texto3} precioD="585" precioQ="4,095" paquete="MANTAIN" account="PERSONAL ACCOUNT" />
        </div>
    );
}
function EstructuraOutside({ imagenes, texto, clase, precioD, precioQ, paquete, account, claseTitulo,todo,img }) {
    return (
        <div className={todo}>
            <div className={img}>
                <Image src={imagenes} className={styles.imagennO} />
            </div>
            <h1 className={claseTitulo}>{account}</h1>
            <p className={clase}>{texto}</p>
            <div className={styles.botonesO}>
                <h1 className={styles.paqueteO}>{paquete}</h1>
                <div className={styles.preciosO} >
                    <button type="button" className={styles.precioDO}><p1>${precioD}</p1></button>
                    <button type="button" className={styles.precioQO}><p1>Q{precioQ}</p1></button>
                </div>
            </div>
        </div>
    );
}
function EstructuraOutsideD({ imagenes, texto, clase, paquete, account, claseTitulo,todo,img }) {
    return (
        <div className={todo}>
            <div className={img}>
                <Image src={imagenes} className={styles.imagennO} />
            </div>
            <h1 className={claseTitulo}>{account}</h1>
            <p className={clase}>{texto}</p>
            <div className={styles.botonesO2}>
                <h1 className={styles.paqueteO}>{paquete}</h1>
                <div className={styles.cajasPrecios}>
                    <div>
                        <button type="button" className={styles.OprecioD}><p1>1x$50</p1></button>
                        <button type="button" className={styles.OprecioQ}><p1>1xQ350</p1></button>
                    </div>
                    <div>
                        <button type="button" className={styles.OprecioD}><p1>2x$86</p1></button>
                        <button type="button" className={styles.OprecioQ}><p1>2xQ600</p1></button>
                    </div>
                    <div>
                        <button type="button" className={styles.OprecioD}><p1>4x$286</p1></button>
                        <button type="button" className={styles.OprecioQ}><p1>4xQ2,000</p1></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Outside() {
    return (
        <div>
            <EstructuraOutside img={styles.imgO} todo={styles.todoOF1} claseTitulo={styles.tituloO} imagenes={imagO} texto="" clase={styles.textoO1}precioD="250" precioQ="1,755" paquete="SESIÓN DE FOTOS" account="FOTOGRAFÍA" />
            <EstructuraOutsideD img={styles.imgO4} todo={styles.todoOF4} claseTitulo={styles.tituloO2} imagenes={imag1} texto="" clase={styles.textoO1} precioD="156" precioQ="1,095" paquete="VIDEO PACK" account="VIDEOGRAFÍA" />
            <EstructuraOutside img={styles.imgO1} todo={styles.todoOF2} claseTitulo={styles.tituloO2} imagenes={imag2} texto="Optimiza tu presencia en línea con nuestro análisis de mercado y estrategia digital. Aumenta leads, tráfico y conversiones mientras te destacas frente a la competencia." clase={styles.textoO} precioD="156" precioQ="1,095" paquete="DIGITAL AUDIT" account="MEDIA MANAGMENT" />
            <EstructuraOutside img={styles.imgO1} todo={styles.todoOF3} claseTitulo={styles.tituloO} imagenes={imag3} texto="Construccion de un buyer perona para una comunicacion efectiva" clase={styles.texto2O} precioD="137" precioQ="959" paquete="COSTUMER IDENTIFICATION" account="MEDIA MANAGMENT" />
        </div>
    );
}




export { Header, PaletaDeColores, Filap, EstructuraFila, Precios3x2,Outside, EstructuraOutside };