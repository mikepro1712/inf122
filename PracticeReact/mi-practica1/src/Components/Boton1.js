import '../style/Boton1.css';

function Boton({ texto, esBotonClick, funcionClick }) {
    return (
        <button className={esBotonClick ? "boton-click" : "boton-desaparecer"}
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;