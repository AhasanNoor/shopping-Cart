import { ADD_TO_CART,DELETE_ITEM,ADD_QUANTITY,REMOVE_QUANTITY } from './action-type/cart-action'

export const addToCart = (id) =>{
    return {
        type: ADD_TO_CART,
        id
    }
}

export const deleteItem = (id) =>{
    return {
        type: DELETE_ITEM,
        id
    }
}

export const addQuantity = (id) =>{
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const removeQuantity = (id) =>{
    return {
        type: REMOVE_QUANTITY,
        id
    }
}