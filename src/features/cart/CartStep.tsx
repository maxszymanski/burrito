function CartStep({ one = false, two = false, three = false, four = false }) {
    const yellow = 'bg-yellow-500'
    const gray = 'bg-[rgba(112,112,100,0.3)]'
    const step =
        one && two && three && four
            ? 4
            : one && two && three
            ? 3
            : one && two
            ? 2
            : one
            ? 1
            : 0
    return (
        <div>
            <div className="space-x-1 flex">
                <div className={`${one ? yellow : gray} h-1 w-full`}></div>
                <div className={`${two ? yellow : gray} h-1 w-full`}></div>
                <div className={`${three ? yellow : gray} h-1 w-full`}></div>
                <div className={`${four ? yellow : gray} h-1 w-full`}></div>
            </div>
            <p className="text-end text-xs mt-2 text-[rgb(255,255,255,0.8)]">
                Krok: {step}/4
            </p>
        </div>
    )
}

export default CartStep
