import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // Calculate shopping cart price
    let total = 0;
    // shipping 
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>


            <div className="cart-info">
                <h3>Order Summary</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

            </div>
        </div>
    );
};

export default Cart;