import React from 'react';
import ProductCarousel from './ProductCarousel';
import imagen1 from './img/Barbacoa 1 puesto.png'; 
import imagen2 from './img/Barbacoa 2 puestos.jpeg'; 
import imagen3 from './img/Barbacoa 3 puestos.jpg'; 


const Carousel = () => {

  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 100.000,
      image: imagen1
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 100.000,
      image: imagen2
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 100.000,
      image: imagen3
    }
  ];

  return (
    <div className="product-carousel">
      <h2>Productos Destacados</h2>
      <ProductCarousel products={products} />
    </div>
  );
};

export default Carousel;
