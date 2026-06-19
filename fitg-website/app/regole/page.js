import Image from 'next/image'
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

            {/* CATEGORIE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
                <SectionLabel>Categorie</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8">
                    <span className="text-white">Le </span>
                    <span className="text-gold">Categorie</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
                    {categorie.map((c, i) => (
                        <div key={i} className="bg-[#1A1A1A] border-t-2 border-gold p-6">
                            <div className="font-oswald font-bold text-gold text-[11px] tracking-[3px] mb-3">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className="font-oswald font-bold text-white text-[18px] mb-3">{c.nome}</div>
                            <div className="w-8 h-px bg-gold mb-4" />
                            <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGOLAMENTO — Attrezzatura */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Regolamento</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8">
                    <span className="text-white">Attrezzatura </span>
                    <span className="text-gold">Obbligatoria</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {categorieAttrezzatura.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-[#222] px-5 py-4 border border-gold/10">
                            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" />
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc]">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGOLE DI SICUREZZA */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
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
            </section>

            {/* GIORNO DI COMPETIZIONE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">GIORNO DI </span>
                    <span className="text-gold">COMPETIZIONE</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                    {giornoCompetizione.map((step, i) => (
                        <div key={i} className="bg-[#1A1A1A] border border-gold/10 p-6 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold mb-4">
                                <span className="font-oswald font-bold text-black text-[16px]">{step.num}</span>
                            </div>
                            <div className="font-oswald font-bold text-white text-[18px] tracking-wide mb-2">{step.titolo}</div>
                            <p className="font-inter text-[13px] text-[#999] leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PUNTEGGIO */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">ESEMPI DI </span>
                    <span className="text-gold">PUNTEGGIO</span>
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <div className="bg-[#222] border border-gold/10 p-6">
                        <div className="font-oswald font-bold text-gold text-[16px] mb-3">STAGE A TEMPO</div>
                        <p className="font-inter text-[13px] text-[#999] mb-4 leading-relaxed">
                            Tempo in secondi + penalità = punteggio finale. Miglior punteggio = 100 punti.
                        </p>
                        <div className="bg-[#111] p-4 font-mono text-[12px] leading-relaxed border border-gold/10">
                            <div className="text-[#ccc]"><span className="text-white font-bold">Atleta A:</span> Tempo 8:30 | Mancati: 11</div>
                            <div className="text-[#ccc] mt-1">510s + 110s = <span className="text-white font-bold">620s</span></div>
                            <div className="border-t border-gold/10 mt-3 pt-3 text-[#ccc]"><span className="text-white font-bold">Atleta B:</span> Tempo 7:13 | Mancati: 8</div>
                            <div className="text-[#ccc] mt-1">433s + 80s = <span className="text-white font-bold">513s</span> ← WIN</div>
                            <div className="border-t border-gold/10 mt-3 pt-3">
                                <div className="text-[#999]">Score A: (513/620)x100 = <span className="text-gold font-bold">82.74 pts</span></div>
                                <div className="text-[#999] mt-1">Score B: <span className="text-gold font-bold">100.00 pts</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#222] border border-gold/10 p-6">
                        <div className="font-oswald font-bold text-gold text-[16px] mb-3">STAGE AMRAP</div>
                        <p className="font-inter text-[13px] text-[#999] mb-4 leading-relaxed">
                            Punti tiro + punti fitness = totale. Miglior punteggio = 100 punti.
                        </p>
                        <div className="bg-[#111] p-4 font-mono text-[12px] leading-relaxed border border-gold/10">
                            <div className="text-[#ccc]"><span className="text-white font-bold">Atleta A:</span> Shooting: 98 | Fitness: 103</div>
                            <div className="text-[#ccc] mt-1">Totale = <span className="text-white font-bold">201 pts</span> ← WIN</div>
                            <div className="border-t border-gold/10 mt-3 pt-3 text-[#ccc]"><span className="text-white font-bold">Atleta B:</span> Shooting: 87 | Fitness: 105</div>
                            <div className="text-[#ccc] mt-1">Totale = <span className="text-white font-bold">192 pts</span></div>
                            <div className="border-t border-gold/10 mt-3 pt-3">
                                <div className="text-[#999]">Score B: (192/201)x100 = <span className="text-gold font-bold">95.52 pts</span></div>
                                <div className="text-[#999] mt-1">Score A: <span className="text-gold font-bold">100.00 pts</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFRAZIONI */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">INFRAZIONI </span>
                    <span className="text-gold">PER SQUALIFICA</span>
                </h2>
                <div className="flex flex-col gap-4 max-w-2xl">
                    {infrazioniSqualifica.map((gruppo, i) => (
                        <div key={i} className="bg-[#1A1A1A] border border-gold/10 p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-gold text-xl">{gruppo.icon}</span>
                                <div className="font-oswald font-bold text-white text-[18px]">{gruppo.titolo}</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {gruppo.items.map((item, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <span className="text-gold text-[14px] shrink-0">◎</span>
                                        <span className="font-inter text-[13px] text-[#ccc]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}