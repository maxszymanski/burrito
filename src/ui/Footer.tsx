import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import FooterLink from './FooterLink'
import Container from './Container'
function Footer() {
    return (
        <footer className=" bg-[#9A1E02] w-full px-6 small:pt-8 pt-6 small:pb-28 pb-24 text-[rgb(249,255,213,0.7)] lg:px-28 xl:pb-10 xl:pt-10 relative z-10 ">
            <Container isFooter>
                <div className="flex items-center justify-between small:text-xl text-lg  xl:w-3/4 xl:justify-around xl:text-2xl">
                    <FooterLink to="/">
                        <img
                            src="./logo.webp"
                            alt="logo firmy burrito"
                            className="mb-1 xl:h-10"
                        />
                    </FooterLink>
                    <FooterLink to="/">O nas</FooterLink>
                    <FooterLink to="/">Kontakt</FooterLink>
                    <FooterLink to="/">FAQ</FooterLink>
                </div>
                <div className="flex items-center justify-evenly small:text-3xl text-2xl xl:w-1/4 xl:text-4xl xl:gap-1">
                    <FooterLink to="https://www.facebook.pl">
                        <FaFacebook />
                    </FooterLink>
                    <FooterLink to="https://www.instagram.pl">
                        <FaInstagram />
                    </FooterLink>
                    <FooterLink to="https://www.youtube.pl">
                        <FaYoutube />
                    </FooterLink>
                    <FooterLink to="https://www.tiktok.pl">
                        <FaTiktok />
                    </FooterLink>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
