import { ReactNode } from 'react'

function OrderRow({
    children,
    isCol = false,
}: {
    children: ReactNode
    isCol: boolean
}) {
    return (
        <div
            className={`flex  mb-0.5 justify-between py-0.5 px-4  tracking-wider lg:text-lg lg:mb-1  ${
                isCol ? 'items-start' : 'items-center '
            } `}
        >
            {children}
        </div>
    )
}

export default OrderRow
