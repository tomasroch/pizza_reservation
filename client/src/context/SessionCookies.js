import * as Cookies from "js-cookie";

// source: https://www.jmfurlott.com/handling-user-session-react-context/
const CART_COOKIE = 'cartItems'
const USER_COOKIE = 'user'

export const setCartCookie = (cartItems) => {
    Cookies.remove(CART_COOKIE)
    Cookies.set(CART_COOKIE, cartItems, { expires: 14 })
}

export const addItemToCookie = (cartItem) => {

    let cartItems = getCartCookie()
    cartItems.push(cartItem)

    Cookies.set(CART_COOKIE, cartItems, { expires: 14 })
}

export const getCartCookie = () => {
    const cartItems = Cookies.get(CART_COOKIE)

    if (cartItems === undefined) {
        return []
    } else {
        return JSON.parse(cartItems)
    }
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
    const user = Cookies.get(USER_COOKIE)

    if (user === undefined) {
        return undefined
    } else {
        return JSON.parse(user)
    }
}

export const setUserCookie = (user) => {
    Cookies.remove(USER_COOKIE)
    Cookies.set(USER_COOKIE, user, { expires: 15 })
}

export const clearUserCookie = () => {
    Cookies.remove(USER_COOKIE)
}