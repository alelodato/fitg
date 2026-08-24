import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import { Mail } from 'lucide-react'

export const metadata = { title: 'Contatti — FITC' }

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
                            <a
                                href="mailto:info@federtacticalgames.it"
                                className="flex items-center gap-3 group w-fit"
                            >
                                <Mail size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                                <span className="font-inter text-[13px] text-[#ccc] group-hover:text-gold transition-colors">
                                    info@federazioneitalianatacticon.it
                                </span>
                            </a>
                            <a
                                href="https://wa.me/393518303381"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group w-fit"
                            >
                                <svg
                                    className="text-gold shrink-0"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.4a9.9 9.9 0 0 0 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                                </svg>
                                <span className="font-inter text-[13px] text-[#ccc] group-hover:text-gold transition-colors">
                                    +39 351 830 3381
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                        <input type="hidden" name="subject" value="Nuovo messaggio da sito web" />
                        <input type="hidden" name="redirect" value="https://federazioneitalianatacticon.it" />

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
                        { nome: 'Instagram', handle: '@fitc', href: 'https://www.facebook.com/share/1E4unK8m5T/' },
                        { nome: 'Facebook', handle: 'FITC', href: 'https://www.facebook.com/share/1E4unK8m5T/' },
                        { nome: 'YouTube', handle: 'FITC', href: '#' },
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