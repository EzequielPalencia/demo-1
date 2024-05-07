import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import InicioContenido from './InicioContenido';
import Login from './Login';
import './App.css';
import ListaProductos from './ListaProductos';
import RegistroLogin from './RegistroLogin';
import CartItem from './CartItem';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="products" element={<InicioContenido />} />
          <Route path="products" element={<ListaProductos />} />
          <Route path='/cart' element={<CartItem />}></Route>

          <Route path="register" element={<RegistroLogin/>} />
          

          <Route path="register" element={<RegistroLogin />} />

          <Route path="cart" element={<CartItem />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
