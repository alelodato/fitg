'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

const categorie = [
    {
        nome: 'Divisione Élite',
        img: '/elite.webp',
        desc: 'La categoria Élite è dedicata agli atleti più esperti e preparati. Le prove fisiche e gli stage di tiro richiedono elevate capacità atletiche, velocità di esecuzione e massima precisione. È la categoria che esprime al massimo lo spirito dei Tactical Games, dove ogni errore o perdita di concentrazione può fare la differenza sul risultato finale.',
    },
    {
        nome: 'Divisione Tattica',
        img: '/tattica.webp',
        desc: 'La categoria Tattica mantiene la stessa struttura di gara dei Tactical Games, ma con particolare attenzione all\'utilizzo dell\'equipaggiamento operativo. Gli atleti affrontano le prove indossando dotazioni specifiche che aumentano il livello di realismo e l\'impegno fisico richiesto. È ideale per chi desidera vivere un\'esperienza più vicina agli scenari tattici reali.',
    },
    {
        nome: 'Divisione Standard',
        img: '/standard.webp',
        desc: 'La categoria Standard rappresenta il punto di ingresso più accessibile ai Tactical Games. Mantiene l\'alternanza tra esercizi fisici e prove di tiro, ma con requisiti tecnici e di equipaggiamento più semplici rispetto alle categorie avanzate. È pensata per permettere a nuovi partecipanti e sportivi provenienti da altre discipline di avvicinarsi gradualmente alla competizione.',
    },
    {
        nome: 'Divisione a Squadre',
        img: '/squadre.webp',
        desc: 'La categoria a Squadre trasferisce tutte le sfide dei Tactical Games in una dimensione collettiva. I partecipanti collaborano per affrontare le prove, dividere gli sforzi e gestire insieme le strategie di gara. Oltre alle capacità fisiche e tecniche individuali, diventano fondamentali comunicazione, coordinazione e spirito di squadra.',
    },
    {
        nome: 'Divisione Air Soft',
        img: '/airsoft.webp',
        desc: 'La categoria Air Soft ripropone il format dei Tactical Games utilizzando repliche da softair al posto delle armi da fuoco. I partecipanti affrontano le stesse tipologie di prove fisiche e di tiro, sviluppando precisione, controllo e capacità decisionale sotto stress in un contesto più accessibile e adatto a strutture dedicate a questa disciplina.',
    },
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
                                <span className={`shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>
                                    +
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="pb-6">
                                        <div className="relative h-[200px] overflow-hidden mb-4">
                                            <Image src={c.img} alt={c.nome} fill className="object-cover object-top brightness-[0.7]" />
                                        </div>
                                        <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* DESKTOP — grid 2x2 + ultima card full width */}
            <div className="hidden md:block max-w-5xl">

                {/* GRID 2x2 */}
                <div className="grid grid-cols-2 gap-4 mb-4">

                    {/* Card 1 — Élite */}
                    <button
                        onClick={() => setOpenDesktop(openDesktop === 0 ? null : 0)}
                        className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                    >
                        <div className={`relative overflow-hidden transition-all duration-500 ${openDesktop === 0 ? 'h-[160px]' : 'h-[260px]'}`}>
                            <Image src={categorie[0].img} alt={categorie[0].nome} fill className="object-cover object-center brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">01</div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between">
                                <span className="font-oswald font-bold text-white text-[17px]">{categorie[0].nome}</span>
                                <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${openDesktop === 0 ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out ${openDesktop === 0 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{categorie[0].desc}</p>
                                </div>
                            </div>
                        </div>
                    </button>

                    {/* Card 2 — Tattica */}
                    <button
                        onClick={() => setOpenDesktop(openDesktop === 1 ? null : 1)}
                        className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                    >
                        <div className={`relative overflow-hidden transition-all duration-500 ${openDesktop === 1 ? 'h-[160px]' : 'h-[260px]'}`}>
                            <Image src={categorie[1].img} alt={categorie[1].nome} fill className="object-cover object-center brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">02</div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between">
                                <span className="font-oswald font-bold text-white text-[17px]">{categorie[1].nome}</span>
                                <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${openDesktop === 1 ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out ${openDesktop === 1 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{categorie[1].desc}</p>
                                </div>
                            </div>
                        </div>
                    </button>

                    {/* Card 3 — Standard */}
                    <button
                        onClick={() => setOpenDesktop(openDesktop === 2 ? null : 2)}
                        className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                    >
                        <div className={`relative overflow-hidden transition-all duration-500 ${openDesktop === 2 ? 'h-[160px]' : 'h-[260px]'}`}>
                            <Image src={categorie[2].img} alt={categorie[2].nome} fill className="object-cover object-top brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">03</div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between">
                                <span className="font-oswald font-bold text-white text-[17px]">{categorie[2].nome}</span>
                                <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${openDesktop === 2 ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out ${openDesktop === 2 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{categorie[2].desc}</p>
                                </div>
                            </div>
                        </div>
                    </button>

                    {/* Card 4 — Squadre */}
                    <button
                        onClick={() => setOpenDesktop(openDesktop === 3 ? null : 3)}
                        className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                    >
                        <div className={`relative overflow-hidden transition-all duration-500 ${openDesktop === 3 ? 'h-[160px]' : 'h-[260px]'}`}>
                            <Image src={categorie[3].img} alt={categorie[3].nome} fill className="object-cover object-center brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">04</div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between">
                                <span className="font-oswald font-bold text-white text-[17px]">{categorie[3].nome}</span>
                                <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${openDesktop === 3 ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out ${openDesktop === 3 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{categorie[3].desc}</p>
                                </div>
                            </div>
                        </div>
                    </button>

                </div>

                {/* Card 5 — Air Soft — full width */}
                <button
                    onClick={() => setOpenDesktop(openDesktop === 4 ? null : 4)}
                    className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300 w-full"
                >
                    <div className={`relative overflow-hidden transition-all duration-500 ${openDesktop === 4 ? 'h-[160px]' : 'h-[280px]'}`}>
                        <Image src={categorie[4].img} alt={categorie[4].nome} fill className="object-cover object-top brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                        <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">05</div>
                    </div>
                    <div className="p-5">
                        <div className="flex items-center justify-between">
                            <span className="font-oswald font-bold text-white text-[17px]">{categorie[4].nome}</span>
                            <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${openDesktop === 4 ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                        </div>
                        <div className={`grid transition-all duration-300 ease-in-out ${openDesktop === 4 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                            <div className="overflow-hidden">
                                <p className="font-inter text-[13px] text-[#ccc] leading-relaxed max-w-2xl">{categorie[4].desc}</p>
                            </div>
                        </div>
                    </div>
                </button>

            </div>
        </section>
    )
}