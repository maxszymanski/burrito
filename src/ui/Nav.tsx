import { BiBasket } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
function Nav() {
	return (
		<div className="flex items-center justify-between fixed top-0 left-0 p-6 w-full text-4xl z-40">
			<button className="text-mywhite">
				<RxHamburgerMenu />
			</button>
			<img src="./logo.webp" alt="logo" className="h-8" />
			<div className="relative">
				<BiBasket className="text-mywhite" />
				{/* <p className="absolute -bottom-1 -right-2 w-5 h-5 bg-gradient-to-r from-[#F92525] to-[#9F9C30] text-mywhite rounded-full text-center font-scope  flex items-center justify-center">
					<span className="text-xs">2</span>
				</p> */}
			</div>
		</div>
	)
}

export default Nav
