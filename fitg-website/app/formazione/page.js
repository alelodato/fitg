import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import { Dumbbell, Target, Heart, Brain, CheckCircle } from 'lucide-react'

export const metadata = { title: 'Formazione — FITG' }

const areeAllenamento = [
    {
        icon: Dumbbell,
        titolo: 'FORZA E RESISTENZA',
        desc: 'Allenamento di forza e resistenza funzionale finalizzato allo sviluppo della capacità di esprimere forza, potenza e resistenza sotto sforzo prolungato. Utilizza attrezzature specifiche come kettlebell, sandbag, Bulgarian bag, wall ball e altri strumenti del functional training, combinando movimenti multiarticolari, trasporto di carichi, sollevamenti e esercizi dinamici che coinvolgono tutto il corpo. Questo tipo di allenamento sviluppa la resistenza fisica e mentale necessaria per mantenere controllo, efficienza e prestazione anche in condizioni di elevata fatica.',
    },
    {
        icon: Heart,
        titolo: 'CARDIO E MOBILITÀ',
        desc: 'Allenamento dedicato alla capacità di muoversi rapidamente ed efficacemente in ambienti complessi. Attraverso corsa, superamento di muri, strisciamenti, passaggi tecnici e prove di equilibrio, vengono sviluppate resistenza cardiovascolare, mobilità, coordinazione e consapevolezza del corpo, competenze fondamentali per mantenere prestazione e controllo durante l\'intera competizione.',
    },
    {
        icon: Target,
        titolo: 'TIRO',
        desc: 'Il tiro tattico con pistola e fucile non è una semplice disciplina di tiro dinamico: è una combinazione di precisione, gestione dello stress fisico, rapidità nelle transizioni tra armi e capacità atletica. Gli atleti devono eseguire esercizi fisici impegnativi e subito dopo colpire bersagli con elevata precisione, spesso con frequenza cardiaca molto alta. Il fucile viene utilizzato soprattutto per bersagli da media e lunga distanza, comunemente tra 50 e 400 metri. La pistola viene generalmente impiegata su bersagli più vicini, spesso tra 10 e 25 metri.',
    },
    {
        icon: Brain,
        titolo: 'MINDSET',
        desc: 'L\'aspetto psicologico in una competizione di Tactical Games è spesso tanto importante quanto la preparazione fisica e tecnica. La sfida psicologica principale non è "restare calmi", ma mantenere precisione, lucidità e disciplina tecnica mentre il corpo è in una condizione di forte stress fisiologico. Spesso la differenza tra due atleti fisicamente simili emerge proprio dalla capacità di controllare attenzione, emozioni e processo decisionale negli ultimi secondi prima di premere il grilletto.',
    },
]

const consigliAllenamento = [
    'Allenati al tiro DOPO lo sforzo fisico — in gara non spari mai riposato',
    'Pratica le transizioni fucile e pistola in gilet tattico',
    'Lavora su farmer\'s carry e overhead carry con peso da gara',
    'Corri in gilet tattico — minimo 400m senza fermarti',
    'Pratica il tiro da posizioni non standard (barricata, ginocchio, prono)',
    'Conosci il tuo equipaggiamento — caricamento, scaricamento e risoluzione malfunzionamenti sotto pressione',
]

const aree = [
    { nome: 'Area 1', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 2', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 3', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
]

export default function FormazionePage() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/image3.jpeg" alt="Formazione" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Formazione</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Formazione e </span>
                        <span className="text-gold">Preparazione Atletica</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Piani di allenamento e aree attrezzate per prepararti al meglio.
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Testo di introduzione sulla formazione e preparazione atletica.
                    </p>
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                        Eventuale secondo paragrafo o immagini introduttive.
                    </p>
                </div>
            </section>

            {/* AREE DI ALLENAMENTO */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-2">
                    <span className="text-white">AREE DI </span>
                    <span className="text-gold">ALLENAMENTO</span>
                </h2>
                <p className="font-inter text-[13px] text-[#999] mb-8">
                    Quattro pilastri della preparazione per i Tactical Games
                </p>
                <div className="flex flex-col gap-4 max-w-3xl">
                    {areeAllenamento.map((area, i) => {
                        const Icon = area.icon
                        return (
                            <div key={i} className="bg-[#1A1A1A] border border-gold/10 p-6 md:p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <Icon size={24} className="text-gold shrink-0" strokeWidth={1.5} />
                                    <div className="font-oswald font-bold text-white text-[17px] md:text-[19px] tracking-wide">
                                        {area.titolo}
                                    </div>
                                </div>
                                <p className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{area.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* CONSIGLI */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">CONSIGLI DI </span>
                    <span className="text-gold">ALLENAMENTO</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {consigliAllenamento.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#222] px-5 py-4 border border-gold/10">
                            <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* AREE FISICHE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Dove Allenarsi</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">Aree di </span>
                    <span className="text-gold">Allenamento</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="flex flex-col flex-1">
                        {aree.map((a, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-6 border-b border-gold/10">
                                <div className="shrink-0">
                                    <div className="font-oswald font-bold text-gold text-[16px] md:text-[18px]">{a.nome}</div>
                                    <div className="font-inter text-[11px] text-[#555] tracking-wide mt-0.5">{a.luogo}</div>
                                </div>
                                <div className="hidden md:block w-px self-stretch bg-gold/20" />
                                <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-[420px] lg:w-[500px] shrink-0">
                        <div className="w-full h-[280px] md:h-full min-h-[360px] border border-gold/20 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7372956.476520572!2d12.5674!3d41.8719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aree di allenamento FITG"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}