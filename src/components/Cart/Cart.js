import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let tax = Math.round(total / 10);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 5.99;
    }

    let grandTotal = total + shipping + tax;
    return (
        <div className="cart-area">
            <h4>Order Summary</h4>
            <p>Item Ordered : <span>${cart.length}</span></p>
            <p>Product Price : <span>${total}</span></p>
            <p>Shipping Price : <span>${shipping}</span></p>
            <p>Tax + Vat : <span>${tax}</span></p>
            <hr/>
            <p>Total Price : <span>${grandTotal}</span></p>
        </div>
    );
};

export default Cart;