import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo de estilos CSS para el encabezado
import Logo_Rivera from "./img/Logo-removebg-preview.png";

const Header = () => {

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  const logout = () => {
    localStorage.removeItem('token');

  };

  return (
    <header className="header">
      <img src={Logo_Rivera} alt="Logo Rivera" className="Logo_Rivera" />
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/Inicio" className="nav-link">Inicio</Link></li>
          <li><Link to="/products" className="nav-link">Productos</Link></li>
          {!isLoggedIn() && (
            <>
              <li><Link to="/login" className="nav-link">Iniciar sesión</Link></li>
              <li><Link to="/register" className="nav-link">Registrarse</Link></li>
            </>
          )}
          <li><Link to="/cart" className="nav-link"><img src="carritocompras.png" alt="" height="30" /></Link></li>
          {isLoggedIn() && (
            <>
              <a href='' className="nav-link" onClick={logout}>Logout</a>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

