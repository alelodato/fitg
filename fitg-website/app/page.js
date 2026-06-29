import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import SponsorsStrip from '@/components/SponsorsStrip'
import StatsCounter from '@/components/StatsCounter'
import FAQ from '@/components/FAQ'

const sezioni = [
  {
    label: 'REGOLE',
    title: 'Regolamento ufficiale dei Tactical Games',
    desc: 'Consulta il regolamento completo delle competizioni FITG. Categorie, prove, sistemi di punteggio e norme di sicurezza: tutto quello che devi sapere per partecipare.',
    href: '/regole#rules',
    img: '/images/image2.jpeg',
  },
  {
    label: 'FORMAZIONE',
    title: 'Formazione e preparazione atletica',
    desc: 'Piani di allenamento, esercizi consigliati e aree attrezzate per prepararti al meglio. Fitness funzionale e tiro di precisione: due discipline, un unico obiettivo.',
    href: '/formazione',
    img: '/image3.jpeg',
  },
]

const news = [
  {
    data: 'Giugno 2025',
    titolo: 'Primo evento FITG: appuntamento a luglio',
    estratto: 'La federazione annuncia il primo evento ufficiale della stagione. Percorso misto, tre divisioni disponibili e classifiche nazionali in palio.',
    img: '/news-1.jpg',
  },
  {
    data: 'Maggio 2025',
    titolo: 'Nasce la FITG: la federazione ufficiale dei Tactical Games in Italia',
    estratto: 'Con la fondazione della FITG, i Tactical Games in Italia hanno finalmente un organo ufficiale di riferimento.',
    img: '/news-2.jpg',
  },
]

export const metadata = {
  title: 'Home — FITG',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[520px] md:h-[680px]">
        <Image
          src="/image8.jpeg"
          alt="Hero FITG"
          fill
          className="object-cover object-top brightness-[0.45]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="absolute inset-0 flex items-center px-5 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-[900px]">

            {/* TESTO */}
            <div className="flex flex-col flex-1">
              <h1 className="font-oswald font-bold leading-[1.05] tracking-wide">
                <span className="block text-[38px] md:text-[62px] text-white">FEDERAZIONE</span>
                <span className="block text-[38px] md:text-[62px] text-gold">ITALIANA</span>
                <span className="block text-[38px] md:text-[62px] text-white">TACTICAL GAMES</span>
              </h1>
              <div className="w-48 h-0.5 bg-gradient-to-r from-gold to-transparent my-4 md:my-5" />
              <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed max-w-[480px]">
                Sport, disciplina e precisione.<br />
                La federazione ufficiale dei Tactical Games in Italia.
              </p>
              <div className="flex flex-col md:flex-row gap-3 mt-7">
                <Link href="/regole" className="bg-gold text-black font-oswald font-bold text-[11px] tracking-[3px] px-8 py-3.5 text-center hover:bg-gold-light transition-colors">
                  SCOPRI LA FEDERAZIONE
                </Link>
                <Link href="/contatti" className="border border-white text-white font-oswald text-[11px] tracking-[3px] px-8 py-3.5 text-center hover:border-gold hover:text-gold transition-colors">
                  CONTATTACI
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SponsorsStrip />

      {/* CHI SIAMO */}
      <section className="bg-[#1A1A1A] border-t border-gold/20">
        <div className="grid md:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center px-5 md:px-16 py-12 md:py-20">
            <SectionLabel>Chi Siamo</SectionLabel>
            <h2 className="font-oswald font-bold text-[26px] md:text-[38px] leading-[1.1] mb-4">
              <span className="text-white">La Federazione Italiana </span>
              <span className="text-gold">Tactical Games</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-5" />
            <div className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed">
              <p>La FITG nasce per promuovere e regolamentare i Tactical Games in Italia: i Tactical Games sono competizioni sportive multidisciplinari che uniscono fitness estremo, prove di abilità e tiro tattico/ dinamico con armi da fuoco (o repliche nel caso del softair).
                Il loro scopo è testare la capacità del partecipante di mantenere lucidità, precisione e controllo sotto un forte sforzo fisico.</p>
              <p className="mt-4">Una disciplina aperta a tutti i livelli, con divisioni per uomini e donne, atleti esperti e neofiti. La FITG coordina gli eventi nazionali, forma gli istruttori e promuove una cultura sportiva basata su sicurezza, fair play e crescita continua.</p>
            </div>
            <Link href="/regole" className="mt-6 font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2.5 hover:gap-4 transition-all w-fit">
              SCOPRI DI PIÙ <span className="w-5 h-px bg-gold block" />
            </Link>
          </div>
          <div className="relative min-h-[220px] md:min-h-auto overflow-hidden">
            <Image src="/image0.jpeg" alt="Chi Siamo" fill className="object-cover brightness-[0.45]" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/fitg-logo2.png"
                alt="FITG Logo"
                width={160}
                height={160}
                className="object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* SEZIONI — alternating layout */}
      <section className="bg-[#111]">
        {sezioni.map((s, i) => (
          <Link key={s.href} href={s.href} className="group block border-t border-gold/10">
            <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[300px]`}>

              {/* IMMAGINE */}
              <div className="relative w-full md:w-1/2 h-[220px] md:h-auto overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover brightness-50 group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-500"
                />
                <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-[#111]/70`} />
              </div>

              {/* TESTO */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10 md:py-14 bg-[#111]">
                <div className="font-oswald font-bold text-gold text-[10px] tracking-[4px] mb-3">
                  {String(i + 1).padStart(2, '0')} — {s.label}
                </div>
                <h3 className="font-oswald font-bold text-white text-[22px] md:text-[30px] leading-tight mb-4">
                  {s.title}
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="font-inter text-[13px] md:text-[14px] text-[#ccc] leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                  SCOPRI <span className="w-5 h-px bg-gold block" />
                </div>
              </div>

            </div>
          </Link>
        ))}
      </section>

      {/* NEWS PREVIEW */}
      <section className="bg-[#1A1A1A] px-5 md:px-16 py-12 md:py-20 border-t border-gold/20">
        <div className="flex justify-between items-end mb-6 md:mb-8">
          <div>
            <SectionLabel>Ultime News</SectionLabel>
            <h2 className="font-oswald font-bold text-[24px] md:text-[36px] text-white">Rimani aggiornato</h2>
          </div>
          <Link href="/news" className="font-oswald text-[9px] tracking-[2px] text-gold flex items-center gap-2 hover:gap-3 transition-all">
            TUTTE <span className="w-3.5 h-px bg-gold block" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {news.map((n, i) => (
            <Link key={i} href="/news" className="group bg-[#222] overflow-hidden block">
              <div className="relative h-[150px] md:h-[200px] overflow-hidden">
                <Image src={n.img} alt={n.titolo} fill className="object-cover brightness-50 group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="h-0.5 bg-gold" />
              <div className="p-4 md:p-5">
                <div className="font-inter text-[8px] tracking-[2px] text-[#555] mb-2 uppercase">{n.data}</div>
                <div className="font-oswald font-bold text-[15px] md:text-[18px] text-white mb-2 leading-tight">{n.titolo}</div>
                <div className="font-inter text-[12px] text-[#ccc] leading-relaxed mb-3">{n.estratto}</div>
                <div className="font-oswald text-[9px] tracking-[3px] text-gold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  LEGGI <span className="w-3.5 h-px bg-gold block" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SponsorsStrip />
      <FAQ id="faq" />

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
    </>
  )
}