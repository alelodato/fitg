import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import { Dumbbell, Target, Heart, Brain, CheckCircle } from 'lucide-react'
import AreeAllenamento from '@/components/AreeAllenamento'
import IntroFormazione from '@/components/IntroFormazione'

export const metadata = { title: 'Formazione — FITG' }


const consigliAllenamento = [
    'Allenati al tiro DOPO lo sforzo fisico — in gara non spari mai riposato',
    'Pratica le transizioni fucile e pistola in gilet tattico',
    'Lavora su farmer\'s carry e overhead carry con peso da gara',
    'Corri in gilet tattico — minimo 400m senza fermarti',
    'Pratica il tiro da posizioni non standard (barricata, ginocchio, prono)',
    'Conosci il tuo equipaggiamento — caricamento, scaricamento e risoluzione malfunzionamenti sotto pressione',
]

const aree = [
    { nome: 'Area 1', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 2', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
    { nome: 'Area 3', luogo: 'Da definire', desc: 'Descrizione area di allenamento da inserire.' },
]

export default function FormazionePage() {
    return (
        <>

            <IntroFormazione />

            <AreeAllenamento />

            {/* CONSIGLI */}
            <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">CONSIGLI DI </span>
                    <span className="text-gold">ALLENAMENTO</span>
                </h2>
                <div className="flex flex-col gap-3 max-w-2xl">
                    {consigliAllenamento.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#222] px-5 py-4 border border-gold/10">
                            <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* AREE FISICHE */}
            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <SectionLabel>Dove Allenarsi</SectionLabel>
                <h2 className="font-oswald font-bold text-[24px] md:text-[32px] mb-8">
                    <span className="text-white">Dove </span>
                    <span className="text-gold">Allenarsi</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
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
                                title="Aree di allenamento FITG"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}