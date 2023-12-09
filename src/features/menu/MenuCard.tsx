import BucketButton from '../../ui/BucketButton'

// const cardInfo = {
// 	name: 'Burrito Chicken',
// 	ingredients: 'tortilla, kurczak, warzywa, sos',
// 	price: 28,
// 	image: 'https://yzldumjsikdcvhvippif.supabase.co/storage/v1/object/sign/menu/b-vege.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51L2ItdmVnZS53ZWJwIiwiaWF0IjoxNzAxNDUxOTI2LCJleHAiOjE3MzI5ODc5MjZ9.MPGgXKYBkXd4DUglmLPxHJhIpA7W4b7lPiDenCBjhEQ&t=2023-12-01T17%3A32%3A06.448Z',
// }

function MenuCard({ cardInfo = { name: '', ingredients: '', price: 0, image: '' }, isOpen = false }) {
	const { name, ingredients, price, image } = cardInfo
	if (!cardInfo) return <p>Loading...</p>
	if (isOpen)
		return (
			<div className="flex items-center justify-between py-4 gap-3 px-4 my-4 rounded-2xl bg-[rgba(216,222,203,0.2)] h-[170px]">
				<img src={image} alt="" className="h-auto max-w-[35%] max-h-[60%]" />
				<div className="flex flex-col gap-2 pl-3 ">
					<h4 className="font-semibold tracking-wider text-base">{name}</h4>
					<p className="text-[#FFF2E1] text-sm leading-6 tracking-widest ">{ingredients}</p>
					<p className="font-semibold tracking-wider text-base">{price} zł</p>
				</div>
				<BucketButton />
			</div>
		)
}

export default MenuCard
