import { Oswald, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['300', '400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'FITG — Federazione Italiana Tactical Games',
  description: 'La federazione ufficiale dei Tactical Games in Italia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-[#111111] text-white font-oswald">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}