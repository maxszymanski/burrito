import MenuCategory from './MenuCategory'
function MenuMobile() {
    const categories = ['Burrito', 'Taco', 'Nachos', 'Sałatki', 'Dodatki']
    return (
        <section className="xl:hidden ">
            <h2 className="text-4xl lg:text-5xl z-10 relative xl:text-6xl">
                Menu
            </h2>
            <ul className="space-y-6 h-full flex flex-col pt-20 pb-32 ">
                {categories.map((category) => (
                    <MenuCategory category={category} key={category} />
                ))}
            </ul>
        </section>
    )
}

export default MenuMobile
