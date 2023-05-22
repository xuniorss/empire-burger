'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import banner from '../../../assets/banner-hero.png'

export const HomeView = () => {
   const path = usePathname()

   if (path !== '/#home' && path !== '/') return null

   return (
      <section id="home">
         <Image
            src={banner}
            height={545}
            alt="banner"
            style={{ objectFit: 'cover' }}
         />
      </section>
   )
}
