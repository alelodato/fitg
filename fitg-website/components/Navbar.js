'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
    { href: '/', label: 'Home' },
    { href: '/regole', label: 'Tactical Games' },
    { href: '/formazione', label: 'Formazione' },
    { href: '/news', label: 'Blog & News' },
    { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/80 backdrop-blur-md border-b border-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                : 'bg-gradient-to-b from-black/90 to-black/40 border-b border-gold/10'
                }`}
        >
            <div className="flex items-center justify-between px-5 md:px-16 h-[72px] md:h-[88px]">
                <Link href="/" className="flex items-center py-2 gap-3">
                    <Image
                        src="/fitg-logo2.png"
                        alt="FITG Logo"
                        width={80}
                        height={80}
                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain"
                    />
                    <div>
                        <div className="text-gold font-oswald font-bold tracking-widest text-lg md:text-xl lg:text-2xl leading-none">FITG</div>
                        <div className="text-[#999] font-inter text-[9px] md:text-[10px] lg:text-[14px] tracking-widest leading-none mt-0.5">
                            FEDERAZIONE ITALIANA TACTICAL GAMES
                        </div>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-oswald text-[15px] tracking-[2px] uppercase transition-colors duration-200 pb-0.5 ${pathname === link.href
                                ? 'text-gold border-b border-gold'
                                : 'text-[#ddd] hover:text-gold'
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
                <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-6 py-3.5 font-oswald text-xs tracking-[3px] uppercase border-b border-gold/10 transition-colors ${pathname === link.href ? 'text-gold' : 'text-[#ddd] hover:text-gold'
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