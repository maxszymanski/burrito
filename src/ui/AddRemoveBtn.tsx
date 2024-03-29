import { useState } from 'react'

function AddRemoveBtn() {
    const [quantity, setQuantity] = useState(1)
    const handleOddOrder = () => {
        if (quantity <= 1) return
        setQuantity((num) => num - 1)
    }
    const handleAddOrder = () => {
        setQuantity((num) => num + 1)
    }
    return (
        <div className=" w-full border-2 rounded-full xl flex items-center justify-between font-scope px-2 border-[#EFB12A]">
            <button
                className="p-2 text-xl small:text-3xl font-frederick font-bold"
                onClick={handleOddOrder}
            >
                -
            </button>
            <span className="text-lg small:text-xl font-bold">{quantity}</span>
            <button
                className="p-2 text-xl small:text-3xl font-frederick font-bold"
                onClick={handleAddOrder}
            >
                +
            </button>
        </div>
    )
}

export default AddRemoveBtn
