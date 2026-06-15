import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SectionLabel from '@/components/SectionLabel'
import { blog } from '../../news/data'

export async function generateStaticParams() {
    return blog.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
    const post = blog.find((b) => b.slug === params.slug)
    if (!post) return {}
    return { title: `${post.titolo} — FITG` }
}

export default function BlogPostPage({ params }) {
    const post = blog.find((b) => b.slug === params.slug)
    if (!post) notFound()

    const correlati = blog.filter((b) => b.slug !== params.slug).slice(0, 2)

    return (
        <>
            <section className="relative overflow-hidden h-[280px] md:h-[420px]">
                <Image src={post.img} alt={post.titolo} fill className="object-cover brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-16 pb-10 md:pb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-oswald text-[8px] tracking-[2px] text-gold border border-gold/30 px-2 py-0.5">{post.tag}</span>
                        <span className="font-inter text-[11px] text-[#555]">{post.data}</span>
                    </div>
                    <h1 className="font-oswald font-bold text-[26px] md:text-[44px] leading-tight text-white max-w-3xl">
                        {post.titolo}
                    </h1>
                </div>
            </section>

            <section className="bg-[#111] px-5 md:px-16 py-12 md:py-20">
                <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16 max-w-5xl">
                    <article>
                        <p className="font-inter text-[14px] md:text-[16px] text-gold leading-relaxed mb-8 border-l-2 border-gold pl-4">
                            {post.estratto}
                        </p>
                        {post.contenuto.map((blocco, i) => {
                            if (blocco.tipo === 'titolo') return (
                                <h2 key={i} className="font-oswald font-bold text-white text-[20px] md:text-[24px] mt-10 mb-4">
                                    {blocco.testo}
                                </h2>
                            )
                            if (blocco.tipo === 'paragrafo') return (
                                <p key={i} className="font-inter text-[13px] md:text-[15px] text-[#ccc] leading-relaxed mb-5">
                                    {blocco.testo}
                                </p>
                            )
                            return null
                        })}
                        <div className="mt-10 pt-6 border-t border-gold/10">
                            <Link href="/news" className="font-oswald text-[10px] tracking-[3px] text-gold flex items-center gap-2 hover:gap-4 transition-all w-fit">
                                ← TORNA AL BLOG
                            </Link>
                        </div>
                    </article>

                    <aside>
                        <div className="bg-[#1A1A1A] border border-gold/20 p-6">
                            <div className="font-oswald text-[9px] tracking-[3px] text-gold mb-4">ALTRI POST</div>
                            <div className="flex flex-col gap-4">
                                {correlati.map((c) => (
                                    <Link key={c.slug} href={`/blog/${c.slug}`} className="group flex gap-3 items-start">
                                        <div className="relative w-16 h-16 shrink-0 overflow-hidden">
                                            <Image src={c.img} alt={c.titolo} fill className="object-cover brightness-50 group-hover:brightness-75 transition-all" />
                                        </div>
                                        <div>
                                            <div className="font-inter text-[8px] text-[#555] mb-1">{c.data}</div>
                                            <div className="font-oswald font-bold text-white text-[13px] leading-tight group-hover:text-gold transition-colors">{c.titolo}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}