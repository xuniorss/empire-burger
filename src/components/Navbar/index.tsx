'use client'

import { Ifood } from '../Ifood'
import { Logo } from '../Logo'
import { Links } from './components/Links'
import { Toggle } from './components/Toggle'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '../Button'

export const Navbar = () => {
   return (
      <header className="fixed left-0 top-0 z-10 flex h-16 w-full flex-col items-center justify-center border-b-[1px] border-b-[#3c210c0d] bg-[#3b200b0d] backdrop-blur-[5px]">
         <div className="flex w-full max-w-6xl flex-row items-center justify-between">
            <div className="mx-4 flex w-full flex-row items-center justify-between">
               <nav className="flex flex-row gap-10">
                  <Logo />
                  <div className="hidden lg:block">
                     <Links />
                  </div>
               </nav>
               <div className="hidden lg:block">
                  <div className="flex flex-row items-center gap-4">
                     <div className="flex cursor-pointer flex-row justify-center gap-4 text-center">
                        <Link href="https://www.ifood.com.br/" target="_blank">
                           <Ifood />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                           <BsInstagram size={20} color="white" />
                        </Link>
                     </div>
                     <div className="h-12 border border-[#B50B04] bg-yellow-500" />
                     <Button header label="Contato" icon={BsWhatsapp} />
                  </div>
               </div>
               <Toggle />
            </div>
         </div>
      </header>
   )
}
