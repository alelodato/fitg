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
        </>
    )
}