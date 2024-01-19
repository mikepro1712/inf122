import React from 'react';

const BotonI= ({ todo, onImprimir }) => {
  return (
    <li>
      {todo}
      <button onClick={onImprimir}>Ingresar</button>
    </li>
  );
};

export default BotonI;