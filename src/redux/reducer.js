

// Constants
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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
            newArray.splice(action.payload, 1);
            return Object.assign({}, state, {
                Cart: newArray});
            
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