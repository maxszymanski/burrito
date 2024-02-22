import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import MenuCard from './MenuCard'
import { useMenu } from './useMenu'

function MenuCategory({ category = '' }) {
    const [isOpen, setIsOpen] = useState(false)
    const { menu } = useMenu()

    const currentCategory = menu?.filter((item) => item.category === category)

    return (
        <li>
            <button
                className="rounded-2xl flex items-center justify-between bg-gradient-to-r from-menuBtnRed to-menuBtnYellow  w-full px-5 text-2xl tracking-wide py-2 "
                onClick={() => setIsOpen((open) => !open)}
            >
                <p>{category}</p>
                <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>
            {currentCategory &&
                currentCategory.map((item) => (
                    <MenuCard cardInfo={item} isOpen={isOpen} key={item.name} />
                ))}
        </li>
    )
}

export default MenuCategory
