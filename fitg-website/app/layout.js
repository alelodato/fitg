import './globals.css'
import { Oswald, Inter } from 'next/font/google'
import ConditionalChrome from '@/components/ConditionalChrome'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = { title: 'FITG' }

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${oswald.variable} ${inter.variable} bg-[#111] text-white`}>
        <ConditionalChrome>{children}</ConditionalChrome>
      </body>
    </html>
  )
}