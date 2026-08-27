'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const sponsors = [
    { nome: 'Tmt', img: '/tmt.png', href: 'https://www.tmt-academy.com/' },
    { nome: 'Dsa', img: '/dsa-nobg.png', href: 'https://www.dsa-delta.it/' },
    { nome: 'Military', img: '/military.png', href: 'https://www.instagram.com/military.camp.experience?igsh=cXFta2txNTBxOXd3' },
    { nome: 'Red Gym', img: '/rgym.png', href: 'https://redgym.it' },
    { nome: 'Ruggiero', img: '/ruggiero.jpeg', href: 'https://www.ruggieroarmi.com' },
    { nome: 'Shooter', img: '/shooter.png', href: 'https://shooterstore.it/' },
    { nome: 'Tacfit', img: '/tacfit.jpeg', href: 'https://tacfititalia.com/' },
    { nome: 'Unuci', img: '/unuci.gif', href: 'https://www.instagram.com/unuci.addestramento/' },
    { nome: 'Sttu', img: '/sttu.png', href: 'https://www.facebook.com/STTUSchoolTraining/' },
    { nome: 'Cts', img: '/cts.png', href: 'https://www.ctspoligoni.it/' },
    { nome: 'Idfs', img: '/idfs.png', href: 'https://www.instagram.com/accademiaidfsera?igsh=MTFzdDk5cThjcTd5Yw==' },
    { nome: '4D', img: '/4d.png', href: 'https://www.instagram.com/4defence.plus?igsh=NDM1cmlyMnVyaXR0' },
    { nome: 'WowSoftair', img: '/wow.png', href: 'https://www.wowsoftair.com/' },
    { nome: 'La Fortezza', img: '/fortezza.png', href: 'https://www.instagram.com/lafortezzaasd?igsh=NjhnaW4xZXB2dGpz&utm_source=ig_contact_invite' },
]

export default function SponsorsStrip() {
    const trackRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        let x = 0
        const speed = 0.5
        const clone = track.innerHTML
        track.innerHTML += clone

        const animate = () => {
            x -= speed
            if (Math.abs(x) >= track.scrollWidth / 2) x = 0
            track.style.transform = `translateX(${x}px)`
            requestAnimationFrame(animate)
        }
        const raf = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <div className="bg-[#1A1A1A] overflow-hidden">
            {/* Sfumatura top dalla sezione precedente */}
            <div className="h-8 bg-gradient-to-b from-[#111] to-[#1A1A1A]" />

            {/* Titolo */}
            <div className="text-center pb-5 md:pb-6">
                <span className="font-oswald font-bold text-[13px] md:text-[15px] tracking-[4px] text-gold uppercase">
                    PARTNERS
                </span>
            </div>

            {/* Loghi */}
            <div ref={trackRef} className="flex items-center gap-2 md:gap-10 w-max">
                {sponsors.map((s, i) => (
                    <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-16 md:h-20 w-40 md:w-48 shrink-0 lg:grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    >
                        <Image
                            src={s.img}
                            alt={s.nome}
                            width={180}
                            height={80}
                            className="object-contain w-full h-full"
                        />
                    </a>
                ))}
            </div>

            {/* Sfumatura bottom verso la sezione successiva */}
            <div className="h-8 bg-gradient-to-b from-[#1A1A1A] to-[#111]" />
        </div>
    )
}