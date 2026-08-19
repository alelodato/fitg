import CategorieComplete from '@/components/CategorieComplete'

export const metadata = { title: 'Categorie — FITC' }

const regoleSicurezza = [
    'Considera ogni arma come se fosse sempre carica',
    'Non rivolgere mai la volata dell\'arma verso qualcosa che non si voglia colpire',
    'Essere certi del proprio bersaglio e di cosa lo circonda',
    'Tieni sempre il dito fuori dal grilletto fino a quando non si è coscientemente deciso di sparare',
    'Sono obbligatori i dispositivi di protezione dell\'udito (cuffie o tappi) e della vista (occhiali)',
    'Tutte le attività si svolgono in sicurezza, le armi da fuoco sono scariche fino al momento prima dell\'utilizzo',
    'Le armi si possono maneggiare solo sotto la supervisione di un Ufficiale di gara',
    'È vietato il maneggio di qualsiasi arma al di fuori delle aree preposte',
    'Vietato sparare dopo il comando "Cessate il fuoco"',
    'Area preposta al tiro non deve superare il piano di sicurezza (parapalle)',
    'È vietato lasciare armi incustodite, cariche o con colpo in canna sul banco o in qualunque altra parte del poligono, ognuno sarà responsabile delle proprie armi',
    'Tutte le regole restano in vigore anche con le repliche',
]

export default function CategoriePage() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden h-[260px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#111]" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-5 h-px bg-gold" />
                        <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">Divisioni</span>
                    </div>
                    <h1 className="font-oswald font-bold text-[32px] md:text-[52px] leading-tight">
                        <span className="text-white">Le </span>
                        <span className="text-gold">Categorie</span>
                    </h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mt-3 max-w-xl">
                        Sei divisioni pensate per accogliere atleti di ogni livello, dai neofiti ai professionisti.
                    </p>
                </div>
            </section>

            <CategorieComplete />

            {/* REGOLE DI SICUREZZA */}
            <section id='rules' className="bg-[#111] px-5 md:px-16 py-12 md:py-16 border-t border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-xl">⚠</span>
                    <h2 className="font-oswald font-bold text-[24px] md:text-[32px] text-white">
                        REGOLE DI SICUREZZA
                    </h2>
                </div>
                <div className="w-10 h-0.5 bg-gold mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                    {regoleSicurezza.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#1A1A1A] px-5 py-4 border border-gold/10">
                            <span className="text-gold text-[16px] shrink-0 mt-0.5">◎</span>
                            <span className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 max-w-4xl flex flex-col md:flex-row md:items-center gap-4 border-t border-gold/10 pt-8">
                    <p className="font-inter text-[13px] text-[#555] leading-relaxed">
                        Per il regolamento completo e ufficiale consulta il sito The Tactical Games.
                    </p>
                    <a
                        href="https://thetacticalgames.com/rules"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 font-oswald font-bold text-[11px] tracking-[3px] text-black bg-gold px-6 py-3 hover:bg-gold-light transition-colors flex items-center gap-2"
                    >
                        REGOLAMENTO COMPLETO <span>→</span>
                    </a>
                </div>
            </section>
        </>
    )
}