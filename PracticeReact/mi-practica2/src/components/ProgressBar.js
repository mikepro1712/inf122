import React, { useState } from 'react';
import '../style/ProgressBar.css'; // Asegúrate de tener un archivo CSS para los estilos

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    value = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100); // Asegurarse de que el valor esté entre 0 y 100
    setPercentage(value);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <div className="progress-text">{`${percentage}%`}</div>
      </div>
      <input
        type="number"
        value={percentage}
        onChange={handleInputChange}
        min="0"
        max="100"
      />
    </div>
  );
};

export default ProgressBar;