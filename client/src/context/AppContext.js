import React, { useState } from "react"
import AlertSnackbar from "../components/common/AlertSnackbar";
import { getCartCookie, setCartCookie, clearCartCookie, getCartCookieItemsCount, setUserCookie, clearUserCookie, getUserCookie, setJwtCookie } from "./SessionCookies";

const AppContext = React.createContext({
    cartItems: [],
    setCartItems: () => { },
    currentUser: {},
    setCurrentUser: () => { }
});

function AppContextProvider(props) {
    const [cartItems, setCartItems] = useState(getCartCookie())
    const [cartItemsCount, setCartItemsCount] = useState(getCartCookieItemsCount())
    const [snackbarSeverity, setSnackbarSeverity] = useState()
    const [snackbarMessage, setSnackbarMessage] = useState()
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(getUserCookie())

    const addItemToCart = (newPizza) => {
        let newCart = [...cartItems]

        if (newCart.filter(p => p.id === newPizza.id).length > 0) {
            newCart.forEach(function (item, index) {
                if (item.id === newPizza.id)
                    newCart[index].amount = item.amount + newPizza.amount;
            })
        } else {
            newCart.push(newPizza)
        }

        saveCart(newCart)
    }

    const removeItem = (id) => {
        let cart = [...cartItems]
        cart = cart.filter(function (item) {
            return item.id !== id
        })

        saveCart(cart)
    }

    const saveCart = (newCart) => {
        setCartItems(newCart)
        setCartCookie(newCart)
        itemsCount(newCart)
    }

    const itemsCount = (cart) => {
        let itemsCount = 0
        cart.forEach(function (item, index) {
            itemsCount += item.amount
        })
        setCartItemsCount(itemsCount)
    }

    const changeItemAmount = (id, newAmount) => {
        if (newAmount < 1) {
            removeItem(id)
        } else {
            let cart = [...cartItems]
            cart.forEach(function (item, index) {
                if (item.id === id)
                    cart[index].amount = newAmount;
            })
            saveCart(cart)
        }
    }

    const clearCart = () => {
        clearCartCookie()
        setCartItems([])
        setCartItemsCount(0)
    }

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message)
        setSnackbarSeverity(severity)
        setSnackbarOpen(true)
    }

    const closeSnackbar = () => {
        setSnackbarOpen(false)
    }

    // USER

    const loginUser = (data) => {
        setCurrentUser(data)
        setUserCookie(data)
    }

    const logoutUser = () => {
        setCurrentUser(null)
        clearUserCookie()
        clearCart()
    }

    const getUserRole = () => {
        return currentUser.role
    }

    const setJwtToken = (jwt) => {
        setJwtCookie(jwt)
    }

    const value = { cartItems, addItemToCart, removeItem, cartItemsCount, clearCart, showSnackbar, changeItemAmount, currentUser, loginUser, logoutUser, getUserRole, setJwtToken }

    return (
        <AppContext.Provider value={value}>
            <AlertSnackbar
                severity={snackbarSeverity}
                message={snackbarMessage}
                openSnackbar={snackbarOpen}
                handleClose={closeSnackbar}
            />
            {props.children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider }