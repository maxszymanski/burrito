function Header() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#9A1E02] to-[#eeb02a]  relative z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-10"></div>

                <div className="container px-6 pt-28">
                    <h1 className="font-frederick text-2xl small:text-4xl text-mywhite leading-normal pb-8 pl-4 relative">
                        Odkryj <br />
                        smaki <br />
                        Meksyku
                    </h1>
                    <img
                        src="./cactus.png"
                        alt="cactus"
                        className="absolute bottom-0 right-8 small:h-48 h-40"
                    />
                </div>
            </div>
            <div className=" w-full bg-[#566F2E] relative px-4 py-2 ">
                <div className="2xl:container mx-auto w-full flex items-center justify-between">
                    <a
                        href="/"
                        className="font-scope text-mywhite small:text-lg text-sm"
                    >
                        Pobierz aplikację
                    </a>
                    <a href="/">
                        <img
                            src="./geo.png"
                            alt="obraz google play"
                            className="mt-2 small:w-32 "
                        />
                    </a>
                    <img
                        src="./mockup.png"
                        alt="telefon z wyswietloną stroną"
                        className="small:w-16 small:h-8"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
