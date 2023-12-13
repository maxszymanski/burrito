import AddRemoveBtn from '../../ui/AddRemoveBtn'
import BucketButton from '../../ui/BucketButton'

function SetCard({
	isOverflow = true,
	title = '',
	itemOne = { name: '', price: 0 },
	itemTwo = { name: '', price: 0 },
}) {
	const price = itemOne?.price + itemTwo?.price || 0
	return (
		<div
			className={` flex items-center justify-between p-6 text-mywhite ${
				isOverflow ? 'bg-[rgba(216,222,203,0.2)]' : ''
			}`}>
			<div className="space-y-1.5">
				<h3 className="text-xl font-bold tracking-wide">{title}</h3>
				<p className="text-lg">{itemOne?.name}</p>
				<p className="text-lg">+</p>
				<p className="text-lg">{itemTwo?.name}</p>
				<p>{price} zł</p>
				<div className="flex items-center justify-between gap-4 pt-4 w-48 ">
					<AddRemoveBtn />
					<BucketButton />
				</div>
			</div>
			<img src="./doubleChicken.png" alt="" />
		</div>
	)
}

export default SetCard
