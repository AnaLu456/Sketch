"use client";
import React, { useState } from 'react';
import styles from '../Componentes/header.module.css';
import Image from 'next/image';
import img1 from '../imagenes/Wave.png'

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

export {Header,PaletaDeColores};