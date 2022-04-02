import React from 'react';
import './product.css'

const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product

    return (
        <div className='perProduct'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: ${price}</h6>
            <p>Manufactured by: {seller}</p>
            <p>Ratings: {ratings}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;