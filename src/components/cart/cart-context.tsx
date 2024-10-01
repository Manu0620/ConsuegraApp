"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

const CART_COOKIE_KEY = "user_cart";

interface CartItem {
    id: string;
    name: string;
    price: string;
    portrait: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    subtotal: number;
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {


    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        // Load cart from cookies when the component mounts
        const savedCart = Cookies.get(CART_COOKIE_KEY);
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => {
            return acc + parseFloat(item.price) * item.quantity;
        }, 0);
        
        setSubtotal(newSubtotal);
    }, [cartItems]);

    const addToCart = (product: CartItem) => {
        const updatedCart = [...cartItems];

        const existingProductIndex = updatedCart.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity += product.quantity;
        } else {
            updatedCart.push(product);
        }

        setCartItems(updatedCart);
        // Save the updated cart to cookies
        Cookies.set(CART_COOKIE_KEY, JSON.stringify(updatedCart), { expires: 7 }); // Expires in 7 days
    };

    const removeFromCart = (productId: string) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
        Cookies.set(CART_COOKIE_KEY, JSON.stringify(updatedCart), { expires: 7 });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                item.quantity = quantity;
            }
            return item;
        });

        setCartItems(updatedCart);
        Cookies.set(CART_COOKIE_KEY, JSON.stringify(updatedCart), { expires: 7 });
    };

    return (
        <CartContext.Provider value={{ cartItems, subtotal, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {

    
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};