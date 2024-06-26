import { useEditOrder } from './useEditOrder'

function Admin() {
    const { updateOrder } = useEditOrder()

    const handleChangeStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
        // const id = '577102'
        console.log((e.target as HTMLButtonElement).value)
        updateOrder((e.target as HTMLButtonElement).value)
    }

    return (
        <div className="text-mywhite flex flex-col py-28 gap-y-8 px-20">
            <button
                onClick={handleChangeStatus}
                value={'W drodze'}
                className="border-2 border-yellow-400 rounded-2xl px-4 py-2"
            >
                W drodze 🤍🤍🤍🤍🤍
            </button>
            <button
                onClick={handleChangeStatus}
                value={'W przygotowaniu'}
                className="border-2 border-yellow-400 rounded-2xl px-4 py-2 hover:text-yellow-500 transition-colors duration-1000  "
            >
                W przygotowaniu 💚💛🧡❤
            </button>
            <button
                onClick={handleChangeStatus}
                value={'Zakończone'}
                className="border-2 border-yellow-400 rounded-2xl px-4 py-2"
            >
                Zakończone 👨‍🍳 👨‍🍳 👨‍🍳 👨‍🍳
            </button>
        </div>
    )
}

export default Admin
