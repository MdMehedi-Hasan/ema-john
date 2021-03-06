import React from 'react';
import './product.css'

const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product;
    return (
            <div className="perProduct">
            <img src={img} alt="" />
            <div className="body">
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Manufactured by: {seller}</p>
            <p>Ratings: {ratings} stars</p>
            <button onClick={()=>props.func(props.product)}>Add to Cart</button>
            </div>
            </div>
    );
};

export default Product;