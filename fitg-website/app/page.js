import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

const sezioni = [
  {
    label: 'REGOLE',
    title: 'Regolamento ufficiale',
    desc: 'Categorie, prove e modalità di partecipazione alle competizioni FITG.',
    href: '/regole',
    img: '/images/regole.jpg',
  },
  {
    label: 'FORMAZIONE',
    title: 'Allenati per competere',
    desc: 'Piani di allenamento e aree attrezzate per prepararti alle gare.',
    href: '/formazione',
    img: '/images/formazione.jpg',
  },
  {
    label: 'STAFF',
    title: 'Il team della federazione',
    desc: 'Dirigenti e istruttori della federazione FITG.',
    href: '/staff',
    img: '/images/staff.jpg',
  },
  {
    label: 'NEWS',
    title: 'Aggiornamenti dalla federazione',
    desc: 'Comunicati ufficiali, risultati e aggiornamenti dal mondo FITG.',
    href: '/news',
    img: '/images/news.jpg',
  },
]

const news = [
  {
    data: 'GG MESE AAAA',
    titolo: 'Primo evento FITG 2025: tutto pronto',
    estratto: 'Le iscrizioni sono aperte per il primo evento ufficiale della stagione.',
    img: '/images/news-1.jpg',
  },
  {
    data: 'GG MESE AAAA',
    titolo: 'Nuove linee guida per la stagione agonistica',
    estratto: 'La federazione ha aggiornato il calendario e le modalità di qualificazione.',
    img: '/images/news-2.jpg',
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
          src="/images/hero.jpg"
          alt="Hero FITG"
          fill
          className="object-cover object-center brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 flex items-center px-5 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-[900px]">

            {/* TESTO */}
            <div className="flex flex-col flex-1">
              <h1 className="font-oswald font-bold leading-[1.05] tracking-wide">
                <span className="block text-[38px] md:text-[62px] text-white">LA FEDERAZIONE</span>
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

            {/* LOGHI */}
            <div className="flex md:flex-col items-center gap-6 shrink-0">
              <Image
                src="/fitg-logo.png"
                alt="FITG Logo"
                width={120}
                height={120}
                className="object-contain"
              />
              <Image
                src="/fitg-logo2.png"
                alt="FITG Logo 2"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* IDENTITY STRIP */}
      <div className="bg-[#222] border-t-2 border-gold border-b border-gold/20 py-3 flex justify-center gap-4 md:gap-6 flex-wrap">
        {['FEDERAZIONE ITALIANA TACTICAL GAMES'].map((k, i) => (
          <span key={i} className={`font-oswald ${i % 2 === 1 ? 'text-[8px] text-[#555]' : 'text-[10px] tracking-[3px] text-gold font-bold'}`}>
            {k}
          </span>
        ))}
      </div>

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
              <p>Testo di presentazione della federazione</p>
              <p className="mt-4">Secondo paragrafo: storia, missione e valori.</p>
            </div>
            <Link href="/regole" className="mt-6 font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2.5 hover:gap-4 transition-all w-fit">
              SCOPRI DI PIÙ <span className="w-5 h-px bg-gold block" />
            </Link>
          </div>
          <div className="relative min-h-[220px] md:min-h-auto overflow-hidden">
            <Image src="/images/chi-siamo.jpg" alt="Chi Siamo" fill className="object-cover brightness-[0.65]" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          </div>
        </div>
      </section>

      {/* SEZIONI */}
      <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
        <SectionLabel>Esplora il Sito</SectionLabel>
        <h2 className="font-oswald font-bold text-[24px] md:text-[36px] mb-8 md:mb-10">
          Tutto quello che trovi su FITG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {sezioni.map((s) => (
            <Link key={s.href} href={s.href} className="group bg-[#222] overflow-hidden block">
              <div className="relative h-[140px] md:h-[180px] overflow-hidden">
                <Image src={s.img} alt={s.label} fill className="object-cover brightness-50 group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="h-0.5 bg-gold" />
              <div className="p-4 md:p-5 flex items-center justify-between">
                <div>
                  <div className="font-oswald font-bold tracking-[2px] text-gold text-sm mb-1">{s.label}</div>
                  <div className="font-oswald font-semibold text-white text-sm mb-1.5">{s.title}</div>
                  <div className="font-inter text-[12px] text-[#ccc] leading-relaxed">{s.desc}</div>
                </div>
                <span className="text-gold text-xl ml-4 group-hover:translate-x-1 transition-transform shrink-0">→</span>
              </div>
            </Link>
          ))}
        </div>
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

      {/* CTA CONTATTI */}
      <section className="relative overflow-hidden">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover brightness-[0.2]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="relative px-5 md:px-16 py-16 md:py-24 flex flex-col items-center text-center">
          <SectionLabel center>Contatti</SectionLabel>
          <h2 className="font-oswald font-bold text-[30px] md:text-[48px] leading-[1.1] mb-4">
            <span className="block text-white">ENTRA IN CONTATTO</span>
            <span className="block text-gold">CON LA FEDERAZIONE</span>
          </h2>
          <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] mb-7">
            Per informazioni, tesseramento e collaborazioni
          </p>
          <div className="font-oswald font-bold text-[16px] md:text-[20px] text-white mb-1.5">
            info@federtacticalgames.it
          </div>
          <div className="font-inter text-[13px] text-[#555] mb-6">+39 000 000 0000</div>
          <div className="flex gap-2.5 mb-8 flex-wrap justify-center">
            {['Instagram', 'Facebook', 'YouTube'].map((s) => (
              <span key={s} className="border border-gold/35 px-5 py-1.5 font-oswald text-[9px] tracking-[2px] text-[#ccc]">{s}</span>
            ))}
          </div>
          <Link href="/contatti" className="bg-gold text-black font-oswald font-bold text-[12px] tracking-[4px] px-12 py-4 hover:bg-gold-light transition-colors">
            SCRIVICI ORA
          </Link>
        </div>
      </section>
    </>
  )
}