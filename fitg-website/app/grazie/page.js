import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Grazie — FITC' }

export default function GraziePage() {
    return (
        <main className="min-h-[70vh] bg-[#111] flex flex-col items-center justify-center px-5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <Image
                src="/fitg-logo2.png"
                alt="FITC Logo"
                width={90}
                height={90}
                className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-contain mb-8"
            />

            <div className="flex items-center gap-2.5 mb-5">
                <div className="w-5 h-px bg-gold" />
                <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">Messaggio inviato</span>
                <div className="w-5 h-px bg-gold" />
            </div>

            <h1 className="font-oswald font-bold text-[28px] md:text-[42px] leading-[1.1] mb-5">
                <span className="text-white">Grazie per averci </span>
                <span className="text-gold">contattato</span>
            </h1>

            <p className="font-inter text-[14px] md:text-[15px] text-[#999] max-w-md leading-relaxed mb-10">
                Abbiamo ricevuto il tuo messaggio. Ti risponderemo il prima possibile all'indirizzo email che hai indicato.
            </p>

            <Link
                href="/"
                className="bg-gold text-black font-oswald font-bold text-[11px] tracking-[3px] px-8 py-3.5 hover:bg-gold-light transition-colors"
            >
                TORNA ALLA HOME
            </Link>
        </main>
    )
}