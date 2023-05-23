import { archivoBlack, lato, lilitaOne, oswald, squadaOne } from '@/fonts'
import { ReactNode } from 'react'

import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Navbar/components/Sidebar'

import './globals.css'

export const metadata = {
   title: 'Empire Burger',
   description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <body
            className={`${lilitaOne.variable} ${archivoBlack.variable} ${oswald.variable} ${lato.variable} ${squadaOne.variable} bg-background`}
         >
            <Sidebar />
            <Navbar />
            {children}
         </body>
      </html>
   )
}
