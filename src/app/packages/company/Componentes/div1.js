'use client'
import React, {useState} from 'react';
import styles from '../Componentes/div1.module.css';

const Imagediv1 = () => {
    return (

        <div className={styles.section}>
            <div className={styles.Bloquetexto}>
            <h1> COMPANY ACCOUNT</h1>
        </div>
        
        </div>
       
     
    )
}
function BloquePrecios1() {
    return (
        <div className={styles.BloqueP}>
            <div className={styles.Bloquetp}>
           <p>
           1 sesión del fotos al mes
           16 post mensuales en el feed
           12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics Client Service. 
           </p>
           </div>
           <div className={styles.bloque12}>
             <div className={styles.Cuadroprecios}>
                <div className={styles.Dinero}>
                    <h1>$585</h1>
                    <h1>Q4,095</h1>
                </div>
            </div>
            <div className={styles.Preciost}>
                <h1>MANTAIN PACK</h1>
            </div>
            </div>
        </div>
    );
}

const Imagendiv2 = () =>{
    return (

        <div className={styles.section2}>
            <div className={styles.Bloquetexto2}>
            <h1> COMPANY ACCOUNT</h1>
        </div>
       
        </div>
       
     
    )


}
function BloquePrecios2() {
    return (
        <div className={styles.BloqueP2}>
            <div className={styles.Bloquetp2}>
           <p>
           1 sesión del fotos al mes
           16 post mensuales en el feed
           12 historias mensuales Organización de highlights Pro Copyright Monthly Analytics Client Service. 
           </p>
        </div>

        <div className={styles.bloquep22}>
             <div className={styles.Cuadroprecios2}>
                <div className={styles.Dinero2}>
                    <h1>$978</h1>
                    <h1>Q6,850</h1>
                </div>
            </div>
            <div className={styles.Preciost2}>
                <h1>IDEAL PACK</h1>
            </div>
            </div>
        </div>
    );
}

const Imagendiv3 = () =>{
    return (

        <div className={styles.section3}>
            <div className={styles.Bloquetexto3}>
            <h1> COMPANY ACCOUNT</h1>
        </div>
        
        </div>
       
     
    )

}

function BloquePrecios3() {
    return (
        <div className={styles.BloqueP3}>
            
           <div className={styles.Bloquetp3}>
           <p>
           2 sesión del fotos al mes,
           20 post mensuales en el feed, 
           (12 fotos y 8 reels) 
           28 historias al mes 
           + organización de highlights Pro Copyright
            Monthly Analytics Client Service Adds Consultancies. 
           </p>
        </div>
        
        <div className={styles.bloquep32}>
             <div className={styles.Cuadroprecios3}>
                <div className={styles.Dinero3}>
                    <h1>$1,170</h1>
                    <h1>Q8,190</h1>
                </div>
            </div>
            <div className={styles.Preciost3}>
                <h1>LIVE PACK</h1>
            </div>
        </div>
        </div>
    );
}



export default Imagediv1;

export {BloquePrecios1, BloquePrecios2, Imagendiv2,Imagendiv3, BloquePrecios3};




