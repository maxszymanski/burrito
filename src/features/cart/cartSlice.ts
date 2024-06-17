import { createSlice } from '@reduxjs/toolkit'

const cartStateString = localStorage.getItem('cart')
const cart = cartStateString !== null && JSON.parse(cartStateString)
const initialState = {
    cart: cart.cart || [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item: { itemId: string }) => item.itemId !== action.payload
            )
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item: { itemId: string }) => item.itemId === action.payload
            )

            item.quantity++
            item.totalPrice = item.quantity * item.price
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item: { itemId: string }) => item.itemId === action.payload
            )
            item.quantity--
            item.totalPrice = item.quantity * item.price
        },
        clearCart(state) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state: { cart: { cart: [] } }) => state.cart.cart

export function getCartItemById(id: string) {
    return function (state: { cart: { cart: [] } }) {
        const cartItems = state.cart.cart
        return cartItems.filter(
            (item: { itemId: string }) => item.itemId === id
        )
    }
}

export const getTotalCartQuantity = (state: { cart: { cart: [] } }) =>
    state.cart.cart.reduce(
        (sum, cur: { quantity: number }) => sum + cur.quantity,
        0
    )

export const getTotalCardPrice = (state: { cart: { cart: [] } }) =>
    state.cart.cart.reduce(
        (sum, item: { totalPrice: number }) => sum + item.totalPrice,
        0
    )
