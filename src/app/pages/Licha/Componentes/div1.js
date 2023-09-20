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
    );
}


export default Imagediv1;

export {BloquePrecios1, BloquePrecios2, Imagendiv2};




