import Image from 'next/image'

import imgCell from '@/assets/cell.svg'

export const MakeYourWishCard = () => {
   return (
      <div className="mt-16 flex h-full w-full flex-col justify-center rounded-[10px] bg-btnred lg:mt-[6.195rem]">
         <div className="mx-[1.625rem] my-[0.882rem] flex flex-col items-center lg:flex-row">
            <div className="flex h-[5.927rem] w-[5.927rem] flex-col items-center justify-center rounded-full bg-title/20 lg:w-28">
               <Image
                  src={imgCell}
                  alt="img-cell"
                  width={36}
                  height={55}
                  className="aspect-auto"
               />
            </div>
            <div className="my-2 ml-[1.125rem] mr-[1.502rem] w-full flex-grow border border-title/40 lg:my-0 lg:h-[5.171rem] lg:w-auto lg:flex-grow-0" />
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
               <div className="mb-4 flex flex-col items-center lg:block">
                  <h2 className="font-lilita text-[1.563rem] uppercase leading-[2.344rem] text-title/70">
                     faça o seu pedido agora mesmo!
                  </h2>
                  <p className="max-w-[29.142rem] text-center font-lato text-base text-white/90 lg:text-start">
                     Venha saborear a melhor experiência de hamburguenses
                     artesanal do <strong>Empires Burger</strong>, com temática
                     medieval!
                  </p>
               </div>
               <span
                  role="button"
                  className="w-full rounded bg-[#FAE4D0] px-4 py-2 text-center font-lato text-lg font-black uppercase text-btnred hover:bg-[#FAE4D0]/80 lg:w-auto"
               >
                  Solicitar Pedido
               </span>
            </div>
         </div>
      </div>
   )
}
