import { ReactNode } from 'react'

function UserMain({ children }: { children: ReactNode }) {
    return <div className="py-5 small:px-2 px-1 lg:px-0">{children}</div>
}

export default UserMain
