import CategorieAccordion from '@/components/CategorieAccordion'
import StoriaStickyScroll from '@/components/StoriaStickyScroll'

export const metadata = { title: 'Tactical Games — FITG' }

export default function RegolePage() {
    return (
        <>

            {/* STORIA — Sticky scroll */}
            <StoriaStickyScroll />

            <CategorieAccordion />
        </>
    )
}