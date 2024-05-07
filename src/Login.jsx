import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder='Ingrese su email.'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            placeholder='Ingrese su contraseña.'

            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
};

export default Login;
