import Image from 'next/image'

export const metadata = { title: 'FITG — In Arrivo' }

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen bg-[#111] flex flex-col items-center justify-center px-5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <Image
                src="/fitg-logo2.png"
                alt="FITG Logo"
                width={120}
                height={120}
                className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] object-contain mb-8"
                priority
            />

            <div className="flex items-center gap-2.5 mb-5">
                <div className="w-5 h-px bg-gold" />
                <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">Federazione Italiana Tactical Games</span>
                <div className="w-5 h-px bg-gold" />
            </div>

            <h1 className="font-oswald font-bold text-[34px] md:text-[56px] leading-[1.1] mb-5">
                <span className="text-white">Presto </span>
                <span className="text-gold">Online</span>
            </h1>

            <p className="font-inter text-[14px] md:text-[16px] text-[#999] max-w-md leading-relaxed mb-8">
                Stiamo preparando il nuovo sito della FITG. Torna a trovarci a breve.
            </p>

            <p className="font-inter text-[12px] md:text-[13px] text-[#666] max-w-md leading-relaxed">
                Nel frattempo puoi seguire i nostri profili social o contattarci all'indirizzo{' '}
                <a href="mailto:info@federtacticalgames.it" className="text-gold hover:underline">
                    info@federtacticalgames.it
                </a>
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </main>
    )
}