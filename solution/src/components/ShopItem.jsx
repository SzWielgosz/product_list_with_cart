import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

export default function ShopItem({ name, imgSrc, altText, price }) {
    const { addToCart, updateCartItemQuantity, cartItems } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        addToCart({ name, imgSrc, altText, price});
        console.log(cartItems)
        setQuantity(1);
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartItemQuantity(name, newQuantity);
    };

    const handleDecreaseQuantity = () => {
        const newQuantity = quantity > 1 ? quantity - 1 : 0;
        setQuantity(newQuantity);
        updateCartItemQuantity(name, newQuantity);
    };

    useEffect(() => {
        const item = cartItems.find(item => item.name === name);
        setQuantity(item ? item.quantity : 0);
    }, [cartItems, name]);

    return (
        <div className="shop-item">
            <div className="image-container">
                <img src={imgSrc} alt={altText} />
                {quantity === 0 && (
                    <button className="add-cart-button" onClick={handleAddToCart}>
                        <img src="assets/images/icon-add-to-cart.svg" alt="add-to-cart"></img>
                        Add to cart
                    </button>
                )}

                {quantity > 0 ? (
                    <div className="quantity-controls">
                        <button className="decreaseQuantity" onClick={handleDecreaseQuantity}>
                            <img src="assets/images/icon-decrement-quantity.svg" alt="decrease-quantity"></img>
                        </button>

                        <p>{quantity}</p>

                        <button className="increaseQuantity" onClick={handleIncreaseQuantity}>
                            <img src="assets/images/icon-increment-quantity.svg" alt="increase-quantity"></img>
                        </button>
                    </div>
                ) : null}
            </div>

            <div className="description">
                <p>{altText}</p>
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}
