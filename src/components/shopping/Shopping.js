import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shopping.css'

const Shopping = () => {
    const [products, setProducts] = useState([])
    const [cartt, setCart] = useState([])
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const cart = (products) => {
        // console.log(products)
        const newCart = [...cartt, products]
        setCart(newCart)
    }
    return (
        <div className='shopping'>
            <div className="pro-con">
            {
                products.map(product => <Product key ={product.id} product={product} func={cart}></Product>)
            }
            </div>
            
            <Cart cart ={cartt}></Cart>
        </div>
    );
};

export default Shopping;