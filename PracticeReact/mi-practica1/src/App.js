import './App1.css';
import Boton from './Components/Boton1';
import { useState } from 'react';
function App1() {
  const [show, setShow] = useState(true);
  const mostrar = () => {
    setShow(!show);
  }
  
  return (
    <section className="App1">
      <div className="contenedor-principal">
        <div className='Boton'>
          <Boton texto="Mostrar/Ocultar" funcionClick={mostrar} />
        </div>
        <span className='texto'> 
                 <p className={show ? "visible" : "oculto"}>Welcome To React Challenges</p>
        </span>
      </div>
    </section>
  );

}
export default App1;
