import { useState } from 'react'

function MenuCategoryDesktop({ category, handleShowMenuCategory }) {
    const [active, setActive] = useState(false)
    const { name, image } = category
    const handleClick = (e) => {
        setActive((act) => !act)
        handleShowMenuCategory(e.target.value)
    }
    return (
        <li className="border-2 border-[#602020] rounded-2xl flex flex-col items-center justify-center h-40 w-40 overflow-hidden">
            <button
                value={name}
                onClick={handleClick}
                className={`w-full h-full flex flex-col items-center justify-center  hover:bg-[rgba(255,255,255,0.2)] duration-300 transition-colors ${
                    active ? 'bg-yellow-600 hover:bg-yellow-500' : ''
                }`}
            >
                <img src={image} alt="" className="h-16" />
                <p className="mt-3 font-frederick">{name}</p>
            </button>
        </li>
    )
}

export default MenuCategoryDesktop
