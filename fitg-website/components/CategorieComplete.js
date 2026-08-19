import Image from 'next/image'

const categorie = [
    {
        nome: 'Divisione Élite',
        img: '/elite.webp',
        desc: 'La divisione Élite è dedicata agli atleti più esperti e preparati. Le prove fisiche e gli stage di tiro richiedono elevate capacità atletiche, velocità di esecuzione e massima precisione. È la categoria che esprime al massimo lo spirito dei Tacticon, dove ogni errore o perdita di concentrazione può fare la differenza sul risultato finale.',
    },
    {
        nome: 'Divisione Tattica',
        img: '/tattica.webp',
        desc: 'La divisione Tattica mantiene la stessa struttura di gara dei Tacticon, ma con particolare attenzione all\'utilizzo dell\'equipaggiamento operativo. Gli atleti affrontano le prove indossando dotazioni specifiche che aumentano il livello di realismo e l\'impegno fisico richiesto. È ideale per chi desidera vivere un\'esperienza più vicina agli scenari tattici reali.',
    },
    {
        nome: 'Divisione Standard',
        img: '/standard.webp',
        desc: 'La divisione Standard rappresenta il punto di ingresso più accessibile ai Tacticon. Mantiene l\'alternanza tra esercizi fisici e prove di tiro, ma con requisiti tecnici e di equipaggiamento più semplici rispetto alle categorie avanzate. È pensata per permettere a nuovi partecipanti e sportivi provenienti da altre discipline di avvicinarsi gradualmente alla competizione.',
    },
    {
        nome: 'TDM',
        sottotitolo: 'Tactical Decision Maker',
        img: '/image14.webp',
        desc: 'La TDM (Tactical Decision Maker) è una divisione di tiro tattico progettata per mettere alla prova, in condizioni di stress psicofisico, la capacità del concorrente di combinare preparazione atletica, precisione, rapidità e capacità decisionale. L\'atleta non deve limitarsi a colpire i bersagli nel minor tempo possibile, ma deve essere in grado di osservare, riconoscere, valutare e decidere correttamente prima di agire.',
    },
    {
        nome: 'Divisione a Squadre',
        img: '/squadre.webp',
        desc: 'La divisione a Squadre trasferisce tutte le sfide dei Tacticon in una dimensione collettiva. I partecipanti collaborano per affrontare le prove, dividere gli sforzi e gestire insieme le strategie di gara. Oltre alle capacità fisiche e tecniche individuali, diventano fondamentali comunicazione, coordinazione e spirito di squadra.',
    },
    {
        nome: 'Divisione Air Soft',
        img: '/airsoft.webp',
        desc: 'La divisione Air Soft ripropone il format dei Tacticon utilizzando repliche da softair al posto delle armi da fuoco. I partecipanti affrontano le stesse tipologie di prove fisiche e di tiro, sviluppando precisione, controllo e capacità decisionale sotto stress in un contesto più accessibile e adatto a strutture dedicate a questa disciplina.',
    },
]

export default function CategorieComplete() {
    return (
        <section className="bg-[#111]">
            {categorie.map((c, i) => (
                <div key={i} className="border-t border-gold/10">
                    <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className="relative w-full lg:w-1/2 h-[280px] md:h-[400px] lg:h-[480px] overflow-hidden">
                            <Image
                                src={c.img}
                                alt={c.nome}
                                fill
                                className="object-cover object-top brightness-[0.6]"
                            />
                            <div className={`absolute inset-0 hidden lg:block bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent to-[#111]/60' : 'from-[#111]/60 to-transparent'}`} />
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 md:px-16 py-10 md:py-14 bg-[#111]">
                            <div className="font-oswald font-bold text-gold text-[10px] tracking-[4px] mb-4">
                                {String(i + 1).padStart(2, '0')} / 06
                            </div>
                            <h2 className="font-oswald font-bold text-white text-[26px] md:text-[34px] tracking-wide mb-2">
                                {c.nome}
                            </h2>
                            {c.sottotitolo && (
                                <div className="font-inter text-[13px] text-gold/80 mb-3 italic">{c.sottotitolo}</div>
                            )}
                            <div className="w-10 h-0.5 bg-gold mb-5" />
                            <p className="font-inter text-[14px] md:text-[16px] text-[#ccc] leading-relaxed max-w-xl">
                                {c.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}