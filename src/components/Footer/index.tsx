'use client'

import { BsInstagram } from 'react-icons/bs'
import { Ifood } from '../Ifood'
import { LogoCrown } from '../LogoCrown'
import { Links } from '../Navbar/components/Links'

export const Footer = () => {
   return (
      <main className="flex min-h-[8.486rem] w-full flex-col items-center bg-white">
         <div className="w-full max-w-6xl px-4">
            <footer className="mb-[0.768rem] mt-[1.974rem] flex flex-col items-center lg:flex-row lg:justify-between">
               <div>
                  <LogoCrown />
               </div>
               <hr className="my-5 block w-full border-b border-title/20 lg:hidden" />
               <div className="flex w-full items-center justify-center lg:justify-end">
                  <div className="flex w-full flex-col-reverse items-center lg:w-auto lg:flex-row lg:justify-between">
                     <div className="hidden lg:block">
                        <Links />
                     </div>
                     <div className="block lg:hidden">
                        <Links isSidebar />
                     </div>
                     <hr className="my-5 block w-full border-b border-title/20 lg:hidden" />
                     <div className="flex flex-row items-center gap-[1.094rem] lg:ml-[9.438rem]">
                        <Ifood color="#F59A1B" />
                        <BsInstagram color="#F59A1B" size={20} />
                     </div>
                  </div>
               </div>
            </footer>
            <hr className="mb-[0.697rem] mt-[1.734rem] w-full border-b border-title/20" />
            <div className="mb-[0.768rem] flex flex-col items-center">
               <p className="font-inter text-sm text-darkblue/30">
                  {' '}
                  <span className="font-bold text-darkblue/70">
                     2022 © EmpireBurger.
                  </span>{' '}
                  Todos os direitos reservados.
               </p>
            </div>
         </div>
      </main>
   )
}
