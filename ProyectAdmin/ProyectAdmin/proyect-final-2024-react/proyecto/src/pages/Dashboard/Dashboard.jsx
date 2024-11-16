
import React from 'react';
import './Dashboard.css'; // Importa los estilos de Dashboard.css

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      {children}
    </div>
  );
};

export default Dashboard;