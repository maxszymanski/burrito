import { BiBasket } from 'react-icons/bi'

function BasketButton({ onClick, isMainPage = false }) {
    return (
        <button
            className={`bg-gradient-to-r from-[rgb(86,111,46)] to-[rgb(170,167,36)] rounded-full p-2 md:py-3 transition-all duration-300  md:w-full   ${
                isMainPage
                    ? 'w-full max-w-[120px] small:max-w-[140px] xl:max-w-[150px] hover:xl:max-w-[160px]'
                    : ''
            }`}
            onClick={onClick}
        >
            {isMainPage ? (
                <span className="w-full text-2xl tracking-widest  ">Dodaj</span>
            ) : (
                <>
                    <BiBasket className="text-mywhite small:text-3xl text-2xl md:hidden" />
                    <span className="hidden md:block w-full text-2xl tracking-widest  ">
                        Dodaj
                    </span>
                </>
            )}
        </button>
    )
}

export default BasketButton
