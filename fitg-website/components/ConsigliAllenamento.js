'use client'

import { useState, useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const consigliAllenamento = [
    'Allenati al tiro DOPO lo sforzo fisico — in gara non spari mai riposato',
    'Pratica le transizioni fucile e pistola in gilet tattico',
    'Lavora su farmer\'s carry e overhead carry con peso da gara',
    'Corri in gilet tattico — minimo 400m senza fermarti',
    'Pratica il tiro da posizioni non standard (barricata, ginocchio, prono)',
    'Conosci il tuo equipaggiamento — caricamento, scaricamento e risoluzione malfunzionamenti sotto pressione',
]

function SlideInRow({ children, delay = 0 }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            {children}
        </div>
    )
}

export default function ConsigliAllenamento() {
    return (
        <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
            <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                <span className="text-white">CONSIGLI DI </span>
                <span className="text-gold">ALLENAMENTO</span>
            </h2>
            <div className="flex flex-col gap-3 max-w-2xl">
                {consigliAllenamento.map((item, i) => (
                    <SlideInRow key={i} delay={i * 80}>
                        <div className="flex items-start gap-4 bg-[#222] px-5 py-4 border border-gold/10">
                            <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    </SlideInRow>
                ))}
            </div>
        </section>
    )
}