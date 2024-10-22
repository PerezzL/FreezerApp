import React, { useState } from 'react';
import './employeeManagement.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'Juan', lastName: 'Pérez', position: 'Gerente' },
    { id: 2, firstName: 'Ana', lastName: 'García', position: 'Vendedora' }
  ]);
  const [newEmployee, setNewEmployee] = useState({ firstName: '', lastName: '', position: '' });
  const [showNewEmployeeForm, setShowNewEmployeeForm] = useState(false);
  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const toggleEmployeeDetails = (id) => {
    setExpandedEmployee(expandedEmployee === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    if (newEmployee.firstName && newEmployee.lastName && newEmployee.position) {
      setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
      setNewEmployee({ firstName: '', lastName: '', position: '' });
      setShowNewEmployeeForm(false);
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="employee-management-container">
      <h2>Manejo de Empleados</h2>
      <button onClick={() => setShowNewEmployeeForm(!showNewEmployeeForm)}>
        {showNewEmployeeForm ? 'Cancelar' : 'Agregar Nuevo Empleado'}
      </button>
      {showNewEmployeeForm && (
        <form onSubmit={addEmployee} className="new-employee-form">
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={newEmployee.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={newEmployee.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Puesto"
            value={newEmployee.position}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Agregar Empleado</button>
        </form>
      )}
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-dropdown">
            <div onClick={() => toggleEmployeeDetails(employee.id)} className="employee-header">
              {`${employee.firstName} ${employee.lastName} - ${employee.position}`} 
              <span className="arrow">{expandedEmployee === employee.id ? '▲' : '▼'}</span>
            </div>
            {expandedEmployee === employee.id && (
              <div className="employee-details">
                <p>Nombre: {employee.firstName}</p>
                <p>Apellido: {employee.lastName}</p>
                <p>Puesto: {employee.position}</p>
                <button onClick={() => removeEmployee(employee.id)}>Eliminar</button>
                {/* Aquí puedes agregar la lógica para modificar el empleado */}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => window.history.back()}>Volver al Home</button>
    </div>
  );
};

export default EmployeeManagement;


