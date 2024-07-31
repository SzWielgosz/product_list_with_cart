import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const updateCartItemQuantity = (name, quantity) => {
        setCartItems((prevItems) => {
            if (quantity === 0) {
                return prevItems.filter(item => item.name !== name);
            }
            return prevItems.map(item =>
                item.name === name ? { ...item, quantity } : item
            );
        });
    };

    const removeFromCart = (name) => {
        setCartItems((prevItems) => prevItems.filter(item => item.name !== name));
    };

    const emptyCart = () =>{
        setCartItems([]);
    }

    const value = {
        cartItems,
        addToCart,
        updateCartItemQuantity,
        removeFromCart, 
        emptyCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
