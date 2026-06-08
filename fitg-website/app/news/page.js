import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'News & Eventi — FITG' }

const eventi = [
    {
        id: 1,
        data: 'Data di svolgimento',
        luogo: 'Luogo di svolgimento',
        titolo: 'Titolo dell`evento',
        desc: 'Descrizione Evento',
        tag: 'Evento Nazionale',
        stato: 'upcoming',
    },
    {
        id: 2,
        data: 'Data di svolgimento',
        luogo: 'Luogo di svolgimento',
        titolo: 'Titolo dell`evento',
        desc: 'Descrizione dell`evento',
        tag: 'Evento Regionale',
        stato: 'upcoming',
    },
    {
        id: 3,
        data: 'Data di svolgimento',
        luogo: 'Luogo di svolgimento',
        titolo: 'Titolo dell`evento',
        desc: 'Descrizione dell`evento',
        tag: 'Evento Regionale',
        stato: 'upcoming',
    },
    {
        id: 4,
        data: 'Data di svolgimento',
        luogo: 'Luogo di svolgimento',
        titolo: 'Titolo dell`evento',
        desc: 'Descrizione Evento',
        tag: 'Campionato',
        stato: 'upcoming',
    },
]

const articoli = [
    {
        id: 1,
        data: 'Data di pubblicazione',
        titolo: 'Titolo dell`articolo o comunicato ufficiale',
        estratto: 'Estratto o breve descrizione del contenuto dell`articolo, per invogliare il lettore a cliccare e leggere di più.',
        img: '/images/news-1.jpg',
        tag: 'Evento',
    },
    {
        id: 2,
        data: 'Data di pubblicazione',
        titolo: 'Titolo dell`articolo o comunicato ufficiale',
        estratto: 'Estratto o breve descrizione del contenuto dell`articolo, per invogliare il lettore a cliccare e leggere di più.',
        img: '/images/news-2.jpg',
        tag: 'Comunicato',
    },
    {
        id: 3,
        data: 'Data di pubblicazione',
        titolo: 'Titolo dell`articolo o comunicato ufficiale',
        estratto: 'Estratto o breve descrizione del contenuto dell`articolo, per invogliare il lettore a cliccare e leggere di più.',
        img: '/images/news-3.jpg',
        tag: 'Regolamento',
    },
    {
        id: 4,
        data: 'Data di pubblicazione',
        titolo: 'Titolo dell`articolo o comunicato ufficiale',
        estratto: 'Estratto o breve descrizione del contenuto dell`articolo, per invogliare il lettore a cliccare e leggere di più.',
        img: '/images/news-4.jpg',
        tag: 'Guida',
    },
]

export default function NewsPage() {
    return (
        <>
            {/* PAGE HERO */}
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/news-hero.jpg" alt="News & Eventi" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Aggiornamenti</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">News </span>
                        <span className="text-gold">&</span>
                        <span className="text-white"> Eventi</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Comunicati ufficiali, risultati di gara e calendario degli eventi nazionali.
                    </p>
                </div>
            </section>

            {/* EVENTI */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
                <SectionLabel>Calendario</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8 md:mb-10">
                    <span className="text-white">Prossimi </span>
                    <span className="text-gold">Eventi</span>
                </h2>

                <div className="flex flex-col gap-0">
                    {eventi.map((e, i) => (
                        <div
                            key={e.id}
                            className="group flex flex-col md:flex-row gap-6 md:gap-10 py-7 border-b border-gold/10 hover:bg-[#1a1a1a] transition-colors px-4 md:px-6 -mx-4 md:-mx-6 cursor-pointer"
                        >
                            {/* DATA */}
                            <div className="shrink-0 md:w-36">
                                <div className="font-oswald font-bold text-gold text-[13px] tracking-[2px]">{e.data}</div>
                                <div className="font-inter text-[11px] text-[#555] mt-1">{e.luogo}</div>
                            </div>

                            {/* DIVIDER */}
                            <div className="hidden md:block w-px self-stretch bg-gold/20" />

                            {/* CONTENUTO */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="font-oswald text-[8px] tracking-[2px] text-gold border border-gold/30 px-2 py-0.5">
                                        {e.tag}
                                    </span>
                                    {e.stato === 'upcoming' && (
                                        <span className="font-oswald text-[8px] tracking-[2px] text-[#555] border border-[#333] px-2 py-0.5">
                                            IN PROGRAMMA
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-oswald font-bold text-white text-[18px] md:text-[22px] mb-2 leading-tight">
                                    {e.titolo}
                                </h3>
                                <p className="font-inter text-[12px] md:text-[13px] text-[#ccc] leading-relaxed">
                                    {e.desc}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="shrink-0 flex items-center">
                                <div className="font-oswald text-[9px] tracking-[3px] text-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                                    DETTAGLI <span className="w-4 h-px bg-gold block" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEWS */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-20 border-t border-gold/20">
                <SectionLabel>Ultime News</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8 md:mb-10">
                    <span className="text-white">Comunicati </span>
                    <span className="text-gold">e Aggiornamenti</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {articoli.map((a) => (
                        <article key={a.id} className="group bg-[#222] overflow-hidden cursor-pointer">
                            <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                                <Image
                                    src={a.img}
                                    alt={a.titolo}
                                    fill
                                    className="object-cover brightness-50 group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <div className="h-0.5 bg-gold" />
                            <div className="p-5 md:p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-inter text-[8px] tracking-[2px] text-[#555] uppercase">{a.data}</span>
                                    <span className="font-oswald text-[8px] tracking-[2px] text-gold border border-gold/30 px-2 py-0.5">{a.tag}</span>
                                </div>
                                <h3 className="font-oswald font-bold text-[17px] md:text-[20px] text-white mb-3 leading-tight">
                                    {a.titolo}
                                </h3>
                                <p className="font-inter text-[12px] md:text-[13px] text-[#ccc] leading-relaxed mb-4">
                                    {a.estratto}
                                </p>
                                <div className="font-oswald text-[9px] tracking-[3px] text-gold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    LEGGI <span className="w-3.5 h-px bg-gold block" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}