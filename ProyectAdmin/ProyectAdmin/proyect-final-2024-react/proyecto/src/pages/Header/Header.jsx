import React, { useState } from 'react';
import './Header.css'; // Para incluir estilos en CSS

function Header() {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que necesites con el título
    console.log("Título ingresado: ", title);
  };

  return (
    <div className="header-form-container">
      {/* Título del formulario */}
      <h1 className="form-title">Ingresa el Título de la Bitácora:</h1>

      {/* Formulario para ingresar el título */}
      <form onSubmit={handleSubmit} className="title-form">
        <input
          type="text"
          placeholder="Escribe el título aquí..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Header;
