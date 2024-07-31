import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useEffect } from 'react';
import Summary from './Summary';

const Cart = () => {
    const { removeFromCart, cartItems, emptyCart } = useContext(CartContext);
    const[totalPrice, setTotalPrice] = useState(0);
    const[isModalOpen, setIsModalOpen] = useState(false);

    const handleSetIsModalOpen = () =>{
        setIsModalOpen(true)
    }

    const handleDeleteItem = (name) => {
        removeFromCart(name);
    };

    const handleNewOrder = () =>{
        emptyCart();
        setIsModalOpen(false);
    }

    useEffect(() => {
        const price = cartItems
            .map(item => item.quantity * item.price)
            .reduce((x, y) => x + y, 0);
        setTotalPrice(price);
    }, [cartItems]);

    useEffect(() => {
        if(isModalOpen){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    return (
        <section className="cart">
            <h1 className="cart-title">Your Cart({cartItems.length})</h1>
            {cartItems.length === 0 ? (
                <>
                    <img className="empty-cart-icon" src="assets/images/illustration-empty-cart.svg" alt="Empty cart" />
                    <p>Your added items will appear here</p>
                </>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.name}>
                            <div className="cart-product-details-wrapper">
                                <div className="cart-product-details">
                                    <b className="cart-product-name">{item.name}</b>
                                    <p className="cart-product-quantity">{item.quantity}x </p>
                                    <p className="cart-product-price">@{parseFloat(item.price).toFixed(2)}</p>
                                    <p className="cart-product-total-price">${parseFloat(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button onClick={() => handleDeleteItem(item.name)}>
                                    <img src="assets/images/icon-remove-item.svg" alt="Remove item icon"></img>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length !== 0 ? (
                <>
                    <div className="cart-all-products-total-price">
                        <p>Order total:</p>
                        <h2>${parseFloat(totalPrice).toFixed(2)}</h2>
                    </div>
                    <div className="carbon-neutral">
                        <img src="assets/images/icon-carbon-neutral.svg" alt="Carbon neutral"/>
                        <p>This is a <b>carbon-neutral</b> delivery</p>
                    </div>
                    <button className="confirm-order" onClick={handleSetIsModalOpen}>Confirm order</button>
                    <Summary
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        orderSummary={cartItems}
                        onNewOrder={handleNewOrder}
                        totalPrice={totalPrice}
                    />
                </>
            ) : null}

        </section>
    );
};

export default Cart;
