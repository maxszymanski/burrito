import SetCard from './SetCard'
import { useMenu } from './useMenu'

function Popular() {
    const { menu } = useMenu()

    const burritoChicken = menu?.find((item) => item.name === 'Burrito Chicken')
    const burritoPork = menu?.find((item) => item.name === 'Burrito Pork')
    const burritoSoja = menu?.find((item) => item.name === 'Burrito Soja')
    const tacoVegan = menu?.find((item) => item.name === 'Taco Vegan')
    const tacoChicken = menu?.find((item) => item.name === 'Taco Chicken')
    const tacoPork = menu?.find((item) => item.name === 'Taco Pork')
    return (
        <main className="md:px-5 md:pb-8 xl:bg-food md:bg-center md:bg-cover">
            <div className="xl:container xl:mx-auto xl:flex xl:flex-col md:space-y-6">
                <h2 className="text-mywhite small:text-3xl text-2xl font-semibold p-6 tracking-widest md:text-4xl  md:px-2">
                    Popularne
                </h2>
                <SetCard
                    title="Zestaw Double burrito"
                    itemOne={burritoChicken}
                    itemTwo={burritoPork}
                    image="./doubleChicken.png"
                    imageBig="./doubleChickenBig.png"
                />
                <SetCard
                    title="Zestaw Double taco"
                    itemTwo={tacoPork}
                    itemOne={tacoChicken}
                    isOverflow={false}
                    image="./doubleTaco.png"
                    imageBig="./doubleTacoBig.png"
                />
                <SetCard
                    title="Zestaw wegan"
                    itemOne={burritoSoja}
                    itemTwo={tacoVegan}
                    image="./doubleVegan.png"
                    imageBig="./doubleVeganBig.png"
                    isEnd
                />
            </div>
        </main>
    )
}

export default Popular
