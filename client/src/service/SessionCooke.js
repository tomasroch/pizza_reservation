import * as Cookies from "js-cookie";

// source: https://www.jmfurlott.com/handling-user-session-react-context/
const CART_COOKIE = 'cartItems'

export const setCartCookie = (cartItems) => {
    Cookies.remove(CART_COOKIE);
    Cookies.set(CART_COOKIE, cartItems, { expires: 14 });
};

export const addItemToCookie = (cartItem) => {

    let cartItems = getCartCookie();
    cartItems.push(cartItem)

    Cookies.set(CART_COOKIE, cartItems, { expires: 14 });
};

export const getCartCookie = () => {
    const cartItems = Cookies.get(CART_COOKIE);

    if (cartItems === undefined) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
};

export const clearCartCookie = () => {
    Cookies.remove(CART_COOKIE);
}