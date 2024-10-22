import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/HomePage'; // Asegúrate de que la ruta a tu componente Home sea correcta
import DataEntry from './views/dataEntry';
import EmployeeManagement from './views/EmployeeManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carga-datos" element={<DataEntry />} />
        <Route path="/manejo-empleados" element={<EmployeeManagement />} />
        {/* Puedes agregar otras rutas aquí para futuras vistas */}
      </Routes>
    </Router>
  );
};

export default App;
