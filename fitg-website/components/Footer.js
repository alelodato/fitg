'use client'

import Link from 'next/link'
import Image from 'next/image'

const sponsors = [
    { nome: 'Tmt', img: '/tmt.png', href: 'https://www.tmt-academy.com/' },
    { nome: 'Dsa', img: '/dsa-nobg.png', href: 'https://www.dsa-delta.it/' },
    { nome: 'GW', img: '/gw.png', href: 'https://gunsweek.com/en' },
    { nome: 'Kali Kalasag', img: '/kali.png', href: 'https://kalikalasag.com' },
    { nome: 'Military', img: '/military.png', href: 'https://www.instagram.com/military.camp.experience?igsh=cXFta2txNTBxOXd3' },
    { nome: 'Red Gym', img: '/rgym.png', href: 'https://redgym.it' },
    { nome: 'Ruggiero', img: '/ruggiero.jpeg', href: 'https://www.ruggieroarmi.com' },
    { nome: 'Sabatti', img: '/sabatti.jpeg', href: 'https://sabatti.it' },
    { nome: 'Shooter', img: '/shooter.png', href: 'https://shooterstore.it/' },
    { nome: 'Tacfit', img: '/tacfit.jpeg', href: 'https://tacfititalia.com/' },
    { nome: 'Unuci', img: '/unuci.gif', href: 'https://www.instagram.com/unuci.addestramento/' },
    { nome: 'Sttu', img: '/sttu.png', href: 'https://www.facebook.com/STTUSchoolTraining/' },
    { nome: 'Cts', img: '/cts.jpeg', href: 'https://www.ctspoligoni.it/' },
    { nome: 'Redpoint', img: '/redpoint.png', href: 'https://www.armeriaredpoint.com/' },
    { nome: 'Idfs', img: '/idfs.png', href: 'https://www.instagram.com/accademiaidfsera?igsh=MTFzdDk5cThjcTd5Yw==' },
    { nome: '4D', img: '/4d.png', href: 'https://www.instagram.com/4defence.plus?igsh=NDM1cmlyMnVyaXR0' },
    { nome: 'Tactical Games', img: '/tgames.png', href: 'https://thetacticalgames.eu/' },
    { nome: 'Tactical Games Europe', img: '/tgames-eu.png', href: 'https://thetacticalgames.com/' },
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
                                alt="FITC Logo"
                                width={44}
                                height={44}
                                className="object-contain"
                            />
                            <div>
                                <div className="font-oswald font-bold tracking-[2px] text-gold text-sm">FITC</div>
                                <div className="font-inter text-[7px] tracking-widest text-[#555]">FEDERAZIONE ITALIANA TACTICAL CONTEST</div>
                            </div>
                        </div>
                        <p className="font-inter text-sm text-[#555] leading-relaxed">
                            Sport, disciplina e precisione. La federazione ufficiale dei Tactical Contest in Italia.
                        </p>
                    </div>

                    {/* NAVIGAZIONE */}
                    <div>
                        <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">NAVIGAZIONE</div>
                        <div className="w-7 h-px bg-gold mb-4" />
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'Tactical Contest', href: '/regole' },
                            { label: 'Categorie', href: '/categorie' },
                            { label: 'Formazione', href: '/formazione' },
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

                        <a
                            href="mailto:info@federazioneitalianatacticon.it"
                            className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors"
                        >
                            info@federazioneitalianatacticon.it
                        </a>

                        <a
                            href="https://wa.me/393518303381"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors"
                        >
                            +39 351 830 3381 (WhatsApp)
                        </a>

                        <a
                            href="https://www.instagram.com/feder.italiana.tactical.games?igsh=bzdxYm8zcG9kNHh4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/61588753523309/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors"
                        >
                            Facebook
                        </a>

                        <a
                            href="URL_YOUTUBE_QUI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-inter text-sm text-[#555] mb-2.5 hover:text-gold transition-colors"
                        >
                            YouTube
                        </a>
                    </div>

                </div>

                {/* SPONSOR */}
                <div className="border-t border-[#222] pt-8 pb-8">
                    <div className="text-[9px] tracking-[3px] text-white font-oswald mb-2">I NOSTRI PARTNER</div>
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
                        &copy; 2026 FITC &middot; Federazione Italiana Tactical Contest. Tutti i diritti riservati.
                    </span>
                    <span className="font-inter text-[10px] text-[#444]">P.IVA 00000000000</span>
                </div>
            </div>
        </footer>
    )
}