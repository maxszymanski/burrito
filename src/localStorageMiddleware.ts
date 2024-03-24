export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart)) // Zapisz stan koszyka do localStorage
    return result
}
