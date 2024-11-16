import React from 'react';
import Bitacora from './pages/Bitacora/Bitacora';
import NavBar from './pages/NavBar/NavBar';
import EspecieDetalle from './pages/EspecieDetalle/EspecieDetalle';
import './App.css'; // Importa los estilos de App.css

function App() {
  return (
    <div className="App">
      <NavBar>
        <div className="content">
          <div className="small-bitacora">
            <EspecieDetalle />
          </div>
        </div>
      </NavBar>
    </div>
  );
}

export default App;