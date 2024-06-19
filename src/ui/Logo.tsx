function Logo({ isHidden = true }) {
    return (
        <div
            className={`flex justify-center items-center  pt-6  gap-6 ${
                isHidden ? 'xl:hidden' : ''
            } `}
        >
            <img
                src="/images/logo-md.png"
                alt="logo"
                className="h-8 small:h-10 md:h-12 "
            />
        </div>
    )
}

export default Logo
