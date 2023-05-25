import {
   Archivo_Black,
   Lato,
   Lilita_One,
   Oswald,
   Squada_One,
   Inter,
} from 'next/font/google'

export const lilitaOne = Lilita_One({
   subsets: ['latin'],
   weight: '400',
   variable: '--font-lilitaone-400',
})

export const archivoBlack = Archivo_Black({
   subsets: ['latin'],
   weight: '400',
   variable: '--font-archivoblack-400',
})

export const oswald = Oswald({
   subsets: ['latin'],
   weight: '400',
   variable: '--font-oswald',
})

export const lato = Lato({
   subsets: ['latin'],
   weight: ['400', '700', '900'],
   variable: '--font-lato',
})

export const squadaOne = Squada_One({
   subsets: ['latin'],
   weight: '400',
   variable: '--font-squadaone-400',
})

export const inter = Inter({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-inter',
})
