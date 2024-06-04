import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSearch({ isDesktop = false }) {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === '') return
        navigate(`/order/${inputValue}`)
    }
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={` w-full  z-20 font-muli ${
                isDesktop ? '' : 'xl:hidden'
            }`}
        >
            <label
                htmlFor="order-search"
                className="mb-2 text-sm font-medium sr-only text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-4 sm:start-10 xl:start-4 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4  text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="order-search"
                    value={inputValue}
                    onChange={handleChangeInput}
                    className="block w-full p-4 ps-14 sm:ps-20 xl:ps-14 text-sm focus:outline-[#aaa82493]  border-[#aaa82493]  bg-gray-700  placeholder-gray-400 text-white focus:ring-yellow-400 focus:border-yellow-400 xl:min-w-[300px] xl:rounded-full "
                    placeholder="Numer zamówienia"
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 small:end-6 xl:end-2.5 sm:end-12 bottom-2 transition-all duration-300  hover:bg-gradient-to-r hover:from-[#799c41] hover:to-[#d4d233] focus:ring-4 focus:outline-none  font-medium  text-sm px-4 py-2   focus:ring-[#aaa82493] bg-gradient-to-r from-[#566F2E] to-[#AAA724] rounded-full"
                >
                    Szukaj
                </button>
            </div>
        </form>
    )
}

export default OrderSearch
