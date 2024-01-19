import React from 'react';
import '../styles/Botones1.css';


function Botones({funClick, text}) {
    return (
        <button  onClick={funClick}>
            {text}
        </button>
    )
}

export default Botones;