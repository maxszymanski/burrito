export interface CartItem {
    itemId: number
    name: string
    quantity: number
    price: number
    totalPrice: number
    image: string
    ingredients: string
}

export interface Address {
    name: string
    street: string
    zip: string
    city: string
    phone: string
}

export interface LoginFormInputs {
    email: string
    password: string
}
export interface User {
    email: string
    password: string
}

export interface Order {
    cart: CartItem[]
    id: string
    totalPrice: number
    payment: string
    UserId: string
    status: string
    address: Address
    totalDiscount: number
}
export interface NewUser {
    email: string
    password: string
    userName: string
    street: string
    zipCode: string
    city: string
    phone: string
    orders: string
    passwordConfirm: string | null
    avatar: string | undefined
}
