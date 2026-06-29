import Image from 'next/image'
import CategorieAccordion from '@/components/CategorieAccordion'
import SectionLabel from '@/components/SectionLabel'
import StoriaStickyScroll from '@/components/StoriaStickyScroll'

export const metadata = { title: 'Tactical Games — FITG' }

const categorie = [
    { nome: 'Divisione Élite', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Divisione Tattica', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Divisione Standard', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Divisione a Squadre', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Divisione Air Soft', desc: 'Descrizione categoria da inserire.' },
]

const categorieAttrezzatura = [
    'Arma lunga (fucile o carabina)',
    'Arma corta (pistola)',
    'Gilet tattico zavorrabile',
    'Occhiali balistici — obbligatori',
    'Cuffie antirumore — obbligatorie',
    'Cinghia sul fucile — obbligatoria in tutti gli stage',
]

const regoleSicurezza = [
    'Considera ogni arma come se fosse sempre carica',
    'Non rivolgere mai la volata dell\'arma verso qualcosa che non si voglia colpire',
    'Essere certi del proprio bersaglio e di cosa lo circonda',
    'Tieni sempre il dito fuori dal grilletto fino a quando non si è coscientemente deciso di sparare',
    'Sono obbligatori i dispositivi di protezione dell\'udito (cuffie o tappi) e della vista (occhiali)',
    'Tutti gli eventi si svolgono a COLD RANGE: le armi da fuoco sono scariche',
    'Le armi si possono maneggiare solo sotto la supervisione di un RO (Responsabile di Revisione)',
    'È vietato il maneggio di qualsiasi arma al di fuori delle aree preposte',
    'Vietato sparare dopo il comando "Cessate il fuoco"',
    'L\'area preposta al tiro non deve superare il piano di sicurezza (parapalle)',
    'Munizioni proibite: bimetalliche, con anima in acciaio, traccianti, incendiarie',
    'È vietato lasciare armi incustodite, cariche o con colpo in canna sul banco o altrove nel poligono',
]

const giornoCompetizione = [
    { num: '01', titolo: 'CHECK-IN', desc: 'Ispezione fucile, pistola e gilet tattico. Completare prima del briefing.' },
    { num: '02', titolo: 'BRIEFING', desc: 'Briefing sicurezza obbligatorio. Assenza = DQ immediata.' },
    { num: '03', titolo: 'STAGE', desc: 'Numero stage e struttura da definire. Descrizione da inserire.' },
    { num: '04', titolo: 'RISULTATI', desc: 'Periodo di arbitraggio dopo gli stage. Risultati definitivi.' },
]

const infrazioniSqualifica = [
    {
        titolo: 'Violazioni di sicurezza',
        icon: '⚠',
        items: [
            'Sparo non sicuro',
            'Superare piano 180°',
            'Caduta arma carica',
            'Puntare arma a persona',
            'Munizioni vietate',
        ],
    },
    {
        titolo: 'Violazioni di condotta',
        icon: '✕',
        items: [
            'Alcol o droghe',
            'Comportamento antisportivo',
            'Alterare bersagli o attrezzatura',
            'Mancare briefing',
            'Sparare bersagli fuori gara',
        ],
    },
]

export default function RegolePage() {
    return (
        <>

            {/* STORIA — Sticky scroll */}
            <StoriaStickyScroll />

            <CategorieAccordion />


            {/* REGOLE DI SICUREZZA */}
            <section id='rules' className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-xl">⚠</span>
                    <h2 className="font-oswald font-bold text-[24px] md:text-[32px] text-white">
                        REGOLE DI SICUREZZA
                    </h2>
                </div>
                <div className="w-10 h-0.5 bg-gold mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                    {regoleSicurezza.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#1A1A1A] px-5 py-4 border border-gold/10">
                            <span className="text-gold text-[16px] shrink-0 mt-0.5">◎</span>
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 max-w-4xl flex flex-col md:flex-row md:items-center gap-4 border-t border-gold/10 pt-8">
                    <p className="font-inter text-[13px] text-[#555] leading-relaxed">
                        Per il regolamento completo e ufficiale consulta il sito The Tactical Games.
                    </p>
                    <a
                        href="https://thetacticalgames.com/rules"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 font-oswald font-bold text-[11px] tracking-[3px] text-black bg-gold px-6 py-3 hover:bg-gold-light transition-colors flex items-center gap-2"
                    >
                        REGOLAMENTO COMPLETO <span>→</span>
                    </a>
                </div>
            </section>
        </>
    )
}