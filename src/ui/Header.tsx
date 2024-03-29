import Logo from './Logo'

function Header() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#9A1E02] to-[#eeb02a] md:bg-headerTablet relative z-0 md:bg-center md:bg-cover md:py-24">
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-10 md:hidden"></div>
                <Logo />

                <div className=" px-6 pt-8 md:pt-20">
                    <h1 className="font-frederick text-2xl small:text-4xl text-mywhite leading-normal pb-8 pl-4 relative md:text-7xl lg:text-8xl md:text-center lg:pl-4  md:pb-16 md:leading-tight">
                        Odkryj <br />
                        smaki <br />
                        Meksyku
                    </h1>
                    <img
                        src="./cactus.png"
                        alt="cactus"
                        className="absolute bottom-0 right-8 small:h-48 h-40 md:hidden"
                    />
                </div>
            </div>
            <div className=" w-full bg-[#566F2E] relative px-4 py-2 md:bg-[#e29830] ">
                <div className="2xl:container mx-auto w-full flex items-center justify-between md:justify-around">
                    <a
                        href="/"
                        className="font-scope text-mywhite small:text-base text-sm md:hidden"
                    >
                        Pobierz aplikację
                    </a>
                    <p className="font-scope text-mywhite text-2xl md:block hidden">
                        Płać jeszcze mniej z aplikacją Buritto
                    </p>
                    {/* <a href="/">
                        <img
                            src="./geo.png"
                            alt="obraz google play"
                            className="mt-2 w-18 small:w-32 md:hidden"
                        />
                    </a> */}
                    <a href="/">
                        <img
                            src="./play-large.png"
                            alt="obraz google play"
                            className=" w-24 small:w-32 md:w-44"
                        />
                    </a>
                    <img
                        src="./mockup2.png"
                        alt="telefon z wyswietloną stroną"
                        className=" w-16 small:w-20 md:w-32"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
