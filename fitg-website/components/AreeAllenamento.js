'use client'

import Image from 'next/image'

const aree = [
    {
        titolo: 'FORZA E RESISTENZA',
        img: '/forza.jpeg',
        desc: 'Allenamento di forza e resistenza funzionale finalizzato allo sviluppo della capacità di esprimere forza, potenza e resistenza sotto sforzo prolungato. Utilizza attrezzature specifiche come kettlebell, sandbag, Bulgarian bag, wall ball e altri strumenti del functional training, combinando movimenti multiarticolari, trasporto di carichi, sollevamenti e esercizi dinamici che coinvolgono tutto il corpo. Questo tipo di allenamento sviluppa la resistenza fisica e mentale necessaria per mantenere controllo, efficienza e prestazione anche in condizioni di elevata fatica.',
    },
    {
        titolo: 'CARDIO E MOBILITÀ',
        img: '/cardio.jpeg',
        desc: 'Allenamento dedicato alla capacità di muoversi rapidamente ed efficacemente in ambienti complessi. Attraverso corsa, superamento di muri, strisciamenti, passaggi tecnici e prove di equilibrio, vengono sviluppate resistenza cardiovascolare, mobilità, coordinazione e consapevolezza del corpo, competenze fondamentali per mantenere prestazione e controllo durante l\'intera competizione.',
    },
    {
        titolo: 'TIRO',
        img: '/tiro.jpeg',
        desc: 'Il tiro tattico con pistola e fucile non è una semplice disciplina di tiro dinamico: è una combinazione di precisione, gestione dello stress fisico, rapidità nelle transizioni tra armi e capacità atletica. Gli atleti devono eseguire esercizi fisici impegnativi e subito dopo colpire bersagli con elevata precisione, spesso con frequenza cardiaca molto alta. Il fucile viene utilizzato soprattutto per bersagli da media e lunga distanza, comunemente tra 50 e 400 metri. La pistola viene generalmente impiegata su bersagli più vicini, spesso tra 10 e 25 metri.',
    },
    {
        titolo: 'MINDSET',
        img: '/mindset.jpeg',
        desc: 'L\'aspetto psicologico in una competizione di Tactical Games è spesso tanto importante quanto la preparazione fisica e tecnica. La sfida psicologica principale non è "restare calmi", ma mantenere precisione, lucidità e disciplina tecnica mentre il corpo è in una condizione di forte stress fisiologico. Spesso la differenza tra due atleti fisicamente simili emerge proprio dalla capacità di controllare attenzione, emozioni e processo decisionale negli ultimi secondi prima di premere il grilletto.',
    },
]

export default function AreeAllenamento() {
    return (
        <section className="bg-[#111]">
            <div className="px-5 md:px-16 pt-16 md:pt-24 pb-8 md:pb-12">
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-2">
                    <span className="text-white">AREE DI </span>
                    <span className="text-gold">ALLENAMENTO</span>
                </h2>
                <p className="font-inter text-[13px] text-[#999]">
                    I quattro pilastri della preparazione per i Tactical Games
                </p>
            </div>

            {aree.map((area, i) => (
                <div key={i} className="border-t border-gold/10">
                    <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className="relative w-full lg:w-1/2 h-[260px] md:h-[380px] lg:h-[460px] overflow-hidden">
                            <Image
                                src={area.img}
                                alt={area.titolo}
                                fill
                                className="object-cover object-center brightness-[0.6]"
                            />
                            <div className={`absolute inset-0 hidden lg:block bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent to-[#111]/60' : 'from-[#111]/60 to-transparent'}`} />
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 md:px-16 py-10 md:py-14 bg-[#111]">
                            <div className="font-oswald font-bold text-gold text-[10px] tracking-[4px] mb-4">
                                {String(i + 1).padStart(2, '0')} / 04
                            </div>
                            <h3 className="font-oswald font-bold text-white text-[22px] md:text-[28px] tracking-wide mb-5">
                                {area.titolo}
                            </h3>
                            <div className="w-10 h-0.5 bg-gold mb-5" />
                            <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed max-w-xl">
                                {area.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}