import {UPDATE_CART} from "../types";

function updateCart(cartData, productIds, totalPrice, discount, delivery, cartCounter) {
    return { type: UPDATE_CART, cartData, productIds, totalPrice, discount, delivery, cartCounter };
}

export function getCart() {
    return function(dispatch) {
        dispatch(updateCart([], [], 0, 0, 0, 0));
    };
}

export function addToCart(id, count, notShowModal) {
    return function(dispatch) {
        dispatch(updateCart([], [], 0, 0, 0, 0));
    };
}

export function removeFromCart(id) {
    return function(dispatch) {
        dispatch(updateCart([], [], 0, 0, 0, 0));
    };
}