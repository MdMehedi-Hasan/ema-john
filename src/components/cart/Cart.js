import React from 'react';
import './cart.css'

const Cart = (props) => {
    console.log(props.cart)
    let price = 0;
    let shipping = 0;
    let grandTotal = 0;
    let singleProduct = props.cart
    for (const array of singleProduct) {
        const newPrice = price + array.price
        price = newPrice
        const newShipping = shipping + array.shipping
        shipping = newShipping
        grandTotal = newPrice + newShipping
    }
    return (
        <div className='cart-wrapper'>
            <div className="sticky">
            <h3>Order summary</h3>
                <p>Selected items: {props.cart.length}</p>
                <p>Total price: $ {price}</p>
                <p>Total shipping charge: ${shipping}</p>
                <p>Grand Total: ${grandTotal}</p>
            <button className='clear'>Clear cart</button>
            <button className='review'>Review order</button>
            </div>
        </div>
    );
};

export default Cart;