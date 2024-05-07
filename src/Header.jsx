import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo de estilos CSS para el encabezado
import Logo_Rivera from "./img/Logo-removebg-preview.png";

const Header = () => {
 

 
   
    return (
    <header className="header">
        <img src={Logo_Rivera} alt="" className="Logo_Rivera" />
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/products" className="nav-link">Productos</Link></li>
          <li><Link to="/login" className="nav-link">Iniciar sesión</Link></li>
          <li><Link to="/register" className="nav-link">Registrarse</Link></li>
          <li><Link to="/cart" className="nav-link">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
