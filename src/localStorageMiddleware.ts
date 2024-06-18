import { Middleware } from 'redux'

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action)
        const state = store.getState()
        localStorage.setItem('cart', JSON.stringify(state.cart))
        return result
    }
