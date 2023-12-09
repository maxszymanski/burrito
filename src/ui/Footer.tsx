import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
function Footer() {
	return (
		<footer className=" bg-[#9A1E02] w-full px-6 py-8 text-white space-y-7">
			<div className="flex items-center justify-between text-xl text-mywhite">
				<a href="/">
					<img src="./logo.webp" alt="" className="mb-1" />
				</a>
				<a href="/">O nas</a>
				<a href="/">Kontakt</a>
				<a href="/">FAQ</a>
			</div>
			<div className="flex items-center justify-evenly text-4xl text-[rgb(249,255,213,0.7)]">
				<a href="https://www.facebook.pl">
					<FaFacebook />
				</a>
				<a href="https://www.instagram.pl">
					<FaInstagram />
				</a>
				<a href="https://www.youtube.pl">
					<FaYoutube />
				</a>
				<a href="https://www.tiktok.pl">
					<FaTiktok />
				</a>
			</div>
		</footer>
	)
}

export default Footer
