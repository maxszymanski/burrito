import { useEffect, useState } from 'react'

function MenuCategoryDesktop({ category, handleShowMenuCategory, isFirst }) {
    const [active, setActive] = useState(false)
    const { name, image } = category

    useEffect(() => {
        if (isFirst) {
            setActive(true)
        }
    }, [isFirst])

    const handleClick = (e) => {
        setActive((act) => !act)
        handleShowMenuCategory(e.target.value)
    }
    return (
        <li className="border-2 border-[#602020] rounded-2xl flex flex-col items-center justify-center h-32 w-32 overflow-hidden">
            <button
                value={name}
                onClick={handleClick}
                className={`w-full h-full flex flex-col items-center justify-center  hover:bg-[rgba(255,255,255,0.2)] duration-300 transition-colors ${
                    active ? 'bg-yellow-600 hover:bg-yellow-500 ' : ''
                }`}
            >
                <img
                    src={image}
                    alt={`Ikona dla kategorii ${name}`}
                    className="h-14 pointer-events-none"
                />
                <p className="mt-3 font-frederick pointer-events-none text-sm 2xl:text-base">
                    {name}
                </p>
            </button>
        </li>
    )
}

export default MenuCategoryDesktop
