import style from './Boton.module.css';

function Boton({ texto, esBotonClick, funcionClick }) {
//a traves de style se accede a los estilos, como haya - se usa styles separados
    return (
        <button className={esBotonClick ? style["boton-click"] :style ["boton-reinciar"]}
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;