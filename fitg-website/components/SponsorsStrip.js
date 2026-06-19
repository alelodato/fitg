'use client'

import { useEffect, useRef } from 'react'
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
        <div className="bg-[#1A1A1A] border-t-2 border-gold border-b border-gold/20 py-8 md:py-10 overflow-hidden">
            <div ref={trackRef} className="flex items-center gap-12 md:gap-16 w-max">
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
        </div>
    )
}