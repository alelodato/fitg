'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const sponsors = [
    { nome: 'Sponsor 1', img: '/images/sponsor-1.png' },
    { nome: 'Sponsor 2', img: '/images/sponsor-2.png' },
    { nome: 'Sponsor 3', img: '/images/sponsor-3.png' },
    { nome: 'Sponsor 4', img: '/images/sponsor-4.png' },
    { nome: 'Sponsor 5', img: '/images/sponsor-5.png' },
    { nome: 'Sponsor 6', img: '/images/sponsor-6.png' },
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
        <div className="bg-[#222] border-t-2 border-gold border-b border-gold/20 py-4 overflow-hidden">
            <div ref={trackRef} className="flex items-center gap-12 w-max">
                {sponsors.map((s, i) => (
                    <div key={i} className="flex items-center justify-center h-10 w-32 shrink-0 opacity-50 hover:opacity-100 transition-opacity">
                        <Image
                            src={s.img}
                            alt={s.nome}
                            width={120}
                            height={40}
                            className="object-contain filter brightness-0 invert"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}