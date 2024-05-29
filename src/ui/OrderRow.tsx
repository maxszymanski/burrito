function OrderRow({ children, isCol = false }) {
    return (
        <div
            className={`flex  mb-0.5 justify-between py-0.5 px-4  tracking-wider ${
                isCol ? 'items-start' : 'items-center'
            } `}
        >
            {children}
        </div>
    )
}

export default OrderRow
