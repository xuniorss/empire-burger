'use client'

import { MenuProps } from '@/@types'
import { useMemo } from 'react'

interface ListItemProps {
   data: MenuProps
}

export const ListItem = ({ data }: ListItemProps) => {
   const price = useMemo(() => {
      const formated = new Intl.NumberFormat('pt-BR', {
         maximumSignificantDigits: 4,
      }).format(data.price)
      return formated.length > 2 ? formated : `${formated},00`
   }, [data.price])

   return (
      <div className="w-full max-w-[36.25rem]">
         <div className="w-full max-w-[29.375rem]">
            <div className="flex flex-row items-baseline justify-between gap-1 font-lilita text-xl uppercase text-bege">
               <h2>{data.plate}</h2>
               <div className="flex-grow border-b-[3px] border-dotted border-bege" />
               <span>R$ {price}</span>
            </div>
            <div className="w-full">
               <p className="font-lato text-base text-white/90">
                  {data.ingredients}
               </p>
            </div>
         </div>
      </div>
   )
}
