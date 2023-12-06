import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

function MenuCategory({ category = '' }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button className="rounded-2xl" onClick={() => setIsOpen(open => !open)}>
				<p>{category}</p>
				<span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
			</button>
		</>
	)
}

export default MenuCategory
