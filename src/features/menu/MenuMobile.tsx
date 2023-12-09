import MenuCategory from './MenuCategory'
function MenuMobile() {
	const categories = ['Burrito', 'Taco', 'Nachos', 'Sałatki', 'Dodatki']
	return (
		<section>
			<ul className="space-y-6 h-full flex flex-col py-8 ">
				{categories.map(category => (
					<MenuCategory category={category} key={category} />
				))}
			</ul>
		</section>
	)
}

export default MenuMobile
