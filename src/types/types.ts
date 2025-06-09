export interface Price {
    children: React.ReactNode
}
export interface UpdatePasswordType {
    password: string
    passwordConfirm: string
}

export interface PriceContextType {
    totalCartQuantity: number
    totalCartPrice: number
    shipping: number
    discount: number
    total: number
    paymentMethod: string
    handleSetPaymentMenthod: (value: string) => void
    isFormShow: boolean
    handleShowForm: () => void
    clearPaymentMethod: () => void
    setIsFormShow: React.Dispatch<React.SetStateAction<boolean>>
    orderAddress: Address
    setOrderAddress: React.Dispatch<React.SetStateAction<Address>>
    clearOrderAddress: () => void
    totalDiscount: number
    setShipping: React.Dispatch<React.SetStateAction<number>>
    setDiscount: React.Dispatch<React.SetStateAction<number>>
    showCookieModal: boolean
    closeCookieModal: () => void
    newOrderId: string
    setNewOrderId: React.Dispatch<React.SetStateAction<string>>
}

export interface CartItemInterface {
    itemId: string
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
export interface DeliveryData {
    name: string
    streetUser: string
    zipCodeUser: string
    cityUser: string
    phoneUser: string
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
    cart: CartItemInterface[]
    id: string
    totalPrice: number
    payment: string
    UserId: string
    status: string
    address: Address
    totalDiscount: number
}
export interface OrderDetailsType {
    itemId: string
    name: string
    quantity: number
    totalPrice: number
    image: string
    ingredients: string
}
export interface UserMetadata {
    city?: string
    phone?: string
    street?: string
    userName?: string
    zipCode?: string
}

export interface NewUser {
    email?: string
    password?: string
    userName?: string
    street: string
    zipCode: string
    city: string
    phone: string
    orders: string
    passwordConfirm: string | null
    avatar: string | undefined
}

export interface PopularItem {
    name: string
    price: number
    ingredients: string
    id: number
}

export interface PopularItems {
    isOverflow?: boolean
    title?: string
    itemOne: PopularItem
    itemTwo: PopularItem
    image: string
    imageBig: string
    isEnd?: boolean
}
