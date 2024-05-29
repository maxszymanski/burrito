import { ReactNode } from 'react'

function Container({ children }: { children: ReactNode }) {
    return <div className="xl:container xl:mx-auto w-full">{children}</div>
}

export default Container
