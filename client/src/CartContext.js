import React, { useState } from "react"
import { getCartCookie, addItemToCookie, clearCartCookie } from "./service/SessionCooke";

const CartContext = React.createContext({
    cartItems: [],
    setCartItems: () => { }
});

function CartContextProvider(props) {

    const [cartItems, setCartItems] = useState(getCartCookie())

    const addItemToCart = (item) => {
        addItemToCookie(item)
        setCartItems(old => [...old, item])
    }

    const itemsCount = () => {
        return cartItems.length
    }

    const clearCart = () => {
        clearCartCookie()
        setCartItems([])
    }

    const value = { cartItems, addItemToCart, itemsCount, clearCart }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider }