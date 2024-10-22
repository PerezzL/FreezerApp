import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {

  const navigate = useNavigate();

  const handleDataEntry = () => {
    navigate('/carga-datos');v
  };

  const handleStatistics = () => {
    // Lógica para ir a la página de estadísticas relevantes
  };

  const handleEmployeeManagement = () => {
    navigate('/manejo-empleados');
  };

  return (
    <div className="home-container">
      <h1>Traqueo de Productos Congelados</h1>
      <div className="button-container">
        <Button text="Carga de Datos" onClick={handleDataEntry} />
        <Button text="Estadísticas Relevantes" onClick={handleStatistics} />
        <Button text="Manejo de Empleados" onClick={handleEmployeeManagement} />
      </div>
    </div>
  );
};

export default Home;
