import React, { useState, useEffect } from 'react';
import './ListaProductos.css';

const ListaProductos = ({ productos }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="lista-productos">
      <h2>Nuestros Productos</h2>
      <div className="productos">
        {productos
          .filter(producto => producto !== null) // Filtrar elementos nulos
          .map((producto, index) => (
            <div key={index} className="producto">
              <img src={producto.image} alt={producto.title} className="producto-imagen" />
              <div className="producto-detalle">
                <h3 className="producto-titulo">{producto.title}</h3>
                <p className="producto-precio">${producto.price}</p>
              </div>
              <div className="buttons">
                <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListaProductos;
