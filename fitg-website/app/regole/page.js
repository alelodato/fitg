import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Tactical Games — FITG' }

const categorie = [
    { nome: 'Categoria 1', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Categoria 2', desc: 'Descrizione categoria da inserire.' },
    { nome: 'Categoria 3', desc: 'Descrizione categoria da inserire.' },
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
            <section className="relative overflow-hidden h-[260px] md:h-[420px]">
                <Image src="/images/image2.jpeg" alt="Tactical Games" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                    <div className="font-oswald font-bold text-gold text-[13px] tracking-[4px] mb-4">FITG</div>
                    <h1 className="font-oswald font-bold text-[36px] md:text-[64px] leading-tight text-white">
                        TACTICAL GAMES
                    </h1>
                    <div className="flex items-center gap-6 md:gap-10 mt-6">
                        {['STORIA', 'CATEGORIE', 'REGOLAMENTO'].map((label, i) => (
                            <div key={i} className="flex items-center gap-6 md:gap-10">
                                <span className="font-oswald font-bold text-[13px] md:text-[16px] tracking-[2px] text-white hover:text-gold transition-colors cursor-pointer">
                                    {label}
                                </span>
                                {i < 2 && <span className="text-gold/40">·</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORIA */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-20 border-b border-gold/20">
                <SectionLabel>Storia</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8">
                    <span className="text-white">Cosa sono i </span>
                    <span className="text-gold">Tactical Games</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="max-w-xl">
                        <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                            I Tactical Games sono competizioni sportive multidisciplinari che uniscono fitness estremo, prove di abilità e tiro tattico/ dinamico con armi da fuoco (o repliche nel caso del softair).
                            Il loro scopo è testare la capacità del partecipante di mantenere lucidità, precisione e controllo sotto un forte sforzo fisico
                        </p>
                        <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                            Secondo paragrafo sulla storia e le origini da inserire.
                        </p>
                        <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                            Terzo paragrafo sulla diffusione in Italia da inserire.
                        </p>
                    </div>
                    <div className="relative h-[260px] md:h-[340px] overflow-hidden">
                        <Image src="/images/image2.jpeg" alt="Tactical Games Storia" fill className="object-cover brightness-[0.6]" />
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                    </div>
                </div>
            </section>

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

            {/* REGOLAMENTO */}
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

            {/* REGOLE SICUREZZA */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-xl">⚠</span>
                    <h2 className="font-oswald font-bold text-[24px] md:text-[32px] text-white">
                        REGOLE DI SICUREZZA <span className="text-gold">CHIAVE</span>
                    </h2>
                </div>
                <div className="w-10 h-0.5 bg-gold mb-8" />
                <div className="flex flex-col gap-3 max-w-2xl">
                    {regoleSicurezza.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#1A1A1A] px-5 py-4 border border-gold/10">
                            <span className="text-gold text-[16px] shrink-0 mt-0.5">◎</span>
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGOLE RAPIDE */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">REGOLE RAPIDE </span>
                    <span className="text-gold">DA RICORDARE</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {regoleRapide.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#222] px-5 py-4 border border-gold/10">
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