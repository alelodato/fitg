import AreeAllenamento from '@/components/AreeAllenamento'
import ConsigliAllenamento from '@/components/ConsigliAllenamento'
import { CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'

const aree = [
    { nome: 'Area 1', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 2', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 3', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
]

export default function AreeDiAllenamentoPage() {
    return (
        <>
            < AreeAllenamento />

            <ConsigliAllenamento />

            {/* AREE FISICHE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Dove Allenarsi</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">Dove </span>
                    <span className="text-gold">Allenarsi</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="flex flex-col flex-1 justify-center items-start">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-5 h-px bg-gold" />
                            <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">In arrivo</span>
                        </div>
                        <h3 className="font-oswald font-bold text-white text-[26px] md:text-[32px] mb-4 leading-tight">
                            Coming Soon
                        </h3>
                        <p className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed max-w-md">
                            Stiamo definendo le aree di allenamento ufficiali convenzionate con la federazione. Torna presto per scoprire dove allenarti in sicurezza per i Tactical Contest.
                        </p>
                    </div>

                    <div className="w-full md:w-[420px] lg:w-[500px] shrink-0">
                        <div className="w-full h-[280px] md:h-full min-h-[360px] border border-gold/20 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7372956.476520572!2d12.5674!3d41.8719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aree di allenamento FITC"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}