import * as pinterestController from './pinterestController';

// Constants
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PIN_TO_PINTEREST = "PIN_TO_PINTEREST";

let initialState = {
    Cart: []
}

// Reducer
export default function reducer(state=initialState, action) {
    switch(action.type) {

        case ADD_TO_CART:
        console.log(action.payload)
            return Object.assign({}, state, {
                Cart: [...state.Cart, action.payload]});

        case REMOVE_FROM_CART:
            let newArray = state.Cart.slice();
            newArray.splice(action.index, 1);
            return Object.assign({}, state, {
                Cart: newArray});

        case PIN_TO_PINTEREST:
            return Object.assign({}, state, {
                loading: false, products: action.payload});
            
        default:
            return state;
    }
}


// Action Creators
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function removeFromCart(productIndex) {
    return {
        type: REMOVE_FROM_CART,
        payload: productIndex
    }
}
export function pinToPinterest(products) {
    return {
        type: PIN_TO_PINTEREST,
        payload: pinterestController.pinToBoard()
    }
}