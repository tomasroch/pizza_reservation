import * as Cookies from "js-cookie";

// source: https://www.jmfurlott.com/handling-user-session-react-context/
const CART_COOKIE = 'cartItems'
const USER_COOKIE = 'user'
const JWT_COOKIE = 'jwt'

export const setCartCookie = (cartItems) => {
    Cookies.remove(CART_COOKIE)
    Cookies.set(CART_COOKIE, cartItems)
}

export const addItemToCookie = (cartItem) => {

    let cartItems = getCartCookie()
    cartItems.push(cartItem)

    Cookies.set(CART_COOKIE, cartItems)
}

export const getCartCookie = () => {
    const cartItems = getCookieByName(CART_COOKIE)
    return cartItems ? JSON.parse(cartItems) : []
}

export const getCartCookieItemsCount = () => {
    let cartItems = getCartCookie();

    let itemsCount = 0
    cartItems.forEach(function (item, index) {
        itemsCount += item.amount
    })
    return itemsCount
}

export const clearCartCookie = () => {
    Cookies.remove(CART_COOKIE);
}

// User

export const getUserCookie = () => {
    const user = getCookieByName(USER_COOKIE)
    return user ? JSON.parse(user) : undefined
}

export const setUserCookie = (user) => {
    setCookieByName(USER_COOKIE, user)
}

export const clearUserCookie = () => {
    Cookies.remove(USER_COOKIE)
    clearJwtCookie()
}

// jwt

export const getJwtCookie = () => {
    return getCookieByName(JWT_COOKIE)
}

export const setJwtCookie = (jwt) => {
    setCookieByName(JWT_COOKIE, jwt)
}

export const clearJwtCookie = () => {
    Cookies.remove(JWT_COOKIE)
}

const getCookieByName = (name) => {
    return Cookies.get(name)
}

const setCookieByName = (name, data) => {
    Cookies.remove(name)
    Cookies.set(name, data)
}