'use client'

import Link from 'next/link'
import Image from 'next/image'

const sponsors = [
    { nome: 'Dsa', img: '/dsa-nobg.png', href: 'https://dsa.it' },
    { nome: 'GW', img: '/gw.png', href: 'https://gw.it' },
    { nome: 'Kali Kalasag', img: '/kali.png', href: 'https://kalikalasag.it' },
    { nome: 'Military', img: '/military.png', href: 'https://military.it' },
    { nome: 'Red Gym', img: '/rgym.png', href: 'https://redgym.it' },
    { nome: 'Ruggiero', img: '/ruggiero.jpeg', href: 'https://ruggiero.it' },
    { nome: 'Sabatti', img: '/sabatti.jpeg', href: 'https://sabatti.it' },
    { nome: 'Shooter', img: '/shooter.png', href: 'https://shooter.it' },
]

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] border-t-2 border-gold">
            <div className="px-5 md:px-16 pt-10 md:pt-14 pb-6 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">

                    {/* BRAND */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/fitg-logo2.png"
                                alt="FITG Logo"
                                width={44}
                                height={44}
                                className="object-contain"
                            />
                            <div>
                                <div className="font-oswald font-bold tracking-[2px] text-gold text-sm">FITG</div>
                                <div className="font-inter text-[7px] tracking-widest text-[#555]">FEDERAZIONE ITALIANA TACTICAL GAMES</div>
                            </div>
                        </div>
                        <p className="font-inter text-sm text-[#555] leading-relaxed">
                            Sport, disciplina e precisione. La federazione ufficiale dei Tactical Games in Italia.
                        </p>
                    </div>

                    {/* NAVIGAZIONE */}
                    <div>
                        <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">NAVIGAZIONE</div>
                        <div className="w-7 h-px bg-gold mb-4" />
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'Tactical Games', href: '/regole' },
                            { label: 'Formazione', href: '/formazione' },
                            { label: 'Blog & News', href: '/news' },
                            { label: 'Contatti', href: '/contatti' },
                        ].map((l) => (
                            <Link key={l.href} href={l.href} className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* LINK UTILI */}
                    <div>
                        <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">LINK UTILI</div>
                        <div className="w-7 h-px bg-gold mb-4" />
                        {[
                            { label: 'TTG Gear List', href: '/gear' },
                            { label: 'FAQ', href: '/#faq' },
                            { label: 'Sicurezza', href: '/sicurezza' },
                            { label: 'Contatti', href: '/contatti' },
                        ].map((l) => (
                            <Link key={l.label} href={l.href} className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* CONTATTI */}
                    <div>
                        <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">CONTATTI</div>
                        <div className="w-7 h-px bg-gold mb-4" />
                        {[
                            'info@federtacticalgames.it',
                            '+39 000 000 0000',
                            'Instagram',
                            'Facebook',
                            'YouTube',
                        ].map((item) => (
                            <div key={item} className="font-inter text-sm text-[#555] mb-2.5">{item}</div>
                        ))}
                    </div>

                </div>

                {/* SPONSOR */}
                <div className="border-t border-[#222] pt-8 pb-8">
                    <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">I NOSTRI SPONSOR</div>
                    <div className="w-7 h-px bg-gold mb-6" />
                    <div className="flex flex-wrap items-center gap-6 md:gap-10">
                        {sponsors.map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-24 flex items-center justify-center lg:grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            >
                                <Image src={s.img} alt={s.nome} width={96} height={40} className="object-contain w-full h-full" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[#222] pt-4 flex flex-col md:flex-row justify-between gap-2">
                    <span className="font-inter text-[10px] text-[#444]">
                        &copy; 2026 FITG &middot; Federazione Italiana Tactical Games. Tutti i diritti riservati.
                    </span>
                    <span className="font-inter text-[10px] text-[#444]">P.IVA 00000000000</span>
                </div>
            </div>
        </footer>
    )
}