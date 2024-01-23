import React from 'react';
import style from './Contador.module.css';
//style es un bojeto para estilos
function Contador({ nroClicks, mostrar }) {
    return (
        //el style va en llover al invocar
        mostrar ? <div className={style.contador}>{nroClicks}</div> : null
    );
}

export default Contador;