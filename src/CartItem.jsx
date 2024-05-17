import React, { useState, useEffect } from 'react';
import './CartItem.css'

function CartItem() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                setCart(parsedCart);
                calculateTotalPrice(parsedCart); // Calcular el precio total al establecer el carrito
            } catch (error) {
                console.error('Error parsing cart data:', error);
            }
        }
    }, []);

    const calculateTotalPrice = (cart) => {
        const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        setTotalPrice(totalPrice);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart); // Recalcular el precio total después de eliminar un producto
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            calculateTotalPrice(updatedCart); // Recalcular el precio total después de disminuir la cantidad
        }
    };

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart); // Recalcular el precio total después de aumentar la cantidad
    };

    
    const handleCheckout = () => {
        // Aquí puedes implementar la lógica para el proceso de compra
        console.log('Procesando compra...');
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.images} alt={item.name} style={{ width: '70px' }} /></td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => decreaseQuantity(index)} className="quantity-button">-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button onClick={() => increaseQuantity(index)} className="quantity-button">+</button>
                            </td>
                            <td>
                                <button onClick={() => removeFromCart(index)} className="action-button">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total: ${totalPrice}</p>
            <button onClick={handleCheckout} className="checkout-button">Realizar compra</button>
        </div>
    );
}

export default CartItem;
