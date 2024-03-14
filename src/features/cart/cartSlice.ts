import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // cart: [],
    cart: [],
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
                // payload = pizzaId
                // przeszukuje tablice i zostawia tylko w niej elementy które nie mają takiego samego ID jak action.payload
                (item) => item.pizzaId !== action.payload
            )
        },
        increaseItemQuantity(state, action) {
            //szukamy przedmiotu który ma takie samo id jak action.payload
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )

            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action) // jesli jest wybrane zero pizz caseReducers możemy wywołąc dany reducer, który chcemy
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

//exportujemy naszą kartę z wybranymi pizzami i dodajemy ją w komponiencie cart
export const getCart = (state) => state.cart.cart

// za pomocą useSelectora który ejst w cartOverview pobieramy dane z redux i od razy za pomocą funcki reduce wyliczmy ile jest pizz wybranych. W selektorze dajemy tylko funkcję getTotalCardQuantity, Mozemy pożniej urzyć tego w wielu komponentach
export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0)

export const getTotalCardPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

// export const getCurrentQuantityById = (id) => (state) =>
//     state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0

//funkcja powyżej to to samo co ta. Funkcja wyszukuje czy kazdej pizzy quantity jest quantity(ile wybrana razy) i jeśli tak to zwraca quantity a jak nie wybrana to zwraca 0.
export function getCurrentQuantityById(id) {
    return function (state) {
        return (
            state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
        )
    }
}
