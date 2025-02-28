import { Metadata } from 'next'
import '@/app/ui/global.css'

import { inter } from '@/app/ui/fonts'

import Header from './ui/overlay/Header'
import Hamburger from './ui/overlay/Hamburger'
import Footer from './ui/overlay/Footer'

export const metadata: Metadata = {
  title: 'Multimaxx',
  description: 'Multimaxx website',
  metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Header />
        {children}
        <Hamburger />
        <Footer />
      </body>
    </html>
  )
}
