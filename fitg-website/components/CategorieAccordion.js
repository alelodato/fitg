'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

const categorie = [
    { nome: 'Divisione Élite', desc: 'Descrizione categoria da inserire.', img: '/image2.jpeg' },
    { nome: 'Divisione Tattica', desc: 'Descrizione categoria da inserire.', img: '/image3.jpeg' },
    { nome: 'Divisione Standard', desc: 'Descrizione categoria da inserire.', img: '/image0.jpeg' },
    { nome: 'Divisione a Squadre', desc: 'Descrizione categoria da inserire.', img: '/image6.jpeg' },
    { nome: 'Divisione Air Soft', desc: 'Descrizione categoria da inserire.', img: '/image2.jpeg' },
]

export default function CategorieAccordion() {
    const [openMobile, setOpenMobile] = useState(null)
    const [openDesktop, setOpenDesktop] = useState(null)

    return (
        <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
            <SectionLabel>Categorie</SectionLabel>
            <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8">
                <span className="text-white">Le </span>
                <span className="text-gold">Categorie</span>
            </h2>

            {/* MOBILE — accordion verticale */}
            <div className="md:hidden flex flex-col max-w-2xl">
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
                                <span className={`shrink-0 w-6 h-6 border flex items-center justify-center transition-all ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>
                                    +
                                </span>
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="pb-6">
                                        <div className="relative h-[180px] overflow-hidden mb-4">
                                            <Image src={c.img} alt={c.nome} fill className="object-cover brightness-[0.6]" />
                                        </div>
                                        <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* TABLET + DESKTOP — griglia con immagine, espande la card stessa */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl">
                {categorie.map((c, i) => {
                    const isOpen = openDesktop === i
                    return (
                        <button
                            key={i}
                            onClick={() => setOpenDesktop(isOpen ? null : i)}
                            className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                        >
                            <div className={`relative overflow-hidden transition-all duration-500 ${isOpen ? 'h-[140px]' : 'h-[180px]'}`}>
                                <Image
                                    src={c.img}
                                    alt={c.nome}
                                    fill
                                    className="object-cover brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                                <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <span className="font-oswald font-bold text-white text-[16px]">{c.nome}</span>
                                    <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>
                                        +
                                    </span>
                                </div>

                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </section>
    )
}