'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

const categorie = [
    {
        nome: 'Divisione Élite',
        img: '/elite.jpg',
        breve: 'Per gli atleti più esperti e preparati, dove ogni errore può fare la differenza.',
    },
    {
        nome: 'Divisione Tattica',
        img: '/tattica.jpg',
        breve: 'Stessa struttura di gara, con attenzione all\'equipaggiamento operativo.',
    },
    {
        nome: 'Divisione Standard',
        img: '/standard.jpg',
        breve: 'Il punto di ingresso più accessibile per chi si avvicina alla disciplina.',
    },
    {
        nome: 'TDM',
        img: '/tdm.jpg',
        breve: 'Tactical Decision Maker: precisione, rapidità e capacità decisionale sotto stress.',
    },
    {
        nome: 'Divisione a Squadre',
        img: '/squadre.jpg',
        breve: 'Le sfide del Tacticon affrontate insieme, in una dimensione collettiva.',
    },
    {
        nome: 'Divisione Air Soft',
        img: '/airsoft.jpg',
        breve: 'Lo stesso format, con repliche softair al posto delle armi da fuoco.',
    },
]

export default function CategorieAccordion() {
    const [openMobile, setOpenMobile] = useState(null)

    return (
        <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
            <SectionLabel>Categorie</SectionLabel>
            <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8">
                <span className="text-white">Le </span>
                <span className="text-gold">Categorie</span>
            </h2>

            {/* MOBILE — accordion verticale con anteprima breve */}
            <div className="md:hidden flex flex-col max-w-2xl mb-8">
                {categorie.map((c, i) => {
                    const isOpen = openMobile === i
                    return (
                        <div key={i} className="border-t border-gold/10 last:border-b">
                            <button
                                onClick={() => setOpenMobile(isOpen ? null : i)}
                                className="w-full flex items-center justify-between py-5 text-left gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="font-oswald font-bold text-gold text-[11px] tracking-[3px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className={`font-oswald font-bold text-[16px] transition-colors ${isOpen ? 'text-gold' : 'text-white'}`}>
                                        {c.nome}
                                    </span>
                                </div>
                                <span className={`shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>
                                    +
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="pb-6">
                                        <div className="relative h-[160px] overflow-hidden mb-4">
                                            <Image src={c.img} alt={c.nome} fill className="object-cover object-top brightness-[0.7]" />
                                        </div>
                                        <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.breve}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* DESKTOP — griglia semplice con anteprima breve */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl mb-8">
                {categorie.map((c, i) => (
                    <div key={i} className="bg-[#1A1A1A] overflow-hidden border-t-2 border-gold">
                        <div className="relative h-[160px] overflow-hidden">
                            <Image src={c.img} alt={c.nome} fill className="object-cover object-top brightness-[0.55]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            <div className="absolute bottom-3 left-4 font-oswald font-bold text-gold text-[10px] tracking-[3px]">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="font-oswald font-bold text-white text-[16px] mb-2">{c.nome}</div>
                            <p className="font-inter text-[12px] text-[#999] leading-relaxed">{c.breve}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/categorie"
                className="inline-flex items-center gap-2.5 font-oswald text-[11px] tracking-[3px] text-gold hover:gap-4 transition-all"
            >
                SCOPRI TUTTE LE CATEGORIE <span className="w-5 h-px bg-gold block" />
            </Link>
        </section>
    )
}