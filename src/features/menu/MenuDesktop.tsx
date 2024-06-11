import { useState } from 'react'
import MenuCategoryDesktop from './MenuCategoryDesktop'
import { useMenu } from './useMenu'
import MenuCard from './MenuCard'

function MenuDesktop() {
    const [selectedCategory, setSelectedCategory] = useState([])
    const { menu } = useMenu()
    // const currentCategory = menu?.filter(
    //     (item) => item.category === selectedCategory[0]
    // )
    const categories = [
        { name: 'Burrito', image: './burrito.png' },
        { name: 'Taco', image: './taco.png' },
        { name: 'Nachos', image: './nachos.png' },
        { name: 'Sałatki', image: './salad.png' },
        { name: 'Dodatki', image: './additives.png' },
    ]
    function handleShowMenuCategory(cat) {
        setSelectedCategory((prev) => [...prev, cat])
        console.log(cat)
    }
    return (
        <section className="hidden xl:block pt-20 pb-32">
            <ul className="flex justify-center items-center gap-8">
                {categories.map((category) => (
                    <MenuCategoryDesktop
                        category={category}
                        key={category.name}
                        handleShowMenuCategory={handleShowMenuCategory}
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
                            {selectedCategory.includes(category) &&
                                currentCategoryItems &&
                                currentCategoryItems.map((item) => (
                                    <MenuCard
                                        cardInfo={item}
                                        isOpen={selectedCategory.includes(
                                            category
                                        )}
                                        key={item.name}
                                    />
                                ))}
                        </div>
                    )
                })}
        </section>
    )
}

export default MenuDesktop
