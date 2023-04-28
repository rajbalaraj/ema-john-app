import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ handleAddToCart, product }) => {
    // console.log(props)
    const { img, name, price, seller, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-text'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p> Manufacturer:{seller}</p>
                <p> Ratings:{ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'><p className='btn-text'>Add To Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Product;