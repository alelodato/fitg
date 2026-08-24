import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import SponsorsStrip from '@/components/SponsorsStrip'
import StatsCounter from '@/components/StatsCounter'
import FAQ from '@/components/FAQ'
import { Mail } from 'lucide-react'

const sezioni = [
  {
    label: 'CONTEST',
    title: 'Regolamento ufficiale dei Tacticon',
    desc: 'Consulta il regolamento completo delle competizioni FITC. Categorie, prove, sistemi di punteggio e norme di sicurezza: tutto quello che devi sapere per partecipare.',
    href: '/regole#rules',
    img: '/home3.jpg',
  },
  {
    label: 'FORMAZIONE',
    title: 'Formazione e preparazione atletica',
    desc: 'Piani di allenamento, esercizi consigliati e aree attrezzate per prepararti al meglio. Fitness funzionale e tiro di precisione: due discipline, un unico obiettivo.',
    href: '/formazione',
    img: '/home4.jpg',
  },
]

export const metadata = {
  title: 'Home — FITC',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[520px] md:h-[680px]">
        <Image
          src="/home1.jpg"
          alt="Hero FITC"
          fill
          className="object-cover object-top brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="absolute inset-0 flex items-center px-5 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-[900px]">

            {/* TESTO */}
            <div className="flex flex-col flex-1">
              <h1 className="font-oswald font-bold leading-[1.05] tracking-wide">
                <span className="block text-[38px] md:text-[62px] text-white">FEDERAZIONE</span>
                <span className="block text-[38px] md:text-[62px] text-gold">ITALIANA</span>
                <span className="block text-[38px] md:text-[62px] text-white">TACTICON</span>
              </h1>
              <div className="w-48 h-0.5 bg-gradient-to-r from-gold to-transparent my-4 md:my-5" />
              <p className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed max-w-[480px]">
                Sport, disciplina e precisione.<br />
                La federazione ufficiale dei Tactical Contest.
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
              <span className="text-gold">Tacticon</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-5" />
            <div className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed">
              <p>La FITC nasce per promuovere e regolamentare i Tactical Contest: i Tacticon sono competizioni sportive multidisciplinari che uniscono fitness estremo, prove di abilità e tiro tattico/dinamico con armi da fuoco (o repliche nel caso del softair). Il loro scopo è testare la capacità del partecipante di mantenere lucidità, precisione e controllo sotto un forte sforzo fisico.</p>
              <p className="mt-4">La FITC coordina gli eventi regionali e nazionali, forma gli istruttori e promuove una cultura sportiva basata su sicurezza, fair play e crescita continua.</p>
            </div>
            <Link href="/regole" className="mt-6 font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2.5 hover:gap-4 transition-all w-fit">
              SCOPRI DI PIÙ <span className="w-5 h-px bg-gold block" />
            </Link>
          </div>
          <div className="relative min-h-[220px] md:min-h-auto overflow-hidden">
            <Image src="/home2.jpg" alt="Chi Siamo" fill className="object-cover object-top brightness-[0.5]" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/fitg-logo2.png"
                alt="FITC Logo"
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
              <a
                href="mailto:info@federazioneitalianatacticon.it"
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
    </>
  )
}