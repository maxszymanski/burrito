import { BiBasket } from 'react-icons/bi'

function BasketButton({ onClick, isMainPage = false }) {
    return (
        <button
            className={`bg-gradient-to-r from-[#566F2E] to-[#AAA724] rounded-full p-2 md:py-3  md:w-full ${
                isMainPage ? 'w-full max-w-[120px] small:max-w-[140px]' : ''
            }`}
            onClick={onClick}
        >
            {isMainPage ? (
                <span className=" md:block w-full text-2xl tracking-widest  ">
                    Dodaj
                </span>
            ) : (
                <BiBasket className="text-mywhite small:text-3xl text-2xl md:hidden" />
            )}
        </button>
    )
}

export default BasketButton
