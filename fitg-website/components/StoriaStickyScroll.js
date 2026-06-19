'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const storiaSteps = [
    {
        num: '01',
        titolo: 'Cosa sono i Tactical Games?',
        img: '/image2.jpeg',
        testo: 'Benvenuti ai Tactical Games, dove l\'emozione della competizione incontra l\'esigenza di precisione tattica. Dal personale militare e dalle forze dell\'ordine ai tiratori sportivi e ai civili, i nostri eventi rappresentano il banco di prova definitivo. Qui, individui provenienti da diversi ambiti si incontrano per competere con l\'élite, scoprendo i propri limiti sotto l\'intensa pressione che si respira solo nelle nostre arene.',
    },
    {
        num: '02',
        titolo: 'Forza, resistenza e precisione',
        img: '/image3.jpeg',
        testo: 'Ogni evento combina esercizi di fitness funzionale con sfide di tiro di precisione. I concorrenti si muovono attraverso percorsi che mettono alla prova forza, resistenza e abilità nel tiro, trasportando equipaggiamento pesante, superando ostacoli e ingaggiando bersagli sotto pressione temporale, dove l\'affaticamento fisico si unisce all\'esigenza di precisione.',
    },
    {
        num: '03',
        titolo: 'Premiare gli atleti migliori',
        img: '/image0.jpeg',
        testo: 'Il punteggio si basa sia sul tempo che sulla precisione, con penalità per i colpi mancati o gli errori procedurali. Diverse categorie garantiscono una competizione equa, dalle qualificazioni regionali ai campionati nazionali, tutti finalizzati a incoronare l\'atleta tattico più completo.',
    },
]

export default function StoriaStickyScroll() {
    const [active, setActive] = useState(0)
    const refs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.dataset.index)
                        setActive(idx)
                    }
                })
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        )
        refs.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="bg-[#1A1A1A] border-b border-gold/20">

            {/* DESKTOP — sticky scroll a due colonne, solo da lg in su */}
            <div className="hidden lg:grid lg:grid-cols-2">
                <div className="flex flex-col">
                    {storiaSteps.map((step, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            data-index={i}
                            className="min-h-screen flex flex-col justify-center px-16 py-16 border-t border-gold/10"
                        >
                            <div className={`font-oswald font-bold text-[13px] tracking-[4px] mb-4 transition-colors duration-500 ${active === i ? 'text-gold' : 'text-[#444]'}`}>
                                {step.num}
                            </div>
                            <h3 className={`font-oswald font-bold text-[34px] mb-5 transition-colors duration-500 ${active === i ? 'text-white' : 'text-[#555]'}`}>
                                {step.titolo}
                            </h3>
                            <p className={`font-inter text-[16px] leading-relaxed transition-colors duration-500 ${active === i ? 'text-[#ccc]' : 'text-[#444]'}`}>
                                {step.testo}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <div className="sticky top-[88px] h-screen overflow-hidden">
                        {storiaSteps.map((step, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image src={step.img} alt={step.titolo} fill className="object-cover brightness-[0.55]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MOBILE + TABLET — immagine sopra ogni blocco, niente sticky */}
            <div className="lg:hidden flex flex-col">
                {storiaSteps.map((step, i) => (
                    <div key={i} className="border-t border-gold/10">
                        <div className="relative h-[280px] md:h-[400px] overflow-hidden">
                            <Image src={step.img} alt={step.titolo} fill className="object-cover brightness-[0.55]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                        </div>
                        <div className="px-5 md:px-16 py-8 md:py-12 max-w-2xl md:mx-auto">
                            <h3 className="font-oswald font-bold text-white text-[22px] md:text-[28px] mb-4">{step.titolo}</h3>
                            <p className="font-inter text-[14px] md:text-[16px] text-[#ccc] leading-relaxed">{step.testo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}