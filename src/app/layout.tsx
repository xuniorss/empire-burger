import { Footer } from '@/components/Footer'
import { Modal } from '@/components/Modal'
import { archivoBlack, inter, lato, lilitaOne, oswald, squadaOne } from '@/fonts'
import { ReactNode } from 'react'

import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Navbar/components/Sidebar'

import './globals.css'
import 'animate.css/animate.min.css'

export const metadata = {
   title: 'Empire Burger',
   description:
      'King burger - Uma nova experiência, para quem tem um Apetite de um REI!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <body
            className={`${lilitaOne.variable} ${archivoBlack.variable} ${oswald.variable} ${lato.variable} ${squadaOne.variable} ${inter.variable} bg-background`}
         >
            <Sidebar />
            <Navbar />
            <Modal />
            {children}
            <Footer />
         </body>
      </html>
   )
}
