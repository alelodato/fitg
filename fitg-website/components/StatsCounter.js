'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
    { valore: 12, suffisso: '+', label: 'Eventi organizzati' },
    { valore: 350, suffisso: '+', label: 'Atleti tesserati' },
    { valore: 12, suffisso: '', label: 'Regioni coinvolte' },
    { valore: 5, suffisso: '', label: 'Divisioni competitive' },
]

function Counter({ valore, suffisso, label, avvia }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!avvia) return
        let start = 0
        const duration = 1800
        const step = Math.ceil(valore / (duration / 16))
        const timer = setInterval(() => {
            start += step
            if (start >= valore) {
                setCount(valore)
                clearInterval(timer)
            } else {
                setCount(start)
            }
        }, 16)
        return () => clearInterval(timer)
    }, [avvia, valore])

    return (
        <div className="flex flex-col items-center text-center px-4">
            <div className="font-oswald font-bold text-[48px] md:text-[64px] text-gold leading-none">
                {count}{suffisso}
            </div>
            <div className="w-8 h-px bg-gold/40 my-3" />
            <div className="font-inter text-[12px] md:text-[13px] text-[#ccc] tracking-wide uppercase">
                {label}
            </div>
        </div>
    )
}

export default function StatsCounter() {
    const [avvia, setAvvia] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAvvia(true) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={ref} className="bg-[#111] border-t border-gold/20 border-b border-gold/20 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5 md:px-16">
                {stats.map((s, i) => (
                    <Counter key={i} {...s} avvia={avvia} />
                ))}
            </div>
        </section>
    )
}