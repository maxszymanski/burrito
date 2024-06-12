import { useState } from 'react'
import MenuCategoryDesktop from './MenuCategoryDesktop'
import { useMenu } from './useMenu'
import MenuCard from './MenuCard'

function MenuDesktop() {
    const [selectedCategory, setSelectedCategory] = useState(['Burrito'])
    const { menu } = useMenu()
    const categories = [
        { name: 'Burrito', image: './burrito.png' },
        { name: 'Taco', image: './taco.png' },
        { name: 'Nachos', image: './nachos.png' },
        { name: 'Sałatki', image: './salad.png' },
        { name: 'Dodatki', image: './additives.png' },
    ]
    function handleShowMenuCategory(category) {
        setSelectedCategory((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        )
    }
    return (
        <section className="hidden xl:block  pb-32 z-10 relative xl:h-screen xl:overflow-y-auto xl:scrollbar-hide">
            <h2 className="text-4xl lg:text-5xl z-10 relative xl:text-6xl xl:my-16 xl:text-center">
                Menu
            </h2>
            <ul className="flex justify-center items-center gap-8 mt-6 mb-20 2xl:mb-28 ">
                {categories.map((category, index) => (
                    <MenuCategoryDesktop
                        category={category}
                        key={category.name}
                        handleShowMenuCategory={handleShowMenuCategory}
                        isFirst={index === 0}
                    />
                ))}
            </ul>
            {selectedCategory &&
                selectedCategory.map((category) => {
                    const currentCategoryItems = menu?.filter(
                        (item) => item.category === category
                    )
                    return (
                        <div key={category}>
                            <h2 className="text-4xl font-bold my-10 text-center text-yellow-500 2xl:text-5xl 2xl:my-20">
                                {category}
                            </h2>
                            <div className="flex flex-wrap items-center justify-start py-8 gap-y-16 2xl:justify-evenly 2xl:gap-y-28">
                                {selectedCategory.includes(category) &&
                                    currentCategoryItems &&
                                    currentCategoryItems.map((item) => (
                                        <MenuCard
                                            cardInfo={item}
                                            isOpen={selectedCategory.includes(
                                                category
                                            )}
                                            key={item.image}
                                        />
                                    ))}
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default MenuDesktop
