function RankDetails({ showDetails }: { showDetails: boolean }) {
    return (
        <div
            className={`absolute top-6 bg-[rgb(12,12,12,0.9)] p-3 small:p-4 rounded-xl text-xs space-y-1 small:space-y-2 small:text-sm ${
                showDetails ? 'block' : 'hidden'
            }`}
        >
            <p>
                <span className="text-yellow-500">Brązowa</span> (0-10 zamówień)
                : darmowa dostawa
            </p>
            <p>
                <span className="text-yellow-500">Srebrna</span> (11-30
                zamówień) : -10% na każde zamówienie + darmowa dostawa
            </p>
            <p>
                <span className="text-yellow-500">Złota</span> (+30 zamówień) :
                poprzednie rangi + priorytetowa obsługa
            </p>
        </div>
    )
}

export default RankDetails
