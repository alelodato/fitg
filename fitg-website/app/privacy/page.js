export const metadata = { title: 'Privacy Policy — FITC' }

export default function PrivacyPage() {
    return (
        <section className="bg-[#111] px-5 md:px-16 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-5 h-px bg-gold" />
                    <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">Informativa</span>
                </div>
                <h1 className="font-oswald font-bold text-[28px] md:text-[42px] mb-4">
                    <span className="text-white">Privacy </span>
                    <span className="text-gold">Policy</span>
                </h1>
                <p className="font-inter text-[12px] text-[#666] mb-12">Ultimo aggiornamento: Agosto 2026</p>

                <div className="font-inter text-[14px] md:text-[15px] text-[#ccc] leading-relaxed flex flex-col gap-8">

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">1. Titolare del Trattamento</h2>
                        <p>
                            Il Titolare del trattamento dei dati raccolti tramite questo sito è la Federazione Italiana Tactical Contest (FITC).
                            Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali puoi contattarci all'indirizzo:{' '}
                            <a href="mailto:info@federazioneitalianatacticon.it" className="text-gold hover:underline">
                                info@federazioneitalianatacticon.it
                            </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">2. Dati Raccolti</h2>
                        <p>
                            Attraverso il modulo di contatto presente sul sito raccogliamo i seguenti dati personali forniti volontariamente dall'utente:
                            nome, indirizzo email, oggetto e contenuto del messaggio. Questi dati vengono utilizzati esclusivamente per rispondere alle
                            richieste inviate e non vengono condivisi con terze parti per finalità di marketing.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">3. Finalità del Trattamento</h2>
                        <p>
                            I dati raccolti tramite il modulo di contatto sono trattati al solo scopo di rispondere alle richieste di informazioni,
                            tesseramento, organizzazione eventi e collaborazioni istituzionali inviate dall'utente. Il conferimento dei dati è facoltativo,
                            ma il loro mancato inserimento rende impossibile evadere la richiesta.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">4. Base Giuridica</h2>
                        <p>
                            Il trattamento si basa sul consenso esplicito dell'utente, fornito al momento dell'invio del modulo di contatto,
                            ai sensi dell'art. 6, paragrafo 1, lettera a) del Regolamento UE 2016/679 (GDPR).
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">5. Modalità di Trattamento e Conservazione</h2>
                        <p>
                            I dati sono trattati con strumenti informatici e conservati per il tempo strettamente necessario a evadere la richiesta
                            e, successivamente, per il tempo previsto dagli obblighi di legge applicabili. Il modulo di contatto del sito utilizza il
                            servizio terzo Web3Forms per l'invio delle email; si rimanda alla relativa informativa privacy per i dettagli sul trattamento
                            effettuato da tale fornitore.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">6. Diritti dell'Interessato</h2>
                        <p>
                            In qualsiasi momento hai il diritto di richiedere l'accesso, la rettifica, la cancellazione, la limitazione del trattamento
                            o la portabilità dei tuoi dati, oltre al diritto di opporti al trattamento e di revocare il consenso prestato, scrivendo
                            all'indirizzo email indicato al punto 1. Hai inoltre diritto di proporre reclamo all'Autorità Garante per la Protezione
                            dei Dati Personali qualora ritenga che il trattamento violi la normativa vigente.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-oswald font-bold text-white text-[18px] mb-3">7. Cookie</h2>
                        <p>
                            Questo sito utilizza cookie tecnici necessari al funzionamento del sito stesso. Per maggiori informazioni consulta la nostra
                            Cookie Policy.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}