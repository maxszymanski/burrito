import { ReactNode } from 'react'

function Container({
    children,
    isFooter = false,
}: {
    children: ReactNode
    isFooter: boolean
}) {
    return (
        <div
            className={`xl:container xl:mx-auto w-full ${
                isFooter
                    ? 'space-y-5 small:space-y-7 xl:space-y-0 xl:flex xl:items-center  xl:justify-center xl:gap-24 '
                    : ''
            }`}
        >
            {children}
        </div>
    )
}

export default Container
