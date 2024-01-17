import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const clickMenos3 = () => {
    setNumClicks(nroClicks -3);
    console.log("click-3");
  }
  const clickMas3 = () => {
    setNumClicks(nroClicks + 3);
    console.log("click+3");
  }
  const clickMenos1 = () => {
    setNumClicks(nroClicks - 1);
    console.log("click-1");
  }
  const clickMas1 = () => {
    setNumClicks(nroClicks + 1);
    console.log("click+1");
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar");
  }
  const desaparecer = () => {
    delete("click-3");
    console.log("Desaparecer un boton");
  }
  const [ show ,setShow] = useState(true);
  const mostrar =() => {
    setShow (!show)
    }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickMenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickMas3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickMenos1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickMas1} />
          </div>
          <Boton texto="Desaparecer" esBotonClick={false}
            funcionClick={desaparecer} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
      </div>
    </div>
  );

  }
export default App;
