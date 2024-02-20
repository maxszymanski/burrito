function AddRemoveBtn() {
	return (
		<div className=" w-full border-2 rounded-full xl flex items-center justify-between font-scope  px-2 border-[#EFB12A]">
			<button className="p-2 text-xl small:text-3xl font-frederick font-bold">-</button>
			<span className="text-lg small:text-xl font-bold">1</span>
			<button className="p-2 text-xl small:text-3xl font-frederick font-bold">+</button>
		</div>
	)
}

export default AddRemoveBtn
