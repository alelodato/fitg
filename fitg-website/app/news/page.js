import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Staff — FITG' }

const dirigenti = [
    { nome: 'Nome Cognome', ruolo: 'Presidente', bio: 'Bio — fornita dal cliente.', img: '/images/staff-1.jpg' },
    { nome: 'Nome Cognome', ruolo: 'Vicepresidente', bio: 'Bio — fornita dal cliente.', img: '/images/staff-2.jpg' },
    { nome: 'Nome Cognome', ruolo: 'Segretario Generale', bio: 'Bio — fornita dal cliente.', img: '/images/staff-3.jpg' },
]

const istruttori = [
    { nome: 'Nome Cognome', specializzazione: 'Tiro di Precisione', regione: 'Regione' },
    { nome: 'Nome Cognome', specializzazione: 'Fitness Funzionale', regione: 'Regione' },
    { nome: 'Nome Cognome', specializzazione: 'Preparazione Atletica', regione: 'Regione' },
    { nome: 'Nome Cognome', specializzazione: 'Tiro di Precisione', regione: 'Regione' },
]

export default function StaffPage() {
    return (
        <>
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/staff-hero.jpg" alt="Staff" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Team</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Il Team della </span>
                        <span className="text-gold">Federazione</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Dirigenti e istruttori che rendono possibili le competizioni FITG.
                    </p>
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="max-w-3xl">
                    <p className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed">
                        Testo introduttivo allo staff — fornito dal cliente.
                    </p>
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16">
                <SectionLabel>Dirigenza</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Consiglio Direttivo</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dirigenti.map((d, i) => (
                        <div key={i} className="bg-[#1A1A1A]">
                            <div className="relative h-[200px] overflow-hidden">
                                <Image src={d.img} alt={d.nome} fill className="object-cover object-top brightness-75" />
                            </div>
                            <div className="h-0.5 bg-gold" />
                            <div className="p-5">
                                <div className="font-oswald font-bold text-gold text-[10px] tracking-[2px] mb-1">{d.ruolo}</div>
                                <div className="font-oswald font-bold text-white text-[17px] mb-3">{d.nome}</div>
                                <p className="font-inter text-[12px] text-[#ccc] leading-relaxed">{d.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Istruttori</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">I nostri istruttori</h2>
                <div className="flex flex-col">
                    {istruttori.map((ist, i) => (
                        <div key={i} className="flex items-center justify-between py-5 border-b border-gold/10">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-[#222] shrink-0 border border-gold/20 flex items-center justify-center text-gold text-[9px] tracking-wide">
                                    foto
                                </div>
                                <div>
                                    <div className="font-oswald font-bold text-white text-[15px]">{ist.nome}</div>
                                    <div className="font-inter text-[12px] text-[#ccc]">{ist.specializzazione}</div>
                                </div>
                            </div>
                            <div className="font-inter text-[11px] text-[#555] tracking-wide hidden md:block">{ist.regione}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}