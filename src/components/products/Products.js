/* import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className='grid'>
            {
                products.map(product => <Product key ={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products; */