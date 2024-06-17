import { ReactNode } from 'react'

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
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
