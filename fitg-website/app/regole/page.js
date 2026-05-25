import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Regole — FITG' }

const categorie = [
    { nome: 'Categoria 1', desc: 'Descrizione — fornita dal cliente.' },
    { nome: 'Categoria 2', desc: 'Descrizione — fornita dal cliente.' },
    { nome: 'Categoria 3', desc: 'Descrizione — fornita dal cliente.' },
]

const prove = [
    { nome: 'Prova 1', desc: 'Descrizione della prova — fornita dal cliente.' },
    { nome: 'Prova 2', desc: 'Descrizione della prova — fornita dal cliente.' },
    { nome: 'Prova 3', desc: 'Descrizione della prova — fornita dal cliente.' },
    { nome: 'Prova 4', desc: 'Descrizione della prova — fornita dal cliente.' },
]

export default function RegolePage() {
    return (
        <>
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
                        Tutto ciò che serve per partecipare alle competizioni FITG.
                    </p>
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Testo introduttivo al regolamento — fornito dal cliente.
                    </p>
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                        Secondo paragrafo introduttivo — fornito dal cliente.
                    </p>
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16">
                <SectionLabel>Categorie</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Le categorie di gara</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categorie.map((c, i) => (
                        <div key={i} className="bg-[#1A1A1A] border-t-2 border-gold p-6">
                            <div className="font-oswald font-bold text-gold text-[15px] tracking-widest mb-3">{c.nome}</div>
                            <div className="w-8 h-px bg-gold mb-4" />
                            <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Prove</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Le prove della competizione</h2>
                <div className="flex flex-col">
                    {prove.map((p, i) => (
                        <div key={i} className="flex gap-6 md:gap-10 py-5 border-b border-gold/10 items-start">
                            <div className="font-oswald font-bold text-gold text-[28px] md:text-[36px] leading-none w-10 shrink-0 opacity-40">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div>
                                <div className="font-oswald font-bold text-white text-[15px] md:text-[18px] tracking-wide mb-2">{p.nome}</div>
                                <p className="font-inter text-[13px] text-[#ccc] leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Punteggio</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-6">Sistema di punteggio</h2>
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Descrizione del sistema di punteggio — fornita dal cliente.
                    </p>
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed mt-4">
                        Ulteriori dettagli sul sistema di punteggio — forniti dal cliente.
                    </p>
                </div>
            </section>
        </>
    )
}