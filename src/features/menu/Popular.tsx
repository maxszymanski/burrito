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
        <main className="md:px-5 md:pb-8 xl:bg-food md:bg-center md:bg-cover relative">
            <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,.3)] z-0"></div>
            <div className="lg:container lg:mx-auto w-full lg:flex lg:flex-col md:space-y-6 lg:pb-6 relative z-10">
                <h2 className="text-mywhite small:text-3xl text-2xl font-semibold p-6 tracking-widest md:text-4xl  md:px-2 sm:px-8 lg:text-5xl sm:py-8 xl:py-12 2xl:text-6xl">
                    Popularne
                </h2>
                <SetCard
                    title="Zestaw Double burrito"
                    itemOne={burritoChicken}
                    itemTwo={burritoPork}
                    image="https://yzldumjsikdcvhvippif.supabase.co/storage/v1/object/public/menu/doubleChicken.png"
                    imageBig="./images/doubleChickenBig.webp"
                />
                <SetCard
                    title="Zestaw Double taco"
                    itemTwo={tacoPork}
                    itemOne={tacoChicken}
                    isOverflow={false}
                    image="https://yzldumjsikdcvhvippif.supabase.co/storage/v1/object/public/menu/doubleTaco.png"
                    imageBig="./images/doubleTacoBig.webp"
                />
                <SetCard
                    title="Zestaw wegan"
                    itemOne={burritoSoja}
                    itemTwo={tacoVegan}
                    image="https://yzldumjsikdcvhvippif.supabase.co/storage/v1/object/public/menu/doubleVegan.png"
                    imageBig="./images/doubleVeganBig.webp"
                    isEnd
                />
            </div>
        </main>
    )
}

export default Popular
