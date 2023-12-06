import MenuMobile from './MenuMobile'
import { useMenu } from './useMenu'

function Menu() {
	const { menu } = useMenu()
	if (!menu) return <p>loading</p>

	return (
		<main className="bg-menu-bg-sm h-screen text-mywhite">
			<div className="2xl:container mx-auto pt-28 px-4">
				<h2 className="text-4xl">Menu</h2>
				<MenuMobile menu={menu} />
			</div>
		</main>
	)
}

export default Menu
