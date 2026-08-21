'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

const categorie = [
    {
        nome: 'Divisione Élite',
        img: '/elite.jpg',
        desc: 'La divisione Élite è dedicata agli atleti più esperti e preparati. Le prove fisiche e gli stage di tiro richiedono elevate capacità atletiche, velocità di esecuzione e massima precisione. È la categoria che esprime al massimo lo spirito dei Tacticon, dove ogni errore o perdita di concentrazione può fare la differenza sul risultato finale.',
    },
    {
        nome: 'Divisione Tattica',
        img: '/tattica.jpg',
        desc: 'La divisione Tattica mantiene la stessa struttura di gara dei Tacticon, ma con particolare attenzione all\'utilizzo dell\'equipaggiamento operativo. Gli atleti affrontano le prove indossando dotazioni specifiche che aumentano il livello di realismo e l\'impegno fisico richiesto. È ideale per chi desidera vivere un\'esperienza più vicina agli scenari tattici reali.',
    },
    {
        nome: 'Divisione Standard',
        img: '/standard.jpg',
        desc: 'La divisione Standard rappresenta il punto di ingresso più accessibile ai Tacticon. Mantiene l\'alternanza tra esercizi fisici e prove di tiro, ma con requisiti tecnici e di equipaggiamento più semplici rispetto alle categorie avanzate. È pensata per permettere a nuovi partecipanti e sportivi provenienti da altre discipline di avvicinarsi gradualmente alla competizione.',
    },
    {
        nome: 'TDM',
        sottotitolo: 'Tactical Decision Maker',
        img: '/tdm.jpg',
        desc: 'La TDM (Tactical Decision Maker) è una divisione di tiro tattico progettata per mettere alla prova, in condizioni di stress psicofisico, la capacità del concorrente di combinare preparazione atletica, precisione, rapidità e capacità decisionale. L\'atleta non deve limitarsi a colpire i bersagli nel minor tempo possibile, ma deve essere in grado di osservare, riconoscere, valutare e decidere correttamente prima di agire.',
    },
    {
        nome: 'Divisione a Squadre',
        img: '/squadre.jpg',
        desc: 'La divisione a Squadre trasferisce tutte le sfide dei Tacticon in una dimensione collettiva. I partecipanti collaborano per affrontare le prove, dividere gli sforzi e gestire insieme le strategie di gara. Oltre alle capacità fisiche e tecniche individuali, diventano fondamentali comunicazione, coordinazione e spirito di squadra.',
    },
    {
        nome: 'Divisione Air Soft',
        img: '/airsoft.jpg',
        desc: 'La divisione Air Soft ripropone il format dei Tacticon utilizzando repliche da softair al posto delle armi da fuoco. I partecipanti affrontano le stesse tipologie di prove fisiche e di tiro, sviluppando precisione, controllo e capacità decisionale sotto stress in un contesto più accessibile e adatto a strutture dedicate a questa disciplina.',
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
                                        {c.sottotitolo && (
                                            <div className="font-inter text-[12px] text-gold/80 mb-2 italic">{c.sottotitolo}</div>
                                        )}
                                        <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* DESKTOP — grid 2x2 + grid 2x1 per le ultime 2 */}
            <div className="hidden md:block max-w-5xl">

                {/* GRID 2x2 — prime 4 (Élite, Tattica, Standard, TDM) */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {categorie.slice(0, 4).map((c, i) => {
                        const isOpen = openDesktop === i
                        return (
                            <button
                                key={i}
                                onClick={() => setOpenDesktop(isOpen ? null : i)}
                                className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                            >
                                <div className={`relative overflow-hidden transition-all duration-500 ${isOpen ? 'h-[160px]' : 'h-[260px]'}`}>
                                    <Image src={c.img} alt={c.nome} fill className="object-cover object-top brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                                    <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <span className="font-oswald font-bold text-white text-[17px]">{c.nome}</span>
                                        <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
                                    </div>
                                    {c.sottotitolo && (
                                        <div className="font-inter text-[11px] text-gold/70 mt-1 italic">{c.sottotitolo}</div>
                                    )}
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

                {/* GRID 2x1 — ultime 2 (Squadre, Air Soft) */}
                <div className="grid grid-cols-2 gap-4">
                    {categorie.slice(4, 6).map((c, iOffset) => {
                        const i = iOffset + 4
                        const isOpen = openDesktop === i
                        return (
                            <button
                                key={i}
                                onClick={() => setOpenDesktop(isOpen ? null : i)}
                                className="group text-left bg-[#1A1A1A] overflow-hidden border-t-2 border-gold transition-all duration-300"
                            >
                                <div className={`relative overflow-hidden transition-all duration-500 ${isOpen ? 'h-[160px]' : 'h-[260px]'}`}>
                                    <Image src={c.img} alt={c.nome} fill className="object-cover object-top brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                                    <div className="absolute bottom-3 left-5 font-oswald font-bold text-gold text-[10px] tracking-[3px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <span className="font-oswald font-bold text-white text-[17px]">{c.nome}</span>
                                        <span className={`shrink-0 w-5 h-5 border flex items-center justify-center text-[11px] transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-45' : 'border-gold/30 text-[#555]'}`}>+</span>
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

            </div>
        </section>
    )
}