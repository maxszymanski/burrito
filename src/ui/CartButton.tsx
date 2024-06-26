function CartButton({ onClick, text }: { onClick: () => void; text: string }) {
    return (
        <button
            className="bg-yellow-500 w-full block rounded-md py-2 text-xs small:text-base mb-3 text-center uppercase font-bold tracking-widest lg:w-1/5 hover:text-[rgb(34,34,34)] transition-colors duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default CartButton
