'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const storiaSteps = [
  {
    num: '01',
    titolo: 'Cosa sono i Tactical Games?',
    img: '/image2.jpeg',
    testo: 'Benvenuti ai Tactical Games, dove l\'emozione della competizione incontra l\'esigenza di precisione tattica. Dal personale militare e dalle forze dell\'ordine ai tiratori sportivi e ai civili, i nostri eventi rappresentano il banco di prova definitivo. Qui, individui provenienti da diversi ambiti si incontrano per competere con l\'élite, scoprendo i propri limiti sotto l\'intensa pressione che si respira solo nelle nostre arene.',
  },
  {
    num: '02',
    titolo: 'Forza, Resistenza e Precisione',
    img: '/image17.webp',
    testo: 'Ogni evento combina esercizi di fitness funzionale con sfide di tiro di precisione. I concorrenti si muovono attraverso percorsi che mettono alla prova forza, resistenza e abilità nel tiro, trasportando equipaggiamento pesante, superando ostacoli e ingaggiando bersagli sotto pressione temporale, dove l\'affaticamento fisico si unisce all\'esigenza di precisione.',
  },
  {
    num: '03',
    titolo: 'Premiare gli atleti più completi',
    img: '/image12.webp',
    testo: 'Il punteggio si basa sia sul tempo che sulla precisione, con penalità per i colpi mancati o gli errori procedurali. Diverse categorie garantiscono una competizione equa, dalle qualificazioni regionali ai campionati nazionali, tutti finalizzati a incoronare l\'atleta tattico più completo.',
  },
]

export default function StoriaStickyScroll() {
  const [active, setActive] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)
  const refs = useRef([])
  const scrollRef = useRef(null)

  useEffect(() => {
    const elements = refs.current.filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'))
            setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setRef = (el, index) => {
    refs.current[index] = el
  }

  const handleMobileScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / storiaSteps.length
    const idx = Math.round(el.scrollLeft / cardWidth)
    setMobileActive(idx)
  }

  const scrollToSlide = (idx) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / storiaSteps.length
    el.scrollTo({ left: idx * cardWidth, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#1A1A1A]">
      {/* APERTURA — si fonde con la sezione, niente bordo netto */}
      <div className="relative overflow-hidden h-[70vh] md:h-[80vh]">
        <Image src="/image6.jpeg" alt="Tactical Games" fill className="object-cover brightness-[0.4]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-16">
          <p className="font-oswald font-bold text-[26px] md:text-[42px] leading-[1.15] text-white max-w-[320px] md:max-w-2xl">
            Forza, precisione e tattica si incontrano in un'<span className="text-gold">unica disciplina</span>. Scopri tutto quello che c'è da sapere sui Tactical Games.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-oswald text-[8px] tracking-[3px] text-[#999]">
          ↓ &nbsp; SCORRI
        </div>
      </div>

      {/* DESKTOP — sticky scroll a due colonne, solo da lg in su */}
      <div className="hidden lg:grid lg:grid-cols-2">
        <div className="flex flex-col">
          {storiaSteps.map((step, i) => (
            <div
              key={i}
              ref={(el) => setRef(el, i)}
              data-index={i}
              className="min-h-screen flex flex-col justify-center px-16 py-16 border-t border-gold/10"
            >
              <div className={`font-oswald font-bold text-[13px] tracking-[4px] mb-4 transition-colors duration-500 ${active === i ? 'text-gold' : 'text-[#444]'}`}>
                {step.num}
              </div>
              <h3 className={`font-oswald font-bold text-[30px] mb-5 leading-tight transition-colors duration-500 ${active === i ? 'text-white' : 'text-[#555]'}`}>
                {step.titolo}
              </h3>
              <p className={`font-inter text-[16px] leading-relaxed transition-colors duration-500 ${active === i ? 'text-[#ccc]' : 'text-[#444]'}`}>
                {step.testo}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-[88px] h-screen overflow-hidden">
            {storiaSteps.map((step, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={step.img} alt={step.titolo} fill className="object-cover brightness-[0.55]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE + TABLET — layout verticale impilato */}
      <div className="lg:hidden flex flex-col">
        {storiaSteps.map((step, i) => (
          <div key={i} className="border-t border-gold/10">
            <div className="relative h-[280px] md:h-[400px] overflow-hidden">
              <Image src={step.img} alt={step.titolo} fill className="object-cover brightness-[0.55]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
              <div className="absolute bottom-4 left-5 md:left-10 font-oswald font-bold text-gold text-[12px] md:text-[14px] tracking-[3px]">
                {step.num} / 03
              </div>
            </div>
            <div className="px-5 md:px-16 py-8 md:py-12 max-w-2xl md:mx-auto">
              <h3 className="font-oswald font-bold text-white text-[22px] md:text-[28px] mb-4 leading-tight">{step.titolo}</h3>
              <p className="font-inter text-[14px] md:text-[16px] text-[#ccc] leading-relaxed">{step.testo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}