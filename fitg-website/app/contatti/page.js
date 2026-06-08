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

            {/* FORM CONTATTO */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20 border-t border-gold/20">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* TESTO */}
                    <div>
                        <SectionLabel>Scrivici</SectionLabel>
                        <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-4">
                            <span className="text-white">Entra in contatto </span>
                            <span className="text-gold">con la federazione</span>
                        </h2>
                        <div className="w-10 h-0.5 bg-gold mb-5" />
                        <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed">
                            Per informazioni sulla federazione, tesseramento, organizzazione eventi e collaborazioni istituzionali. Ti risponderemo nel più breve tempo possibile.
                        </p>
                        <div className="mt-8 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-px h-8 bg-gold" />
                                <span className="font-inter text-[13px] text-[#ccc]">info@federtacticalgames.it</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-px h-8 bg-gold" />
                                <span className="font-inter text-[13px] text-[#ccc]">+39 000 000 0000</span>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                        <input type="hidden" name="subject" value="Nuovo messaggio da FITG website" />
                        <input type="hidden" name="redirect" value="https://federtacticalgames.it" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">NOME *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    required
                                    placeholder="Il tuo nome"
                                    className="w-full bg-[#1A1A1A] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                                />
                            </div>
                            <div>
                                <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">EMAIL *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="La tua email"
                                    className="w-full bg-[#1A1A1A] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">OGGETTO</label>
                            <input
                                type="text"
                                name="oggetto"
                                placeholder="Oggetto del messaggio"
                                className="w-full bg-[#1A1A1A] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                            />
                        </div>

                        <div>
                            <label className="font-oswald text-[9px] tracking-[2px] text-gold block mb-2">MESSAGGIO *</label>
                            <textarea
                                name="messaggio"
                                required
                                rows={4}
                                placeholder="Il tuo messaggio..."
                                className="w-full bg-[#1A1A1A] border border-gold/20 focus:border-gold text-white font-inter text-[13px] px-4 py-3 outline-none transition-colors placeholder:text-[#444] resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gold text-black font-oswald font-bold text-[12px] tracking-[4px] px-10 py-4 hover:bg-gold-light transition-colors self-start"
                        >
                            INVIA MESSAGGIO
                        </button>
                    </form>

                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-b border-gold/20">
                <SectionLabel>Social</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">Seguici sui social</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    {[
                        { nome: 'Instagram', handle: '@fitg', href: '#' },
                        { nome: 'Facebook', handle: 'FITG', href: '#' },
                        { nome: 'YouTube', handle: 'FITG', href: '#' },
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
        </>
    )
}