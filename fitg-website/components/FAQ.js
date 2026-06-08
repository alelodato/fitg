'use client'

import { useState } from 'react'
import SectionLabel from './SectionLabel'

const faqs = [
    {
        domanda: 'Domanda frequente n°1',
        risposta: 'Testo risposta da inserire.',
    },
    {
        domanda: 'Domanda frequente n°2',
        risposta: 'Testo risposta da inserire.',
    },
    {
        domanda: 'Domanda frequente n°3',
        risposta: 'Testo risposta da inserire.',
    },
    {
        domanda: 'Domanda frequente n°4',
        risposta: 'Testo risposta da inserire.',
    },
    {
        domanda: 'Domanda frequente n°5',
        risposta: 'Testo risposta da inserire.',
    },
    {
        domanda: 'Domanda frequente n°6',
        risposta: 'Testo risposta da inserire.',
    },
]

export default function FAQ() {
    const [aperto, setAperto] = useState(null)

    return (
        <section id='faq' className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-20 border-t border-gold/20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10 md:mb-14">
                    <SectionLabel center>FAQ</SectionLabel>
                    <h2 className="font-oswald font-bold text-[24px] md:text-[36px]">
                        <span className="text-white">Domande </span>
                        <span className="text-gold">Frequenti</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-0">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gold/10">
                            <button
                                onClick={() => setAperto(aperto === i ? null : i)}
                                className="w-full flex items-center justify-between py-5 text-left gap-4"
                            >
                                <span className={`font-oswald font-bold text-[15px] md:text-[17px] transition-colors ${aperto === i ? 'text-gold' : 'text-white'}`}>
                                    {faq.domanda}
                                </span>
                                <span className={`shrink-0 w-6 h-6 border flex items-center justify-center transition-all ${aperto === i ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>
                                    +
                                </span>
                            </button>

                            {aperto === i && (
                                <div className="pb-5">
                                    <p className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">
                                        {faq.risposta}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}