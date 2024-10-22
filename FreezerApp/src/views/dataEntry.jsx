import React, { useState, useEffect } from 'react';
import './dataEntry.css';

const DataEntry = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [temperature, setTemperature] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Al montar el componente, obtenemos la fecha y hora actuales
    const now = new Date();
    const formattedDateTime = now.toLocaleString('es-ES', {
      dateStyle: 'short',
      timeStyle: 'short'
    });
    setCurrentDateTime(formattedDateTime);
  }, []);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para enviar los datos a la base de datos
    const data = {
      product: selectedProduct,
      temperature: parseFloat(temperature),
      dateTime: currentDateTime
    };
    console.log('Datos enviados:', data);
    alert('Datos enviados a la base de datos');
    // Lógica de envío a la base de datos usando fetch o Axios
  };

  return (
    <div className="data-entry-container">
      <h2>Carga de Datos de Producto</h2>
      <form onSubmit={handleSubmit} className="data-entry-form">
        {/* Dropdown para seleccionar el producto */}
        <label htmlFor="product">Producto:</label>
        <select id="product" value={selectedProduct} onChange={handleProductChange} required>
          <option value="">Seleccione un producto</option>
          <option value="Producto 1">Producto 1</option>
          <option value="Producto 2">Producto 2</option>
          <option value="Producto 3">Producto 3</option>
          {/* Añadir más productos según sea necesario */}
        </select>

        {/* Campo numérico para ingresar la temperatura */}
        <label htmlFor="temperature">Temperatura (°C):</label>
        <input
          type="number"
          id="temperature"
          value={temperature}
          onChange={handleTemperatureChange}
          step="0.1"
          placeholder="Ingrese la temperatura"
          required
        />

        {/* Campo no modificable que muestra la fecha y hora actuales */}
        <label htmlFor="date-time">Fecha y Hora:</label>
        <input type="text" id="date-time" value={currentDateTime} readOnly />

        {/* Botón para enviar los datos */}
        <button type="submit" className="submit-button">Enviar Datos</button>
      </form>
    </div>
  );
};

export default DataEntry;
