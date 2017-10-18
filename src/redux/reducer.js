import axios from 'axios';

// Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_USER = "GET_USER";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Innitial State
let initialState = {
    user: {},
    products: [],
    Cart: []
}

// REDUCER
export default function reducer(state=initialState, action) {
    switch(action.type) {

    case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload});
    case GET_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
    case ADD_TO_CART + '_FULFILLED':
    console.log(action.payload)
        return Object.assign({}, state, {Cart:  action.payload});
    case REMOVE_FROM_CART + '_FULFILLED':
        return Object.assign({}, state, {Cart: action.payload});
        default:
            return state;
    }
}


// ACTION CREATORS
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', {productid: product.productid, userid: 1}).then((cart) => {
            console.log(cart.data)
            return cart.data
        }).catch(err => console.log(err))
    }
}
export function removeFromCart(productIndex, userid) {
    console.log(productIndex)
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${productIndex}/1`).then((Cart) => {
            return Cart.data
    }).catch((err)=>{console.log(err)})
}}
