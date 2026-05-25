import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata = { title: 'Contatti — FITG' }

export default function ContattiPage() {
    return (
        <>
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <Image src="/images/contatti-hero.jpg" alt="Contatti" fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <SectionLabel>Contatti</SectionLabel>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Entra in </span>
                        <span className="text-gold">Contatto</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Per informazioni, tesseramento e collaborazioni.
                    </p>
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { label: 'Email', valore: 'info@federtacticalgames.it' },
                        { label: 'Telefono', valore: '+39 000 000 0000' },
                        { label: 'Sede', valore: 'Indirizzo sede — fornito dal cliente' },
                    ].map((c) => (
                        <div key={c.label} className="border-l-2 border-gold pl-5">
                            <div className="font-oswald text-[9px] tracking-[3px] text-gold mb-1">{c.label.toUpperCase()}</div>
                            <div className="font-oswald font-bold text-white text-[15px] md:text-[17px]">{c.valore}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <SectionLabel>Social</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Seguici sui social</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    {[
                        { nome: 'Instagram', handle: '@fitg_italia', href: '#' },
                        { nome: 'Facebook', handle: 'FITG Federazione', href: '#' },
                        { nome: 'YouTube', handle: 'FITG Channel', href: '#' },
                    ].map((s) => (
                        <a key={s.nome} href={s.href} className="group flex items-center gap-4 bg-[#1A1A1A] border border-gold/20 hover:border-gold px-6 py-4 transition-colors flex-1">
                            <div className="font-oswald font-bold text-gold text-[13px] tracking-[2px]">{s.nome}</div>
                            <div className="w-px h-4 bg-gold/30" />
                            <div className="font-inter text-[12px] text-[#ccc] group-hover:text-white transition-colors">{s.handle}</div>
                            <span className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16">
                <SectionLabel>Scrivici</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Invia un messaggio</h2>
                <form action="https://api.web3forms.com/submit" method="POST" className="max-w-2xl">
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                    <input type="hidden" name="subject" value="Nuovo messaggio da FITG website" />
                    <input type="hidden" name="redirect" value="https://federtacticalgames.it/contatti" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">NOME *</label>
                            <input type="text" name="nome" required placeholder="Il tuo nome"
                                className="w-full bg-[#111] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]" />
                        </div>
                        <div>
                            <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">EMAIL *</label>
                            <input type="email" name="email" required placeholder="La tua email"
                                className="w-full bg-[#111] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">OGGETTO</label>
                        <input type="text" name="oggetto" placeholder="Oggetto del messaggio"
                            className="w-full bg-[#111] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]" />
                    </div>

                    <div className="mb-6">
                        <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">MESSAGGIO *</label>
                        <textarea name="messaggio" required rows={5} placeholder="Il tuo messaggio..."
                            className="w-full bg-[#111] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444] resize-none" />
                    </div>

                    <button type="submit" className="bg-gold text-black font-oswald font-bold text-[12px] tracking-[4px] px-10 py-4 hover:bg-gold-light transition-colors">
                        INVIA MESSAGGIO
                    </button>
                </form>
            </section>
        </>
    )
}