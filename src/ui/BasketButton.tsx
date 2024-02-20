import { BiBasket } from 'react-icons/bi'

function BasketButton() {
	return (
		<button className="bg-gradient-to-r from-[#566F2E] to-[#AAA724] rounded-full p-2">
			<BiBasket className="text-mywhite text-3xl" />
		</button>
	)
}

export default BasketButton
