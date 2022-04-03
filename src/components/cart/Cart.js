import React from 'react';
import './cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    return (
        <div className='cart-wrapper'>
            <div className="sticky">
            <h3>Order summary</h3>
                <p>Selected items: {props.cart.length}</p>
                <p>Total price: $</p>
            <p>Total shipping charge: $</p>
            <p>Grand Total: $</p>
            <button className='clear'>Clear cart</button>
            <button className='review'>Review order</button>
            </div>
        </div>
    );
};

export default Cart;