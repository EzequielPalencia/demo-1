import React, { useState, useEffect } from 'react';
import './ListaProductos.css';

const ListaProductos = ({ productos }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error al leer el carrito del almacenamiento local:', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart);
  };

  return (
    <div className="lista-productos">
      <h2>Nuestros Productos</h2>
      <div className="productos">
        {productos
          .filter(producto => producto !== null) 
          .map((producto, index) => (
            <div key={index} className="producto">
              <img src={producto.images} alt={producto.title} className="producto-imagen" />
              <div className="producto-detalle">
                <h3 className="producto-titulo">{producto.title}</h3>
                <p className="producto-precio">${producto.price}</p>
              </div>
              <div className="buttons">
                <button onClick={() => addToCart(producto)} className="add-to-cart-button">Agregar al carrito</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListaProductos;
