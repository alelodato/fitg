import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Regole — FITG' }

const categorieAttrezzatura = [
    'Arma lunga (fucile o carabina)',
    'Arma corta (pistola)',
    'Gilet tattico zavorrabile',
    'Occhiali balistici — obbligatori',
    'Cuffie antirumore — obbligatorie',
    'Cinghia sul fucile — obbligatoria in tutti gli stage',
]

const regoleSicurezza = [
    'Tutti gli eventi in COLD RANGE — armi scariche tranne sotto supervisione RO',
    'Regola dei 180° — superare il piano di sicurezza = DQ immediata',
    'Sweeping = DQ immediata',
    'Sparo dopo Cease Fire = DQ immediata',
    'Munizioni vietate = DQ immediata',
    'Occhiali balistici e protezione uditiva obbligatori',
]

const regoleRapide = [
    'Sicurezza prima di tutto: tutti gli eventi in cold range. Armi scariche tranne sotto supervisione RO.',
    'Regola dei 180°: superare il piano di sicurezza o puntare verso una persona = DQ immediata.',
    'Gilet zavorrabile obbligatorio — peso da definire per categoria.',
    'Nessun compensatore sul fucile, solo flash hider o silenziatore.',
    'La cinghia sul fucile è obbligatoria in tutti gli stage.',
    'Non puoi modificare la cintura dopo il check-in.',
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
            {/* HERO */}
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/regole-hero.jpg" alt="Regole" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Regolamento</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Regolamento </span>
                        <span className="text-gold">Ufficiale</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Tutto quello che devi sapere per partecipare alle competizioni FITG.
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Testo introduttivo al regolamento da inserire.
                    </p>
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                        Secondo paragrafo introduttivo da inserire.
                    </p>
                </div>
            </section>

            {/* ATTREZZATURA */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16">
                <SectionLabel>Equipaggiamento</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">Attrezzatura </span>
                    <span className="text-gold">Obbligatoria</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {categorieAttrezzatura.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-[#1A1A1A] px-5 py-4 border border-gold/10">
                            <div className="w-2 h-2 bg-gold rotate-45 shrink-0" />
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc]">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGOLE SICUREZZA */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-xl">⚠</span>
                    <h2 className="font-oswald font-bold text-[24px] md:text-[32px] text-white">
                        REGOLE DI SICUREZZA <span className="text-gold">CHIAVE</span>
                    </h2>
                </div>
                <div className="w-10 h-0.5 bg-gold mb-8" />
                <div className="flex flex-col gap-3 max-w-2xl">
                    {regoleSicurezza.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#222] px-5 py-4 border border-gold/10">
                            <span className="text-gold text-[16px] shrink-0 mt-0.5">◎</span>
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGOLE RAPIDE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">REGOLE RAPIDE </span>
                    <span className="text-gold">DA RICORDARE</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {regoleRapide.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#1A1A1A] px-5 py-4 border border-gold/10">
                            <span className="text-gold text-[16px] shrink-0 mt-0.5">◎</span>
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* GIORNO DI COMPETIZIONE */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">GIORNO DI </span>
                    <span className="text-gold">COMPETIZIONE</span>
                </h2>
                <div className="flex flex-col gap-4 max-w-xl">
                    {giornoCompetizione.map((step, i) => (
                        <div key={i} className="bg-[#222] border border-gold/10 p-6 text-center">
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
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">ESEMPI DI </span>
                    <span className="text-gold">PUNTEGGIO</span>
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <div className="bg-[#1A1A1A] border border-gold/10 p-6">
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

                    <div className="bg-[#1A1A1A] border border-gold/10 p-6">
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
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">INFRAZIONI </span>
                    <span className="text-gold">PER SQUALIFICA</span>
                </h2>
                <div className="flex flex-col gap-4 max-w-2xl">
                    {infrazioniSqualifica.map((gruppo, i) => (
                        <div key={i} className="bg-[#222] border border-gold/10 p-6">
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