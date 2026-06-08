'use client'

import { useState } from 'react'
import SectionLabel from './SectionLabel'

const faqs = [
    {
        domanda: 'Cos\'è un Tactical Game?',
        risposta: 'I Tactical Games sono competizioni sportive che combinano fitness funzionale ad alta intensità e tiro di precisione. Gli atleti affrontano percorsi misti con prove fisiche — corsa, trasporto pesi, ostacoli — alternate a linee di tiro con arma lunga e arma corta.',
    },
    {
        domanda: 'Chi può partecipare alle competizioni FITG?',
        risposta: 'Chiunque sia in possesso di regolare porto d\'armi sportivo e tesseramento FITG può partecipare. Esistono divisioni per tutti i livelli: dalla Rookie per i principianti fino alla Open per gli atleti più esperti.',
    },
    {
        domanda: 'Che attrezzatura serve per competere?',
        risposta: 'L\'attrezzatura obbligatoria comprende arma lunga, arma corta e gilet tattico. Protezioni obbligatorie: cuffie antirumore e occhiali balistici. Consulta il regolamento completo per i dettagli sulle specifiche tecniche.',
    },
    {
        domanda: 'Come ci si tessera alla FITG?',
        risposta: 'Per tesserarsi è necessario compilare il modulo di iscrizione disponibile nella sezione Contatti, allegare copia del porto d\'armi sportivo in corso di validità e versare la quota annuale di tesseramento. Per informazioni scrivici a info@federtacticalgames.it.',
    },
    {
        domanda: 'Le competizioni sono sicure?',
        risposta: 'La sicurezza è la priorità assoluta della FITG. Ogni evento prevede un briefing obbligatorio sulle norme di sicurezza, Range Officer certificati presenti su ogni linea di tiro e un sistema di penalità severe per qualsiasi violazione. Le norme di sicurezza non sono mai derogabili.',
    },
    {
        domanda: 'Come vengono calcolati i punteggi?',
        risposta: 'Il punteggio finale è la somma dei punti ottenuti nelle prove fisiche e nelle linee di tiro, al netto delle penalità. Ogni bersaglio mancato comporta una penalità in punti; ogni violazione delle norme di sicurezza costa -10 punti.',
    },
]

export default function FAQ() {
    const [aperto, setAperto] = useState(null)

    return (
        <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-20 border-t border-gold/20">
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