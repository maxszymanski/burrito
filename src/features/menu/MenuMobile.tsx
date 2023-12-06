import MenuCategory from './MenuCategory'
function MenuMobile({ menu }) {
	const categories = ['Burrito', 'Taco', 'Nachos', 'Sałatki', 'Dodatki']
	return (
		<section>
			{categories.map(category => (
				<MenuCategory category={category} key={category} />
			))}
		</section>
	)
}

export default MenuMobile
