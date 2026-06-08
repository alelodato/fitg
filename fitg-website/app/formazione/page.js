import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Formazione — FITG' }

const consigli = [
    { titolo: 'Fitness Funzionale', desc: 'Descrizione' },
    { titolo: 'Tiro di Precisione', desc: 'Descrizione' },
    { titolo: 'Preparazione Mentale', desc: 'Descrizione' },
    { titolo: 'Recupero e Nutrizione', desc: 'Descrizione' },
]

const aree = [
    { nome: 'Area 1', luogo: 'Città, Regione', desc: 'Descrizione area' },
    { nome: 'Area 2', luogo: 'Città, Regione', desc: 'Descrizione area' },
    { nome: 'Area 3', luogo: 'Città, Regione', desc: 'Descrizione area' },
]

export default function FormazionePage() {
    return (
        <>
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/formazione-hero.jpg" alt="Formazione" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Formazione</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Allenati per </span>
                        <span className="text-gold">Competere</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Piani di allenamento e aree attrezzate per prepararti al meglio.
                    </p>
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Testo introduttivo alla formazione
                    </p>
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                        Secondo paragrafo
                    </p>
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16">
                <SectionLabel>Consigli</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Come prepararsi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {consigli.map((c, i) => (
                        <div key={i} className="bg-[#1A1A1A] p-6 md:p-8 border-l-2 border-gold">
                            <div className="font-oswald font-bold text-gold text-[11px] tracking-[3px] mb-3">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className="font-oswald font-bold text-white text-[16px] md:text-[18px] mb-3">{c.titolo}</div>
                            <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Aree di Allenamento</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Dove allenarsi</h2>

                <div className="flex flex-col md:flex-row gap-10 md:gap-16">

                    {/* LISTA AREE */}
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

                    {/* MAPPA — desktop/tablet affiancata, mobile sotto */}
                    <div className="w-full md:w-[420px] lg:w-[500px] shrink-0 order-last md:order-none">
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