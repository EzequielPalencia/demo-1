import React, { useState, useEffect } from 'react';

function CartItem() {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const productoJSON = localStorage.getItem('cart');
        if (productoJSON) {
            const parsedProducto = JSON.parse(productoJSON);
            setProducto(parsedProducto);
            console.log(parsedProducto);
        }
    }, []);

    const showProducts = () => {
        console.log(producto);
    }

    return (
        <div>
            <button onClick={() => showProducts()}> Mostrar los productos </button>
        </div>
    );
}

export default CartItem;
