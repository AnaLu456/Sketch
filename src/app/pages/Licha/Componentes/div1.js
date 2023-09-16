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
function BloquePrecios() {
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



export default Imagediv1;
export {BloquePrecios};




