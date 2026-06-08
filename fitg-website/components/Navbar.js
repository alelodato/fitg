'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const links = [
    { href: '/', label: 'Home' },
    { href: '/regole', label: 'Regole' },
    { href: '/formazione', label: 'Formazione' },
    { href: '/staff', label: 'Staff' },
    { href: '/news', label: 'News' },
    { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-gold/20">
            <div className="flex items-center justify-between px-5 md:px-16 h-[52px] md:h-[68px]">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/fitg-logo.png"
                        alt="FITG Logo"
                        width={44}
                        height={44}
                        className="object-contain"
                    />
                    <div>
                        <div className="text-gold font-oswald font-bold tracking-widest text-sm md:text-base leading-none">FITG</div>
                        <div className="text-[#555] font-inter text-[6px] md:text-[7px] tracking-widest leading-none mt-0.5">
                            FEDERAZIONE ITALIANA TACTICAL GAMES
                        </div>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-oswald text-[11px] tracking-[2px] uppercase transition-colors duration-200 pb-0.5 ${pathname === link.href
                                ? 'text-gold border-b border-gold'
                                : 'text-[#ccc] hover:text-gold'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span className={`block w-5 h-px transition-colors ${open ? 'bg-gold' : 'bg-white'}`} />
                    <span className="block w-5 h-px bg-gold" />
                    <span className={`block w-5 h-px transition-colors ${open ? 'bg-gold' : 'bg-white'}`} />
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#0f0f0f] border-t border-gold/10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-6 py-3.5 font-oswald text-xs tracking-[3px] uppercase border-b border-gold/10 transition-colors ${pathname === link.href ? 'text-gold' : 'text-[#ccc] hover:text-gold'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}