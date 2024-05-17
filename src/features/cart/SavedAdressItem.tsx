function SavedAdressItem({ item }) {
    const { userName, zipCode, phone, street, city } = item
    console.log(item)

    return (
        <button className="w-full border-[1px] border-[#c4c0c0] rounded-md py-2  px-6  text-left  focus:outline-none small:border-2 text-sm small:text-base leading-5 mb-4">
            <p>{userName}</p>
            <p>{street}</p>
            <p>
                {zipCode} {city}
            </p>
            <p>{phone}</p>
        </button>
    )
}

export default SavedAdressItem
