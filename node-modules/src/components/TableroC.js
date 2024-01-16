import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';
function TableroC() {
    //llama a los cuadros porque ellos viven en el array
    //los estados pueden modificarse en la forma que se quiera   
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    //Funcion
    const click = (i) => {
        //los ... cuadros es para decir lo que quiero copiar
        const cuadrosTemp = [...cuadros];
        //El valor de i sera igual a O
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador === "X") {
            setJugador("O");
        } else {
            setJugador("X");
        }
    }
    return (
        <div className='juego'>
            <h1>Siguiente Jugador: {jugador}</h1>
            <div className="tablero">
                //si toco el 1 o el 8 solo modifique el 1 o el 8, se envia los indices
                //este es un estado array con indices
                <CuadroB valor={cuadros[0]} funcion={() => click(0)} />
                <CuadroB valor={cuadros[1]} funcion={() => click(1)} />
                <CuadroB valor={cuadros[2]} funcion={() => click(2)} />
                <CuadroB valor={cuadros[3]} funcion={() => click(3)} />
                <CuadroB valor={cuadros[4]} funcion={() => click(4)} />
                <CuadroB valor={cuadros[5]} funcion={() => click(5)} />
                <CuadroB valor={cuadros[6]} funcion={() => click(6)} />
                <CuadroB valor={cuadros[7]} funcion={() => click(7)} />
                <CuadroB valor={cuadros[8]} funcion={() => click(8)} />
            </div>
        </div>
    );
}
export default TableroC;