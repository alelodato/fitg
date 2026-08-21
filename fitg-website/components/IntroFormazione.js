'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const paragrafi = [
    'I Tactical Contest sono competizioni sportive multidisciplinari. Una definizione che, già da sola, rivela la complessità di questa disciplina: non si tratta di eccellere in una singola capacità, ma di integrare tre domini esigenti: la resistenza fisica, la precisione tecnica e la lucidità mentale sotto pressione, in un\'unica prestazione coerente e controllata.',
    'È proprio questa natura multidimensionale a rendere la preparazione atletica non un optional, ma il fondamento su cui costruire ogni altra competenza. Un atleta con un tiro impeccabile ma con una condizione fisica carente arriverà all\'ultimo stage con le braccia che tremano e il respiro corto, compromettendo tutto ciò che ha costruito in anni di pratica al poligono. Al contrario, un atleta fisicamente forte ma privo di una preparazione specifica rischia di sprecare energia preziosa nei movimenti, perdere il controllo posturale durante le transizioni e abbassare la qualità del tiro proprio nel momento in cui conta di più.',
    'La preparazione nei Tactical Contest richiede dunque un approccio integrato, che lavori in parallelo su forza funzionale, resistenza cardiovascolare, mobilità articolare e coordinazione motoria, il tutto calibrato sulle specificità del gesto tecnico legato all\'uso dell\'arma. Non basta essere atleti completi in senso generale: occorre diventare atleti completi in quel contesto, capaci di mantenere precisione, controllo e sicurezza anche quando il corpo è sotto sforzo massimale.',
]

function FadeIn({ children, className = '', delay = 0 }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
        >
            {children}
        </div>
    )
}

function FadeInOnMount({ children, className = '', delay = 0 }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div
            className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
        >
            {children}
        </div>
    )
}

export default function IntroFormazione() {
    return (
        <section className="bg-[#1A1A1A]">
            {/* APERTURA — foto + titolo + primo paragrafo */}
            <div className="relative overflow-hidden h-[85vh] md:h-[90vh]">
                <Image src="/formazione1.jpg" alt="Formazione" fill className="object-cover object-top brightness-[0.4]" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-16">
                    <FadeInOnMount delay={100}>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-5 h-px bg-gold" />
                            <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">Formazione</span>
                        </div>
                    </FadeInOnMount>

                    <FadeInOnMount delay={250}>
                        <h1 className="font-oswald font-bold text-[30px] md:text-[52px] leading-[1.1] max-w-2xl">
                            <span className="text-white">Formazione e </span>
                            <span className="text-gold">Preparazione Atletica</span>
                        </h1>
                    </FadeInOnMount>

                    <FadeInOnMount delay={450}>
                        <p className="font-inter text-[16px] md:text-[19px] text-[#eee] leading-[1.7] mt-6 max-w-2xl border-l-2 border-gold pl-5 md:pl-7">
                            {paragrafi[0]}
                        </p>
                    </FadeInOnMount>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-oswald text-[8px] tracking-[3px] text-[#999]">
                    ↓ &nbsp; SCORRI
                </div>
            </div>

            {/* CONTENUTO */}
            <div className="px-5 md:px-16 py-14 md:py-24">

                <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden border border-gold/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] mb-12 md:mb-16">
                    <Image src="/formazione4.JPG" alt="" fill className="object-cover object-center brightness-[0.55]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
                </div>

                {/* Paragrafo 2 */}
                <FadeIn className="mb-12 md:mb-16 flex justify-end">
                    <p className="font-inter text-[16px] md:text-[19px] text-[#eee] leading-[1.7] max-w-3xl border-r-2 border-gold pr-5 md:pr-7">
                        {paragrafi[1]}
                    </p>
                </FadeIn>

                {/* Img1 + Img2 */}
                <FadeIn className="flex justify-center gap-5 md:gap-8 mb-12 md:mb-16">
                    <div className="relative w-[46%] md:w-[340px] h-[240px] md:h-[320px] overflow-hidden border border-gold/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
                        <Image src="/formazione2.jpg" alt="" fill className="object-cover object-top brightness-[0.6]" />
                    </div>
                    <div className="relative w-[46%] md:w-[340px] h-[240px] md:h-[320px] overflow-hidden border border-gold/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] mt-8 md:mt-14">
                        <Image src="/formazione3.JPG" alt="" fill className="object-cover object-top brightness-[0.6]" />
                    </div>
                </FadeIn>

                {/* Paragrafo 3 + immagine larga */}
                <FadeIn>
                    <p className="font-inter text-[16px] md:text-[19px] text-[#eee] leading-[1.75] max-w-3xl border-l-2 border-gold pl-5 md:pl-7 mb-8 md:mb-10">
                        {paragrafi[2]}
                    </p>
                </FadeIn>

            </div>

            {/* Sfumatura di transizione verso la sezione successiva */}
            <div className="h-16 md:h-24 bg-gradient-to-b from-[#1A1A1A] to-[#111]" />
        </section>
    )
}