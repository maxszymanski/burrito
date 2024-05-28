function SearchButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-white font-scope bg-yellow-700  hover:bg-yellow-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 mt-0.5 small:mt-1 small:px-4 focus:ring-yellow-400 z-20 text-center"
        >
            Szukaj zamówienia
        </button>
    )
}

export default SearchButton
