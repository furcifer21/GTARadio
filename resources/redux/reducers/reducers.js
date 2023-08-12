import { combineReducers } from "redux";
import {UPDATE_CART} from "../types";

const initialCartState = {
    cartData: [],
    productIds: [],
    totalPrice: 0,
    discount: 0,
    delivery: 0,
    cartCounter: 0
};

function cart(state = initialCartState, action) {
    switch (action.type) {
        case UPDATE_CART:
            return Object.assign({}, state, {
                cartData: action.cartData,
                productIds: action.productIds,
                totalPrice: action.totalPrice,
                discount: action.discount,
                delivery: action.delivery,
                cartCounter: action.cartCounter
            });
        default:
            return state;
    }
}

const nivonaReducers = combineReducers({
    cart
});

export default nivonaReducers;