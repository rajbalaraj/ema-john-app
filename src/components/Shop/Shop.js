import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    // Load data -step-1
    const [products, serProducts] = useState([]);


    const [cart, setCart] = useState([]);
    // step-2 

    useEffect(() => {
        // step-3 
        fetch('products.json')
            .then(res => res.json())

            .then(data => serProducts(data))
    }, [])


    // side effect

    useEffect(() => {
        const shoppingCart = getShoppingCart();
        // console.log(shoppingCart)
        const savedCart = [];
        for (const id in shoppingCart) {
            // console.log(id)
            const addProduct = products.find(product => product.id === id);
            // console.log(addProduct)
            if (addProduct) {
                const quantity = shoppingCart[id];
                addProduct.quantity = quantity;
                // console.log()
                savedCart.push(addProduct);
            }
        }
        setCart(savedCart)
    }, [products])
    // handle add to cart 
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id)

    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        ></Product>)}

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}


                > </Cart>




            </div>
        </div>
    );
};

export default Shop;