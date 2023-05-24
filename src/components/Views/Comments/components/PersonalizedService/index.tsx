import cardWoman from '@/assets/card-woman-eating.png'
import { Button } from '@/components/Button'
import Image from 'next/image'

export const PersonalizedService = () => {
   return (
      <div className="flex flex-col items-center lg:flex-row lg:gap-8">
         <Image src={cardWoman} alt="card-woman-eating" />
         <div className="flex w-full max-w-[30.151rem] flex-col gap-[1.935rem]">
            <div className="flex flex-col gap-[0.613rem]">
               <h2 className="font-lilita text-[2.608rem] uppercase leading-[3.912rem] text-title/90">
                  Atendimento{' '}
                  <span className="rounded-lg bg-btnyellow">personalizado</span>
               </h2>
               <p className="font-lato text-[1.304rem] leading-[1.956rem] text-title/70">
                  Todos os nossos clientes são tratados como rei e rainha, com a
                  nossa colunaria artesanal.
               </p>
            </div>
            <div>
               <Button label="Cardápio Imperial" />
            </div>
         </div>
      </div>
   )
}
