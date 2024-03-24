import { configureStore } from '@reduxjs/toolkit'
import { localStorageMiddleware } from './localStorageMiddleware'
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store
