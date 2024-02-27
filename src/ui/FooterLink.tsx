function FooterLink({ to, children }) {
    return (
        <a
            href={to}
            className="hover:text-[rgb(249,255,213)] transition-colors duration-300"
        >
            {children}
        </a>
    )
}

export default FooterLink
