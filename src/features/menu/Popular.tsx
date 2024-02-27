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
        <main className="">
            <h2 className="text-mywhite small:text-3xl text-2xl font-semibold p-6 tracking-widest">
                Popularne
            </h2>
            <SetCard
                title="Zestaw Double burrito"
                itemOne={burritoChicken}
                itemTwo={burritoPork}
            />
            <SetCard
                title="Zestaw Double taco"
                itemTwo={tacoPork}
                itemOne={tacoChicken}
                isOverflow={false}
            />
            <SetCard
                title="Zestaw wegan"
                itemOne={burritoSoja}
                itemTwo={tacoVegan}
            />
        </main>
    )
}

export default Popular
