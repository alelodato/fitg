'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ConditionalChrome({ children }) {
    const pathname = usePathname()
    const hideChrome = pathname === '/coming-soon'

    if (hideChrome) {
        return <>{children}</>
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}