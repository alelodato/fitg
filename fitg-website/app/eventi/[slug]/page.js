import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SectionLabel from '@/components/SectionLabel'
import { eventi } from '../../news/data'

export async function generateStaticParams() {
    return eventi.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }) {
    const evento = eventi.find((e) => e.slug === params.slug)
    if (!evento) return {}
    return { title: `${evento.titolo} — FITG` }
}

export default function EventoPage({ params }) {
    const evento = eventi.find((e) => e.slug === params.slug)
    if (!evento) notFound()

    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden h-[280px] md:h-[420px] bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-oswald text-[8px] tracking-[2px] text-gold border border-gold/30 px-2 py-0.5">{evento.tag}</span>
                        <span className="font-oswald text-[8px] tracking-[2px] text-[#555] border border-[#333] px-2 py-0.5">IN PROGRAMMA</span>
                    </div>
                    <h1 className="font-oswald font-bold text-[26px] md:text-[44px] leading-tight text-white max-w-3xl">
                        {evento.titolo}
                    </h1>
                    <div className="flex items-center gap-6 mt-4">
                        <div className="font-oswald text-gold text-[13px] tracking-[2px]">{evento.data}</div>
                        <div className="w-px h-4 bg-gold/30" />
                        <div className="font-inter text-[#ccc] text-[13px]">{evento.luogo}</div>
                    </div>
                </div>
            </section>

            {/* CONTENUTO */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
                <div className="grid md:grid-cols-[1fr_300px] gap-12 md:gap-16 max-w-5xl">

                    {/* TESTO */}
                    <article>
                        {evento.contenuto.map((blocco, i) => {
                            if (blocco.tipo === 'titolo') return (
                                <h2 key={i} className="font-oswald font-bold text-white text-[20px] md:text-[24px] mt-10 mb-4">
                                    {blocco.testo}
                                </h2>
                            )
                            if (blocco.tipo === 'paragrafo') return (
                                <p key={i} className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed mb-5">
                                    {blocco.testo}
                                </p>
                            )
                            return null
                        })}

                        <div className="mt-10">
                            <Link
                                href="/contatti"
                                className="bg-gold text-black font-oswald font-bold text-[11px] tracking-[3px] px-8 py-4 hover:bg-gold-light transition-colors inline-block"
                            >
                                ISCRIVITI ALL'EVENTO
                            </Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gold/10">
                            <Link href="/news" className="font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2 hover:gap-4 transition-all w-fit">
                                ← TORNA AGLI EVENTI
                            </Link>
                        </div>
                    </article>

                    {/* SIDEBAR INFO */}
                    <aside>
                        <div className="bg-[#1A1A1A] border border-gold/20 p-6 sticky top-24">
                            <div className="font-oswald text-[9px] tracking-[3px] text-gold mb-5">DETTAGLI EVENTO</div>
                            <div className="flex flex-col gap-0">
                                {evento.info.map((info, i) => (
                                    <div key={i} className="flex justify-between items-start py-3 border-b border-gold/10 last:border-0">
                                        <span className="font-oswald text-[10px] tracking-[2px] text-[#555]">{info.label.toUpperCase()}</span>
                                        <span className="font-oswald font-bold text-white text-[12px] text-right max-w-[140px]">{info.valore}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contatti"
                                className="mt-6 bg-gold text-black font-oswald font-bold text-[11px] tracking-[3px] px-6 py-3 hover:bg-gold-light transition-colors block text-center"
                            >
                                ISCRIVITI
                            </Link>
                        </div>
                    </aside>

                </div>
            </section>
        </>
    )
}